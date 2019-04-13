import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
//axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials=true;
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data, {arrayFormat: 'repeat'});
    }
    return config;
});
axios.jsonp = (url, data, callback)=>{
    return new Promise((resolve,reject) => {
        if(!url) reject(new Error('jsonp: not find url param'));
        const queryData = url.match(/((?:^|\?|#)[^\?#]+)/g);
        if(!callback){
            for(let item of queryData){
                if(item.indexOf('?')>=0){
                    const parseSearch = item.split('&');
                    if(parseSearch.length===1){
                        callback = parseSearch[0].split('=')[1];
                    }else if(item.search(/callback/i)>=0){
                        for(let search of parseSearch){
                            if(search.search(/callback/i)>=0){
                                callback = search.split('=')[1];
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }
        if(!callback) reject(new Error('jsonp: not find callback function'));
        switch (typeof data) {
            case 'object':
                let querysearch = '';
                Object.keys(data).forEach((item,index)=>{
                    if(!(typeof data[item] === 'object'&& data[item] !== null || data[item] === undefined)){
                        querysearch+=(index?'&':'')+`${item}=${data[item]}`;
                    }else if((item instanceof Array)&&item.length){
                        item.forEach((arrParam,arrIndex)=>{
                            querysearch+=((!index)&&(!arrIndex)?'':'&')+`${item}=${arrParam}`;
                        });
                    }
                });
                if(url.indexOf('?')>=0){
                    for(let item of queryData){
                        if(item.indexOf('?')>=0){
                            item+='&'+querysearch;
                            break;
                        }
                    }
                }else{
                    queryData.splice(1,0,'?'+querysearch);
                }
                url = queryData.join('');
                break;
        }
        const script = document.createElement('script');
        window[callback] = (...data)=>{
            resolve({
                data:data,
                status: 200,
                statusText: 'ok',
            });
        };
        script.src = url;
        script.onload = ()=>{
            document.body.removeChild(script);
        };
        document.body.appendChild(script);
    });
};
Vue.prototype.$http = axios;
export default axios;
//代理
export function parseURL(urlData){
    const _urlData = JSON.parse(JSON.stringify(urlData));
    //非绝对路径的自动拼全逻辑
    let php_test = `${location.protocol}//test.go.163.com/api/go/`;//测网
    let php_release = `${location.protocol}//go.163.com/api/`;//公网
    if(location.hostname.search(/(s\.auto|sale_auto)/)>=0){
        //auto项目的公共路径
        php_test = `${location.protocol}//test.go.163.com/api/auto/`;//测网
        php_release = `${location.protocol}//s.auto.163.com/api/`;//公网
    }
    const isRelease = location.hostname.search(/^(s\.auto|go)\.163/)>=0;
    Object.keys(_urlData).forEach(item=>{
        if(typeof _urlData[item]==='object'){
            _urlData[item] = (isRelease?_urlData[item].release:_urlData[item].test);
        }else if(_urlData[item].search(/^(http|\/\/)/)<0){
            if(process.env !== 'development'){
                _urlData[item] = (isRelease?php_release:php_test) + _urlData[item].replace(/^\//,'');
            }else{
                // process.env === 'development' 时 做proxy抓包
                _urlData[item] = '/api/go/' + _urlData[item].replace(/^\//,'');
            }
        }
        if(_urlData[item].search(/^\/\//)>=0)_urlData[item] = location.protocol + _urlData[item];
    });
    return _urlData;
}

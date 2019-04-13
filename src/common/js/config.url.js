import {parseURL} from './config.axios';
export default parseURL({
    //分享链接
    share:'{{shareUrl}}',
    //公测网分离连接
    wxIndex:{//wx授权连接
        test:'{{wxIndexText}}',
        release:'{{wxIndexRelease}}'
    },
    //php接口 自动拼接php公测网路径
    mgcInfo:'common/shareh5.php?act=mgcInfo',//敏感词
});

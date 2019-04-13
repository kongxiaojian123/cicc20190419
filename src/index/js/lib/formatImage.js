/*
* 传入file 输出正常方向的image元素
* formatImage(file,config);
*  - file: 文件
*  - config:{
*     width:640,//输出的宽度
*   }
*  - 返回 promise  
* */
import Exif from 'exif-js';
import getBlob from './getBlob';
function getURL(file) {
  return new Promise(resolve => {
    if(typeof file === 'object'){
      const reader = new FileReader();
      reader.onload = ({target:{result}})=>{
        resolve(getBlob(result));
      };
      reader.readAsDataURL(file);
    }else{
      resolve(getBlob(file));
    }
  });
}
export default function formatImage(file,config={}) {
  config.width = config.width||640;
  return new Promise(resolve => {
    getURL(file).then(src=>{
      const image = new Image();
      image.onload=()=>{
        Exif.getData(image,()=>{
          const orientation = Exif.getTag(image,'Orientation');
          if(orientation){
            let _naturalHeight = image.naturalHeight;
            let _naturalWidth = image.naturalWidth;
            const canvas = document.createElement('canvas');
            canvas.width = config.width;
            const ctx = canvas.getContext('2d');
            let rotate = 0;
            switch (orientation) {
              case 1:
                canvas.height= config.width/_naturalWidth*_naturalHeight;
                rotate = 0;
                break;
              case 3:
                canvas.height= config.width/_naturalWidth*_naturalHeight;
                rotate = Math.PI;
                break;
              case 6:
                canvas.height= config.width/_naturalHeight*_naturalWidth;
                rotate = Math.PI/2;
                break;
              case 8:
                canvas.height= config.width/_naturalHeight*_naturalWidth;
                rotate = -Math.PI/2;
                break;
            }
            ctx.setTransform(Math.cos(rotate),Math.sin(rotate),-Math.sin(rotate),Math.cos(rotate),canvas.width/2,canvas.height/2);
            const width = Math.sin(rotate)*canvas.height+Math.cos(rotate)*canvas.width;
            const height = Math.cos(rotate)*canvas.height+Math.sin(rotate)*canvas.width;
            ctx.drawImage(image,-width/2,-height/2,width,height);
            const formatImage = new Image();
            formatImage.onload=()=>{
              resolve(formatImage);
            }
            formatImage.src = getBlob(canvas.toDataURL());
          }else{
            return resolve(image);
          }
        });
      };
      image.src = src;
    });
  });
}

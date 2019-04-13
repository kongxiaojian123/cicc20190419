/*
* 传入base64 获取 blob
* */

export default function getBlob(imgData){
  //获取blob
  try {
    const base64Arr = imgData.split(',');
    let imgtype = '';
    let base64String = '';
    if(base64Arr.length > 1){
      //去掉头信息
      base64String = base64Arr[1];
      imgtype = base64Arr[0].substring(base64Arr[0].indexOf(':')+1,base64Arr[0].indexOf(';'));
    }
    // 将base64解码
    const bytes = atob(base64String);
    const bytesCode = new ArrayBuffer(bytes.length);
    // 转换为类型化数组
    const byteArray = new Uint8Array(bytesCode);

    // 将base64转换为ascii码
    for (let i = 0; i < bytes.length; i++) {
      byteArray[i] = bytes.charCodeAt(i);
    }
    // 生成Blob对象（文件对象）
    const blob =  new Blob( [bytesCode] , {
      // type : imgtype
    });
    return URL.createObjectURL(blob);
  }catch (e) {
    return imgData;
  }
}
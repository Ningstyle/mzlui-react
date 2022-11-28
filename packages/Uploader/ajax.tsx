import Event from 'events';
import { UploadFile } from './Uploader';

export const ee = new Event();

export const ajaxError = 'ajaxError';

interface AjaxParam {
  file: UploadFile;
  fileKey: string;
  headers?: {};
  url: string;
  method: string;
  extraData?: {} | undefined;
  onProgress: (event: ProgressEvent<EventTarget>, file: UploadFile) => void;
}

function setRequestHeaders(xmlhttp: XMLHttpRequest, headers: {}) {
  if (
    headers &&
    Object.prototype.toString.call(headers) === '[Object object]'
  ) {
    Object.keys(headers).forEach((key) => {
      xmlhttp.setRequestHeader(key, headers[key]);
    });
  }
}

const formatData = (fileKey: string, file: UploadFile, extraData?: {}) => {
  const formData = new FormData();
  formData.append(fileKey, file.originFileObj as File);
  if (extraData) {
    const extraDataKeys = Object.keys(extraData);
    if (extraDataKeys.length > 0) {
      extraDataKeys.forEach((k) => {
        formData.append(k, extraData[k]);
      });
    }
  }
  return formData;
};

const ajax = (param: AjaxParam) => {
  const { url, fileKey, file, headers, onProgress, method, extraData } = param;
  const data = formatData(fileKey, file, extraData);
  let xmlhttp: XMLHttpRequest;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  setRequestHeaders(xmlhttp, headers || {});

  xmlhttp.open(method || 'POST', url || '/', true);

  xmlhttp.onerror = function (error) {
    console.error('before emit', error);
    ee.emit(ajaxError, { error: '上传失败', file });
  };
  xmlhttp.onreadystatechange = function (response) {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status >= 400) {
        ee.emit(ajaxError, {
          error: xmlhttp.responseText,
          file,
        });
      }
    }
  };
  xmlhttp.upload.onprogress = function (event) {
    // console.log('lj onprogress', event.loaded, event.total, event);
    typeof onProgress === 'function' && onProgress(event, file);
  };
  xmlhttp.send(data);
};

export default ajax;

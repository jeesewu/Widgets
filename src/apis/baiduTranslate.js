import MD5 from "./md5";
import jsonp from "./jsonp";

const baiduTranslate = (debouncedText, to) => {
  const params = {
    q: debouncedText,
    from: "en",
    to: to,
    appid: "20201017000591544",
    key: "Qh37gi3s8EHguUap4PX6",
    salt: new Date().getTime(),
  };
  const paramsWithSign = {
    ...params,
    sign: MD5(params.appid + params.q + params.salt + params.key),
  };
  const url = "https://fanyi-api.baidu.com/api/trans/vip/translate";

  return jsonp(url, paramsWithSign);
};

export default baiduTranslate;

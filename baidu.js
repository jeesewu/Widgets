const axios = require("axios");

const query = "apple";
const appid = "20201017000591544";
const salt = "1435660288";
const key = "Qh37gi3s8EHguUap4PX6";
const sign = appid + query + salt + key;
const md5Sign = "2cd94ae53dd29f2b98c5580365ae1ac9";

axios("https://fanyi-api.baidu.com/api/trans/vip/translate", {
  params: {
    q: query,
    from: "en",
    to: "zh",
    appid: appid,
    salt: salt,
    sign: md5Sign,
  },
}).then((response) => {
  console.log(response.data.trans_result[0].dst);
});

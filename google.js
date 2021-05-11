const axios = require("axios");

const doTranslation = async () => {
  const { data } = await axios.post(
    "https://translation.googleapis.com/language/translate/v2",
    {},
    {
      params: {
        q: "fuck you",
        target: "zh-CN",
        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
      },
    }
  );

  console.log(data.data.translations[0].translatedText);
};

doTranslation();

import React, { useState, useEffect } from "react";

import baiduTranslate from "../apis/baiduTranslate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const response = await baiduTranslate(debouncedText, language.value);
      if (response.trans_result) {
        const translatedText = response.trans_result[0].dst;
        setTranslated(translatedText);
      }
    };
    if (debouncedText) {
      doTranslation();
    }
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;

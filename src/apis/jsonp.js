const getParamsPairs = (params) => {
  let paramsPairs = "";
  for (let key in params) {
    paramsPairs += `&${key}=${params[key]}`;
  }
  return paramsPairs;
};

const jsonp = (url, params) => {
  const callback = "jsonpCallback_" + new Date().getTime();
  const paramsPairs = getParamsPairs(params);
  const fullUrl = url + "?callback=" + callback + paramsPairs;

  const script = document.createElement("script");

  function withCleanUp(callback) {
    return (data) => {
      window[callback] = null;
      document.body.removeChild(script);
      callback(data);
    };
  }

  return new Promise((resolve, reject) => {
    script.src = fullUrl;
    document.body.appendChild(script);

    window[callback] = withCleanUp(resolve);
    script.onerror = withCleanUp(reject);
  });
};

export default jsonp;

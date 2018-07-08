export default () => {
  const scripts = document.getElementsByTagName("script");
  const script  = scripts[scripts.length - 1];
  let scriptName;
  if (script.getAttribute.length !== undefined) {
    scriptName = script.src;
  } else {
    scriptName = script.getAttribute("src", -1);
  }

  const params = {};
  if (scriptName) {
    scriptName.replace(/^[^?]+\??/, "").split("&").forEach(item => {
      const items      = item.split("=");
      params[items[0]] = items[1];
    });
  }
  return params;
};
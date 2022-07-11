const arrayOfProps = [
  "cssgrid",
  "flexbox",
  "csstransforms",
  "csstransitions",
  "borderradius",
];

for (let i = 0; i < arrayOfProps.length; ++i) {
  let prop = arrayOfProps[i];
  if (Modernizr[prop] != undefined || Modernizr[prop] == false) {
    new Log({
      text: "Ваш браузер устарел. Это може привести к некорректному отображению сайта. Пожалуйста, обновитесь",
      duration: 3000,
      isErr: true,
      infinity: true
    });
    break;
  }
}

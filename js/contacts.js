const email = document.querySelector("header .info .contacts .links .email");

let copyEmail = () => {
  navigator.clipboard.writeText("Mirza.Bichurin@novsu.ru");
  new Log("E-mail скопирован в буфер обмена");
};

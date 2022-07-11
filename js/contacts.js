const email = document.querySelector("header .info .contacts .links .email");

const copyEmail = () => {
  navigator.clipboard.writeText("Mirza.Bichurin@novsu.ru");
  new Log({ text: "E-mail скопирован в буфер обмена" });
};

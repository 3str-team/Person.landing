class Log {
  constructor(text, isErr = false) {
    this.text = text;
    this.log = null;
    this.create(isErr);
  }

  create(isErr) {
    this.log = document.createElement("span");
    this.log.classList.add("log");
    if (isErr) {
      this.log.classList.add("error");
    }
    this.log.textContent = this.text;
    document.body.appendChild(this.log);
    this.destroy();
  }

  destroy() {
    let destroy = setTimeout(() => {
      this.log.remove();
      clearTimeout(destroy);
    }, 1200);
  }
}

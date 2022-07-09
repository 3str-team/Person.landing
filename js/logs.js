class Log {
  constructor(text) {
    this.text = text;
    this.log = null;
    this.create();
  }

  create() {
    this.log = document.createElement("span");
    this.log.classList.add("log");
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

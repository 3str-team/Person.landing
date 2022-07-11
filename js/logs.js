class Log {
  constructor({ text, duration = 1200, isErr = false }) {
    this.text = text;
    this.duration = duration;
    this.log = null;
    this.create(isErr);
  }

  create(isErr) {
    let field = document.querySelector(".logs");
    this.log = document.createElement("span");
    this.log.classList.add("log");
    if (isErr) {
      this.log.classList.add("error");
    }
    this.log.textContent = this.text;
    field.insertBefore(this.log, field.firstChild);
    this.destroy();
  }

  destroy() {
    let destroy = setTimeout(() => {
      this.log.remove();
      clearTimeout(destroy);
    }, this.duration);
  }
}

// parent.insertBefore(child, parent.firstChild);

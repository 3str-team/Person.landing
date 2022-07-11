class Log {
  constructor({ text, duration = 1200, isErr = false, infinity = false }) {
    this.id = Date.now();
    this.text = text;
    this.duration = duration;
    this.log = null;
    this.create(isErr, infinity);
  }

  create(isErr, infinity) {
    let field = document.querySelector(".logs");
    let classes = ["log"];
    if (isErr) {
      classes.push("error");
    }
    if (infinity) {
      classes.push("closing");
    }
    this.log = this.addElement({
      text: this.text,
      tag: "span",
      classes,
      parent: field,
      before: true,
    });
    if (infinity) {
      let close = this.addElement({
        text: "<span style='display: table-cell; vertical-align: middle;'>✖</span>",
        tag: "span",
        classes: ["close"],
        parent: this.log,
      });
      close.addEventListener("click", () => {
        this.destroy(0);
      })
    } else {
      this.destroy();
    }
  }

  addElement({ text, tag, classes = [], parent, before = false }) {
    let elem = document.createElement(tag);
    classes.forEach((className) => {
      elem.classList.add(className);
    });
    elem.setAttribute("id", this.id);
    elem.innerHTML = text;
    if (before) {
      parent.insertBefore(elem, parent.firstChild);
    } else {
      parent.appendChild(elem);
    }
    return elem;
  }

  destroy(duration = this.duration) {
    let destroy = setTimeout(() => {
      this.log.remove();
      clearTimeout(destroy);
    }, duration);
  }
}

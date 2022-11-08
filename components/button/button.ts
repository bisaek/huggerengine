import { GameObject, window } from "huggerengine";

export default class button {
  gameObject!: GameObject;
  window!: window;
  textSize = 16;
  text = "";
  rect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };
  clicked = () => {};

  constructor(text: string, size: number) {
    this.textSize = size;
    this.text = text;
  }
  start() {
    this.rect = {
      x: this.gameObject.x,
      y: this.gameObject.y,
      width: this.gameObject.width,
      height: this.gameObject.height,
    };
  }

  update() {
    if (!this.window.ctx) return;

    this.window.ctx.beginPath();
    this.window.ctx.rect(
      this.gameObject.x,
      this.gameObject.y,
      this.gameObject.width,
      this.gameObject.height
    );
    this.window.ctx.fillStyle = "#FFFFFF";
    this.window.ctx.fillStyle = "rgba(225,225,225,0.5)";
    // this.window.ctx.fillRect(25, 72, 32, 32);
    this.window.ctx.fill();
    this.window.ctx.lineWidth = 2;
    this.window.ctx.strokeStyle = "#000000";
    this.window.ctx.stroke();
    this.window.ctx.closePath();
    this.window.ctx.font = this.textSize + "pt Arial";
    this.window.ctx.fillStyle = "#000000";
    this.window.ctx.fillText(
      this.text,
      this.gameObject.x,
      this.gameObject.y + this.gameObject.height / 2
    );
  }

  onClicked(e: MouseEvent) {
    let pos = {
      x: e.clientX,
      y: e.clientY,
    };
    if (
      pos.x > this.rect.x &&
      pos.x < this.rect.x + this.rect.width &&
      pos.y < this.rect.y + this.rect.height &&
      pos.y > this.rect.y
    )
      this.clicked();
  }
}

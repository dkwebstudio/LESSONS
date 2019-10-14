'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign = "left") {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;        
    }
    createDiv() {
        let div = document.createElement("div");
        div.textContent = "Это новый div";
        div.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        text-align: ${this.textAlign};
        `;
        document.body.appendChild(div);
    }
}

let newDiv = new Options("100px", "200px", "red", "20px", "right");

newDiv.createDiv();

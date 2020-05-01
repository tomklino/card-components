class Card extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'open'});
    let cardContainer = document.createElement('div');
    let cardStyle     = document.createElement('style');

    let html = document.createElement('div')
    html.setAttribute("id", "card_wrapper")
    cardContainer.appendChild(html)
    this.html = html;

    let style = `
      #card_wrapper {
        border: 1px solid #d2d276;
        border-radius: 9px;
        box-shadow: 6px 4px 12px -1px rgba(191,191,191,1);
        width: 86px;
        height: 114px;

        display: flex;
        justify-content: center;
        padding-top: 6px;
        background-color: beige;
      }

      #number_part {
        font-size: 40px;
        font-weight: 700;
        font-family: sans-serif;
      }
    `
    cardStyle.innerHTML = style

    shadow.append(cardContainer, cardStyle);
  }

  static get observedAttributes() {
    return ['number', 'color'];
  }

  attributeChangedCallback(name, _, val) {
    if (name === "number") {
      this.number = val;
    } else if (name === "color") {
      this.color = val;
    }
    this.html.innerHTML = `
      <div id="number_part" style="color: ${this.color};">${this.number}</div>
    `
  }
}

customElements.define('card-component', Card);

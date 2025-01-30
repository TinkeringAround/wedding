import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";

export class CustomStyles extends WebComponent {
  static tag = "wedding-custom-styles";

  customStyles: HTMLStyleElement;

  constructor() {
    super();

    this.customStyles = DomService.create<HTMLStyleElement>({ tag: "style" });

    this.attachShadow({ mode: "closed" });

    document.body.appendChild(this.customStyles);
    this.style.display = "none";
  }

  connectedCallback() {
    this.updateViewheight();

    window.addEventListener("resize", () => {
      this.updateViewheight();
    });
  }

  private updateViewheight() {
    this.customStyles.innerHTML = `:root {
      --vh: ${`${window.innerHeight * 0.01}px`};
    }`;
  }
}

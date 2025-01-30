import { WebComponent } from "../webcomponent";
import { createStyles } from "./navigation.style";

export class Navigation extends WebComponent {
  static tag = "wedding-navigation";

  static create() {
    return document.createElement(Navigation.tag) as Navigation;
  }

  constructor() {
    super();

    this.attachShadow({ mode: "closed" }).append(createStyles());
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

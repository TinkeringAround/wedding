import { WebComponent } from "../webcomponent";
import { createStyles } from "./loading-spinner.style";

export class LoadingSpinner extends WebComponent {
  static readonly tag = "wedding-loading-spinner";

  static create() {
    return document.createElement(LoadingSpinner.tag) as LoadingSpinner;
  }

  hide() {
    this.style.display = "none";
  }

  show() {
    this.style.display = "block";
  }

  constructor() {
    super();

    const wrapperElement = document.createElement("div") as HTMLDivElement;
    wrapperElement.setAttribute("class", "lds-ring");

    wrapperElement.replaceChildren(
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div")
    );

    this.attachShadow({ mode: "open" }).append(createStyles(), wrapperElement);
  }
}

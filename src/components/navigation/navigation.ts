import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./navigation.style";

export class Navigation extends WebComponent {
  static tag = "wedding-navigation";

  static create() {
    return document.createElement(Navigation.tag) as Navigation;
  }

  constructor() {
    super();

    const link = DomService.create<HTMLAnchorElement>({ tag: "a" });
    link.textContent = "Zu/Absage";
    link.href = "#coming";

    this.attachShadow({ mode: "closed" }).append(createStyles(), link);
  }
}

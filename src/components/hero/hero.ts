import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./hero.style";

export class HeroSection extends WebComponent {
  static tag = "wedding-hero";

  static create() {
    return document.createElement(HeroSection.tag) as HeroSection;
  }

  constructor() {
    super();

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      DomService.create({ part: "image" })
    );
  }
}

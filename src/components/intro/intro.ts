import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./intro.style";

export class IntroSection extends WebComponent {
  static tag = "wedding-intro";

  static create() {
    return document.createElement(IntroSection.tag) as IntroSection;
  }

  constructor() {
    super();

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      DomService.create({ part: "image" })
    );
  }
}

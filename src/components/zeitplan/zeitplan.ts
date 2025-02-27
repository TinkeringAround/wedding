import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./zeitplan.style";

export class ZeitplanSection extends WebComponent {
  static tag = "wedding-zeitplan";

  static create() {
    return document.createElement(ZeitplanSection.tag) as ZeitplanSection;
  }

  constructor() {
    super();

    const title = DomService.create({ tag: "h1" });
    title.textContent = "Unser Tag";

    const content = [
      {
        header: "14.30 Uhr",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        header: "15.30 Uhr",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        header: "18.30 Uhr",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
    ];

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      title,
      ...content.map(({ header, content }) => {
        const section = DomService.create({ tag: "section" });
        section.innerHTML = `
        <h2>${header}</h2>
        <p>
          ${content}
        </p>
        `;

        return section;
      })
    );
  }
}

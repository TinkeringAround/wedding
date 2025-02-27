import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./information.style";

export class InformationSection extends WebComponent {
  static tag = "wedding-information";

  static create() {
    return document.createElement(InformationSection.tag) as InformationSection;
  }

  constructor() {
    super();

    const content = [
      {
        header: "Schwedischer Midsommar",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        header: "Persönliches Band",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        header: "Geschenke",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        header: "Standesamt",
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
    ];

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      ...content.map(({ header, content }) => {
        const section = DomService.create({ tag: "section" });
        section.innerHTML = `
        <h1>${header}</h1>
        <p>
          ${content}
        </p>
        `;

        return section;
      })
    );
  }
}

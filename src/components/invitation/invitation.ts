import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./invitation.style";

export class InvitationSection extends WebComponent {
  static tag = "wedding-invitation";

  static create() {
    return document.createElement(InvitationSection.tag) as InvitationSection;
  }

  constructor() {
    super();

    const content = [
      {
        header: "Wir heiraten...",
        content:
          "und Ihr seid herlich eingeladen zu unserer Hochzeit im Zeichen des Schedischen Midsommars!",
      },
      {
        header: "Wo?",
        content: `
          Rittergut Bisdorf
          <br />
          <a href="https://www.google.com/maps/dir//Bisdorf+1,+38154+K%C3%B6nigslutter+am+Elm/@52.3264529,10.8904495,367m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x4165381705b53855:0xcfa4ff2506a05d02!2m2!1d10.8916389!2d52.326023!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Bisdorf 1, 38154 Königslutter am Elm</a>
        `,
      },
      {
        header: "Wann?",
        content: "Am <span>28.06.2025</span> um <span>14.30 Uhr</span>",
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

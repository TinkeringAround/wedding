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

    const title = DomService.create<HTMLHeadingElement>({ tag: "h1" });
    title.textContent = "Wir heiraten...";

    const p = DomService.create<HTMLParagraphElement>({ tag: "p" });
    p.textContent =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

    const p2 = DomService.create<HTMLParagraphElement>({
      tag: "p",
      part: "connector",
    });
    p2.textContent = "und empfangen euch am...";

    const location = DomService.create({ tag: "div", part: "location" });
    location.innerHTML = `
      <div><b>28.06.2025</b> um <b>14.30 Uhr</b></div>
      <div>im Rittergut Bisdorf</div>
      <div><a href="https://www.google.com/maps/dir//Bisdorf+1,+38154+K%C3%B6nigslutter+am+Elm/@52.3264529,10.8904495,367m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x4165381705b53855:0xcfa4ff2506a05d02!2m2!1d10.8916389!2d52.326023!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Bisdorf 1, 38154 Königslutter am Elm</a></div>
    `;

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      title,
      p,
      p2,
      location
    );
  }
}

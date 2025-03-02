import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./contact.style";

export class ContactSection extends WebComponent {
  static tag = "wedding-contact";

  private us: HTMLDivElement;
  private trauzeugen: HTMLDivElement;

  static create() {
    return document.createElement(ContactSection.tag) as ContactSection;
  }

  constructor() {
    super();

    const title = DomService.create({ tag: "h1" });
    title.textContent = "Kontakt";

    this.us = DomService.create({ tag: "div", part: "us" });
    const usContent = DomService.create({ tag: "p" });
    usContent.innerHTML = `
      <span>WIR FREUEN UNS RIESIG AUCH EUCH!</span>
      <br>
      <br>
      <a href="tel:+491731606340"><wb>Alina Walth</wb> +49 173 160 6340</a>
      <br>
      <a href="tel:+491731751721"><wb>Thomas Maier</wb> +49 173 175 1721</a>
    `;

    this.us.append(DomService.create({ part: "image" }), usContent);

    this.trauzeugen = DomService.create({ tag: "div", part: "trauzeugen" });
    const trauzeugenContent = DomService.create({ tag: "p" });
    trauzeugenContent.innerHTML = `
      <span>Bei Fragen und Anregungen wendet euch vertrauensvoll an unsere Trauzeugen!</span>
      <br/>
      <br>
      <a href="tel:+4915225800433"><wb>Isabel Schmidt-Hebbel</wb> +49 152 258 00433</a>
      <br/>
      <a href="tel:+4915229124277"><wb>Hendrik Bedewitz</wb> +49 152 291 24277</a>
    `;

    this.trauzeugen.append(
      trauzeugenContent,
      DomService.create({ part: "image" })
    );

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      title,
      this.us,
      this.trauzeugen
    );
  }
}

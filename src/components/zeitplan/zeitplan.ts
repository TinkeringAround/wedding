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
        header: "14:30 Uhr",
        content: `
          Pünktlich um 14:30 Uhr beginnt unsere freie Trauung auf der Wiese, umgeben von Natur und hoffentlich schönem Sommerwetter. Sollte das Wetter nicht mitspielen, verlegen wir die Zeremonie in den nebenliegenden Pferdestall – genauso stimmungsvoll und gemütlich. Wir freuen uns darauf, diesen besonderen Moment mit euch zu teilen!
          `,
      },
      {
        header: "ca. 15:30 Uhr",
        content: `
          Nach der Zeremonie und den Gratulationen laden wir euch zu FIKA ein – einer gemütlichen Kaffeepause mit selbst gebackenem Kuchen, schwedischen Leckereien und einer entspannten Atmosphäre unter freiem Himmel. Während wir unser Fotoshooting nachholen und euch nach und nach dazu holen, könnt ihr die Zeit draußen genießen – ob beim Spielen, Basteln oder einfach bei netten Gesprächen mit einem Kaffee in der Hand.
          `,
      },
      {
        header: "ca. 18:30 Uhr",
        content: `
          Gegen 18:30 Uhr geht es mit dem Abendessen weiter. Draußen erwartet euch ein Live Cooking mit schwedischen Spezialitäten, während wir drinnen das erste Mal alle gemeinsam Platz nehmen. Danach startet unser Abendprogramm – mit schönen Momenten, Tanz und natürlich unserer Party! Wer mag, kann sich hier ganz nach Lust und Laune einbringen oder einfach den Abend in entspannter Atmosphäre genießen.
          `,
      },
    ];

    const leftImage = DomService.create({ part: "left" });
    const rightImage = DomService.create({ part: "right" });

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
      }),
      leftImage,
      rightImage
    );
  }
}

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
          Um 14:30 Uhr beginnt unsere freie Trauung auf der Wiese, umgeben von Natur und hoffentlich schönem Sommerwetter. Sollte das Wetter nicht mitspielen, verlegen wir die Zeremonie in den nebenliegenden Pferdestall – genauso stimmungsvoll und gemütlich. Wir freuen uns darauf, diesen besonderen Moment mit euch zu teilen!
          `,
      },
      {
        header: "15:30 Uhr",
        content: `
              Nach der Zeremonie haben wir Zeit für Gratulation und ein gemeinsames FIKA – einer gemütlichen Kaffeepause mit selbst gebackenem Kuchen, schwedischen Leckereien und einer entspannten Atmosphäre unter freiem Himmel. Während wir das Brautpaarshooting machen, könnt ihr die Zeit draußen genießen – ob beim Spielen oder einfach bei netten Gesprächen mit einem Kaffee vom Amselkaffee in der Hand.
          `,
      },
      {
        header: "16:45 Uhr",
        content: `
          Fotoshooting! Wir holen euch nach und nach zu einem gemeinsamen Fotoshooting dazu für unvergessliche Erinnerungen! Haltet euch bitte bereit.
          `,
      },
      {
        header: "18:30 Uhr",
        content: `
          Gegen 18:30 Uhr gehen wir in den Schafstall und nehmen gemeinsam Platz während das Abendessen vorbereitet wird. Ab 19 Uhr erwartet euch dann draußen ein Live Cooking mit schwedischen Spezialitäten.
          `,
      },
      {
        header: "22:00 Uhr",
        content: `
          Showtime - es steht unser Hochzeitstanz an. Danach startet unser Abendprogramm – mit schönen Momenten, Tanz und natürlich unserer Party! Wer mag, kann sich hier ganz nach Lust und Laune einbringen oder einfach den Abend in entspannter Atmosphäre genießen.
          <b>Ab dieser Uhrzeit steht auch unser Fahrdienst bereit, der Gruppen bis zu 6 Personen nach Hause bringen kann (bis nach Braunschweig). Sprecht uns an!</b>`,
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

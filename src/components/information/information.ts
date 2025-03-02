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
        content: `
          Schweden ist unser Lieblingsland, und deshalb möchten wir unseren Hochzeitstag im Zeichen des schwedischen Mittsommer feiern – einer Zeit voller Freude, Leichtigkeit und Naturverbundenheit. Gemeinsam möchten wir mit euch diese besondere Atmosphäre genießen, draußen zusammenkommen und in einer entspannten, fröhlichen Umgebung feiern.
          <br><br>
          Falls ihr euch fragt, was ihr anziehen könnt: Tragt einfach, worin ihr euch wohlfühlt – gerne auch etwas Festliches. Natürliche Farbtöne und florale Muster passen wunderbar zum Midsommar. Und da wir diesen besonderen Tag inmitten der Natur auf einem ehemaligen Rittergut feiern, sind bequeme Schuhe eine gute Wahl – auf der Wiese könnten hohe, spitze Absätze schnell zur Herausforderung werden.
          `,
      },
      {
        header: "Euer persönliches Band",
        content: `
          Mit dieser Einladung habt ihr ein Band erhalten – ein Symbol der Verbindung, das an diesem besonderen Tag Teil unserer Trauung sein wird. Gestaltet es ganz nach euren Vorstellungen: ob bemalt, beschrieben, bestickt oder mit kleinen Anhängern verziert. Ihr könnt das gesamte Band oder nur einen einzelnen Abschnitt kreativ gestalten– lasst eurer Kreativität freien Lauf!
          <br><br>
          Ein Band steht für Zusammenhalt, für gemeinsame Erlebnisse und für all das, was uns verbindet. Vielleicht möchtet ihr eure Wünsche für uns darauf verewigen oder etwas einbringen, das euch mit uns verbindet. Egal, wie ihr es gestaltet – wir freuen uns sehr, eure Bänder bei unserer freien Trauung zu sehen und diesen Moment gemeinsam mit euch zu erleben!
          `,
      },
      {
        header: "Standesamtliche Trauung",
        content: `
          Bevor wir mit euch allen unsere große Feier und freie Trauung feiern, geben wir uns bereits im kleineren Kreis das standesamtliche Ja-Wort.
          Diese findet am <b>6.6.2025 um 10:45 Uhr im Schloss Fallersleben</b> statt. Auch wenn wir zum Standesamt selbst nur eine begrenzte Anzahl an Personen mitnehmen dürfen, freuen wir uns über jeden, der im Anschluss vorbeikommt, um mit uns anzustoßen und zu gratulieren.
          `,
      },
      {
        header: "Geschenke",
        content: `
          Das schönste Geschenk für uns ist, diesen besonderen Tag mit euch zu feiern! Falls ihr uns zusätzlich noch eine Freude machen möchtet, würden wir uns am meisten über einen finanziellen Beitrag freuen.
          Ob für neue Abenteuer mit unserem Camper Baloo oder für unser Haus, in das wir viel Liebe stecken – wir können dafür immer gut etwas gebrauchen. Egal ob für die Reisekasse oder unser Zuhause, wir freuen uns über jede Unterstützung!
          Vielen lieben Dank!
          `,
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

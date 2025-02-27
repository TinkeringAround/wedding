import { EntryProps, KeyValueMap } from "contentful-management";
import { ContentfulService } from "../../services/contentful.service";
import { DomService } from "../../services/dom.service";
import { Guest } from "../../types";
import { Button } from "../button/button.webcomponent";
import { DropDown } from "../dropdown/dropdown.webcomponent";
import { Input } from "../input/input.webcomponent";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./comping.style";
import { UtilService } from "../../services/util.service";

export class ComingSection extends WebComponent {
  static tag = "wedding-coming";

  private guests: EntryProps<KeyValueMap>[] | never[] = [];

  private left: HTMLDivElement;
  private right: HTMLDivElement;

  static create() {
    return document.createElement(ComingSection.tag) as ComingSection;
  }

  constructor() {
    super();

    this.left = DomService.create({ tag: "div", part: "half" });
    this.right = DomService.create({ tag: "div", part: "half" });

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      this.left,
      this.right
    );
  }

  connectedCallback() {
    this.renderComingSection();
    this.renderContactSection();
    this.loadGuests();
  }

  private renderComingSection() {
    const telefons = DomService.create<HTMLParagraphElement>({
      tag: "p",
      part: "telefons",
    });
    telefons.innerHTML = `
      Thomas Maier
      <br/>
      <a href="tel:+491731751721">+49 173 175 1721</a>
      <br/>
      Alina Walth
      <br/>
      <a href="tel:+491731398498">+49 172 139 8498</a>
    `;

    const left = DomService.create({ part: "us" });
    left.append(DomService.create({ part: "image" }), telefons);

    const input = Input.create("", "Vor- und Nachname", "Ja, ich komme...");
    const dropDown = DropDown.create(
      ["Fleisch", "Vegetarisch", "Vegan"],
      "und bevorzuge"
    );
    const right = DomService.create({ tag: "div", part: "person" });

    right.append(
      input,
      dropDown,
      Button.create("Abschicken", () => this.submit())
    );

    this.left.append(left, right);
  }

  private renderContactSection() {
    const telefons = DomService.create<HTMLParagraphElement>({
      tag: "p",
      part: "telefons",
    });
    telefons.innerHTML = `
      Isabel Schmidt-Hebel
      <br/>
      <a href="tel:+4915225800433">+49 152 258 00433</a>
      <br/>
      Hendrik Bedewitz
      <br/>
      <a href="tel:+4915229124277">+49 152 291 24277</a>
    `;

    const title = DomService.create({ tag: "h1" });
    title.textContent = "Bei Fragen/Anregungen...";

    const contactInformation = DomService.create<HTMLParagraphElement>({
      tag: "p",
    });
    contactInformation.innerHTML =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et";

    const left = DomService.create({ part: "contact" });
    left.append(DomService.create({ part: "image" }));

    const right = DomService.create({ tag: "div", part: "person" });
    right.append(title, telefons);

    this.right.append(left, right);
  }

  private async submit() {
    const guests: Guest[] = [];
    [...this.left.querySelectorAll("[part='person']")].forEach((person) => {
      const name = (person.querySelector(Input.tag) as Input)?.value;
      const food = (person.querySelector(DropDown.tag) as DropDown)?.value;

      if (name && food && name != "" && food != "") {
        guests.push({
          name: name
            .split(" ")
            .filter((part) => part != "")
            .map((part) => part.trim())
            .join(" ")
            .toLowerCase(),
          food: food.toLowerCase(),
        });
      }
    });

    if (this.guests) {
      const toCreate = guests.filter(
        (guest) =>
          !this.guests.find((g) => g.fields.name["en-US"] == guest.name)
      );
      const toUpdate = guests.filter((guest) =>
        this.guests.find((g) => g.fields.name["en-US"] == guest.name)
      );

      if (toCreate.length == 0 && toUpdate.length == 0) {
        confirm(
          "Es fehlt die Person, die wir zur Hochzeit begrüßen können. 😅"
        );
        return;
      }

      await Promise.all([
        ContentfulService.createGuests(toCreate),
        ContentfulService.updateGuest(toUpdate, this.guests),
      ])
        .then((result) => {
          if (result.every((r) => !!r)) {
            confirm(
              `Vielen Danke, die Eingabe war erfolgreich! 🙏\n\n${
                toCreate.length > 0
                  ? toCreate
                      .map(
                        (guest) =>
                          `${UtilService.makeUppercase(
                            guest.name
                          )} hat ${UtilService.makeUppercase(
                            guest.food
                          )} reserviert.`
                      )
                      .join("\n") + "\n"
                  : ""
              }${toUpdate
                .map(
                  (guest) =>
                    `${UtilService.makeUppercase(
                      guest.name
                    )} reserviert jetzt ${UtilService.makeUppercase(
                      guest.food
                    )}.`
                )
                .join("\n")}`
            );
          } else {
            alert("Upps, etwas ist schiefgelaufen. Bitte versuche es erneut!");
          }
        })
        .finally(() => this.loadGuests());
    }
  }

  private async loadGuests() {
    const guests = await ContentfulService.getGuest();

    if (guests) {
      this.guests = guests;
    }
  }
}

import { EntryProps, KeyValueMap } from "contentful-management";
import { ContentfulService } from "../../services/contentful.service";
import { DomService } from "../../services/dom.service";
import { Guest } from "../../types";
import { Button } from "../button/button.webcomponent";
import { DropDown } from "../dropdown/dropdown.webcomponent";
import { Input } from "../input/input.webcomponent";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./coming.style";
import { UtilService } from "../../services/util.service";

export class ComingSection extends WebComponent {
  static tag = "wedding-coming";

  private guests: EntryProps<KeyValueMap>[] | never[] = [];

  private formular: HTMLDivElement;

  static create() {
    return document.createElement(ComingSection.tag) as ComingSection;
  }

  constructor() {
    super();

    this.formular = DomService.create({ tag: "div", part: "formular" });
    this.attachShadow({ mode: "closed" }).append(createStyles(), this.formular);
  }

  connectedCallback() {
    this.id = "coming";
    this.renderComingSection();
    this.loadGuests();
  }

  private renderComingSection() {
    const title = DomService.create({ tag: "h1" });
    title.textContent = "Seid ihr dabei?";

    const input = Input.create("", "Vor- und Nachname", "Ja, ich komme...");
    const dropDown = DropDown.create(
      ["Egal", "Vegetarisch", "Vegan"],
      "und bevorzuge"
    );

    this.formular.append(
      title,
      input,
      dropDown,
      Button.create("Abschicken", () => this.submit())
    );
  }

  private async submit() {
    const guests: Guest[] = [];
    const name = (this.formular.querySelector(Input.tag) as Input)?.value;
    const food = (this.formular.querySelector(DropDown.tag) as DropDown)?.value;

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

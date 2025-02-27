import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./countdown.style";

export class CountdownSection extends WebComponent {
  static tag = "wedding-countdown";

  static create() {
    return document.createElement(CountdownSection.tag) as CountdownSection;
  }

  constructor() {
    super();

    const countDownWrapper = DomService.create({ tag: "div", part: "wrapper" });
    if (this.getDaysLeft() > 0) {
      const calendar = DomService.create<HTMLAnchorElement>({ tag: "a" });
      calendar.href = `https://assets.ctfassets.net/df3z1ez0ud42/3A3u8pn7Ib7YYP6l00qgZi/6f48503a42ab05e7125e1741114b177b/wedding-thomas-alina.ics`;
      calendar.download = "wedding-thomas-alina.ics";
      calendar.setAttribute("content", "text/calendar");
      calendar.innerHTML = `Noch <b>${this.getDaysLeft()}</b> ${
        this.getDaysLeft() == 1 ? "Tag" : "Tage"
      }`;
      countDownWrapper.append(calendar);
    } else {
      countDownWrapper.innerHTML = `Heute!`;
    }

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      countDownWrapper
    );
  }

  private getDaysLeft() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weddingDay = new Date("2025-06-28");

    return Math.round(
      (weddingDay.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
  }
}

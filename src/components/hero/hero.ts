import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./hero.style";

export class HeroSection extends WebComponent {
  static tag = "wedding-hero";

  static create() {
    return document.createElement(HeroSection.tag) as HeroSection;
  }

  constructor() {
    super();

    const title = DomService.create<HTMLHeadingElement>({
      tag: "h1",
      part: "title",
    });
    title.innerHTML = "Alina & Thomas";

    const subtitle = DomService.create<HTMLHeadingElement>({
      tag: "h1",
      part: "subtitle",
    });
    subtitle.innerHTML = "Wir heireaten!";

    const countDownWrapper = DomService.create({ tag: "div", part: "wrapper" });
    if (this.getDaysLeft() > 0) {
      countDownWrapper.innerHTML = `Noch <b>${this.getDaysLeft()}</b> ${
        this.getDaysLeft() == 1 ? "Tag" : "Tage"
      }`;
    } else {
      countDownWrapper.innerHTML = `Heute!`;
    }

    const calendar = DomService.create<HTMLAnchorElement>({ tag: "a" });
    calendar.href = `https://assets.ctfassets.net/df3z1ez0ud42/3A3u8pn7Ib7YYP6l00qgZi/6f48503a42ab05e7125e1741114b177b/wedding-thomas-alina.ics`;
    calendar.download = "wedding-thomas-alina.ics";
    calendar.setAttribute("content", "text/calendar");
    calendar.textContent = "Save the Date";

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      title,
      subtitle,
      countDownWrapper,
      calendar
    );
  }

  private getDaysLeft() {
    const today = new Date();
    const weddingDay = new Date("2025-06-28");

    return Math.round(
      (weddingDay.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
  }
}

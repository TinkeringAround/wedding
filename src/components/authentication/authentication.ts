import { ConfigService } from "../../services/config.service";
import { StorageService } from "../../services/storage.service";
import { ComingSection } from "../coming/coming";
import { CountdownSection } from "../countdown/countdown";
import { FotosSection } from "../fotos/fotos";
import { HeroSection } from "../hero/hero";
import { InformationSection } from "../information/information";
import { InvitationSection } from "../invitation/invitation";
import { Navigation } from "../navigation/navigation";
import { WebComponent } from "../webcomponent";
import { ZeitplanSection } from "../zeitplan/zeitplan";

export class Authentication extends WebComponent {
  static tag = "wedding-authentication";

  constructor() {
    super();

    this.attachShadow({ mode: "closed" });
    this.style.display = "none";
  }

  connectedCallback() {
    this.checkAuthenticationStatus();
  }

  private checkAuthenticationStatus() {
    if (!StorageService.isAuthenticated()) {
      const password = prompt("Wie lautet das Passwort?");

      if (password?.trim() == ConfigService.PASSWORD.trim()) {
        StorageService.login();
        this.initApp();
        return;
      }

      // if password was wrong, loop input
      this.checkAuthenticationStatus();
    }

    this.initApp();
  }

  private initApp() {
    const main = document.querySelector("main");

    if (main) {
      main.replaceChildren(
        Navigation.create(),
        HeroSection.create(),
        InvitationSection.create(),
        CountdownSection.create(),
        InformationSection.create(),
        ZeitplanSection.create(),
        ComingSection.create(),
        FotosSection.create()
      );
    }
  }
}

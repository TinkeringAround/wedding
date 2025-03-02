import { Authentication } from "./authentication/authentication";
import { HeroSection } from "./hero/hero";
import { Navigation } from "./navigation/navigation";
import { CustomStyles } from "./custom-styles/custom-styles";
import { InvitationSection } from "./invitation/invitation";
import { ComingSection } from "./coming/coming";
import { ContextMenu } from "./context-menu/context-menu.webcomponent";
import { DropDown } from "./dropdown/dropdown.webcomponent";
import { Input } from "./input/input.webcomponent";
import { Button } from "./button/button.webcomponent";
import { CountdownSection } from "./countdown/countdown";
import { InformationSection } from "./information/information";
import { ZeitplanSection } from "./zeitplan/zeitplan";
import { FotosSection } from "./fotos/fotos";
import { IntroSection } from "./intro/intro";
import { ContactSection } from "./contact/contact";
import { LoadingSpinner } from "./loading-spinner/loading-spinner.webcomponent";

// Define custom Elements here
customElements.define(Navigation.tag, Navigation);
customElements.define(HeroSection.tag, HeroSection);
customElements.define(Authentication.tag, Authentication);
customElements.define(CustomStyles.tag, CustomStyles);
customElements.define(InvitationSection.tag, InvitationSection);
customElements.define(ComingSection.tag, ComingSection);
customElements.define(ContextMenu.tag, ContextMenu);
customElements.define(DropDown.tag, DropDown);
customElements.define(Input.tag, Input);
customElements.define(Button.tag, Button);
customElements.define(CountdownSection.tag, CountdownSection);
customElements.define(InformationSection.tag, InformationSection);
customElements.define(ZeitplanSection.tag, ZeitplanSection);
customElements.define(FotosSection.tag, FotosSection);
customElements.define(IntroSection.tag, IntroSection);
customElements.define(ContactSection.tag, ContactSection);
customElements.define(LoadingSpinner.tag, LoadingSpinner);

import { Authentication } from "./authentication/authentication";
import { HeroSection } from "./hero/hero";
import { Navigation } from "./navigation/navigation";
import { CustomStyles } from "./custom-styles/custom-styles";
import { InvitationSection } from "./invitation/invitation";

// Define custom Elements here
customElements.define(Navigation.tag, Navigation);
customElements.define(HeroSection.tag, HeroSection);
customElements.define(Authentication.tag, Authentication);
customElements.define(CustomStyles.tag, CustomStyles);
customElements.define(InvitationSection.tag, InvitationSection);

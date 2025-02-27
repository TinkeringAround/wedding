import { DomService } from "../../services/dom.service";
import {
  ContextMenu,
  ContextMenuItemTypes,
} from "../context-menu/context-menu.webcomponent";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./dropdown.style";
import { DropdownValueChangeEvent } from "./events";

export class DropDown extends WebComponent {
  static readonly tag = "wedding-drop-down";
  static readonly observedAttributes = ["options", "label", "value"];

  private _options: string[] = [];
  private hideTime: number | null = null;

  private readonly valueElement: HTMLDivElement;
  private readonly labelElement: HTMLLabelElement;
  private readonly contextMenu: ContextMenu;

  set options(options: string[]) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  get label() {
    return this.getAttribute("label") ?? "";
  }

  set label(label: string) {
    this.setAttribute("label", label);
  }

  set value(value: string) {
    this.setAttribute("value", value);
  }

  get value() {
    return this.getAttribute("value") ?? "";
  }

  static create(options: string[], label: string = "") {
    const dropDown = document.createElement(DropDown.tag) as DropDown;
    dropDown.options = options;
    dropDown.label = label;

    return dropDown;
  }

  constructor() {
    super();

    this.valueElement = DomService.create({
      tag: "div",
      part: "select",
    });

    this.labelElement = DomService.create<HTMLLabelElement>({
      tag: "label",
      part: "label",
    });

    this.contextMenu = ContextMenu.create();

    this.attachShadow({ mode: "open" }).append(
      createStyles(),
      this.labelElement,
      this.valueElement,
      this.contextMenu
    );
  }

  connectedCallback() {
    this.renderContent();
    this.handleEvents();
  }

  attributeChangedCallback(_: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.renderContent();
    }
  }

  private renderContent() {
    this.tabIndex = 0;
    this.contextMenu.items = this.options.map((option) => ({
      type: ContextMenuItemTypes.button,
      text: option,
      onClick: () => this.updateValue(option),
    }));

    if (this.value == "") {
      this.value = this.options[0];
    }
    this.valueElement.replaceChildren(this.value);

    if (this.label) {
      this.labelElement.textContent = this.label;
      this.labelElement.style.display = "block";
    } else {
      this.labelElement.style.display = "none";
    }
  }

  private handleEvents() {
    this.addEventListener("click", () => {
      const { width, height } = this.getBoundingClientRect();
      this.contextMenu.style.width = `${width}px`;
      this.contextMenu.showAt(0, height - 2);
    });

    this.addEventListener("focus", () => {
      if (this.hideTime) {
        clearTimeout(this.hideTime);
      }
    });

    this.addEventListener("focusout", () => {
      this.hideTime = setTimeout(() => {
        this.contextMenu.visible = false;
      }, 350);
    });
  }

  private updateValue(value: string) {
    if (this.value != value) {
      this.value = value;
      this.dispatchEvent(new DropdownValueChangeEvent(this.value));
    }
  }
}

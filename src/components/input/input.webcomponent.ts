import { WebComponent } from "../webcomponent";
import { InputInputEvent, InputValueChangeEvent } from "./events";
import { createStyles } from "./input.style";
import { InputAttributes } from "./model";

export class Input extends WebComponent {
  static readonly tag = "wedding-input";
  //@ts-ignore
  private static readonly observedAttributes = Object.values(InputAttributes);

  private readonly inputElement: HTMLInputElement;
  private readonly labelElement: HTMLLabelElement;
  private readonly messageElement: HTMLSpanElement;

  get value() {
    return this.getAttribute(InputAttributes.value) ?? "";
  }

  set value(value: string) {
    this.setAttribute(InputAttributes.value, value);
  }

  get placeHolder() {
    return this.getAttribute(InputAttributes.placeHolder) ?? "";
  }

  set placeHolder(placeHolder: string) {
    this.setAttribute(InputAttributes.placeHolder, placeHolder);
  }

  get type() {
    return this.getAttribute(InputAttributes.type) ?? "";
  }

  set type(type: string) {
    this.setAttribute(InputAttributes.type, type);
  }

  get label() {
    return this.getAttribute(InputAttributes.label) ?? "";
  }

  set label(label: string) {
    this.setAttribute(InputAttributes.label, label);
  }

  static create(
    value: string = "",
    placeHolder: string = "",
    label: string = "",
    type = "text"
  ) {
    const input = document.createElement(Input.tag) as Input;
    input.value = value;
    input.placeHolder = placeHolder;
    input.type = type;
    input.label = label;

    return input;
  }

  constructor() {
    super();

    this.inputElement = document.createElement("input");
    this.inputElement.setAttribute("part", "input");

    this.labelElement = document.createElement("label");
    this.labelElement.setAttribute("part", "label");

    this.messageElement = document.createElement("span");
    this.messageElement.setAttribute("part", "message");

    this.inputElement.addEventListener("input", (event) => {
      const newValue = (event.target as HTMLInputElement).value;
      if (this.value !== newValue) {
        this.value = newValue;
        this.dispatchEvent(new InputInputEvent(newValue));
      }
    });

    this.inputElement.addEventListener("change", () => {
      this.dispatchEvent(new InputValueChangeEvent(this.value));
    });

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      this.labelElement,
      this.inputElement,
      this.messageElement
    );
  }

  connectedCallback() {
    this.updateInput();
  }

  attributeChangedCallback(_: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateInput();
    }
  }

  private updateInput() {
    this.inputElement.value = this.value;
    this.inputElement.placeholder = this.placeHolder;
    this.inputElement.type = this.type;

    if (this.label) {
      this.labelElement.textContent = this.label;
      this.labelElement.style.display = "block";
    } else {
      this.labelElement.style.display = "none";
    }
  }
}

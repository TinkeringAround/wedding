export enum InputEvents {
  input = "input",
  valueChange = "input-value-change",
}

export class InputValueChangeEvent extends CustomEvent<string> {
  constructor(detail: string) {
    super(InputEvents.valueChange, { detail });
  }
}

export class InputInputEvent extends CustomEvent<string> {
  constructor(detail: string) {
    super(InputEvents.input, { detail });
  }
}

export enum DropdownEvents {
  valueChange = "dropdown-value-change",
}

export class DropdownValueChangeEvent extends CustomEvent<string> {
  constructor(detail: string) {
    super(DropdownEvents.valueChange, { detail });
  }
}

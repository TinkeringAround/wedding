// import { DomService } from '../../services/dom.service';
// import { ValidatorFunction } from '../../services/validator.service';
// import { WebComponent } from '../../webcomponent';
// import {
//     ContextMenu,
//     ContextMenuItemTypes,
// } from '../context-menu/context-menu.webcomponent';
// import { createStyles } from './dropdown.style';
// import { DropdownValueChangeEvent } from './events';

// export class DropDown extends WebComponent {
//     static readonly tag = 'wb-drop-down';
//     static readonly observedAttributes = [
//         'options',
//         'label',
//         'validator',
//         'value',
//     ];

//     private _validator: ValidatorFunction | null = null;
//     private _options: string[] = [];
//     private hideTime: NodeJS.Timeout | null = null;

//     private readonly valueElement: HTMLDivElement;
//     private readonly labelElement: HTMLLabelElement;
//     private readonly messageElement: HTMLSpanElement;
//     private readonly contextMenu: ContextMenu;

//     set options(options: string[]) {
//         this._options = options;
//     }

//     get options() {
//         return this._options;
//     }

//     get label() {
//         return this.getAttribute('label') ?? '';
//     }

//     set label(label: string) {
//         this.setAttribute('label', label);
//     }

//     set value(value: string) {
//         this.setAttribute('value', value);
//     }

//     get value() {
//         return this.getAttribute('value') ?? '';
//     }

//     get valid() {
//         return this.validator ? !(this.getAttribute('invalid') == '') : true;
//     }

//     set validator(validator: ValidatorFunction | null) {
//         this._validator = validator;
//     }

//     get validator(): ValidatorFunction | null {
//         return this._validator;
//     }

//     static create(
//         options: string[],
//         label: string = '',
//         validator: ValidatorFunction = () => null
//     ) {
//         const dropDown = document.createElement(DropDown.tag) as DropDown;
//         dropDown.options = options;
//         dropDown.label = label;
//         dropDown.validator = validator;

//         return dropDown;
//     }

//     constructor() {
//         super();

//         this.valueElement = DomService.createElement({
//             tag: 'div',
//             part: 'select',
//         });

//         this.labelElement = DomService.createElement<HTMLLabelElement>({
//             tag: 'label',
//             part: 'label',
//         });

//         this.messageElement = DomService.createElement<HTMLSpanElement>({
//             tag: 'span',
//             part: 'message',
//         });

//         this.contextMenu = ContextMenu.create();

//         this.attachShadow({ mode: 'open' }).append(
//             createStyles(),
//             this.labelElement,
//             this.valueElement,
//             this.messageElement,
//             this.contextMenu
//         );
//     }

//     connectedCallback() {
//         this.renderContent();
//         this.handleEvents();
//     }

//     attributeChangedCallback(_: string, oldValue: string, newValue: string) {
//         if (oldValue !== newValue) {
//             this.renderContent();
//         }
//     }

//     validate() {
//         if (this.validator) {
//             const validationResult = this.validator(this.value);

//             if (!!validationResult) {
//                 this.setAttribute('invalid', '');
//                 this.messageElement.textContent = validationResult;
//                 this.messageElement.style.display = 'block';
//                 return;
//             }

//             this.removeAttribute('invalid');
//             this.messageElement.style.display = 'none';
//         }
//     }

//     private renderContent() {
//         this.tabIndex = 0;
//         this.contextMenu.items = this.options.map((option) => ({
//             type: ContextMenuItemTypes.button,
//             text: option,
//             onClick: () => this.updateValue(option),
//         }));

//         this.valueElement.replaceChildren(this.value);

//         if (this.label) {
//             this.labelElement.textContent = this.label;
//             this.labelElement.style.display = 'block';
//         } else {
//             this.labelElement.style.display = 'none';
//         }
//     }

//     private handleEvents() {
//         this.addEventListener('click', () => {
//             const { width, height } = this.getBoundingClientRect();
//             this.contextMenu.style.width = `${width}px`;
//             this.contextMenu.showAt(0, height - 2);
//         });

//         this.addEventListener('focus', () => {
//             if (this.hideTime) {
//                 clearTimeout(this.hideTime);
//             }
//         });

//         this.addEventListener('focusout', () => {
//             this.validate();
//             this.hideTime = setTimeout(() => {
//                 this.contextMenu.visible = false;
//             }, 350);
//         });
//     }

//     private updateValue(value: string) {
//         if (this.value != value) {
//             this.value = value;
//             this.validate();
//             this.dispatchEvent(new DropdownValueChangeEvent(this.value));
//         }
//     }
// }

// import { Icon } from '../icon/icon.webcomponent';

// const template = document.createElement('template');
// template.innerHTML = `
// <style>
// :host {
//     --width: 325px;
//     --position: fixed;
//     --minWidth: 300px;

//     position: absolute;

//     display: none;
//     grid-template-columns: minmax(0, 1fr);
//     gap: 0.25rem;

//     width: var(--width);
//     min-width: var(--minWidth);
//     padding: 0.75rem 0.5rem;

//     background: var(--white);
//     border-radius: 10px;
//     box-shadow:
//         rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
//         rgba(15, 15, 15, 0.1) 0px 3px 6px,
//         rgba(15, 15, 15, 0.2) 0px 9px 24px;

//     box-sizing: border-box;
//     overflow: auto;
//     z-index: 100;
// }

// [part="context-menu-item"] {
//     display: grid;
//     grid-template-columns: minmax(0, 1fr);
//     grid-template-rows: minmax(0, 1fr);
//     align-items: center;

//     color: var(--dark);
//     font-size: 0.75rem;
//     border-radius: 6px;

//     transition: all 0.15s ease-in-out;
//     cursor: default;
// }

// [part="context-menu-item"][type="button"] {
//     height: 40px;
//     cursor: pointer;
// }

// [part="context-menu-item"] ${Icon.tag} {
//     align-self: center;
//     justify-self: center;

//     height: 20px;
//     width: 20px;

//     fill: var(--dark);
// }

// :host hr {
//     height: 1px;
//     width: 100%;
//     margin: 0;

//     background: var(--background);
//     border: none;
// }

// :host([visible]) {
//     display: grid;
// }

// [part="context-menu-item"][type="button"]:not([disabled]):hover {
//     background: var(--grey);
// }

// [part="context-menu-item"][type="button"][disabled] {
//     color: var(--grey);

//     cursor: default;
// }

// [part="context-menu-item"][type="button"][disabled] ${Icon.tag} {
//     fill: var(--grey);
// }
// </style>`;

// export const createStyles = () => {
//     return template.content.cloneNode(true);
// };

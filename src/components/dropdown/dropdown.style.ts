import { ContextMenu } from "../context-menu/context-menu.webcomponent";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
   --fontSize: 1rem;
   --borderRadius: 2rem;
   --padding: 0.75rem 1.25rem;

   --fontFamily: "Bodoni Moda", serif;
   --color: var(--white);

   position: relative;

   display: flex;
   flex-direction: column;

   height: min-content;
   min-height: 60px;
   padding: 10px;

   font-size: var(--fontSize);
   font-family: var(--fontFamily);
   font-optical-sizing: auto;
   font-style: normal;

   background: var(--mint);
   color: var(--color);

   border-bottom: 2px solid var(--white);
   border-radius: 2px;
   outline: none;

   transition: background 0.15s ease-in-out;
   box-sizing: border-box;

   cursor: pointer;
}

[part="select"] {
   height: 50px;
   padding: 0.75rem 1.25rem;

   font-size: inherit;
   font-family: inherit;
   font-weight: inherit;
   font-style: inherit;

   background: transparent;
   color: var(--color);

   border-radius: 2px;
   border: none;
   outline: none !important;

   transition: all 0.1s ease-in-out;
   box-sizing: border-box;

   appearance: none;
}

${ContextMenu.tag} {
   --position: absolute;

    border-top: solid 2px var(--green);
    border-radius: 0 0 10px 10px;
}

:host(:hover), :host(:focus), :host(:focus-visible) {
  border-bottom: solid 2px var(--green);
  background: var(--white);
  color: var(--green);
  --color: var(--green);
}

@media (max-width: 800px) {
   :host {
      width: 100%;
   }

   ${ContextMenu.tag} {
      --minWidth: 100%;
   }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

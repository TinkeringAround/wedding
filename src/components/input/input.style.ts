const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  --padding: 0.75rem 1.25rem;
  --minHeight: 60px;
  
  --fontSize: 1rem;
  --borderRadius: 2rem;
  --fontFamily: "Bodoni Moda", serif;
  --fontWeight: 400;
  --color: var(--black);
  --background: var(--white);
  --hoverBackground: var(--white);

  display: flex;
  flex-direction: column;

  height: min-content;
  min-height: var(--minHeight);
  padding: 10px;

  font-size: var(--fontSize);
  font-family: var(--fontFamily);
  background: var(--background);
  color: var(--color);
  border-bottom: 2px solid transparent;
  border-radius: 2px;

  transition: all 0.15s ease-in-out;
  box-sizing: border-box;
}

[part="message"] {
  color: var(--red);
  font-size: 0.7rem;
}

[part="input"] {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: var(--padding);
  
  font-family: var(--fontFamily);
  font-weight: var(--fontWeight);
  font-style: normal;
  font-size: inherit;

  color: var(--color);
  background: inherit;
  
  border: none;
  outline: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  box-sizing: border-box;
}

:host(:hover), :host(:focus), :host(:focus-visible) {
  border-bottom: solid 2px var(--green);
  background: var(--hoverBackground);
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

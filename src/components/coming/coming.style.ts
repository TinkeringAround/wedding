import { Button } from "../button/button.webcomponent";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  justify-items: center;
  gap: 2rem;

  width: 100vw;
  max-width: inherit;
  height: min-content;

  padding: 50px 0 100px;

  background: var(--mint);

  overflow: auto;
  box-sizing: border-box;
}

div[part="formular"] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(4, min-content);
  gap: 1rem;
  width: 850px;

  box-sizing: border-box;
}

div[part="formular"] h1 {
    margin: 0;
    font-family: "Silence Rocken", serif;
    font-style: normal;
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    color: var(--white);
}

div[part="formular"] * {
  max-width: 100%;
}

${Button.tag} {
  justify-self: end;
  width: 200px;
}

@media (max-width: 800px) {
  :host {
    padding: 50px 0 75px;
  }

  div[part="formular"] {
    width: 100%;
    padding: 0 7.5%;

    box-sizing: border-box;
  }

  div[part="formular"] h1 {
    font-size: 3rem;
  }

  div[part="left"] *, div[part="formular"] * {
    width: 100%;
    max-width: 100%;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

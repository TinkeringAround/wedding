const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  width: 100vw;
  max-width: inherit;
  padding: 50px 0;

  background: transparent;
}

div[part="wrapper"] {
  font-size: 8rem;
  text-align: center;

  font-family: "Silence Rocken";
}

b {
 font-family: "Bodoni Moda";
}

a {
  color: var(--green);
  text-decoration: none;
  outline: none;

  transition: all 0.1s ease-in-out;
}

a:hover {
  color: var(--mint);
}

@media (max-width: 800px) {
  :host {
    padding: 50px 0;
  }

  div[part="wrapper"] {
    font-size: 4rem;
  }

  b {
    display: block;
    width: 100%;

    font-size: 5rem;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

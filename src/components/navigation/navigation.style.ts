const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    justify-content: end;
    align-items: center;

    width: 100vw;
    height: 50px;

    padding: 0 20px;

    background: var(--white);

    box-sizing: border-box;

    z-index: 10;
}

a {
  color: var(--green);
  text-decoration: none;

  font-family: "Bodoni Moda", serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;

  cursor: pointer;

  transition: all 0.1s ease-in-out;
}

a:hover {
  color: var(--mint);
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

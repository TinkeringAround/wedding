const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    --fontSize: 1rem;
    --padding: 0.75rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 65px;
    padding: var(--padding);
    text-transform: uppercase;

    font-size: var(--fontSize);
    font-family: "Bodoni Moda", serif;
    font-optical-sizing: auto;
    font-style: normal;

    border-radius: 5px;
    border: solid 2px transparent;

    box-sizing: border-box;

    transition: all 0.15s ease-in-out;
    cursor: pointer;
}

:host([variant="primary"]) {
    background: var(--green);
    color: var(--white);
}

:host([variant="secondary"]) {
    background: transparent;
    color: var(--dark);
}

:host([variant="danger"]) {
    background: var(--red);
    color: var(--white);
}

:host([variant="primary"]:not([disabled]):hover) {
    background: var(--white);
    color: var(--blue);
    border: solid 2px var(--green);
}

:host([variant="secondary"]:not([disabled]):hover) {
    background: var(--blue);
    color: var(--white);
    border: solid 2px var(--white);
}

:host([variant="danger"]:not([disabled]):hover) {
    background: var(--white);
    color: var(--red);
    border: solid 2px var(--red);
}

:host([disabled]) {
    background: transparent;
    color: var(--dark);
    border: solid 2px var(--dark);

    cursor: default;
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

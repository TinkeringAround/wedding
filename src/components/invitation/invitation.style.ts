const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  max-width: inherit;
  height: calc(var(--vh) * 70);

  padding: 40px 0;

  box-sizing: border-box;
}

:host(*) {
  max-width: 700px;
  margin: 0 auto;

  color: var(--green);
}

h1 {
  margin: 0 0 2rem 0;

  font-family: "WindSong", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 3rem;
  color: var(--green);
}

p, div[part="location"] {
  font-family: "Bodoni Moda", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

p[part="connector"] {
  margin: 1rem 0;

  font-family: "WindSong", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2rem;
  color: var(--green);
}

div[part="location"] {
  flex-direction: column;
  gap: 10px;

  padding-left: 10px;

  color: var(--purple);
  font-size: 1.25rem;

  transition: all 0.15s ease-in-out;
}

div[part="location"]:hover {
  color: var(--violett);
}

div[part="location"] a {
  color: inherit;
  text-decoration: underline;
}

@media (max-width: 800px) {
  :host {
    height: calc(var(--vh) * 100);
  }

  :host(*) {
    max-width: 85%;
    margin: 0 auto;

    color: var(--green);
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }

  p[part="connector"] {
    font-size: 1.3rem;
  }

  div[part="location"] {
    padding: 0;

    font-size: 1rem;
    font-weight: 500;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

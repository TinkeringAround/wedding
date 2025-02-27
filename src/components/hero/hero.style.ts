const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  width: 100vw;
  max-width: inherit;
}

h1[part="title"] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin: 0;
  padding: 50px;

  color: var(--green);
  font-family: "Bodoni Moda";
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 5rem;
  line-height: 1;
}

h1[part="title"] i {
  font-family: "Silence Rocken";
}

div[part="image"] {
  height: calc(var(--vh) * 65);

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/79T1UTEWDmAYgT2eeJO87v/c6e5749287ae0ee88197614f3752a8fe/18.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 800px) {
  h1[part="title"] {
    gap: 0.2rem;

    font-size: 2.75rem;
  }

  div[part="image"] {
    height: calc(var(--vh) * 60);
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

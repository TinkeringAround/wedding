const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  width: 100vw;
  max-width: inherit;
}

div[part="image"] {
  height: calc(var(--vh) * 65);

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/79T1UTEWDmAYgT2eeJO87v/c6e5749287ae0ee88197614f3752a8fe/18.jpeg?fm=jpg&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 800px) {
  div[part="image"] {
    height: calc(var(--vh) * 60);
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

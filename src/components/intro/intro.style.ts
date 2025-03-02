const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  width: 100vw;
  max-width: inherit;
  
  padding: 0;
}

div[part="image"] {
  height: calc(var(--vh) * 45);
  min-height: 300px;

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/6gwdplPnsR9GTQgPlQ1zRz/3a343fcdc2ae9c4c617eb7760c14bb81/Einladung_bearbeitet-min.png?fm=jpg&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 800px) {
  :host {
    padding: 0;
  }

  div[part="image"] {
    height: calc(var(--vh) * 100);
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

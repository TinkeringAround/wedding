import { Button } from "../button/button.webcomponent";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: 2rem;

  max-width: inherit;
  height: min-content;

  padding: 40px;

  overflow: auto;
}

div[part="half"] {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: 1rem;

  padding: 20px;

  background: var(--mint);

  box-sizing: border-box;
}

div[part="contact"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

p[part="telefons"] {
  text-align: center;
}

p[part="telefons"] a {
  color: var(--white);
  font-family: "Bodoni Moda", serif;
  text-decoration: none;
  outline: none;

  transition: all 0.1s ease-in-out;
}

p[part="telefons"] a:hover {
  color: var(--green);
}

div[part="contact"] div[part="image"] {
  height: 200px;
  width: 100%;

  border: solid 2px white;
  border-radius: 50%;

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/6575jOCT6R3BgAqaTf3TPZ/a9cb8ef52ec9629af1d4f97b55b7c6f9/close.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

div[part="person"] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: min-content min-content;
  gap: 1rem;
  align-items: center;
}

div[part="person"] h1 {
margin: 0;
    font-family: "Silence Rocken", serif;
    font-style: normal;
    font-size: 2.5rem;
    text-align: center;
    color: var(--white);
}

div[part="person"] p {  
  color: var(--white);
  font-size: 1rem;
  line-height: 1.75;
  text-align: center;
}

div[part="person"] * {
  max-width: 100%;
}

div[part="us"] div[part="image"],
div[part="contact"] div[part="image"] {
  height: 200px;
  width: 100%;

  border: solid 2px white;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

div[part="us"] div[part="image"] {
   background-image: url("https://images.ctfassets.net/df3z1ez0ud42/6575jOCT6R3BgAqaTf3TPZ/a9cb8ef52ec9629af1d4f97b55b7c6f9/close.png");
}

div[part="contact"] div[part="image"] {
  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/6575jOCT6R3BgAqaTf3TPZ/a9cb8ef52ec9629af1d4f97b55b7c6f9/close.png");
}

${Button.tag} {
  justify-self: end;
  width: 200px;
}

@media (max-width: 800px) {
  * {
    max-width: 85%;
    margin: 0 auto;
  }

  h1 {
    margin: 0 auto 1rem;
    
    font-size: 2.5rem;
  }

  div[part="left"] *, div[part="person"] * {
    width: 100%;
    max-width: 100%;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

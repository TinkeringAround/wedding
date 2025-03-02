const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: min-content minmax(0, 1fr) minmax(0, 1fr);
  justify-items: center;
  gap: 4rem;

  max-width: inherit;
  height: min-content;

  padding: 50px 0;

  overflow: auto;
}

h1 {
  margin: 0;
  font-family: "Silence Rocken", serif;
  font-style: normal;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  color: var(--green);
}

div[part="us"], div[part="trauzeugen"] {
  width: min(85%, 1000px);
} 

div[part="us"] {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: 3rem;
  min-height: 350px;

  box-sizing: border-box;
}

div[part="us"] p, div[part="trauzeugen"] p {
  margin: 0;

  font-family: "Bodoni Moda", serif;
  font-size: 1.2rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: var(--green);
}

div[part="trauzeugen"] p {
  text-align: end;
}

div[part="us"] p span, div[part="trauzeugen"] p span {
  text-transform: uppercase;
  letter-spacing: 4px;
}

div[part="us"] * {
  max-width: 100%;
}

div[part="us"] a, div[part="trauzeugen"] a {
  color: var(--green);
  text-decoration: none;

  transition: all 0.1s ease-in-out;
}

div[part="us"] a:hover, div[part="trauzeugen"] a:hover {
  color: var(--mint);
}

div[part="trauzeugen"] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
  grid-template-rows: minmax(0, 1fr);
  gap: 3rem;
  min-height: 350px;

  box-sizing: border-box;
}

div[part="image"] {
  height: 100%;
  width: 100%;

  border-radius: 5px;

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}

div[part="us"] div[part="image"] {
   background-image: url("https://images.ctfassets.net/df3z1ez0ud42/4wSVBqepUr4zWIU2zq4GFr/754995ba18853649ac6f815b36371960/147.jpeg?fm=jpg&q=60");
}

div[part="trauzeugen"] div[part="image"] {
   background-image: url("https://images.ctfassets.net/df3z1ez0ud42/658nGhiR15jMEE732GLQl5/ca1c46ec7bf1d21f4fc96b0a167ee799/PHOTO-2023-11-12-19-22-44.jpg?fm=jpg&q=60");
}

@media (max-width: 800px) {
  :host {
    gap: 0;
  }
  
  div[part="us"], div[part="trauzeugen"] {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows:  minmax(0, 1fr) min-content;
    
    width: 90%;
  } 

  div[part="us"] {
    margin-bottom: 2rem;
  }

  div[part="trauzeugen"] div[part="image"] {
    order: 1;
  }

  div[part="trauzeugen"] p {
    order: 2;
  }

  div[part="us"] p , div[part="trauzeugen"] p {
    text-align: center;
    font-size: 1rem;
  }

  div[part="us"] p a wb, div[part="trauzeugen"] p a wb {
    display: block;
  }

  div[part="us"] p a wb:last-of-type, div[part="trauzeugen"] p a wb:last-of-type {
    margin-top: 1rem;
  }

  div[part="image"] {
    min-height: 500px;
  }

  h1 {
    margin: 0 auto 1rem;
    
    font-size: 3rem;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

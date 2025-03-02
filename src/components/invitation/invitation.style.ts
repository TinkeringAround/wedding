const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 50px 0;
  width: 100vw;
  max-width: inherit;

  box-sizing: border-box;
}

section {
  max-width: 850px;
  margin: 0 auto;

  color: var(--green);
  font-family: "Bodoni Moda", serif;
}

section:not(:last-of-type) {
  margin-bottom: 2rem;
}

h1 {
  margin: 0;

  font-family: "Bodoni Moda", serif;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 1px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: var(--green);
}

section:first-of-type h1 {
  font-family: "Silence Rocken", serif;
  font-size: 4rem;
  line-height: 2;
}

p {
  font-size: 1.2rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--green);
}

section:first-of-type p {
  text-transform: uppercase;
  letter-spacing: 4px;
}

section:first-of-type p i {
  font-family: "Silence Rocken", serif;
  text-transform: initial;
  letter-spacing: 0;
  line-height: 3;
  font-size: 2.5rem;
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: underline;
  transition: all 0.1s ease-in-out;
}

span {
  text-decoration: underline;
}

a:hover {
  color: var(--mint);
}

div[part="left"], div[part="right"] {
  position: absolute;
  
  top: 0;
  height: calc(100% + 435px);
  width: 40%;

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  opacity: 0.6;
  z-index: -1;
}

div[part="left"] {
  left: 0;

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/3HsYRgviQzT9hkqbcdEd0t/0b14d92faabf5c4d5579b450db267d4b/links.png?fm=jpg&q=60");
}

div[part="right"] {
  right: 0;

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/46wxlkzld2U6vmBv128YWs/b0ec12036fbc5efb02c99d28d9965bfe/rechts.png?fm=jpg&q=60");
}

@media (max-width: 800px) {
  section {
    max-width: 85%;
    margin: 0 auto;

    padding: 20px 0;
  }

  section:not(:last-of-type) {
    margin-bottom: 0;
  }

  section:first-of-type h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }

  section:first-of-type p {
    margin: 0;
  }

  section:first-of-type p i {
    font-size: 2rem;
    line-height: 1.75;
  }

  div[part="left"], div[part="right"] {
    width: 35%;
    opacity: 0.2;
  }

  div[part="left"] {
    background-position: left;
  }

  div[part="right"] {
    background-position: right;
  }
} 
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 0;
  width: 100vw;
  max-width: inherit;

  background: var(--mint);

  box-sizing: border-box;
}

section {
  max-width: 850px;
  margin: 0 auto;

  color: var(--white);
  font-family: "Bodoni Moda", serif;
}

section:not(:last-of-type) {
  margin-bottom: 2rem;
}

h1 {
  margin: 0;

  font-family: "Silence Rocken", serif;
  font-size: 3rem;
  line-height: 2;
  font-weight: 500;
  font-style: normal;
  text-align: center;
}

p {
 font-size: 1.2rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  text-align: center;
}

@media (max-width: 800px) {
  :host {
    padding: 50px 0;
  }

  section {
    max-width: 85%;
    margin: 0 auto;

    padding: 0;
  }

  section:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
} 
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

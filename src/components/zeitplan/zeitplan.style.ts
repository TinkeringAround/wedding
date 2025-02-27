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
  max-width: 700px;
  margin: 0 auto;

  color: var(--white);
}

section:not(:last-of-type) {
  margin-bottom: 2rem;
}

h1, h2 {
  margin: 0;

  font-family: "Silence Rocken", serif;
  font-style: normal;
  font-size: 1.25rem;
  text-align: center;

  color: var(--white);
}

h1 {
  margin-bottom: 2rem;

  font-size: 3rem;
}

p {
  font-size: 1rem;
  line-height: 1.75;
  text-align: center;
}

@media (max-width: 800px) {
  :host {
    padding: 50px 0;
  }

  section {
    max-width: 85%;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }
} 
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

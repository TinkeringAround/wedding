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

  box-sizing: border-box;
}

:host(*) {
  max-width: 700px;
  margin: 0 auto;

  color: var(--green);
}

section:not(:last-of-type) {
  margin-bottom: 2rem;
}

h1 {
  margin: 0;

  font-family: "Silence Rocken", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 3rem;
  text-align: center;

  color: var(--green);
}

p {
  font-size: 1.2rem;
  line-height: 1.75;
  text-align: center;
  color: var(--black);
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

@media (max-width: 800px) {
  :host(*) {
    max-width: 85%;
    margin: 0 auto;

    padding: 50px 0;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    margin: 0 0 1rem;
    
    font-size: 0.9rem;
  }
} 
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

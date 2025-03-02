import { LoadingSpinner } from "../loading-spinner/loading-spinner.webcomponent";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: inherit;
  padding: 0 40px 40px;
}

h1 {
  margin: 2rem 0 0;
  font-family: "Silence Rocken", serif;
  font-style: normal;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  color: var(--green);
}

p {
  width: 850px;

  font-size: 1.2rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--green);
}

div[part="photos"] {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 400px;
  gap: 1rem;
}

div[part="photos"] input {
  display: none;
}

div[part="photos"] img {
  width: 100%;
  height: 100%;

  border-radius: 5px;

  object-fit: cover;
  object-position: center;
} 

div[part="add-image"] {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Bodoni Moda", serif;
  font-size: 1rem;
  font-weight: 500;
  background: var(--light);
  border: solid 2px transparent;
  color: var(--grey);
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

div[part="add-image"]:hover {
  color: var(--green);
  border: solid 2px var(--green);
}

div[part="upload"] {
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  padding: 25px 50px;

  border-radius: 5px;
  background: var(--green);
  color: var(--white);

  box-sizing: border-box;
  z-index: 10;
}

div[part="upload"] span {
  font-family: "Bodoni Moda", serif;
  font-size: 1.25rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
}

@media (max-width: 800px) {
  :host {
    padding: 50px 10px;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    width: 85%;

    font-size: 1rem;
  }

  div[part="photos"] {
    grid-template-columns: minmax(0, 1fr);
  }

  div[part="upload"] {
    flex-direction: column;
    text-align: center;

    width: 100vw;
    left: 0;
    bottom: 0;
    transform: translateX(0);
    gap: 0;

    padding: 10px 25px;

    border-radius: 0;
  }

  ${LoadingSpinner.tag} {
      --transform: scale(0.8);
  }

  div[part="upload"] span {
    font-size: 1rem;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

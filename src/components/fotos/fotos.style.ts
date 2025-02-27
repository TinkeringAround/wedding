const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  --items: 12;

  position: relative;

  max-width: inherit;
  padding: 100px 40px;
}

div[part="photos"] {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(calc(var(--items) / 4 + 1), 400px);
  gap: 1rem;
}

div[part="photos"] input {
  display: none;
}

div[part="photos"] img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
} 

div[part="add-image"] {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Bodoni Moda", serif;
  font-size: 1.25rem;
  background: var(--light);
  color: var(--grey);

  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

div[part="add-image"]:hover {
  background: var(--mint);
  color: var(--green);
}

@media (max-width: 800px) {
  :host {
    padding: 50px 10px;
  }

  div[part="photos"] {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: repeat(var(--items), 400px);
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

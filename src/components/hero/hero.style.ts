const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  --position: 120px;

  position: relative;

  width: 100vw;
  max-width: inherit;
  height: calc(var(--vh) * 100);

  background-image: url("https://images.ctfassets.net/df3z1ez0ud42/79T1UTEWDmAYgT2eeJO87v/c6e5749287ae0ee88197614f3752a8fe/18.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h1 {
  margin: 0;

  color: var(--white);
  font-family: "WindSong", serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}

h1[part="title"] {
  margin-top: 80px;

  font-size: 5rem;
  line-height: 1;
}

h1[part="subtitle"] {
  font-size: 3rem;
}

div[part="wrapper"] {
  position: absolute;
  bottom: var(--position);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  gap: 40px;

  padding: 15px 25px;
  
  color: var(--black);
  font-size: 4rem;
  text-align: center;
  white-space: nowrap;

  font-family: "WindSong", serif;
  font-weight: 400;
  font-style: normal;
  font-weight: 400;

  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}


a {
  position: absolute;
  bottom: calc(var(--position) - 45px);
  left: 50%;
  transform: translateX(-50%);
  
  color: var(--violett);
  font-size: 1.5rem;
  font-family: "WindSong", serif;
  font-weight: 400;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;

  outline: none;

  transition: all 0.15s ease-in-out;
}

a:hover {
  color: var(--purple);
}

@media (max-width: 800px) {
  :host {
    --position: 60px;
  }

  h1 {
    font-weight: 500;
  }
  
  h1[part="title"] {
    margin-top: 40px;

    font-size: 2rem;
    line-height: 1;
  }

  h1[part="subtitle"] {
    font-size: 1.75rem;
  }

  div[part="wrapper"] {
    bottom: var(--position);
    gap: 10px;

    font-size: 1.5rem;
  }

  a {
    bottom: calc(var(--position) - 25px);

    font-size: 0.75rem;
  }
}
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

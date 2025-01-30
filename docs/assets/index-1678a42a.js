var L=Object.defineProperty;var z=(n,t,o)=>t in n?L(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var r=(n,t,o)=>(z(n,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();class x{}r(x,"PASSWORD","test");class w{static login(){localStorage.setItem("authenticated","true")}static isAuthenticated(){return localStorage.getItem("authenticated")=="true"}}class s{static create(t){const o=document.createElement(t.tag);return t.part&&o.setAttribute("part",t.part),t.class&&o.classList.add(t.class),o}}class m extends HTMLElement{}r(m,"tag");const b=document.createElement("template");b.innerHTML=`
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
</style>`;const A=()=>b.content.cloneNode(!0),g=class extends m{static create(){return document.createElement(g.tag)}constructor(){super();const t=s.create({tag:"h1",part:"title"});t.innerHTML="Alina & Thomas";const o=s.create({tag:"h1",part:"subtitle"});o.innerHTML="Wir heireaten!";const i=s.create({tag:"div",part:"wrapper"});this.getDaysLeft()>0?i.innerHTML=`Noch <b>${this.getDaysLeft()}</b> ${this.getDaysLeft()==1?"Tag":"Tage"}`:i.innerHTML="Heute!";const e=s.create({tag:"a"});e.href="https://assets.ctfassets.net/df3z1ez0ud42/3A3u8pn7Ib7YYP6l00qgZi/6f48503a42ab05e7125e1741114b177b/wedding-thomas-alina.ics",e.download="wedding-thomas-alina.ics",e.setAttribute("content","text/calendar"),e.textContent="Save the Date",this.attachShadow({mode:"closed"}).append(A(),t,o,i,e)}getDaysLeft(){const t=new Date;return Math.round((new Date("2025-06-28").getTime()-t.getTime())/(1e3*3600*24))}};let c=g;r(c,"tag","wedding-hero");const v=document.createElement("template");v.innerHTML=`
<style>
:host {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  max-width: inherit;
  height: calc(var(--vh) * 70);

  padding: 40px 0;

  box-sizing: border-box;
}

:host(*) {
  max-width: 700px;
  margin: 0 auto;

  color: var(--green);
}

h1 {
  margin: 0 0 2rem 0;

  font-family: "WindSong", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 3rem;
  color: var(--green);
}

p, div[part="location"] {
  font-family: "Bodoni Moda", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

p[part="connector"] {
  margin: 1rem 0;

  font-family: "WindSong", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2rem;
  color: var(--green);
}

div[part="location"] {
  flex-direction: column;
  gap: 10px;

  padding-left: 10px;

  color: var(--purple);
  font-size: 1.25rem;

  transition: all 0.15s ease-in-out;
}

div[part="location"]:hover {
  color: var(--violett);
}

div[part="location"] a {
  color: inherit;
  text-decoration: underline;
}

@media (max-width: 800px) {
  :host {
    height: calc(var(--vh) * 100);
  }

  :host(*) {
    max-width: 85%;
    margin: 0 auto;

    color: var(--green);
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }

  p[part="connector"] {
    font-size: 1.3rem;
  }

  div[part="location"] {
    padding: 0;

    font-size: 1rem;
    font-weight: 500;
  }
}
</style>`;const E=()=>v.content.cloneNode(!0),f=class extends m{static create(){return document.createElement(f.tag)}constructor(){super();const t=s.create({tag:"h1"});t.textContent="Wir heiraten...";const o=s.create({tag:"p"});o.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";const i=s.create({tag:"p",part:"connector"});i.textContent="und empfangen euch am...";const e=s.create({tag:"div",part:"location"});e.innerHTML=`
      <div><b>28.06.2025</b> um <b>14.30 Uhr</b></div>
      <div>im Rittergut Bisdorf</div>
      <div><a href="https://www.google.com/maps/dir//Bisdorf+1,+38154+K%C3%B6nigslutter+am+Elm/@52.3264529,10.8904495,367m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x4165381705b53855:0xcfa4ff2506a05d02!2m2!1d10.8916389!2d52.326023!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Bisdorf 1, 38154 Königslutter am Elm</a></div>
    `,this.attachShadow({mode:"closed"}).append(E(),t,o,i,e)}};let l=f;r(l,"tag","wedding-invitation");const S=document.createElement("template");S.innerHTML=`
<style>
:host {
    position: fixed;
    top: 0;
    left: 0;

    display: none;

    width: 100vw;
    height: 50px;

    background: white;
    box-shadow: rgb(233, 233, 231) 0px 1px 0px;
}
</style>`;const D=()=>S.content.cloneNode(!0),y=class extends m{static create(){return document.createElement(y.tag)}constructor(){super(),this.attachShadow({mode:"closed"}).append(D())}connectedCallback(){}disconnectedCallback(){}};let d=y;r(d,"tag","wedding-navigation");class u extends m{constructor(){super(),this.attachShadow({mode:"closed"}),this.style.display="none"}connectedCallback(){this.checkAuthenticationStatus()}checkAuthenticationStatus(){if(!w.isAuthenticated()){const t=prompt("Wie lautet das Passwort?");if((t==null?void 0:t.toLowerCase())==x.PASSWORD){w.login(),this.initApp();return}this.checkAuthenticationStatus()}this.initApp()}initApp(){const t=document.querySelector("main");t&&t.replaceChildren(d.create(),c.create(),l.create())}}r(u,"tag","wedding-authentication");class h extends m{constructor(){super();r(this,"customStyles");this.customStyles=s.create({tag:"style"}),this.attachShadow({mode:"closed"}),document.body.appendChild(this.customStyles),this.style.display="none"}connectedCallback(){this.updateViewheight(),window.addEventListener("resize",()=>{this.updateViewheight()})}updateViewheight(){this.customStyles.innerHTML=`:root {
      --vh: ${`${window.innerHeight*.01}px`};
    }`}}r(h,"tag","wedding-custom-styles");customElements.define(d.tag,d);customElements.define(c.tag,c);customElements.define(u.tag,u);customElements.define(h.tag,h);customElements.define(l.tag,l);

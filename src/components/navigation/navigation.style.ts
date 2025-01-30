const template = document.createElement("template");
template.innerHTML = `
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
</style>`;

export const createStyles = () => {
  return template.content.cloneNode(true);
};

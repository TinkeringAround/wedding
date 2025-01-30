export class DomService {
  static create<T = HTMLDivElement>(params: {
    part?: string;
    tag: string;
    class?: string;
  }) {
    const element = document.createElement(params.tag);

    if (params.part) {
      element.setAttribute("part", params.part);
    }

    if (params.class) {
      element.classList.add(params.class);
    }

    return element as T;
  }
}

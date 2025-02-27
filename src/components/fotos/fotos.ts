import { ContentfulService } from "../../services/contentful.service";
import { DomService } from "../../services/dom.service";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./fotos.style";

export class FotosSection extends WebComponent {
  static tag = "wedding-fotos";

  private readonly photos: HTMLDivElement;
  private readonly fileInput: HTMLInputElement;
  private readonly addImage: HTMLDivElement;

  static create() {
    return document.createElement(FotosSection.tag) as FotosSection;
  }

  constructor() {
    super();

    this.photos = DomService.create({ part: "photos" });
    this.fileInput = DomService.create<HTMLInputElement>({ tag: "input" });
    this.fileInput.type = "file";
    this.fileInput.accept = "image";
    this.fileInput.multiple = true;

    this.addImage = DomService.create({ part: "add-image" });
    this.addImage.innerHTML = "+ Bilder hochladen";

    this.addImage.append(this.fileInput);

    this.addImage.addEventListener("click", () => {
      this.fileInput.click();
    });

    this.fileInput.onchange = async () => {
      if (this.fileInput.files && this.fileInput.files.length > 0) {
        await ContentfulService.uploadImageToContentful(
          Object.values(this.fileInput.files)
        );

        this.loadImages();
      }
    };

    this.attachShadow({ mode: "closed" }).append(createStyles(), this.photos);
  }

  connectedCallback() {
    this.loadImages();
  }

  private loadImages() {
    ContentfulService.getImages().then((images) => {
      this.style.setProperty("--items", `${images.length + 1}`);

      this.photos.replaceChildren(
        this.addImage,
        ...images.map((image) => {
          const imageElement = DomService.create<HTMLImageElement>({
            tag: "img",
          });
          imageElement.title = image.id;
          imageElement.src = image.url;

          return imageElement;
        })
      );
    });
  }
}

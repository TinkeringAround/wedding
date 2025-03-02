import { ContentfulService } from "../../services/contentful.service";
import { DomService } from "../../services/dom.service";
import { LoadingSpinner } from "../loading-spinner/loading-spinner.webcomponent";
import { WebComponent } from "../webcomponent";
import { createStyles } from "./fotos.style";

export class FotosSection extends WebComponent {
  static tag = "wedding-fotos";

  private readonly photos: HTMLDivElement;
  private readonly fileInput: HTMLInputElement;
  private readonly addImage: HTMLDivElement;
  private readonly upload: HTMLDivElement;
  private readonly percentage: HTMLSpanElement;

  static create() {
    return document.createElement(FotosSection.tag) as FotosSection;
  }

  constructor() {
    super();

    const title = DomService.create({ tag: "h1" });
    title.textContent = "Eindrücke";

    const explanation = DomService.create({ tag: "p" });
    explanation.textContent =
      "Hier könnt ihr euere Fotos hochladen. Nach allen Feierlichkeiten werden wir alle Fotos verteilen.";

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
        this.upload.style.display = "flex";
        this.percentage.textContent = `Uploading ${1}/${
          this.fileInput.files?.length
        } Bilder...`;
        await ContentfulService.uploadImageToContentful(
          Object.values(this.fileInput.files),
          (percentage) => {
            this.percentage.textContent = `Uploading ${percentage}/${this.fileInput.files?.length} Bilder...`;
          }
        );

        this.upload.style.display = "none";
        confirm("🎉 Die Bilder wurden erfolgreich hochgeladen, vielen Dank!");
        this.loadImages();
      }
    };

    this.percentage = DomService.create<HTMLSpanElement>({ tag: "span" });

    this.upload = DomService.create({ part: "upload" });
    this.upload.append(LoadingSpinner.create(), this.percentage);
    this.upload.style.display = "none";

    this.attachShadow({ mode: "closed" }).append(
      createStyles(),
      title,
      explanation,
      this.photos,
      this.upload
    );
  }

  connectedCallback() {
    this.loadImages();
  }

  private loadImages() {
    ContentfulService.getImages().then((images) => {
      this.photos.replaceChildren(
        this.addImage,
        ...images.map((image) => {
          const imageElement = DomService.create<HTMLImageElement>({
            tag: "img",
          });
          imageElement.title = image.id;
          imageElement.src = `${image.url}?fm=jpg&q=60`;

          return imageElement;
        })
      );
    });
  }
}

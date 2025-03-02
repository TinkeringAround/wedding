import { createClient, EntryProps, KeyValueMap } from "contentful-management";
import { Guest } from "../types";
import { ConfigService } from "./config.service";

export class ContentfulService {
  private static client = createClient(
    {
      accessToken: ConfigService.CONTENTFUL_API_TOKEN,
    },
    {
      type: "plain",
      defaults: {
        spaceId: ConfigService.CONTENTFUL_SPACE_ID,
        environmentId: "master",
      },
    }
  );

  static async getGuest() {
    return ContentfulService.client.entry
      .getMany({
        query: {
          content_type: "guest",
        },
      })
      .then((response) => response.items)
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  static async createGuests(guests: Guest[]) {
    return Promise.all([
      ...guests.map((guest) =>
        ContentfulService.client.entry.create(
          { contentTypeId: "guest" },
          {
            fields: {
              name: {
                "en-US": guest.name,
              },
              food: {
                "en-US": guest.food,
              },
            },
          }
        )
      ),
    ])
      .then(() => true)
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  static async updateGuest(
    guests: Guest[],
    guestsWithId: EntryProps<KeyValueMap>[] | never[]
  ) {
    return Promise.all([
      ...guests.map((guest) => {
        const guestToUpdate = guestsWithId.find(
          (g) => g.fields.name["en-US"] == guest.name
        );

        if (guestToUpdate) {
          return ContentfulService.client.entry.update(
            { entryId: guestToUpdate.sys.id },
            {
              ...guestToUpdate,
              fields: {
                name: {
                  "en-US": guest.name,
                },
                food: {
                  "en-US": guest.food,
                },
              },
            }
          );
        }

        return false;
      }),
    ])
      .then(() => true)
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  static async getImages(limit = 23) {
    return ContentfulService.client.asset
      .getMany({
        query: {
          limit,
          order: "-sys.updatedAt",
          "metadata.tags.sys.id[in]": "wedding",
          mimetype_group: "image",
        },
      })
      .then((response) =>
        response.items.map((asset) => {
          return {
            id: asset.sys.id,
            url: !!asset.fields.file["en-US"].url
              ? `https:${asset.fields.file["en-US"].url}`
              : "",
          };
        })
      )
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  static async uploadImageToContentful(
    files: File[],
    onupdate?: (procent: number) => void
  ) {
    try {
      let uploading = 1;
      for (let file of files) {
        const asset = await ContentfulService.client.asset.createFromFiles(
          {},
          {
            fields: {
              description: {},
              title: {
                "en-US": file.name, // Name des Bildes
              },
              file: {
                "en-US": {
                  contentType: file.type, // z. B. image/jpeg
                  fileName: file.name,
                  file: file, // Datei hochladen
                },
              },
            },
          }
        );

        await ContentfulService.client.asset.update(
          { assetId: asset.sys.id },
          {
            ...asset,
            metadata: {
              tags: [{ sys: { type: "Link", linkType: "Tag", id: "wedding" } }],
            },
          }
        );

        await ContentfulService.client.asset.processForLocale(
          {},
          asset,
          "en-US"
        );

        uploading += 1;
        if (onupdate) {
          onupdate(uploading);
        }
      }
    } catch (error) {
      console.error("❌ Fehler beim Hochladen:", error);
    }
  }
}

export class ConfigService {
  static readonly CREDENTIALS = import.meta.env.VITE_AUTH_PASSWORD;
  static readonly CONTENTFUL_API_TOKEN = import.meta.env
    .VITE_CONTENTFUL_API_TOKEN;
  static readonly CONTENTFUL_SPACE_ID = import.meta.env
    .VITE_CONTENTFUL_SPACE_ID;
}

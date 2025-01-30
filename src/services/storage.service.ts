export class StorageService {
  static login() {
    localStorage.setItem("authenticated", "true");
  }

  static isAuthenticated() {
    return localStorage.getItem("authenticated") == "true";
  }
}

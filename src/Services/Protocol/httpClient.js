import Http from "./Http";
import { get, set } from "./localStorage";

export default class HttpClient {
  constructor(args) {
    this.http = new Http({ ...args });
  }

  async request(args) {
    const { method = "get", path } = args;

    if (method === "get") {
      const cachedResult = get(path);
      if (cachedResult && cachedResult.length !== 0) {
        return Promise.resolve(cachedResult);
      }
    }

    const response = await this.http.request(args);
    set(path, response);
    return response;
  }
}

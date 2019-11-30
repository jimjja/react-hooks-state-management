export default class MockHttpClient {
  async request(args) {
    return Promise.resolve(args);
  }
}

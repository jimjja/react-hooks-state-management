import HttpClient from "../../mockHttpClient";
const mockData = [
  {
    isCompleted: false,
    name: "Action 1",
    id: new Date().setHours(1)
  },
  {
    isCompleted: false,
    name: "Action 2",
    id: new Date().setHours(2)
  },
  {
    isCompleted: false,
    name: "Action 3",
    id: new Date().setHours(3)
  }
];

class ToDo {
  constructor() {
    this.httpClient = new HttpClient();
  }

  async getItems() {
    return this.httpClient.request(mockData);
  }

  async addItem(value) {
    const newItem = {
      isCompleted: false,
      name: value,
      id: new Date().getTime()
    };
    return this.httpClient.request(newItem);
  }

  async updateItem() {
    return this.httpClient.request();
  }

  async deleteItem() {
    return this.httpClient.request();
  }
}

const todo = new ToDo();
export default todo;

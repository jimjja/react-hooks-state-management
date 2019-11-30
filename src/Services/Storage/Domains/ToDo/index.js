import LocalStorage from "../../LocalStorage";
const TODO_ITEMS = "todoItems";
class ToDo {
  async setItems(items) {
    return LocalStorage.set(TODO_ITEMS, items);
  }
  async addItem(item) {
    const items = await this.getItems();
    items.push(item);

    return this.setItems(items);
  }

  async deleteItem(id) {
    const items = await this.getItems();
    const newItems = items.filter(i => i.id !== id);

    return this.setItems(newItems);
  }

  async getItems() {
    return LocalStorage.get(TODO_ITEMS) || [];
  }

  async updateItem({ id, isCompleted }) {
    const items = await this.getItems();
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) {
      return;
    }

    const updatedItem = { ...items[idx], isCompleted };
    items.splice(idx, 1, updatedItem);
    return this.setItems(items);
  }
}

export default new ToDo();

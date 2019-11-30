export async function get(key) {
  let item = await localStorage.getItem(key);
  return JSON.parse(item);
}

export async function set(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export async function remove(key) {
  await localStorage.removeItem(key);
}

export default {
  get,
  set,
  remove,
};

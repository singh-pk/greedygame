const getPersistedState = (name, item) =>
  localStorage.getItem(name) &&
  (item
    ? JSON.parse(localStorage.getItem(name))[item]
    : JSON.parse(localStorage.getItem(name)));

export default getPersistedState;

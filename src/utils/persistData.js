const persistData = data => {
  if (typeof window !== undefined) {
    localStorage.setItem('greedyGame', JSON.stringify(data));
  }
};

export default persistData;

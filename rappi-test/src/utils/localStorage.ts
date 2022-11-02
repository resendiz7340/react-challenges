const saveState = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

const loadState = (key: string) => {
  const serialized = localStorage.getItem(key);

  if (!serialized) {
    return null;
  }

  return JSON.parse(serialized);
};

export { saveState, loadState };

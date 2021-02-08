const groupBy = (arr, key) => {
  return arr.reduce(function(prev, cur) {
    (prev[cur[key]] = prev[cur[key]] || []).push(cur);
    return prev;
  }, {});
};

const renameKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map(key => {
    if (newKeys[key]) {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    }
  });
  return Object.assign({}, ...keyValues);
};

export const Utils = {
  groupBy,
  renameKeys
};

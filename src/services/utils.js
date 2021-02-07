const groupBy = (arr, key) => {
  return arr.reduce(function(prev, cur) {
    (prev[cur[key]] = prev[cur[key]] || []).push(cur);
    return prev;
  }, {});
};

export const Utils = {
  groupBy
};

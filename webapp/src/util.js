export const sortByKey = (key, array) => {
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0].data[key];
  let wall = array.slice(1);
  let smallArray = sortByKey(
    key,
    wall.filter(element => element.data[key] <= pivot)
  );
  let bigArray = sortByKey(
    key,
    wall.filter(element => element.data[key] > pivot)
  );
  return smallArray.concat(array[0], bigArray);
};

//detectNetwork code and usage from "redux-offline/redux-offline"
const handle = (callback, online) => {
  // NetInfo is not supported in browsers, hence we only pass online status
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => callback(online));
  } else {
    setTimeout(() => callback(online), 0);
  }
};
export const handleNetwork = callback => {
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("online", () => handle(callback, true));
    window.addEventListener("offline", () => handle(callback, false));
    handle(callback, window.navigator.onLine);
  }
};

Array.prototype.concatAll = function() {
  let results = [];
  this.forEach(subArray => {
    results.push(...subArray);
  });

  return results;
};
export const dataToArray = data => Object.keys(data).map(key => data[key]);
export const queryToObject = search => {
  const query = search.split("?")[1];
  const arr = query.split("&");
  const newArr = arr.map(str => str.split("="));
  const queryObj = newArr.reduce((params, param) => {
    let [key, value] = param;
    return { ...params, [key]: value };
  }, {});
  return queryObj;
};

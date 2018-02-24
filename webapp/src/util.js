export const sortByKey = (key, array) => {
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0][key];
  let wall = array.slice(1);
  let smallArray = sortByKey(
    key,
    wall.filter(element => element[key] <= pivot)
  );
  let bigArray = sortByKey(key, wall.filter(element => element[key] > pivot));
  return smallArray.concat(array[0], bigArray);
};

//detectNetwork code and usage from "redux-offline/redux-offline"
const handle = (callback, online) => {
  // NetInfo is not supported in browsers, hence we only pass online status
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => callback({ online }));
  } else {
    setTimeout(() => callback({ online }), 0);
  }
};
export const handleNetwork = callback => {
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("online", () => handle(callback, true));
    window.addEventListener("offline", () => handle(callback, false));
    handle(callback, window.navigator.onLine);
  }
};

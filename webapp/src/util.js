export function sortByKey(key, array) {
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0][key];
  let wall = array.slice(1);
  let smallArray = sortByKey(
    key,
    wall.filter(element => element[key] <= pivot)
  );
  let bigArray = sortByKey(key, wall.filter(element => element[key] > pivot));
  return smallArray.concat(array[0], bigArray);
}

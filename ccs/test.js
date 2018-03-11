const searchToValues = search => {
  const query = search.split("?")[1];
  const arr = query.split("&");
  const newArr = arr.map(str => str.split("="));
  const queryObj = newArr.reduce((params, param) => {
    let [key, value] = param;
    return { ...params, [key]: value };
  }, {});
  return queryObj;
};

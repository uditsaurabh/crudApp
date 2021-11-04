export const get = async (uri) => {
  const data = await fetch(uri);
  const res = await data.json();
  return res;
};
export const post = async (uri, data) => {
  let res = await fetch(uri, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  res = await res.json();
  return res;
};
export const put = async (uri, data) => {
  let res = await fetch(uri, {
    method: "put",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  res = await res.json();
  return res;
};
export const deleteBook = async (uri, data) => {
  let d = { id: data };
  d = JSON.stringify(d);
  let res = await fetch(uri, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: d,
  });
  return;
};

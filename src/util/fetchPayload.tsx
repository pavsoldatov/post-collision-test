const fetchPayload = (url: string, method: string, payload: {}) => {
  const options = {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, options).then((resp) => {
    if (!resp.ok) {
      throw Error("could not fetch the data for that resource: no response");
    }
  });
};

export default fetchPayload;

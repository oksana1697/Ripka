async function makeRequest(url, method, data) {
  let body = {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: method
  }
  if (method === "GET") {
    body = {
      method: method
    }
  }
  let response = await fetch(url, body)
  data = await response.json()

  return data
}

export const getData = async url => await makeRequest(url, "GET")

export const postData = async (url, data) => await makeRequest(url, "POST", data)

export const putData = async (url, data) => makeRequest(url, "PATCH", data)

export const deleteData = async (url, id) => {
  await makeRequest(url + "/" + id, "DELETE")
}
export const getLocation = async url => await makeRequest(url, "GET")

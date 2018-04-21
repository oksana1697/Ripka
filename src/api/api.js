async function makeRequest(url, method, data) {

  let body = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: method,
  };

  if (method === 'GET') {
    body = {
      method: method,
    };
  }

  let response = await fetch(url, body);
  data = await response.json();
  return data;
}

export const getData  = async (url) =>{
  return await makeRequest(url, 'GET');
}


export const postData = async (url, data) =>  await makeRequest(url, 'POST', data);


export const putData = async (url, data) => {
  return makeRequest(url + '/' + data.id, 'PUT', data);
};

// putData('http://localhost:3000/events', {"test": "test15", "id": 5})

// export function deleteData(url, id) {
//     return makeRequest(url + '/' + id, 'DELETE')
//
// }
export const deleteData = async (url, id) => {
  await makeRequest(url + '/' + id, 'DELETE');
};

// deleteData('http://localhost:3000/events', {id:5})

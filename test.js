"use strict";

async function makeRequest (url, method, data) {

    let body = {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
            'content-type': 'application/json'
        },
        method: method, // *GET, POST, PUT, DELETE, etc.
    }
    if (method === 'GET'){
        body = {
            method: method, // *GET, POST, PUT, DELETE, etc.
        }
    }
    // return fetch(url, body)
    //     .then(response => response.json()) // parses response to JSON
    let response = await fetch(url, body)
    data = await response.json();
    return data;
}

export function getData(url) {
    return makeRequest(url, 'GET')
}

// getData('http://localhost:3000/events').then(function(data) {
//     console.log(data);})

export function postData(url, data) {
    return makeRequest(url, 'POST', data)


}

// postData('http://localhost:3000/events', {"test": "test1", "id": 5})

export function putData(url, data) {
    return makeRequest(url + '/' + data.id, 'PUT', data)

}

// putData('http://localhost:3000/events', {"test": "test15", "id": 5})


function deleteData(url, data) {
    return makeRequest(url + '/' + data.id, 'DELETE', data)

}

// deleteData('http://localhost:3000/events', {id:5})
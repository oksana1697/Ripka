export default (endpoint, source, accessToken, proximity, bbox, types, query, callback) => {
  const searchTime = new Date()
  query = encodeURIComponent(query)
  let uri = `${endpoint}/geocoding/v5/${source}/${query}.json?access_token=${accessToken}`

  uri += proximity ? "&proximity=" + proximity : ""
  uri += bbox ? "&bbox=" + bbox : ""
  uri += types ? "&types=" + encodeURIComponent(types) : ""

  fetch(uri)
    .then(res => res.json())
    .then(body => callback(body, searchTime))
}

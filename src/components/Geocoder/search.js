import { memoize } from "ramda"

const API_KEY = "pk.eyJ1Ijoib2tzYW5hMTk5NyIsImEiOiJjamhuY2lpZ3MzcTAxMzlzMjJzZ3dueGNiIn0.CCCTbGpm18Czx3jMCcvOTw"

const endpoint = "https://api.tiles.mapbox.com"
const source = "mapbox.places"

export default memoize(async (query, proximity = "", bbox = "", types = "") => {
  const searchTime = new Date()
  query = encodeURIComponent(query)
  let uri = `${endpoint}/geocoding/v5/${source}/${query}.json?access_token=${API_KEY}`

  uri += proximity ? "&proximity=" + proximity : ""
  uri += bbox ? "&bbox=" + bbox : ""
  uri += types ? "&types=" + encodeURIComponent(types) : ""

  const result = await fetch(uri).then(res => res.json())
  return { result, searchTime }
})

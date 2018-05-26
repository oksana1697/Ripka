import { createStore, applyMiddleware } from "redux"
import eventApp from "./reducers/index"
import thunk from "redux-thunk"

const configureStore = () => {
  return createStore(
    eventApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
}

export default configureStore

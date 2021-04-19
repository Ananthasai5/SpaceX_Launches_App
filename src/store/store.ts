import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import combineReducers from "../store/combineReducers";
import rootSaga from "../store/saga";

const sagaMiddleware = createSagaMiddleware();

if (typeof window === "undefined") {
  global.window = <any>{};
}

const reduxDevTools =
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = () => {
  // let store = window.__REDUX_DEVTOOLS_EXTENSION__
  //   ? createStore(
  //       combineReducers,
  //       composeWithDevTools(applyMiddleware(sagaMiddleware), reduxDevTools)
  //     )
  //   : createStore(compose(applyMiddleware(sagaMiddleware)));
  let store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default store;

import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import config from "config/validateEnv";
import combineReducers from "../store/combineReducers";
import rootSaga from "../store/saga";

const sagaMiddleware = createSagaMiddleware();

if (typeof window === "undefined") {
  global.window = <any>{};
}

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = () => {
  let store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        combineReducers,
        compose(applyMiddleware(sagaMiddleware), reduxDevTools)
      )
    : createStore(compose(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default store;
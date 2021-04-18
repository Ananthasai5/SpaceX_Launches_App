import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "../src/App";

// function InitialRender(initialState) {
//   // Model the initial state
//   const reduxStore = store(initialState);
//   let content = renderToString(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const preloadedState = reduxStore.getState();
//   return {
//     content,
//     preloadedState,
//   };
// }

// export default InitialRender;

export function renderFullPage(html, preLoadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>SpaceX Launch Programs</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
                 window.__PRELOADED_STATE__ = ${JSON.stringify(
                   preLoadedState
                 ).replace(/</g, "\\u003c")}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

export function handleRender(req, res) {
  const reduxStore = createStore(combineReducers);
  const html = renderToString(
    <Provider store={reduxStore}>
      <App />
    </Provider>
  );
  const preLoadedState = reduxStore.getState();
  res.send(renderFullPage(html, preLoadedState));
}

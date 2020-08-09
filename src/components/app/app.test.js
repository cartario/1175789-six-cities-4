import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`renderApp`, () => {

  const tree = renderer
    .create(
        <App/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import { render } from "react-dom";
import App from "./App";

it("renders without crashing", function () {
  render(<App />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

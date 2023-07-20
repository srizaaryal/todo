import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the addTodo function onSubmit", function () {
  const createMock = jest.fn();
  const { getByText } = render(<NewTodoForm addTodo={createMock} />);
  const createButton = getByText("Add Todo");
  fireEvent.cick(createButton);
  expect(createMock).toHaveBeenCalled();
});

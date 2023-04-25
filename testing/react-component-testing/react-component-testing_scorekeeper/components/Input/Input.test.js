import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name="nameTest"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
    />
  );
  const labelName = screen.getByLabelText("Name of game");
  const input = screen.getByRole("textbox");

  expect(labelName).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      name="nameTest"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      onChange={handleChange}
    />
  );
  const textBox = screen.getByRole("textbox", { name: "Name of game" });
  const inputValue = "testing";
  await user.type(textBox, inputValue);
  expect(handleChange).toHaveBeenCalledTimes(inputValue.length);
});

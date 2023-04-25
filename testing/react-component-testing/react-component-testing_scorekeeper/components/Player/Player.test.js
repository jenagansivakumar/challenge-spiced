import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="name" score={0} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const increaseHandle = jest.fn();
  const decreaseHandle = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      onIncreasePlayerScore={increaseHandle}
      onDecreasePlayerScore={decreaseHandle}
    />
  );
  const buttons = screen.getAllByRole("button");
  const increaseButton = buttons[1];
  const decreaseButton = buttons[0];

  await user.click(increaseButton);
  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(increaseHandle).toHaveBeenCalledTimes(2);
  expect(decreaseHandle).toHaveBeenCalledTimes(1);
});

import { getByText, render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playLink = screen.getByText(/play/i);
  const historyLink = screen.getByText(/history/i);

  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});

// test("renders with two links 'Play' and 'History'", () => {
//   render(<Navigation />);
//   const playLink = screen.getByText(/play/i);
//   const historyLink = screen.getByText(/history/i);

//   expect(playLink).toBeInTheDocument();
//   expect(historyLink).toBeInTheDocument();
// });

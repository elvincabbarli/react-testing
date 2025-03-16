import { render, screen } from "@testing-library/react";
import NewCounter from "./NewCounter";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<NewCounter count={0} />);
    const textElement = screen.getByText(/Counter New/i);
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    const handleReset = jest.fn();

    render(
      <NewCounter
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    );

    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const resetButton = screen.getByText(/Reset/i);

    await user.click(incrementButton);
    await user.click(decrementButton);
    await user.click(resetButton);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});

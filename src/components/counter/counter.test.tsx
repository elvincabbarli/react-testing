import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("Counter renders check", () => {
    render(<Counter />);
    const counterHeading = screen.getByRole("heading", { level: 1 });
    expect(counterHeading).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();
  });

  test("Counter renders 0", () => {
    render(<Counter />);
    const counterDefaultValue = screen.getByRole("heading", { level: 2 });
    expect(counterDefaultValue).toHaveTextContent("0");
  });

  test("Counter increments correctly after multiple clicks", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const counterValue = screen.getByRole("heading", { level: 2 });

    for (let i = 1; i <= 5; i++) {
      await user.click(incrementButton);
      expect(counterValue).toHaveTextContent(`${i}`);
    }
  });

  test("render a count 10 after the Set button clicked", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    // .type() is a helper function from the user-event library that simulates typing text into an input field.
    await user.type(amountInput, "10");
    // .toHaveValue() is a matcher that checks if the value of an input field is equal to the expected value.
    expect(amountInput).toHaveValue(10);

    const setAmountButton = screen.getByRole("button", { name: /set amount/i });
    const counterValue = screen.getByRole("heading", { level: 2 });
    await user.click(setAmountButton);
    expect(counterValue).toHaveTextContent("10");
  });

  test("elements are focused correctly", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const amountInput = screen.getByRole("spinbutton");
    const setAmountButton = screen.getByRole("button", { name: /set amount/i });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setAmountButton).toHaveFocus();
  });
});

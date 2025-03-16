import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Greet renders Hello", () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument();
  });

  describe("Name test", () => {
    test("Name is in the Component", () => {
      render(<Greet name="Husen" />);
      const nameElement = screen.getByText("Hello Husen");
      expect(nameElement).toBeInTheDocument();
    });
  });
});

// test.only - sadəcə xüsusi olaraq bu testin edilməsini istəniləndə yazırıq
// test.skip - when we want to skip a test
// test.todo - when we want to write a test but not implement it yet
// describe('Group of tests', () => {}) - when we want to group tests
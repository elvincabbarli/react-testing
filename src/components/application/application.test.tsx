import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("Application renders", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", {
      //   name: "Job Application",
      level: 1, // */ special for the heading elements and its going to the level 6
    });
    expect(headingElement).toBeInTheDocument();

    const headingH2Element = screen.getByRole("heading", {
      //   name: "Apply Here",
      level: 2,
    });
    expect(headingH2Element).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const getElementWithLabel = screen.getByLabelText("Bio", {
      selector: "textarea", // eyni name ile birden fazla element varsa
    });
    expect(getElementWithLabel).toBeInTheDocument();

    const getElementWithPlaceholder = screen.getByPlaceholderText("FullName");
    expect(getElementWithPlaceholder).toBeInTheDocument();

    const getElementWithText = screen.getByText("this is some Text");
    expect(getElementWithText).toBeInTheDocument();

    const getElementWithDisplayValue = screen.getByDisplayValue("text-value");
    expect(getElementWithDisplayValue).toBeInTheDocument();

    const getElementByAltText = screen.getByAltText("some-text");
    expect(getElementByAltText).toBeInTheDocument();

    const getElementByTestId = screen.getByTestId("someTestId");
    expect(getElementByTestId).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import MuiMode from "./muiMode";
import { AppProvider } from "../../provider/app-provider";

describe("MUI Mode", () => {
  test("MuiMode renders Dark Mode", () => {
    render(<MuiMode />, {
      wrapper: AppProvider,
    });
    const muiModeElement = screen.getByText(/dark mode/i);
    expect(muiModeElement).toBeInTheDocument();
  });
});

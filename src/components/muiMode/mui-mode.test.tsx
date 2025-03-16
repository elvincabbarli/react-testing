import { render, screen } from "../../test-utils";
import MuiMode from "./muiMode";

describe("MUI Mode", () => {
  test("MuiMode renders Dark Mode", () => {
    render(<MuiMode />);
    const muiModeElement = screen.getByText(/dark mode/i);
    expect(muiModeElement).toBeInTheDocument();
  });
});

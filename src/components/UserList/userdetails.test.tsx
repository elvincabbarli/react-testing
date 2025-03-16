import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";

// Store'u mock et
jest.mock("../../store/store", () => {
  const effector = require("effector");
  return {
    $selectedUser: effector.createStore(null),
  };
});

describe("UserDetails Component", () => {
  test("renders 'No user selected.' when no user is selected", () => {
    render(<UserDetails />);

    expect(screen.getByText("No user selected.")).toBeInTheDocument();
  });

  test("renders selected user details", async () => {
    const { $selectedUser } = require("../../store/store");
    $selectedUser.setState({
      id: 1,
      name: "Alicee",
      email: "alice@mail.com",
    });

    render(<UserDetails />);

    expect(screen.getByText("User Details")).toBeInTheDocument();
    expect(screen.getByText(/Alicee/i)).toBeInTheDocument();
    expect(screen.getByText(/alice@mail.com/i)).toBeInTheDocument();
  });
});

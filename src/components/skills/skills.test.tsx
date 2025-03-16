import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "React"];
  test("Skills render skills elements", () => {
    render(<Skills skills={skills} />);
    const skillsElement = screen.getByRole("list");
    expect(skillsElement).toBeInTheDocument();
  });

  test("Skills render skills items", () => {
    render(<Skills skills={skills} />);
    const skillsItems = screen.getAllByRole("listitem");
    expect(skillsItems).toHaveLength(skills.length);
  });

  test("LogIn button is in the document", () => {
    render(<Skills skills={skills} />);
    const logInButton = screen.getByRole("button", { name: /login/i });
    expect(logInButton).toBeInTheDocument();
  });

  test("LogOut button is not in the document", () => {
    render(<Skills skills={skills} />);
    // the reason we use queryByRole is that it returns null if the element is not in the document
    const logOutButton = screen.queryByRole("button", { name: /logout/i });
    expect(logOutButton).not.toBeInTheDocument();
  });

  test("Logout button is in the document", async () => {
    render(<Skills skills={skills} />);
    // screen.debug(); - this is used for debugging purposes to see the current state of the document
    const logoutButton = await screen.findByRole(
      "button",
      {
        name: "Log Out",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();- same as above
    expect(logoutButton).toBeInTheDocument();
  });
});

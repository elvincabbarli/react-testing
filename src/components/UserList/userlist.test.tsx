import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserList from "./UserList";
import {
  addUser,
  updateUser,
  removeUser,
  resetUsers,
} from "../../store/store";

// Store'u mock et
jest.mock("../../store/store", () => {
  const effector = require("effector");
  return {
    $users: effector.createStore([
      { id: 1, name: "Alice", email: "alice@mail.com" },
      { id: 2, name: "Bob", email: "bob@mail.com" },
    ]),
    addUser: jest.fn(),
    updateUser: jest.fn(),
    removeUser: jest.fn(),
    selectUser: jest.fn(),
    resetUsers: jest.fn(),
  };
});

describe("UserList Component", () => {
  test("renders user list correctly", () => {
    render(<UserList />);
    expect(screen.getByText(/Alice - alice@mail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Bob - bob@mail.com/i)).toBeInTheDocument();
  });

  test("adds a new user", async () => {
    render(<UserList />);
    const input = screen.getByPlaceholderText(/enter name/i);
    const addButton = screen.getByRole("button", { name: /add user/i });

    fireEvent.change(input, { target: { value: "Charlie" } });
    fireEvent.click(addButton);

    expect(addUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "Charlie",
      email: "Charlie@mail.com",
    });
  });

  test("updates a user", async () => {
    render(<UserList />);
    const editButton = await screen.findAllByRole("button", { name: /edit/i });
    fireEvent.click(editButton[0]); // İlk kullanıcı için "Edit" butonuna bas

    const editInput = await screen.findByDisplayValue("Alice"); // Alice'in input alanı
    fireEvent.change(editInput, { target: { value: "Alice Johnson" } });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    expect(updateUser).toHaveBeenCalledWith({
      id: 1,
      name: "Alice Johnson",
      email: "Alice Johnson@mail.com",
    });
  });

  test("deletes a user", async () => {
    render(<UserList />);
    const deleteButtons = await screen.findAllByRole("button", {
      name: /delete/i,
    });
    fireEvent.click(deleteButtons[0]); // İlk kullanıcıyı sil

    expect(removeUser).toHaveBeenCalledWith(1);
  });

  test("resets user list", async () => {
    render(<UserList />);
    const resetButton = await screen.findByRole("button", {
      name: /resetusers/i,
    });
    fireEvent.click(resetButton);

    expect(resetUsers).toHaveBeenCalled();
  });
});

import {
  $users,
  addUser,
  updateUser,
  removeUser,
  selectUser,
  $selectedUser,
  resetUsers,
} from "./store";

describe("Effector Store - Users", () => {
  beforeEach(() => {
    resetUsers(); // Her testten önce store'u sıfırla
  });

  test("adds a new user", () => {
    addUser({ id: 1, name: "Alice", email: "alice@mail.com" });

    expect($users.getState()).toEqual([
      { id: 1, name: "Alice", email: "alice@mail.com" },
    ]);
  });

  test("updates a user", () => {
    addUser({ id: 1, name: "Alice", email: "alice@mail.com" });

    updateUser({
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@mail.com",
    });

    expect($users.getState()).toEqual([
      { id: 1, name: "Alice Johnson", email: "alice.johnson@mail.com" },
    ]);
  });

  test("removes a user", () => {
    addUser({ id: 1, name: "Alice", email: "alice@mail.com" });
    addUser({ id: 2, name: "Bob", email: "bob@mail.com" });

    removeUser(1);

    expect($users.getState()).toEqual([
      { id: 2, name: "Bob", email: "bob@mail.com" },
    ]);
  });

  test("selects a user", () => {
    addUser({ id: 1, name: "Alice", email: "alice@mail.com" });
    addUser({ id: 2, name: "Bob", email: "bob@mail.com" });

    selectUser(2);

    expect($selectedUser.getState()).toEqual({
      id: 2,
      name: "Bob",
      email: "bob@mail.com",
    });
  });

  test("resets users", () => {
    addUser({ id: 1, name: "Alice", email: "alice@mail.com" });
    addUser({ id: 2, name: "Bob", email: "bob@mail.com" });

    resetUsers(); // Kullanıcı listesini sıfırla

    expect($users.getState()).toEqual([]); // Liste boş olmalı
  });
});

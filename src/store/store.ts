import { createStore, createEvent, sample } from "effector";

// Kullanıcı modeli
export interface User {
  id: number;
  name: string;
  email: string;
}

// Kullanıcı listesini saklayan store
export const $users = createStore<User[]>([]);

// Kullanıcı ekleme event'i
export const addUser = createEvent<User>();

// Kullanıcıyı listeye ekle
$users.on(addUser, (state, newUser) => [...state, newUser]);

// Kullanıcı güncelleme event'i
export const updateUser = createEvent<User>();

// Kullanıcı güncelleme işlemi artık `sample()` ile yapılacak
sample({
  source: $users,
  clock: updateUser,
  fn: (users, updatedUser) =>
    users.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    ),
  target: $users,
});

// Kullanıcı silme event'i
export const removeUser = createEvent<number>();

// Kullanıcıyı listeden çıkar
$users.on(removeUser, (state, id) => state.filter((user) => user.id !== id));

// Kullanıcı seçme event'i
export const selectUser = createEvent<number>();

// ✅ `$selectedUser` önce `createStore()` ile tanımlandı
export const $selectedUser = createStore<User | null>(null);

// ✅ `sample()` ile `$selectedUser`'ın içeriğini güncelliyoruz
sample({
  source: $users,
  clock: selectUser,
  fn: (users, userId) => users.find((user) => user.id === userId) || null,
  target: $selectedUser, // Seçili kullanıcıyı güncelle
});

// ✅ `$selectedUser` artık `.reset()` metodunu destekliyor!
$selectedUser.reset(removeUser);

// Kullanıcı listesini sıfırlayan event (Örneğin logout)
export const resetUsers = createEvent();

// resetUsers çağrıldığında store'u sıfırla
$users.reset(resetUsers);

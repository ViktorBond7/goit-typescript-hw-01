// Ви маєте форму реєстрації користувачів.Іноді потрібно попередньо заповнити форму даними
// користувача для оновлення його профілю.Однак вам не завжди потрібно заповнити всі поля.
// Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: Partial<User>): User {
//   // Оновлення користувача
//   const defaultUser: User = {
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//   };
//   return { ...defaultUser, ...initialValues };
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

type User = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User>): User {
  // Деякі значення за замовчуванням:
  const defaultUser: User = {
    name: "",
    email: "",
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });

console.log(newUser);

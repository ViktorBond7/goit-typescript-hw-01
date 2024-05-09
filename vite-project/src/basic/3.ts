// Створіть змінну, яка може містити або рядок, або число(union type) ? Також, оголосіть змінну, яка може містити
// лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let mixedType: string | number; //union type
mixedType = "string"; // OK
mixedType = 10; // OK
mixedType = true; // Error

type Button = "enable" | "disable"; // literal type
let button: Button;
button = "enable"; // Ok
button = "disable"; // Ok
button = "activ"; // Error

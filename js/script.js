// Теоретичне питання
// 1.Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript/
//  Можна створити новий об*єкт на основі вже існуючого.
// // 2.Для чого потрібно викликати super() у конструкторі класу-нащадка?
// Для того щоб повторно вказати як батьківські параметри будуть передані нащадку.
// 3.Завдання
// Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
// Створіть гетери та сеттери для цих властивостей.
// Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
// Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }
}
class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  get lang() {
    return (this._lang = lang);
  }
  set lang(lang) {
    this._lang = lang;
  }
  get salary() {
    return this._salary * 3;
  }
  set salary(salary) {
    this._salary = salary;
  }
}
const programmerOne = new Programmer("Petia", 25, 65645, "js");
const programmerTwo = new Programmer("Galia", 34, 612445, "c++");
const programmerThree = new Programmer("Glib", 18, 32413, "java");
console.log(programmerOne);
console.log(programmerTwo);
console.log(programmerThree);

//

class UserModel {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number, id?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

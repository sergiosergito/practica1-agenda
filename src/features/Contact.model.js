export default class Contact {
  constructor(id, name, email, address, phone, country, city) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.country = country;
    this.city = city;
  }

  printName() {
    console.log(`Name: ${this.firstName}`);
  }
}

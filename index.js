const Leanne = new Person(
  "Leanne Graham",
  "Bret",
  "Sincere@april.biz",
  "1-770-736-8031 x56442",
  "hildegard.org"
);
//declaring the function
function Person(name, username, email, phone, website) {
  (this.name = name),
    (this.username = username),
    (this.email = email),
    (this.phone = phone),
    (this.website = website);

  Person.prototype.getBizCard = function() {
    return `${this.name}
    ${this.email}
    ${this.phone}`;
  };
}
const Lee = new Person();
console.log(Leanne.getBizCard());

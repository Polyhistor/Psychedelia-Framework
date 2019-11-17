import { User } from "./models/User";

const user = new User({ name: "pouya", age: 12 });
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "Ollie" });
console.log(user.get("name"));
console.log(user.get("age"));

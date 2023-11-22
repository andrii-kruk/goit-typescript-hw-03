class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door && this.key.getSignature() === person.getKey().getSignature()) return this.tenants.push(person);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

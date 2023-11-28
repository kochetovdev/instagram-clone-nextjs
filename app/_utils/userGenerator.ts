import { faker } from "@faker-js/faker";
import { User } from "../_types";

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName().toLowerCase(),
    img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 20,
});

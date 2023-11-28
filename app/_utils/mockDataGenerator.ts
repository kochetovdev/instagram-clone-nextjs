import { faker } from "@faker-js/faker";
import { User } from "../_types";
import { Suggestion } from "../_types/Suggestion";

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName().toLowerCase(),
    img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
  };
}

export function createRandomSuggestions(): Suggestion {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName().toLowerCase(),
    jobTitle: faker.person.jobTitle(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 20,
});
export const SUGGESTIONS: Suggestion[] = faker.helpers.multiple(
  createRandomSuggestions,
  {
    count: 5,
  }
);

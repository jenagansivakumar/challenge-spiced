import { createServer } from "node:http";
import Chance from "chance";
import React from "react";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name({ prefix: true });
  const age = chance.age();
  const profession = chance.profession();
  const animal = chance.animal();

  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}. I also love ${animal}s`
  );
});

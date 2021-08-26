import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const getUsers = (req, res) => {
  let raw = fs.readFileSync("users.json");
  let users = JSON.parse(raw);
  res.json(users);
};

export const createUser = (req, res) => {
  let raw = fs.readFileSync("users.json");
  let users = JSON.parse(raw);
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  fs.writeFileSync("users.json", JSON.stringify(users));
  res.json("sparat");
};
export const getUser = (req, res) => {
  let raw = fs.readFileSync("users.json");
  let users = JSON.parse(raw);
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  let raw = fs.readFileSync("users.json");
  let users = JSON.parse(raw);
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  fs.writeFileSync("users.json", JSON.stringify(users));
  res.send(users);
};
export const updateUser = (req, res) => {
  let raw = fs.readFileSync("users.json");
  let users = JSON.parse(raw);
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  fs.writeFileSync("users.json", JSON.stringify(users));
  res.send(user);
};

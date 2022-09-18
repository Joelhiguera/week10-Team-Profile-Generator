const Manager = require("../lib/Manager");


test("getRole() should return Manager", () => {
  const testRole = "Manager";
  const test = new Manager("Foo", 1, "test@test.com", 100);
  expect(test.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  const testNumber = 100;
  const test = new Manager("Foo", 1, "test@test.com", testNumber);
  expect(test.getOfficeNumber()).toBe(testNumber);
});
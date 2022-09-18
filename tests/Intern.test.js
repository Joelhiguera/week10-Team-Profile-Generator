const Intern = require("../lib/Intern");


test("getRole() should return Intern", () => {
  const testRole = "Intern";
  const test = new Intern("Foo", 1, "test@test.com", "University of Utah");
  expect(test.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
  const testSchool = "Univeristy of Utah";
  const test = new Intern("Foo", 1, "test@test.com", testSchool);
  expect(test.getSchool()).toBe(testSchool);
});
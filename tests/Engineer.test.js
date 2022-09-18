const Engineer = require('../lib/Engineer');

test("GetRole() should return Engineer", () => {
  const testRole = "Engineer";
  const test = new Engineer("Foo", 1, "test@test.com", "GithubAccount");
  expect(test.getRole()).toBe(testRole)
});

test("Can get GitHub username via getGithub()", () => {
  const testGithub = "GitHubUser";
  const test = new Engineer("Foo", 1, "test@test.com", testGithub);
  expect(test.getGithub()).toBe(testGithub);
});
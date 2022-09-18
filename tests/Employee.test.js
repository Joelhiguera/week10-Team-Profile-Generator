const Employee = require('../lib/Employee');


describe("Employee", () => {
   

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testName = "John";
            const test = new Employee(testName);
            expect(test.getName()).toBe(testName);
        });
    });
        
  
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testEmail = "test@test.com";
            const test = new Employee("Foo", 1, testEmail);
            expect(test.getEmail()).toBe(testEmail);
        });
    });
        
   
    
});
import { validateForm } from "./login.validation"
import { Credentials } from "./login.vm"

describe("pages/login/login.balidation.ts", () => {
    it("Should return validation succeeded when both fields are completed", () => {
        //Arrange
const credentials : Credentials = {
    user: "myuser",
    password: "mypassword"
}
        //Act

    const result = validateForm(credentials)

        //Assert

        expect(result.succeded).toBeTruthy();
        expect(result.errors.user).toEqual("");
        expect(result.errors.password).toEqual("");
    });

    it("Should return validation failed when user is empty", () => {
        //Arrange
const credentials : Credentials = {
    user: "",
    password: "mypassword"
}
        //Act

    const result = validateForm(credentials)

        //Assert

        expect(result.succeded).toBeFalsy();
        expect(result.errors.user).toEqual("Debe introducir un usuario");
        expect(result.errors.password).toEqual("");
    });

    it("Should return validation failed when password is empty", () => {
        //Arrange
const credentials : Credentials = {
    user: "myuser",
    password:"",
}
        //Act

    const result = validateForm(credentials)

        //Assert

        expect(result.succeded).toBeFalsy();
        expect(result.errors.user).toEqual("");
        expect(result.errors.password).toEqual("Debe introducir una contraseña");
    });

    it("Should return validation failed when user and password are empty", () => {
        //Arrange
const credentials : Credentials = {
    user: "",
    password:"",
}
        //Act

    const result = validateForm(credentials)

        //Assert

        expect(result.succeded).toBeFalsy();
        expect(result.errors.user).toEqual("Debe introducir un usuario");
        expect(result.errors.password).toEqual("Debe introducir una contraseña");
    });
})
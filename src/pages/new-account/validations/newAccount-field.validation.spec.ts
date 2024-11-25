import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import {
  validateAccountAliasField,
  validateAccountTypeField,
} from "./newAccount-field.validation";

describe("newAccount-field.validation specs", () => {
  describe("validateAccountTypeField", () => {
    it("should return false when account type is empty", () => {
      //Arrange
      const value = "";

      //Act
      const result = validateAccountTypeField(value);

      //Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });
  it("should return true when account type is informed", () => {
    //Arrange
    const value = "1";

    //Act
    const result = validateAccountTypeField(value);

    //Assert
    expect(result.succeded).toBeTruthy();
  });
  describe("validateNewAccountAliasField", () => {
    it("should return false when alias is empty", async () => {
      //Arrange
      const value = "";

      //Act
      const result = await validateAccountAliasField(value);

      //Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when alias is repeated", async () => {
      //Arrange
      const value = "Compartida";
      //Act
      const result = await validateAccountAliasField(value);
      //Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errorMessage).toEqual("La cuenta ya existe");
    });
    it("should return true when alias is informed and is not repeated", async () => {
      //Arrange
      const value = "Test";
      //Act
      const result = await validateAccountAliasField(value);
      //Assert
      expect(result.succeded).toBeTruthy();
    });
  });
});

import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import { Account } from "../newAccount.vm";
import { validateNewAccountForm } from "./newAccount-form.validation";

describe("newAccount-form.validation specs", () => {
  describe("validateNewAccountForm", () => {
    it("should return true when all fields are correct", async () => {
      //Arrange
      const newAccount: Account = {
        type: "1",
        name: "test",
      };

      //Act
      const result = await validateNewAccountForm(newAccount);

      //Assert
      expect(result.succeded).toBeTruthy();
    });
    it("should return false when validateAccountTypeField is incorrect", async () => {
      //Arrange
      const newAccount: Account = {
        type: "",
        name: "test",
      };
      //Act
      const result = await validateNewAccountForm(newAccount);
      //Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: REQUIRED_FIELD_MESSAGE,
        name: "",
      });
    });
    it("should return false when validateAccountAliasField is incorrect", async () => {
      //Arrange
      const newAccount: Account = {
        type: "1",
        name: "",
      };
      //Act
      const result = await validateNewAccountForm(newAccount);
      //Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: REQUIRED_FIELD_MESSAGE,
      });
    });
    it("should return false when validateAccountAliasField is repated", async () => {
        //Arrange
        const newAccount: Account = {
          type: "1",
          name: "Compartida",
        };
        //Act
        const result = await validateNewAccountForm(newAccount);
        //Assert
        expect(result.succeded).toBeFalsy();
        expect(result.errors).toEqual({
          type: "",
          name: "La cuenta ya existe",
        });
      });
  });
});

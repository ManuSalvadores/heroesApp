import { types } from "../../../src/auth/types/types";

describe('tests on "types"', () => {
  test("should return types", () => {
    expect(types).toEqual({
      login: "[auth] Login",
      logout: "[auth] Logout",
    });
  });
});

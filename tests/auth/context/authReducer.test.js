import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("tests in auth reducer", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("should call login an authenticate", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Nolito",
        id: "123",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should delete username and set logged to false", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Nolito" },
    };

    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});

import userReducer, {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
} from "../ecommerceApi/userSlice/userSlice";

describe("test userSlice", () => {
  it("should return default state whe we pass an empty action", () => {
    const result = userReducer(undefined, { type: "" });

    expect(result).toEqual({
      pending: null,
      user: null,
      error: false,
    });
  });

  it('should return pending and error states for "loginStart" action', () => {
    const action = { type: loginStart.type, payload: undefined };

    const result = userReducer({}, action);
    expect(result.pending).toBe(true);
    expect(result.error).toBe(false);
  });

  it('should return pending, error and user states for "loginSuccess" action', () => {
    const user = {
      accessToken: "eyJhbGciOiJ",
      _id: "6282",
      username: "farid",
    };
    const action = { type: loginSuccess.type, payload: user };
    const result = userReducer({}, action);

    expect(result.user).toEqual(user);
    expect(result.pending).toBe(false);
    expect(result.error).toBe(false);
  });

  it('should return pending and error states for "loginFailure" action', () => {
    const action = { type: loginFailure.type, payload: undefined };
    const result = userReducer({}, action);

    expect(result.pending).toEqual(false);
    expect(result.error).toEqual(true);
  });

  it('should return empty state for "logOut" action', () => {
    const action = { type: logOut.type, payload: undefined };
    const result = userReducer({}, action);

    expect(result.user).toBe(null);
    expect(result.pending).toBe(false);
    expect(result.error).toBe(false);
  });
});

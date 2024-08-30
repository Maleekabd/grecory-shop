import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  Email: "",
  Address: "",
  City: "",
  State: "",
  postalCode: "",
  Username: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action) {
      const {
        firstName,
        lastName,
        Email,
        Address,
        City,
        State,
        postalCode,
        Username,
      } = action.payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.Email = Email;
      state.Address = Address;
      state.City = City;
      state.State = State;
      state.postalCode = postalCode;
      state.Username = Username;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

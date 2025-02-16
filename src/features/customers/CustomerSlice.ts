import { createSlice } from "@reduxjs/toolkit";

//////////////////// CUSTOMER INITIAL STATE ////////////////////
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: ""
};

//////////////////// CUSTOMER REDUCER ////////////////////
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalID: string) {
        return {
          payload: { fullName, nationalID, createdAt: new Date().toISOString() }
        };
      },

      reducer(
        state,
        action: {
          payload: { fullName: string; nationalID: string; createdAt: string };
        }
      ) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      }
    },

    updateName(state, action) {
      state.fullName = action.payload;
    }
  }
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

import { Dispatch } from "redux";
import { createSlice } from "@reduxjs/toolkit";

//////////////////// ACCOUNT INITIAL STATE ////////////////////
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false
};

//////////////////// ACCOUNT SLICE ////////////////////
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      prepare(amount: number, purpose: string) {
        return {
          payload: { amount, purpose }
        };
      },

      reducer(state, action: { payload: { amount: number; purpose: string } }) {
        if (state.loan > 0) return;

        state.balance += action.payload.amount;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      }
    },

    payLoan(state) {
      if (state.loan <= 0 || state.balance < state.loan) return;

      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },

    convertingCurrency(state) {
      state.isLoading = true;
    }
  }
});

//////////////////// CUSTOME DOPOSIT ACTION CREATOR ////////////////////
export function deposit(amount: number, currency: string) {
  return async function (dispatch: Dispatch) {
    if (currency === "USD") {
      dispatch({ type: "account/deposit", payload: amount });
      return;
    }

    try {
      dispatch({ type: "account/convertingCurrency" });

      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
      );

      const data = await res.json();
      const rate = data.rates.USD;
      const convertedAmount = amount * rate;

      dispatch({ type: "account/deposit", payload: convertedAmount });
    } catch (err) {
      console.error("Failed to fetch exchange rate: ", err);
    }
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;

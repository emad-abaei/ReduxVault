/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Kanit", "serif"],
      smooch: ["Smooch Sans", "serif"]
    },
    extend: {
      keyframes: {
        moverOne: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(30px, 100px)" }
        },
        moverTwo: {
          "0%": { transform: "scaleX(-1) translate(0, 0)" },
          "100%": { transform: "scaleX(-1) translate(30px, -20px)" }
        }
      },
      animation: {
        moverOne: "moverOne 20s linear infinite alternate",
        moverTwo: "moverTwo 15s linear infinite alternate"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

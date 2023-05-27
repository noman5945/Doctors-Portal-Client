/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "banner-chair": "url('/src/assets/images/bg.png')",
        "appointment-pic": "url('/src/assets/images/appointment.png')",
      },
      boxShadow: {
        Fxl: "3px 4px 10px 2px rgba(0, 0, 0, 0.05);",
      },
      width: {
        bx: "7.303rem",
      },
      height: {
        by: "7.188rem",
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    container: true,
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik, "Rubik", sans-serif)'],
      },
    },
  },
};

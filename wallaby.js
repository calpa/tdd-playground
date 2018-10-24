module.exports = () => ({
  files: ["src/*.js"],
  tests: ["test/*.js"],
  debug: true,
  env: {
    type: "node"
  },
  delays: {
    run: 500
  }
});

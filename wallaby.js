module.exports = wallaby => ({
  files: ["src/**/*.js"],
  tests: ["test/**/*.js"],
  debug: true,
  env: {
    type: "node"
  },
  compilers: {
    "**/*.js": wallaby.compilers.babel({
      // Tell Wallaby to use Ava's Babel preset, necessary if your project doesn't use Babel otherwise.
      presets: ["@ava/babel-preset-stage-4"]
    })
  },
  testFramework: "ava",
  delays: {
    run: 500
  }
});

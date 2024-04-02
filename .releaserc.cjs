module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "FEAT", release: "minor" },
          { type: "FIX", release: "patch" },
          { type: "CHORE", release: "patch" },
          { type: "DOCS", release: "patch" },
          { type: "STYLE", release: "patch" },
          { type: "REF", release: "patch" },
          { type: "PERF", release: "patch" },
          { type: "TEST", release: "patch" },
          { type: "BUILD", release: "patch" },
          { type: "CI", release: "patch" },
        ],
      },
    ],
  ],
};

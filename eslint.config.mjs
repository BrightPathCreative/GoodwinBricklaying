import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
  ...typescript,
  {
    // The react-hooks v7 rules below flag a few intentional, well-established
    // patterns in this codebase (hydration-guard setState, resetting menu/UI
    // state on route change, and forwarding a ref through createElement).
    // Keep them visible as warnings rather than failing the build.
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
    },
  },
];

export default eslintConfig;

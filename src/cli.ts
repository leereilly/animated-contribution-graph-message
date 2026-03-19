import { parseCli, run } from "./index.js";

async function main() {
  try {
    const args = parseCli(process.argv);
    await run(args);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: ${msg}`);
    console.error("Run with --help for usage information.");
    process.exit(1);
  }
}

main();

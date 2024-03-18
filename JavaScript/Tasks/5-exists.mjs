"use strict";

// Task: optimize `fileExists` function to one-liner
// Do not change "Usage" section, edit just "Implementation"

import { access } from "node:fs/promises";

// Implementation

const fileExists = async (name) =>
  await access(name)
    .then(() => true)
    .catch(() => false);

// Usage

(async () => {
  const name = "1-async.js";
  const exists = await fileExists(name);

  console.log({ name, exists });
})();

(async () => {
  const name = "4-method.js";
  const exists = await fileExists(name);
  console.log({ name, exists });
})();

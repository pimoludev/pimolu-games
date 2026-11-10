import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import React from "react";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost:3000",
  pretendToBeVisual: true,
});
for (const key of [
  "window",
  "document",
  "navigator",
  "HTMLElement",
  "Element",
  "Node",
  "MutationObserver",
  "Event",
  "KeyboardEvent",
  "MouseEvent",
  "localStorage",
] as const) {
  Object.defineProperty(globalThis, key, {
    value: dom.window[key],
    configurable: true,
  });
}
Object.assign(globalThis, {
  getComputedStyle: dom.window.getComputedStyle.bind(dom.window),
  requestAnimationFrame: dom.window.requestAnimationFrame.bind(dom.window),
  cancelAnimationFrame: dom.window.cancelAnimationFrame.bind(dom.window),
  ResizeObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(dom.window, "matchMedia", {
  value: () => ({
    matches: true,
    addEventListener() {},
    removeEventListener() {},
  }),
});
dom.window.HTMLElement.prototype.scrollIntoView = () => {};

async function setup() {
  const ui = await import("@testing-library/react");
  ui.configure({
    getElementError: (message) => new Error(message || "Element not found"),
  });
  const { default: Home } = await import("../app/page");
  ui.render(<Home />);
  return ui;
}
afterEach(async () => {
  (await import("@testing-library/react")).cleanup();
  localStorage.clear();
});

test("profile validates, saves locally, and restores the selected mode and platform", async () => {
  const { screen, fireEvent, within } = await setup();
  fireEvent.click(screen.getByRole("button", { name: "Entrez dans l’arène" }));
  let dialog = screen.getByRole("dialog");
  fireEvent.click(
    within(dialog).getByRole("button", {
      name: "Enregistrer ma configuration",
    }),
  );
  assert.match(
    within(dialog).getByRole("alert").textContent || "",
    /au moins 3/,
  );
  fireEvent.change(within(dialog).getByRole("textbox"), {
    target: { value: "Ghost_07" },
  });
  fireEvent.click(within(dialog).getByRole("radio", { name: "Xbox" }));
  fireEvent.click(within(dialog).getByRole("radio", { name: "MULTIJOUEUR" }));
  fireEvent.click(
    within(dialog).getByText("Enregistrer ma configuration", { exact: true }),
  );
  assert.deepEqual(JSON.parse(localStorage.getItem("nexus-player")!), {
    pseudo: "Ghost_07",
    platform: "Xbox",
    mode: "multi",
  });
  assert.ok(within(dialog).getByText("Prêt, Ghost_07 ?"));
  fireEvent.click(
    within(dialog).getByText("Continuer l’exploration", { exact: true }),
  );
  assert.equal(document.querySelector('[role="dialog"]'), null);
  fireEvent.click(screen.getByRole("button", { name: "Entrez dans l’arène" }));
  dialog = screen.getByRole("dialog");
  assert.equal(
    (within(dialog).getByRole("textbox") as HTMLInputElement).value,
    "Ghost_07",
  );
  assert.equal(
    within(dialog)
      .getByRole("radio", { name: "Xbox" })
      .getAttribute("aria-checked"),
    "true",
  );
});

test("battle pass switches from premium rewards to the free track", async () => {
  const { screen, fireEvent, within } = await setup();
  fireEvent.click(
    screen.getByRole("button", { name: "Explorer le Battle Pass" }),
  );
  const dialog = screen.getByRole("dialog");
  assert.ok(within(dialog).getByRole("heading", { name: "Souverain" }));
  fireEvent.click(within(dialog).getByRole("tab", { name: "Piste gratuite" }));
  assert.ok(within(dialog).getByRole("heading", { name: "Éclaireur" }));
  assert.equal(
    within(dialog).queryByRole("heading", { name: "Souverain" }),
    null,
  );
});

test("gallery opens, advances and closes with Escape", async () => {
  const { screen, fireEvent, within } = await setup();
  fireEvent.click(screen.getByRole("button", { name: "Explorer le gameplay" }));
  const dialog = screen.getByRole("dialog", { name: "Galerie de gameplay" });
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Image suivante" }),
  );
  assert.ok(within(dialog).getByText("L'union fait la force · Halo Infinite"));
  fireEvent.keyDown(dialog, { key: "Escape" });
  assert.equal(document.querySelector('[role="dialog"]'), null);
});

test("mode selection transfers to profile setup", async () => {
  const { screen, fireEvent } = await setup();
  fireEvent.click(
    screen.getByRole("button", { name: "Découvrir le mode ARÈNE CLASSÉE" }),
  );
  fireEvent.click(screen.getByRole("button", { name: "Choisir ce mode" }));
  assert.ok(screen.getByRole("textbox"));
  assert.equal(
    screen
      .getByRole("radio", { name: "ARÈNE CLASSÉE" })
      .getAttribute("aria-checked"),
    "true",
  );
});

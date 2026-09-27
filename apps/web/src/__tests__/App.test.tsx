import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../App";

vi.mock("../components/dashboard/VaultPanel", () => ({
  VaultPanel: () => null,
}));
vi.mock("../components/onboarding/WalletConnect", () => ({
  WalletConnect: () => null,
}));
vi.mock("../components/ui/Toasts", () => ({
  Toasts: () => null,
}));
vi.mock("../pages/AdminLogin", () => ({
  AdminLogin: () => <div>Admin login page</div>,
}));
vi.mock("../pages/StatusPage", () => ({
  StatusPage: () => <div>Status page</div>,
}));
vi.mock("../store/wallet", () => ({
  useWalletStore: {
    getState: () => ({ revalidate: vi.fn() }),
  },
}));

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("App routing", () => {
  it("renders the designed not-found page for an unmatched app route", () => {
    window.history.replaceState(null, "", "/app/not-a-route");

    const { container } = render(<App />);

    expect(
      screen.getByRole("heading", { name: "Page not found" })
    ).toBeDefined();
    expect(container.querySelector("img")?.getAttribute("src")).toBe(
      "/logo-mark.svg"
    );
    expect(
      screen.getByRole("navigation", { name: "Primary navigation" })
    ).toBeDefined();
    expect(
      screen.getByRole("link", { name: "Go to app" }).getAttribute("href")
    ).toBe("/app");
  });

  it("renders the not-found page for nested paths outside the known routes", () => {
    window.history.replaceState(null, "", "/app/admin/unknown");

    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Page not found" })
    ).toBeDefined();
  });
});

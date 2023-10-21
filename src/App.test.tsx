import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("App mount properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector("h1");
    expect(title?.textContent).toBe("hola");

    const text = screen.getByText(/Texto de ejemplo/i);

    expect(text.textContent).toBeTruthy();

    const buttons = wrapper.container.querySelectorAll("button");
    expect(buttons).toHaveLength(2);

    const textButtonAdd = screen.getByText("+1");
    expect(textButtonAdd.textContent).toBe("+1");

    const textButtonSubstract = screen.getByText("-1");
    expect(textButtonSubstract.textContent).toBe("-1");

    const googleAnchor = screen.getByText("Google");
    expect(googleAnchor.textContent).toBe("Google");
  });

  test("App counter works properly", () => {
    const wrapper = render(<App />);

    const counter = wrapper.container.querySelectorAll("p");
    expect(counter[1]?.textContent).toBe("Counter: 0");

    const buttonAdd = screen.getByText("+1");
    const buttonSubstract = screen.getByText("-1");

    fireEvent.click(buttonAdd);
    expect(counter[1]?.textContent).toBe("Counter: 1");

    fireEvent.click(buttonSubstract);
    expect(counter[1]?.textContent).toBe("Counter: 0");
  });

  test("Google anchor works properly", () => {
    render(<App />);

    const googleAnchor = screen.getByText("Google");
    expect(googleAnchor.textContent).toBe("Google");

    expect(googleAnchor).toHaveAttribute("href", "https://www.google.com");
  });
});

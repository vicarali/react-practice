import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("should show default text", () => {
    render(<Greeting />);
    const text = screen.getByText("It's good to see you!");

    expect(text).toBeInTheDocument();
  });

  it("should not display default text when button is clicked", async () => {
    render(<Greeting />);
    const text = screen.getByText("It's good to see you!");
    const button = screen.query("button");

    await userEvent.click(button);

    expect(text).toHaveTextContent("Changed!");
  });
});

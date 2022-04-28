import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Key from "./Key";

describe("Given the Key component", () => {
  describe("When it receives the text hola", () => {
    test("then it should show a button with the text hola inside", () => {
      const expectedText = "hola";

      render(<Key text={expectedText} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});

import PhoneContext from "../../contexts/PhoneContext";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Info from "./Info";

describe("Given the Info component", () => {
  describe("When calling is true", () => {
    test("then should shou de string Calling...", () => {
      const calling = true;
      const expectedText = "Calling...";
      render(
        <PhoneContext.Provider value={calling}>
          <Info />
        </PhoneContext.Provider>
      );

      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});

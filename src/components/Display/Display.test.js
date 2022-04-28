import PhoneContext from "../../contexts/PhoneContext";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Display from "./Display";

describe("Given the Display component", () => {
  describe("When it receives the 123456789 number", () => {
    test("then it should show the 123456789 number", () => {
      const number = "123456789";

      const inputNumber = { phoneNumber: number };

      render(
        <PhoneContext.Provider value={inputNumber}>
          <Display />
        </PhoneContext.Provider>
      );

      const textElement = screen.getByText(number);

      expect(textElement.textContent).toBe(number);
    });
  });
});

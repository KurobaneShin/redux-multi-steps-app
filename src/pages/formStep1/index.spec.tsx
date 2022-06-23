import Step1 from ".";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

it('should have a "Proximo" button', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Step1 />
      </MemoryRouter>
    </Provider>
  );
  let button = screen.getByText("Proximo");
  expect(button).toBeInTheDocument();
});
export {};

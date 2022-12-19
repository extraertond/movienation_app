import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../src/store";

type ITestUtilsPayload = {
  component: any;
  renderOptions?: RenderOptions;
};

export const renderStoreHelper = ({ component, renderOptions }: ITestUtilsPayload) => {
  const wrapper = ({ children }: any) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
  return render(component, { wrapper, ...renderOptions });
};

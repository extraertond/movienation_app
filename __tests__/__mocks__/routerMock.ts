jest.mock("react-router", () => {
  const actual = jest.requireActual("react-router");
  return {
    ...actual,
    useParams: useParamsMock,
  };
});

export const useParamsMock = jest.fn(() => ({ id: 1000 }));

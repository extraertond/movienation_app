import React from "react";
import i18next from "react-i18next";
import get from "lodash/get";
import * as locale from "../../src/assets/locales/en.json";

const tJestMock = jest.fn().mockImplementation((key: string, options: any) => {
  let text = "";

  if (key) {
    text = get(locale, key, "");

    if (options) {
      for (let option in options) {
        text = text.replace(`{{${option}}}`, options[option]);
      }
    }
  }

  return text;
});
jest.mock("i18next", () => ({
  t: tJestMock,
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
  Trans: ({ children, components }: any) => (
    <span>
      {components?.length > 0
        ? components?.map((component: any, index: number) => <span key={index}>{component}</span>)
        : children}
    </span>
  ),
}));

i18next.useTranslation = jest.fn().mockImplementation((): any => ({
  t: tJestMock,
}));

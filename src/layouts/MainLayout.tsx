import { ReactNode } from "react";
import { Header } from "../components/header/Header";
import "./MainLayout.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div className="main-layout__container">{children}</div>
    </>
  );
};

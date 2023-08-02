import { ReactNode } from "react";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return <div className="container">{children}</div>;
};

export default Layout;

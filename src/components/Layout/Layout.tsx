import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <main className="flex flex-col md:mt-[90px]">{children}</main>;
};

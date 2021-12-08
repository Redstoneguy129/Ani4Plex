import { FunctionComponent, ReactNode } from "react";

const NavLink: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <button className="">{children}</button>
);

export default NavLink;
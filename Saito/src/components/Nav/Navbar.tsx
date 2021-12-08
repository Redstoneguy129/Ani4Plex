import { FunctionComponent, ReactNode } from "react";

const Navbar: FunctionComponent<{ children?: ReactNode }> = ({ children }) => (
    <div className="mx-6 my-4">
        <nav className="flex flex-row w-full rounded-r-full rounded-b-full py-2 bg-gradient-to-r from-purple-400 to-red-500">{children}</nav>
    </div>
);

export default Navbar;


//#0051ED - Primary
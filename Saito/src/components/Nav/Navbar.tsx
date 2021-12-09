import { FunctionComponent, ReactNode, Children } from "react";

const Navbar: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <div className="mx-6 my-4">
        <nav className="w-full rounded-r-full rounded-b-full py-2 bg-blue-500">
            <div className="flex flex-row px-8">
                {children}
            </div>
        </nav>
    </div>
);

export default Navbar;
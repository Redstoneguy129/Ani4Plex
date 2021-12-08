import { FunctionComponent, ReactNode, ReactElement, Children } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

const ChildClassNames = ["NavLogo", "NavLink"];

type ChildClassName = {
    type: {
        name: string
    }
}

function loopKids(children: ReactNode): ReactNode {
    var callback;
    Children.forEach(children, (child: ChildClassName | any) => {
        console.log(child.type.name);
        if(ChildClassNames.includes(child.type.name))  {

        }
    })
    return (<div>test</div>)
}

const Navbar: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <div className="mx-6 my-4">
        <nav className="flex flex-row w-full rounded-r-full rounded-b-full py-2 bg-gradient-to-br from-yellow-600 to-yellow-400">

            {loopKids(children)}
        </nav>
    </div>
);

export default Navbar;
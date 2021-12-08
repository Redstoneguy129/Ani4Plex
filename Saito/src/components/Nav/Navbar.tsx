import { FunctionComponent, ReactNode, ReactElement, Children } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

let ChildClassNames = new Map<string, FunctionComponent<any>>([['NavLogo', NavLogo], ['NavLink', NavLink]]);

type ChildClassName = {
    type: {
        name: string
    }
}

function loopKids(children: ReactNode): ReactNode {
    var callback;
    Children.forEach(children, (child: ChildClassName | any) => {
        //console.log(child.type.name);
        console.log(ChildClassNames.get(child.type.name));
    })
    return (<div>test</div>)
}

const Navbar: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <div className="mx-6 my-4">
        <nav className="flex flex-row w-full rounded-r-full rounded-b-full py-2 bg-blue-500">
            {loopKids(children)}
        </nav>
    </div>
);

export default Navbar;
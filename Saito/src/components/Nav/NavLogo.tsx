import { FunctionComponent } from "react";

const NavLogo: FunctionComponent<{ src: string }> = ({ src }) => (
    <div className="flex-grow">
        <img className="w-10" src={src}/>
    </div>
);

export default NavLogo;
import { FunctionComponent } from "react";

const NavLogo: FunctionComponent<{ src: string }> = ({ src }) => (
    <img className="w-10" src={src}/>
);

export default NavLogo;
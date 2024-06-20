import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { SiValorant } from "react-icons/si"

const NavbarComps = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <SiValorant size={40} className="text-red-500" />
                <p className="font-bold text-inherit text-xl ms-5">Valorant</p>
            </NavbarBrand>
            <NavbarContent className="flex" justify="end">
                <NavbarItem><Button variant="light"><Link to="/">Agents</Link></Button></NavbarItem>
                <NavbarItem><Button variant="light"><Link to="/gear">Gear</Link></Button></NavbarItem>
                <NavbarItem><Button variant="light"><Link to="/weapons">Weapons</Link></Button></NavbarItem>
                <NavbarItem><Button variant="light"><Link to="/events">Events</Link></Button></NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarComps

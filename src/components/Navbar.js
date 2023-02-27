
import { Link } from "react-router-dom"

const Navbar = () => {


    return (
        <nav className="navbar">

            <Link to={'/'} className="navlinks">Home</Link>
            <Link to={"/beers"} className="navlinks">All Beers</Link>
            <Link to={'/random-beer'} className="navlinks">Random Beer</Link>
            <Link to={'/new-beer'} className="navlinks">Add a Beer</Link>

        </nav>
    )
}

export default Navbar
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar navbar-dark bg-primary navbar-expand-lg nav-container">
            <span className="navbar-brand">ShareNote</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                    <NavLink to='/note' className="nav-link">Note</NavLink>
                    <NavLink to='/create' className="nav-link">Create</NavLink>
                    <NavLink to='/about' className="nav-link">About</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
import { useContext } from "react";
import {Outlet, Link} from "react-router-dom";
import { AppStateContext } from "../contexts/AppContexts";

const Layout = () => {
    const {pageTitle} = useContext(AppStateContext);
    return(
        <>
            <div className="container">
                <nav>
                    <ul>
                        <li className="logo">
                            Logo
                        </li>
                        <div className="nav-links">
                            <li className={`${pageTitle === "Home" ? "active-nav-link" : ""}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`${pageTitle === "About" ? "active-nav-link" : ""}`}>
                                <Link to="/">About</Link>
                            </li>
                            <li className={`${pageTitle === "Services" ? "active-nav-link" : ""}`}>
                                <Link to="/">Services</Link>
                            </li>
                            <li className={`${pageTitle === "Products" ? "active-nav-link" : ""}`}>
                                <Link to="/products">Products</Link>
                            </li>
                        </div>
                        <li className="action">
                            <a>Call to Action</a>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </div>
            <footer>
                <div className="footer-container">
                    <div>

                    </div>
                    <div>
                        <h1>Lorem Ipsum dolor sit consectetur</h1>
                        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                        <a>Call to Action</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
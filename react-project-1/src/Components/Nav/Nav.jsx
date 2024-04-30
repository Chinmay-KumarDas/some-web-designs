import "./Nav.css";

export const Nav = () =>{
    return(
        <nav>
            <h2>
                <i class="fa-solid fa-burger"></i>
                Fresh Finds
            </h2>

            <div className="navItems">
                <p>Home</p>
                <p>About Us</p>
                <p>Contact</p>
                <p>Blog</p>
                <a>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>Add Listing</p>
                </a>

                <a id="profile">
                    <i class="fa-solid fa-user"></i>
                </a>
            </div>
        </nav>
    );
}
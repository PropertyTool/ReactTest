const Navbar = () => {
    
    return (
        <nav className="navbar">
            <img src={require('./images/PeachyLogo.jpg')} alt="Peachy Logo" width="100" height="100" />
            <h1 className='companyName'>Employee Xperience</h1>
            <div className="links">
            <a href="/">What we do</a>
            <a href="/">The team</a>
            <a href="/">Contact us</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
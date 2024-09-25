// react
import { useState } from "react";
import { Link } from 'react-router-dom';

// css
import "./headerStyle/Header.scss"
// style image
import imgAleda from "./headerStyle/headerImg/imgAleda.jpeg";
// style icon
import IconComponentHamb from "./headerStyle/headerIcon/IconComponentHamb/IconBars";
import IconComponentX from "./headerStyle/headerIcon/IconComponentX/IconX";


// JSX
const Header = () =>{

    const[menuOpen, setMenuOpen] = useState(false);

    // hamburguer/ navbar mobile
    const handleHamburgerClick = () =>{
        setMenuOpen(true);
    };

    const handleCloseClick = () =>{
        setMenuOpen(false);
    }



    // hamburguer
    

    // header fixo
    // const navRef = useRef(null);
    // const prevScrollPos = useRef(window.pageYOffset);
    
    // useEffect(() =>{
    //     const handleScroll = () =>{
    //         const currentScrollPos = window.pageYOffset;

    //         if(prevScrollPos.current < currentScrollPos){
    //             navRef.current?.classList.add('hide'); 
    //         } else {
    //             navRef.current?.classList.remove('hide');
    //         }

    //         prevScrollPos.current = currentScrollPos;
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () =>{
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return(
        <>
            <nav className="navbar">
                <div className="navbar_logo">
                    <img src={imgAleda} alt="" />
                    <h1>Jacira <br /> das Águas</h1> 
                </div>

                {/* Menu Desktop */}
                <ul className="navbar_desktop_links">
                    <li><Link to="/MainPage">Aledá</Link></li>
                    <li><Link to="/Main">Carta</Link></li>
                    <li><Link to="/Guia">Guia Espiritual</Link></li>
                    <li><Link to="/Anjo">Anjo da Guarda</Link></li>
                </ul>

                {/* Menu Mobile */}
                <div className={`navbar_mobile_menu ${menuOpen ? "flex" : ""}`} id="mobileMenu">
                    <button className="navbar_mobile_menu_close" id="closeButton" onClick={handleCloseClick}>
                        <IconComponentX/>
                    </button>

                    <ul className="navbar_mobile_menu_links">
                        <li><Link to="/MainPage">Aledá</Link></li>
                        <li><Link to="/Main">Carta</Link></li>
                        <li><Link to="/Guia">Guia Espiritual</Link></li>
                        <li><Link to="/Anjo">Anjo da Guarda</Link></li>
                    </ul>
                </div>

                {/* Botão Menu Hamburguer */}
                <button className="navbar_hamburger_button" id="hamburgerButton" onClick={handleHamburgerClick}>
                    <IconComponentHamb/>
                </button>
            </nav>
        </>
    );
};

export default Header;
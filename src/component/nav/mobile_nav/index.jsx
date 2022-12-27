import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from './index.module.scss'
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { BsPersonFill,BsFillPersonBadgeFill,BsPencilFill,BsFillBookFill } from "react-icons/bs";
import { AiFillHome,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Logo from'../../../assets/logo.png';
import { useLocation } from "react-router-dom";
import classnames from "classnames"

export default function Mobile_Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { t,i18n } = useTranslation();
    const location = useLocation();
    const closeMenu = () =>{
        setIsOpen(false)
    }
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset'
        }
    },[isOpen])
    const changeLanguage = () =>{
        if (i18n.language === 'en') return i18n.changeLanguage('zh');

        i18n.changeLanguage('en')
    }

    const Nav = () =>{
        return(
            <>
                <Link to="/" 
                    className={classnames(styles.navItem,{[styles.active]:location.pathname === '/'})}
                    onClick={closeMenu}>
                    <AiFillHome /><p>{t("nav.home")}</p>
                </Link>
                <Link to="/about"  
                    className={classnames(styles.navItem,{[styles.active]:location.pathname === '/about'})}
                    onClick={closeMenu}>
                    <BsPersonFill/><p>{t("nav.about")}</p>
                </Link>
                <Link to="/experience" 
                    className={classnames(styles.navItem,{[styles.active]:location.pathname === '/experience'})}
                    onClick={closeMenu}
                >
                    <BsFillPersonBadgeFill /><p>{t("nav.experience")}</p>
                </Link>
                <Link to="/portfolio" 
                    className={classnames(styles.navItem,{[styles.active]:location.pathname === '/portfolio'})}
                    onClick={closeMenu}
                >
                    <BsFillBookFill /><p>{t("nav.portfolio")}</p>
                </Link>
                <Link to="/note" 
                    className={classnames(styles.navItem,{[styles.active]:location.pathname === '/note'})}
                    onClick={closeMenu}
                >
                    <BsPencilFill /><p>{t("nav.note")}</p>
                </Link>
                <div className={styles.btn} onClick={changeLanguage}>
                    <IoLanguage /><p>{t("nav.changeLanguage")}</p>
                </div>

            </>
        )
    }
  return (
    <section className={styles.nav_section}>
        <div className={styles.nav}>
            <Link to="/" ><div className={styles.logo}><img src={Logo} alt=''/></div></Link>
            <div className={styles.menu_button} onClick={() => setIsOpen(!isOpen)} >{!isOpen ? <AiOutlineMenu /> : <AiOutlineClose /> }</div>
        </div>
        <div className={classnames(styles.menu,{[styles.active]:isOpen})}>
            {isOpen && <Nav />}
        </div>
    </section>
  )
}

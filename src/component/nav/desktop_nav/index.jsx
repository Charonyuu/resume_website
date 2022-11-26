import React from 'react'
import { Link } from "react-router-dom";
import styles from './index.module.scss'
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { BsPersonFill,BsFillPersonBadgeFill,BsPencilFill,BsFillBookFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Logo from'../../../assets/logo.png';
import { useLocation } from "react-router-dom";
export default function Desktop_Nav() {
    const { t,i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = () =>{
        if (i18n.language === 'en') {
            i18n.changeLanguage('zh')
        }else{
            i18n.changeLanguage('en')
        }
    }
  return (
    <section className={styles.nav_section}>
        <div className={styles.btn} onClick={changeLanguage}><IoLanguage /></div>
        <div className={styles.logo}><img src={Logo} alt=''/></div>
      <ul>
        <Link to="/">
            <li className={location.pathname === '/' ? styles.active : null}>
                <AiFillHome /><p>{t("nav.home")}</p>
            </li>
        </Link>
        <Link to="/about">
            <li className={location.pathname  === '/about' ? styles.active : null}><BsPersonFill/><p>{t("nav.about")}</p></li>
        </Link>
        <Link to="/experience">
            <li className={location.pathname  === '/experience' ? styles.active : null}><BsFillPersonBadgeFill /><p>{t("nav.experience")}</p></li>
        </Link>
        <Link to="/portfolio">
            <li className={location.pathname  === '/portfolio' ? styles.active : null}><BsFillBookFill /><p>{t("nav.portfolio")}</p></li>
        </Link>
        <Link to="/note">
            <li className={location.pathname  === '/note' ? styles.active : null}>
                <BsPencilFill /><p>{t("nav.note")}</p>
            </li>
        </Link>
      </ul>
    </section>
  )
}

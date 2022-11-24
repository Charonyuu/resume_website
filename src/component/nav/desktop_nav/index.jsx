import React from 'react'
import {
  Link
} from "react-router-dom";
import styles from './index.module.scss'
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { BsPersonFill,BsFillPersonBadgeFill,BsPencilFill,BsFillBookFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

export default function Desktop_Nav({page,setPage}) {
    const { t,i18n } = useTranslation();
    const changeLanguage = () =>{
        if (i18n.language === 'en') {
            i18n.changeLanguage('zh')
        }else{
            i18n.changeLanguage('en')
        }
    }
  return (
    <section className={styles.left_section}>
        <div className={styles.btn} onClick={changeLanguage}><IoLanguage /></div>
      <ul>
        <Link to="/">
            <li onClick={()=>setPage('home')} className={page === 'home' ? styles.active : null}>
                <AiFillHome /><p>{t("home")}</p>
            </li>
        </Link>
        <Link to="/">
        <li onClick={()=>setPage('about')} className={page === 'about' ? styles.active : null}><BsPersonFill/><p>{t("about")}</p></li>

        </Link>
        <Link to="/">
            <li onClick={()=>setPage('experience')} className={page === 'experience' ? styles.active : null}><BsFillPersonBadgeFill /><p>{t("experience")}</p></li>
        </Link>
        <Link to="/">
            <li onClick={()=>setPage('portfolio')} className={page === 'portfolio' ? styles.active : null}><BsFillBookFill /><p>{t("portfolio")}</p></li>
        </Link>
        <Link to="/note">
            <li onClick={()=>setPage('note')} className={page === 'note' ? styles.active : null}>
                <BsPencilFill /><p>{t("note")}</p>
            </li>
        </Link>
      </ul>
    </section>
  )
}

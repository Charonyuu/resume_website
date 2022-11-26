import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import self_picture from '../../assets/self_picture.png'
import useFetchData from '../../hooks/useFetchData';
import { useTranslation } from "react-i18next";

export default function HomePage() {
  // const {data , loading , error} = useFetchData('profile') 
  const { t,i18n } = useTranslation();
  
  // const profile = !loading && 
  // (i18n.language === 'en' ? 
  //   {name:data.en_name,title:data.en_title,introduction:data.en_introduction} 
  //   : 
  //   {name:data.zh_name,title:data.zh_title,introduction:data.zh_introduction} 
  // )
  return (
    <section className={styles.HomePage}>
      <div className={styles.introduce}>
        <div className={styles.name}>
          {t("homepage.intoduce_name")}{'江承祐'}
        </div>
        <div className={styles.title}>
          {t("homepage.intoduce_title")}{'前端工程師'}
        </div>
        <div className={styles.introduction}>
          {"目前就讀輔仁大學資訊管理學系大四，在大一那年接觸到網頁後就對網頁設計著迷，在大二大三學習更多網頁相關知識及實習，目前前端撰寫經驗約兩年半，前端工作實習經驗有大約8個月，目前正在自學和練習前端基礎知識及優化，期許自己未來可以成為一個好的前端工程師"}
        </div>
        <p>icon位置</p>
        <Link to="/about" className={styles.button}>
          {t("homepage.more_about_me")}
        </Link>
      </div>
      <div className={styles.picture_container}>
        <div className={styles.picture}>
          <img src={self_picture} alt="" />
        </div>
      </div>
    </section>
  )
}

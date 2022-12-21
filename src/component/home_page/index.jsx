import React, { useEffect, useState,useMemo } from 'react'
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import {useFetchDocData} from '../../hooks/useFetchData';
import { useTranslation } from "react-i18next";
import { AiOutlineMail,AiFillGithub,AiOutlinePhone,AiOutlineLinkedin } from "react-icons/ai";
import Slider from 'react-slick';
export default function HomePage() {
  const { data } = useFetchDocData('profile')
  const { t,i18n } = useTranslation();
  
  if (!data) return <div>loading...</div>;
  const profile = 
  (i18n.language === 'en' ? 
    {name:data.data.en_name,title:data.data.en_title,introduction:data.data.en_introduction} 
    : 
    {name:data.data.zh_name,title:data.data.zh_title,introduction:data.data.zh_introduction} 
  );
  const settings = {
      infinite: true,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
  const {email , github , phone , linkedin} = data.data.contact
  return (
    <section className={styles.HomePage}>
      <div className={styles.introduce}>
        <div className={styles.name}>
          {t("homepage.intoduce_name")} {profile.name}
        </div>
        <div className={styles.title}>
          {t("homepage.intoduce_title")} {profile.title}
        </div>
        <div className={styles.introduction}>
          {profile.introduction}
        </div>
        <div className={styles.iconlist}>
          {phone && <a href={`tel:+${phone}`} ><AiOutlinePhone /><span>{phone}</span></a>}
          {email && <a href={`mailto:${email}`} ><AiOutlineMail /><span>{email}</span></a>}
          {github && <a href={github} target={'_blank'}><AiFillGithub /><span>{github}</span></a>}
          {linkedin && <AiOutlineLinkedin />}
        </div>
        <Link to="/about" className={styles.button}>
          {t("homepage.more_about_me")}
        </Link>
      </div>
      <div className={styles.picture_container}>
        <Slider {...settings} className={styles.slider}>
          {data.data.picture_url.map((picture)=>
            <div className={styles.picture} key={picture.name} >
              <img src={picture.url}  alt="" />
            </div>

          )}
        </Slider>
      </div>
    </section>
  )
}

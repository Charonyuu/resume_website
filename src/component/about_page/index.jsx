import React from 'react'
import styles from './index.module.scss'
import {BsFillPinAngleFill} from "react-icons/bs";
import {useFetchDocData} from '../../hooks/useFetchData';
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { data } = useFetchDocData('about')
  const { t,i18n } = useTranslation();

  if (!data) return <div>loading...</div>;
  const profile = 
  (i18n.language === 'en' ? 
    {skill:data.data.en_skill,target:data.data.en_target} 
    : 
    {skill:data.data.zh_skill,target:data.data.zh_target} 
  )
  return (
    <div className={styles.aboutPage}>
      <h1>技術 Skill</h1>
      <div className={styles.skill_container}>
      {profile.skill.map((skill_item,idx)=>(
        <div className={styles.skill_card} key={idx}>
          <p className={styles.title}>{skill_item.title}</p>
          <ul>
            {skill_item.content.map((content_item,index)=>(
              <li key={content_item.id}>
                {index+1}.{content_item.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <h1>未來目標 Future Target</h1>
      <div className={styles.target_container}>
      <div className={styles.target_card}>
        <ul>
          {profile.target.map((target_item,idx)=>
            <li key={target_item.id}><BsFillPinAngleFill /><p>{target_item.content}</p></li>
          )}
        </ul>
      </div>
      </div>
      
    </div>
  )
}

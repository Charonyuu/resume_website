import React from 'react'
import styles from './index.module.scss'
import {useFetchCollectionData} from '../../hooks/useFetchData';
import { useTranslation } from "react-i18next";

export default function ExperiencePage() {
  const { data } = useFetchCollectionData('experience','experience_list')
  const { t,i18n } = useTranslation();
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.experiencePage}>
      {data.data.reverse().map((company,idx)=>
      <div className={styles.experience_container}  key={idx}>
        <div className={styles.card}>
        <h2>{i18n.language === 'en' ? company.en_title : company.zh_title}({company.startDate + '~' + company.endDate})</h2>
        <h3>{i18n.language === 'en' ? company.en_company_name : company.zh_company_name}</h3>
        <div className={styles.blocks}>
          {company.tools.map((tool,index)=>
            <div className={styles.block} key={index}>{tool}</div>
          )}
        </div>
        <p>{i18n.language === 'en' ? company.en_introduction : company.zh_introduction}</p>
        {company.exhibit.length> 0 && company.exhibit.map((exhibit_item,idx)=>
          <div className={styles.exhibit} key={idx}>
            <h4>負責產品:</h4>
            {idx+1}. <a href={exhibit_item.url} target={'_blank'}>{exhibit_item.name}</a>
            <p>{exhibit_item.content}</p>  
          </div>
        )}
        </div>
      </div>
      )}
    </div>
  )
}

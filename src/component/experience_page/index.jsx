import React from 'react'
import styles from './index.module.scss'


export default function ExperiencePage() {
  const data = {'zh_experience' :
  [
  {name:'瑞兔股份有限公司',title:'前端實習生',year:'2022/2 - 2022/3',introduction:'瑞兔是一家製作整合支付的公司，使用的技術是html,css,javascript搭配JQuery並且使用laravel,php為後端，期間負責修改UI及製作功能，但因工作內容與自身期望有落差而離開',tools:['Css','Javascript','JQuery'],exhibit:''},
  {name:'綠擊掌數位有限公司',title:'前端實習生',year:'2022/3 - 2022/10',introduction:'綠擊掌是一個接案公司，在其中我學習到了很多，與UI設計師合作討論figma，與後端討論串接API，在公司任內我大部分負責撰寫或修改reactJs及nextJs的案子，也有獨立撰寫nextJs的專案',tools:['ReactJs','NextJs','Scss','Javascript','TypeScript','PixiJs','Canvas'],exhibit:''},
  ]}
  return (
    <div className={styles.experiencePage}>
      {data.zh_experience.reverse().map((company,idx)=>
      <div className={styles.experience_container}  key={idx}>
        <div className={styles.card}>
        <h2>{company.title}({company.year})</h2>
        <h3>{company.name}</h3>
        <div className={styles.blocks}>
          {company.tools.map((tool,index)=>
            <div className={styles.block} key={index}>{tool}</div>
          )}
        </div>
        <p>{company.introduction}</p>
        </div>
      </div>
      )}
    </div>
  )
}

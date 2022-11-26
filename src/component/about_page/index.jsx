import React from 'react'
import styles from './index.module.scss'
import {BsFillPinAngleFill} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
export default function AboutPage() {
  // const {data , loading , error} = useFetchData('user','about') 
  // const { t,i18n } = useTranslation();
  // const profile = !loading && 
  // (i18n.language === 'en' ? 
  //   {skill:data.en_skill,target:data.en_target} 
  //   : 
  //   {skill:data.zh_skill,target:data.zh_target} 
  // )
  const data = [{ title:'前端',content:['熟悉HTML、CSS、SCSS、JS、Bootstrap、RWD、Material UI ','熟悉ReactJS及略懂NextJS','以react Native撰寫IOS APP 作為大學專題成果','使用i18n控制語言切換','使用webObserve API做infinite scroll','使用axios串接Restful API','寫過Typescript但是不太熟悉']}
   ,{title:'後端',content:['python 及 javaspring 曾經寫過但是已不太熟悉','曾以 php/mysql 撰寫網頁後端','熟悉以 github page架靜態網站','以 netlify 架靜態網站並用 netlify function 製作 API給予前端串接','使用firebase 作為後端及資料庫串接前端']}
   ,{title:'其他',content:['熟悉與後端及UI設計師溝通','git版本控制及指令','用過PIXI.js','略懂Canvas']}
  ]
  const target =['更熟練nextJS','練習tailwind css','優化程式碼','熟悉TypeScript與NodeJS','學習CI/CD','做一個對自己有用的app使用React native並上架到apple store',
,'學習Unit Test / E2E Test']
  return (
    <div className={styles.aboutPage}>
      <h1>技術 Skill</h1>
      <div className={styles.skill_container}>
      {data.map((_data,idx)=>(
        <div className={styles.skill_card} key={idx}>
          <p className={styles.title}>{_data.title}</p>
          <ul>
            {_data.content.map((content,index)=>(
              <li>
                {index+1}.{content}
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
          {target.map((data,idx)=>
            <li><BsFillPinAngleFill /><p>{data}</p></li>
          )}
        </ul>
      </div>
      </div>
      
    </div>
  )
}

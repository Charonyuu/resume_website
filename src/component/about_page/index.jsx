import React from 'react'
import styles from './index.module.scss'


export default function AboutPage() {
  // const {data , loading , error} = useFetchData('user','about') 
  // const { t,i18n } = useTranslation();
  // const profile = !loading && 
  // (i18n.language === 'en' ? 
  //   {skill:data.en_skill,target:data.en_target} 
  //   : 
  //   {skill:data.zh_skill,target:data.zh_target} 
  // )
  const data = [{ title:'前端',content:['熟悉HTML、CSS、SCSS、Javascript、Bootstrap、RWD','熟悉ReactJS及略懂NextJS','以react Native撰寫IOS APP 作為大學專題成果','使用i18n控制語言切換','使用webObserve API做infinite scroll','使用axios串接API','寫過Typescript但是不太熟悉']}
   ,{title:'後端',content:['python 及 javaspring 曾經寫過但是已不太熟悉','曾以 php/mysql 撰寫網頁後端','熟悉以 github page架靜態網站','以 netlify 架靜態網站並用 netlify function 製作 API給予前端串接','使用firebase 作為後端及資料庫串接前端']}
   ,{title:'協作',content:['熟悉與後端及UI設計師溝通','git版本控制']}
  ]
  const target =['更熟練nextJS','練習tailwind css','優化程式碼']
  return (
    <div className={styles.aboutPage}>
      <h1>技術 Skill</h1>
      <div className={styles.skill_container}>
      {data.map((_data,idx)=>(
        <div className={styles.skill_card}>
          <p className={styles.title}>{_data.title}</p>
          <ul>
            {_data.content.map((content,idx2)=>(
              <li>{content}
                
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
            <li>{idx+1}.{data}</li>
          )}
        </ul>
      </div>
      </div>
      
    </div>
  )
}

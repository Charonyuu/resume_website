import React,{useState} from 'react'
import styles from './index.module.scss'
import {useFetchCollectionData} from '../../hooks/useFetchData';
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { AiOutlineCloseCircle,AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

export default function PortfilioPage() {
  const { data } = useFetchCollectionData('portfilio','portfilio_list')
  const { t,i18n } = useTranslation();
  const [openModal,setOpenModal] = useState({open:false,data:null});
  
  if (!data) return <div>loading...</div>;
  const handle_open_modal = (data) =>{
    setOpenModal({open:true,data})
  }
  console.log(data);
  return (
    <div className={styles.portfilioPage}>
      {data.data.map((portfilio_item,idx)=>
        <div className={styles.card}  key={idx}>
          <div className={styles.picture}>
            <img src={portfilio_item.picture_list[0].url} alt={portfilio_item.picture_list[0].name}/>
          </div>
          <div className={styles.content}>
            <h2>{i18n.language === 'en' ? portfilio_item.en_portfilio_name : portfilio_item.zh_portfilio_name}</h2>
            <p>{i18n.language === 'en' ? portfilio_item.en_introduction : portfilio_item.zh_introduction}</p>
          </div>
          
          <div className={styles.btn} onClick={()=>handle_open_modal(portfilio_item)}>{t("portfilio.more_info")}</div>
        </div>
      )}
      {openModal.open && <Modal language={i18n.language} data={openModal.data} closeModal={()=>setOpenModal({open:false,data:null})}/>}
    </div>
  )
}

const Modal = ({language,data,closeModal}) =>{
  const name = language === 'en' ? data.en_portfilio_name : data.zh_portfilio_name
  const introduction = language === 'en' ? data.en_introduction : data.zh_introduction
  const {picture_list , tools } = data
  const { t } = useTranslation();
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      fade: true,
      pauseOnHover: true,
      nextArrow: <AiOutlineArrowRight />,
      prevArrow: <AiOutlineArrowLeft />
    };
  
  return(
    <div className={styles.modal__backdrop}>
      <div className={styles.modal}>
        <AiOutlineCloseCircle className={styles.closeBtn} onClick={closeModal}/>
        <div className={styles.slider_container}>
          <Slider 
            {...settings}
            className={styles.slider}
          >
              {picture_list.map((img)=>
                <div className={styles.slider_picture} key={img.name}>
                  <img src={img.url} alt=''/>
                </div>
              )}
          </Slider>
        </div>
        
        <h2>{name}</h2>
        <p>{introduction}</p>
          <h4>{t("portfilio.tools")}</h4>
        <div className={styles.tools}>
          {tools.map((tool,idx)=>
            <div className={styles.tool} key={idx}>{tool}</div>
            )
          }
        </div>
      </div>
    </div>
  )
}
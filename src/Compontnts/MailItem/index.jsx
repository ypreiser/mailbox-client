import React, { useState } from 'react';
import styles from './style.module.css';
import { HiStar } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';


export default function MailItem({menuName="Inbox", emailId , counter = 5, sender = "Jessica Koel", time = "09:25", message = "Hi, I have a new meeting opportunity...", image }) {
  // הגדרת state לניהול הצבע של הכוכב
  const [isFav, setIsFav] = useState(false);

  // פונקציה שמתבצעת בלחיצה על האייקון
  const toggleStar = () => {
    setIsFav(!isFav);
  };

  return (
<NavLink to={`/menu/${menuName}/${emailId}`} className={styles.item}>
  <div className={styles.imgAndTxtContainer}>
    <div className={styles.image}>
      <img src={image} alt="" />
    </div>
    <div className={styles.nameAndSum}>
      <div className={styles.name}>{sender}</div>
      <div className={styles.sum}>{message}</div>
    </div>
  </div>

  <div className={styles.timeAndUnreadOrIcon}>
    <div className={styles.time}>{time}</div>
    {counter ? (
      <div className={styles.counter}>{counter}</div>
    ) : (
      <div className={styles.icon} onClick={(e) => {e.preventDefault(); toggleStar();}}>
        <HiStar className={isFav ? styles.fav : ''} />
      </div>
    )}
  </div>
</NavLink>
  );
}

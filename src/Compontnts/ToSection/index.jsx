import React from 'react';
import styles from "./style.module.css";
import Seperator from '../Seperator';
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";


export default function ToSection({ sender, message, date, time, imageSrc, isFromYou, isLastMessage }) {


  const messageClass = isLastMessage ? styles.lastMessage : (isFromYou ? styles.fromYou : styles.toYou);



  const renderLastMessage = () => (
    <div className={styles.lastMessageContainer}>
      <div className={messageClass}>
        <div className={styles.imgAndDate}>

          <div className={styles.imgAndSender}>

            <div className={styles.image}>
              <img src={imageSrc} alt="sender" />
            </div>
            <div className={styles.sender}>{sender}</div>

          </div>
          <div className={styles.date}>{date}</div>

        </div>
        <div className={styles.time}>{time}</div>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );



  return (
    <div>
      {isLastMessage ? renderLastMessage() : (
        <div>
          <div className={messageClass}>
            <div className={styles.imgAndSenderAndSum}>

              {isFromYou ? <div className={styles.icon}>
                <HiOutlineArrowUturnLeft />
              </div> : ""}

              <div className={styles.image}>
                <img src={imageSrc} alt="sender" />
              </div>
              <div className={styles.sender}>{sender}</div>
              <div className={styles.sum}>{message}</div>
            </div>
            <div className={styles.date}>{date}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <Seperator />
        </div>
      )}
    </div>
  );
}
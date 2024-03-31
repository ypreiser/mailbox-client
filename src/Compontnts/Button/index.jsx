import React from 'react'
import styles from "./style.module.css"

import { HiEnvelope,HiPaperAirplane } from "react-icons/hi2";


export default function Button({ title = "New message", icon = "", type = "", onClick = () => { } }) {


  const renderIcon = (title) => {
    switch (title) {
      case 'New message':
        return <HiEnvelope />;
      case 'Send':
        return <HiPaperAirplane />        ;
      case 'favourites':
        return <HiEnvelope />;
      case 'drafts':
        return <HiEnvelope />;
      case 'deleted':
        return <HiEnvelope />;
      case 'More':
        return <HiEnvelope />;
      default:
        return <HiEnvelope />;
    }
  };


  return (
    <div className={styles.button}>
      <button>
        <div className={styles.icon}>{renderIcon(title)}</div>
        <div className={styles.title}>{title}</div>
      </button>
    </div>
  )
}

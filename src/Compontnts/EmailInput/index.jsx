import React from 'react';
import styles from "./style.module.css";
import {
  FaFillDrip,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl ,
  FaListOl 
} from "react-icons/fa6";

import Seperator from "../Seperator"

export default function EmailInput() {
  return (
    <div className={styles.textAreaContainer}>
      <textarea className={styles.textArea} placeholder='Write your message...'></textarea>
      <div className={styles.textAreaToolbar}>
        <Seperator />
        <div className={styles.icons}>
<div>
<FaBold />
          <FaItalic />
          <FaUnderline />
          <FaFillDrip />
</div>

<div className={styles.verticalSeperator}></div>

     <div>
     <FaListUl />
          <FaListOl  />
          <FaAlignLeft />
          <FaAlignCenter />
          <FaAlignRight />
          <FaAlignJustify />
     </div>



        </div>
      </div>
    </div>
  );
}

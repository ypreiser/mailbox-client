import React from 'react'
import styles from "./style.module.css"
import Jsondata from '../../data.json';
import EmailList from "../EmailList"
import Search from '../Search';
import Seperator from '../Seperator';

import { Outlet } from 'react-router-dom';


export default function EmailsTab() {




  const emails = Jsondata.inbox;


  return (
    <>
      <div className={styles.tab}>
        <div className={styles.header}>
          <div className={styles.search}>
            <Search />
          </div>
        </div>

        <Seperator />
        <div className={styles.emailsListContianer}>
          <EmailList data={emails} />
        </div>

      </div>
      <Outlet /> {/* EmailPage יוצג כאן */}
    </>
  )
}

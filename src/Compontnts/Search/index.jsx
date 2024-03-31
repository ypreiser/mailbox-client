import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from './style.module.css';

export default function Search() {
  return (
    <div className={styles.searchInput}>
        <input type="search" placeholder='Search' />
        <HiMagnifyingGlass className={styles.searchIcon} />
    </div>
  )
}

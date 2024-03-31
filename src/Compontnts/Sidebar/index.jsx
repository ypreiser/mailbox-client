import React from 'react'
import ItemsList from '../ItemsList'
import styles from "./style.module.css"
import { HiChevronLeft,HiEllipsisVertical,HiOutlinePlus   } from "react-icons/hi2";
import Button from '../Button';
import Seperator from '../Seperator';



export default function Sidebar() {


    const sections = [
        "Inbox",
        "Sent Emails",
        "Favourite",
        "Draft",
        "Deleted",
        "More"
    ];



    const labels = [
        "Work",
        "Promising offers",
        "Work in Progress",
        "In acceptance",
        "Read later"
    ]


    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.backButton}><button> <HiChevronLeft /> </button></div>
                <div className={styles.logo}>MailBox</div>
            </div>

            <Seperator/>

            <div className={styles.NewMessageButton}>
                <Button />

            </div>


            <ItemsList
                data={sections} dataType={sections} />



            <div className={styles.labelsHeader}>
                <div className={styles.title}>Labels</div>
               <div className={styles.buttonsContainer}>
               <div className={styles.plusButton}><button> <HiOutlinePlus  /> </button></div>
                <div className={styles.threeDots}><button><HiEllipsisVertical/></button></div>
               </div>
            </div>
            <ItemsList
                data={labels} dataType="labels" />
        </div>
    )
}

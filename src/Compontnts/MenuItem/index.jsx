import React from 'react';
import styles from "./style.module.css";
import { HiInbox, HiMail, HiStar, HiPencil, HiTrash, HiDotsHorizontal, HiChevronDown  } from "react-icons/hi"; 

import { MdLabel } from "react-icons/md";
import { NavLink } from 'react-router-dom';



export default function MenuItem({ title, counter, dataType }) {


    const colorMapping = {}; // אובייקט לשמירת התאמה בין כותרות לצבעים
    const colors = ["#d0d3e3", "#f2dea8", "#8edccf", "#b2e9ff", "#cdbfff"]; // גווני פסטל: תכלת, צהוב, כתום, ירוק
    const usedColors = new Set(); // סט לשמירת הצבעים שכבר נבחרו
    
    const getColorForTitle = (title) => {
        if (colorMapping[title]) {
            return colorMapping[title];
        }
        
        // פילטר למציאת צבעים שלא נמצאים ב-Set של הצבעים המשומשים
        const availableColors = colors.filter(color => !usedColors.has(color));
        
        // אם נגמרו הצבעים הזמינים, נקיים את ה-Set ונתחיל מחדש
        if (availableColors.length === 0) {
            usedColors.clear();
            availableColors.push(...colors);
        }
    
        // בחירת צבע רנדומלי מתוך הצבעים הזמינים
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        
        // שמירת הצבע לכותרת זו והוספתו ל-Set של צבעים שכבר נמצאים בשימוש
        colorMapping[title] = randomColor;
        usedColors.add(randomColor);
        
        return randomColor;
    };
    

    // פונקציה לבחירת האייקון הנכון
    const renderIcon = (title, dataType) => {
        if (dataType === 'labels') {
            const iconColor = getColorForTitle(title);
            return <MdLabel style={{ color: iconColor }} />;



        } else {
            switch (title) {
                case 'Inbox':
                    return <HiInbox />;
                case 'Sent Emails':
                    return <HiMail />;
                case 'Favourite':
                    return <HiStar />;
                case 'draft':
                    return <HiPencil />;
                case 'Deleted':
                    return <HiTrash />;
                case 'More':
                    return <HiChevronDown  />;
                default:
                    return <HiInbox />;
            }
        }
    };


     // רינדור מותנה של className לפי dataType
     const itemClass = dataType === 'labels' ? styles.labelItem : styles.item;
     const iconClass = dataType === 'labels' ? styles.labelIcon : styles.icon;

     return (
        <NavLink to={`/menu/${title}`}
        className={itemClass}>

        <div className={iconClass}>{renderIcon(title, dataType)}</div>
        <div className={styles.title}>{title}</div>
        {counter && <div className={styles.counter}>{counter}</div>}
    </NavLink>
    );
}






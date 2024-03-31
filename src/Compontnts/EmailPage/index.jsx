import React from 'react'
import styles from "./style.module.css"
import ToSection from '../ToSection';
import Jsondata from '../../data.json';
import Button from '../Button';
import { HiStar, HiPrinter, HiTrash } from "react-icons/hi";
import { HiEllipsisVertical, HiOutlineXMark, HiMiniPhoto, HiMiniPaperClip } from "react-icons/hi2";
import EmailInput from '../EmailInput';
import Seperator from '../Seperator';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function EmailPage() {

    const { emailId } = useParams();
    const [currentThread, setCurrentThread] = useState(null);

    useEffect(() => {
        // מציאת השיחה לפי ה-ID
        const thread = Jsondata.threads.find(thread => thread.emailId.toString() === emailId);
        setCurrentThread(thread);
    }, [emailId]);

    // אם currentThread לא קיים, הצגת הודעת טעינה
    if (!currentThread) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className={styles.container}>
    
            <div className={styles.header}>
    
                <div className={styles.label}>
    
                    <div className={styles.labelTextAndIcon}>
    
                        <div className={styles.text}>Promising offers</div>
                        <div className={styles.xIcon}><HiOutlineXMark /></div>
    
                    </div>
    
                    <div className={styles.long}></div>
                    <div className={styles.square}></div>
                </div>
    
                <div className={styles.icons}>
                    <HiStar className={styles.icon} />
                    <HiPrinter className={styles.icon} />
                    <HiTrash className={styles.icon} />
                    <HiEllipsisVertical className={styles.icon} />
                </div>
            </div>
    
            <Seperator />
    
            <div className={styles.timeAndTitle}>
                <div className={styles.seperator}></div>
                {/* הצגת תאריך ונושא של השיחה מתוך currentThread */}
                <div className={styles.date}>{currentThread.messages[0].time}</div> {/* הנחה שכל ההודעות נשלחו באותו יום */}
                <div className={styles.messageTitle}>{currentThread.subject}</div>
    
            </div>
    
            <div className={styles.historyContainer}>
                {/* הצגת ההודעות מתוך currentThread */}
                {currentThread.messages.map((msg, index) => (
                    <ToSection
                        key={index}
                        sender={msg.sender}
                        message={msg.message}
                        date={msg.time}
                        imageSrc={msg.image}
                        isFromYou={msg.sender === "You"}
                        isLastMessage={index === currentThread.messages.length - 1}
                    />
                ))}
            </div>
    
            <div className={styles.input}>
                <EmailInput />
            </div>
    
            <div className={styles.footer}>
    
                <div className={styles.icons}>
                    <HiMiniPhoto />
                    <HiMiniPaperClip />
                </div>
                <div className={styles.icons}>
                    <HiTrash className={styles.icon} />
                    <HiEllipsisVertical className={styles.icon} />
                    <Button title="Send" icon="send" />
                </div>
            </div>
    
        </div>
    );
    
}

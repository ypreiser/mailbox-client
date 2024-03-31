import React from 'react';
import Jsondata from '../../data.json';
import MailItem from '../MailItem';

const EmailList = ({data, dataType}) => {
  
  const unreadCount = Jsondata.inbox?.filter(email => email.unread).length;

  return (
<div className={StyleSheet.emailsList}>
      {data.map((email, index) => (
        <MailItem
        key={email.emailId} // שימוש ב-emailId כמפתח עדיף על פני index
        emailId={email.emailId} // העברת ה-emailId ל-MailItem
        sender={email.sender}
        time={email.time}
        image={email.image}
        message={email.message}
        counter={email.unread ? unreadCount : null} // דוגמה להצגת '1' אם ההודעה לא נקראה
        />)
      )}
    </div>
  );
};

export default EmailList;

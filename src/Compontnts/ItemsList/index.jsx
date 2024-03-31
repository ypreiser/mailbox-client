import React from 'react';
import Jsondata from '../../data.json';
import MenuItem from "../MenuItem"

const ItemsList = ({data, dataType}) => {
  
  const unreadCount = Jsondata.inbox?.filter(email => email.unread).length;

  return (
    <div>
      {data.map((title, index) => (
        <MenuItem
          key={index}
          title={title}
          counter={title === "Inbox" ? unreadCount : ""}
          dataType={dataType}
        />)
      )}
    </div>
  );
};

export default ItemsList;

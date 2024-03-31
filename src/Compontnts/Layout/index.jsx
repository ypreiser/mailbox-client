import React from 'react'
import styles from "./style.module.css"
import Sidebar from '../Sidebar';
import EmailsTab from '../EmailsTab';
import EmailPage from '../EmailPage';
import SidebarIcons from '../SiebarIcons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






export default function Layout() {
  return (
    <Router>
      <div className={styles.layout}>
        <SidebarIcons />
        <Sidebar />
        <Routes>
  <Route path="/menu/:menuName" element={<EmailsTab />}>
    <Route index element={<div>בחר שיחה</div>} /> {/* הצגת הודעה ברירת מחדל או תוכן כלשהו */}
    <Route path=":emailId" element={<EmailPage />} />
  </Route>
</Routes>

      </div>
    </Router>
  );
}


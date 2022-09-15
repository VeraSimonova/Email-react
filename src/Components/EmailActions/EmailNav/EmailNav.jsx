import styles from './EmailNav.module.css';
function EmailNav() {
    return (
      <div className={styles.EmailNav}>
        <ul>
          <li>Входящие</li>
          <li>Отправленные</li>
          <li>Спам</li>
        </ul>
      </div>
    );
  }
  
  export default EmailNav;
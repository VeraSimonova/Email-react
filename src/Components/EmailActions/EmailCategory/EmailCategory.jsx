import styles from './EmailCategory.module.css';
function EmailCategory() {
    return (
      <div className={styles.EmailCategory}>
        <ul>
          <li>Работа</li>
          <li>Учеба</li>
          <li>Поддержка</li>
        </ul>
      </div>
    );
  }
  
  export default EmailCategory;
  
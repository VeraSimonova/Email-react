import styles from './EmailActions.module.css';
import EmailCategory from './EmailCategory/EmailCategory';
import EmailNav from './EmailNav/EmailNav';
function EmailActions() {
  return (
    <div className={styles.EmailActions}>
      <EmailNav />
      <EmailCategory />
    </div>
  );
}

export default EmailActions;

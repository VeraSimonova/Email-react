import styles from './EmailActions.module.css';
import EmailCategory from './EmailCategory/EmailCategory';
import EmailNav from './EmailNav/EmailNav';
let links = [
  {name: 'входящие', link: '/'},
  {name: 'Отправленные', link: '/1'},
  {name: 'Спам', link: '/2'},
]
let linksCategory = [
  {name: 'Работа', link: '/3'},
  {name: 'Учеба', link: '/1'},
  {name: 'Приватное', link: '/2'},
]



function EmailActions() {
  
  return (
    <div className={styles.EmailActions}>
      <EmailNav links={links} name='menu'/>
      <EmailNav links={linksCategory} name='category'/>
    </div>
  );
}

export default EmailActions;

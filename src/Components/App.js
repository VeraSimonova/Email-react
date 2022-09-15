
import styles from './App.module.css';
import EmailActions from './EmailActions/EmailActions';
import EmailWrite from './EmailWrite/EmailWrite';
import Content from './Content/Content';

function App() {
  return (
    <div className={styles.App}>
      <sidebar className='styles.sidebar'>
        <EmailWrite />
        <EmailActions />
      </sidebar>
     
      <Content />
    </div>
  );
}

export default App;

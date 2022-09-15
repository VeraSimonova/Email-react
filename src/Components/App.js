
import styles from './App.module.css';
import EmailActions from './EmailActions/EmailActions';
import EmailWrite from './EmailWrite/EmailWrite';
import Content from './Content/Content';

function App() {
  return (
    <div className={styles.App}>
      <div className='styles.sidebar'>
        <EmailWrite />
        <EmailActions />
      </div>
     
      <Content />
    </div>
  );
}

export default App;

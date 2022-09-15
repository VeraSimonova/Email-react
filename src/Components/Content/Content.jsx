
import Inbox from '../inbox/Inbox';
import NewMsg from '../NewMsg/NewMsg';
import styles from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
function Content() {
  return (
    <div className={styles.Content}>
      <Routes>
        <Route path='/newmsg' element={<NewMsg />} />
        <Route path='/' element={<Inbox />} />
      </Routes>
      

    </div>
  );
}

export default Content;
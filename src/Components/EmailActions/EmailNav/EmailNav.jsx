import styles from './EmailNav.module.css';
import { NavLink } from "react-router-dom";

let links = [
  {name: 'входящие', link: '/'},
  {name: 'Отправленные', link: '/1'},
  {name: 'Спам', link: '/2'},
]

function EmailNav() {

    return (
      <div className={styles.EmailNav}>
        <ul>
          {
            links.map((el)=>
              <li>
                <NavLink to={el.link} className={({isActive})=> 
                  isActive ? styles.active : undefined}>
                  {el.name}
                </NavLink>
              </li>
            )
          }
          
        </ul>
      </div>
    );
  }
  
  export default EmailNav;
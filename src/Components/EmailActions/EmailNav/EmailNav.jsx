import styles from './EmailNav.module.css';
import { NavLink } from "react-router-dom";



function EmailNav(props) {
  let a = null;
    return (
      <div className={styles.EmailNav}>
        {a = props.name}
        <div className={styles.a}>
          <ul>
            {
              props.links.map((el, index)=>
                <li key={index}>
                  <NavLink to={el.link} className={({isActive})=> 
                    isActive ? styles.active : undefined}>
                    {el.name}
                  </NavLink>
                </li>
              )
            }
            
          </ul>
        </div>
      </div>
    );
  }
  
  export default EmailNav;
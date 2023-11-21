import styles from './Header.module.css'
import logo from '../../../public/logo.png'
export function Header(){
    return (
        <header className={styles.header}>
            <img 
                src={logo} 
                alt="Logo do Todolist com um foguete ao lado escrito todo"  
                className={styles.logo}
            />
        </header>
    )
}
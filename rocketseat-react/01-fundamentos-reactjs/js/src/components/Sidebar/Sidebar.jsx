import { PencilLine} from "@phosphor-icons/react";

import styles from './Sidebar.module.css'
import { ImageAvatar } from "../ImageAvatar/ImageAvatar";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"  
            />
            <div className={styles.profile}>
                <ImageAvatar
                    hasBorder 
                    endAvatar="https://avatars.githubusercontent.com/u/67662178?v=4"
                />

                <strong>Maicon Souza</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine 
                        size={20}
                    />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}
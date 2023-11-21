import styles from './ImageAvatar.module.css'

export function ImageAvatar({endAvatar = '', hasBorder = true}){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={endAvatar}
            alt="" 
        />
    )
}
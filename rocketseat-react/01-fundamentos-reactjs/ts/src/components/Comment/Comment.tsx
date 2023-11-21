import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { ImageAvatar } from '../ImageAvatar/ImageAvatar'
import { useState } from 'react'

interface IComment {
    imgAuthor: string
    author: string
    comment: string
    onDeleteComment: (commentID: string) => void
    commentID: string
}

export function Comment({imgAuthor, author, comment, onDeleteComment, commentID}: IComment){
    const [ likeCount, setLikeCount ] = useState(0)

    function handleDeleteCommment(){
        onDeleteComment(commentID)
    }



    return (
        <div className={styles.comment}>
            <ImageAvatar
                hasBorder={false} 
                endAvatar={imgAuthor}  
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time dateTime='2023-09-13' title='treze de setembro de 2023 '>Cerca 1h atrás</time>
                        </div>
                        <button title='Deletar' onClick={handleDeleteCommment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{comment}</p>

                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
} 
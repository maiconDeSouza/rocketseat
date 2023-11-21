import { v4 as uuidv4 } from 'uuid'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from '../Comment/Comment'
import { ImageAvatar } from '../ImageAvatar/ImageAvatar'
import styles from './Post.module.css'
import { useState } from 'react'

const userLogin = {
    name: 'Maicon Souza',
    avatarUrl: 'https://avatars.githubusercontent.com/u/67662178?v=4'
}



export function Post({ post}){
    const publishedDateFormat = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([])
    const [commentValue, setCommentValue] = useState('')

    function handleCreateNewComment(event){
        event.preventDefault()
        
        setComments([...comments, createComment(commentValue)])
        setCommentValue('')
    }

    function createComment(coment){
        return {
            id: uuidv4(),
            text: coment
        }
    }

    function handleCommentValue(event){
        event.target.setCustomValidity('')
        setCommentValue(event.target.value)
    }

    function deleteComment(id){
        const commentsWithoutDeleteOne = comments.filter(comment => comment.id !== id)
        setComments(commentsWithoutDeleteOne)
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Preenche ai mano!')
    }

    const isNewCommentEmpty = commentValue.length === 0
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <ImageAvatar
                        hasBorder
                        endAvatar={post.author.avatarUrl} 
                    />
                    <div className={styles.authorinfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time dateTime={post.publishedAt.toISOString()} title={publishedDateFormat}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    post.content.map((line, index) => {
                        if(line.tag === 'paragraph') return <p key={index}>{line.text}</p>
                        if(line.tag === 'link') return <p key={index}><a href={line.href}>{line.text}</a></p>
                        if(line.tag === 'hashtag'){
                            return (
                                <p key={index}>
                                {
                                    line.hashtag.map(tag => {
                                        return <a href="#" key={tag}>{tag}</a>
                                    })
                                }
                            </p>
                            )
                        }
                    })
                }
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='deixe um comentário'
                    onChange={handleCommentValue}
                    value={commentValue}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                imgAuthor={userLogin.avatarUrl} 
                                author={userLogin.name} 
                                comment={comment.text}
                                commentID={comment.id}
                                key={comment.id}
                                onDeleteComment={deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
'use client';
import styles from './../css/card.module.css'
interface CardProps {
    title : string,
    description : string,
    buttonText : string,
    imageUrl ?: string
}
const Card: React.FC<CardProps> = (
    {
        title,
        description,
        buttonText,
        imageUrl
    }
) => {
    return(
<div className={styles.card}>
    
    <div>
    
    { title  ? 
    <h1 className={styles.card_title}>
        {title}
    </h1> : '' }

    { description  ? 
    <h3 className={styles.card_description}>
        {description}
    </h3> : ''
    }
    { buttonText  ? <button className={styles.card_button}>
        {buttonText}
    </button>: '' }
    </div>
    <div>
        {imageUrl ? imageUrl : ''}
    </div>

</div>
    )
}

export default Card;
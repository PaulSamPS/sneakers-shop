import clsx from 'clsx'
import styles from './cart-item.module.scss'
import { useState } from 'react'

const CardItem = ( { imageUrl, name, price, id, onPlus }) => {
    const [isAdd, setIsAdd] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const onClickPlus = () => {
        onPlus({ imageUrl, name, price, id })
        setIsAdd(!isAdd)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={clsx(styles.favorite, 'cu-p btn')}>
                <img
                    onClick={ onClickFavorite }
                    width={32}
                    height={32}
                    src={ isFavorite ? "/assets/like.svg" : "/assets/unLike.svg" }
                    alt="favorite"
                />
            </div>
            <img
                className={styles.item}
                src={ imageUrl }
                alt="Кроссовки"
            />
            <h5 className='mt-15'>{ name }</h5>
            <div className={clsx(styles.cardBottom, 'd-flex justify-between align-center mt-15')}>
                <div className='d-flex flex-column'>
                    <p>Цена:</p>
                    <b>{ price } &#8381;</b>
                </div>
                <div className={clsx(styles.addToCart, 'cu-p btn')}>
                    <img
                        onClick={ onClickPlus }
                        src={ isAdd ? "/assets/added.svg" : "/assets/plus.svg" }
                        alt="plus"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardItem
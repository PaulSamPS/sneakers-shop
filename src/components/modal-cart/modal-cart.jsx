import styles from './modal-cart.module.scss'
import clsx from 'clsx'

const ModalCart = ({onRemoveItem, onCloseCart, onClickOverlay, cartItems = []}) => {
    return (
        <div className={styles.overlay} onClick={onClickOverlay}>
            <div className={clsx(styles.drawer, 'd-flex flex-column')}>
                <h2 className='d-flex justify-between'>
                    Корзина
                    <img
                        onClick={onCloseCart}
                        className={clsx(styles.remove, 'cu-p btn')}
                        src="/assets/delete.svg"
                        alt="remove"
                    />
                </h2>

                {
                    cartItems.length > 0
                    ?   <>
                            <div className={styles.cartItems}>
                                {
                                    cartItems.map((item) => (
                                        <div key={ item.id } className={clsx(styles.item, 'd-flex align-center')}>
                                            <div
                                                className={styles.cartImage}
                                                style={{ backgroundImage: `url(${ item.imageUrl })`}}
                                            >

                                            </div>
                                            <div className={styles.title}>
                                                <p>{ item.name }</p>
                                                <b>{ item.price } &#8381;</b>
                                            </div>
                                            <img
                                                onClick={ () => onRemoveItem(item.id) }
                                                className={clsx(styles.remove, 'cu-p btn')}
                                                src="/assets/delete.svg"
                                                alt="remove"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.cartBottom}>
                                <div className={clsx(styles.cartSum, 'd-flex justify-between mb-20')}>
                                    <p>Итого:</p>
                                    <div></div>
                                    <b>21 498 &#8381;</b>
                                </div>
                                <div className={clsx(styles.cartSum, 'd-flex justify-between mb-20')}>
                                    <p>Налог 5%:</p>
                                    <div></div>
                                    <b>1074 &#8381;</b>
                                </div>
                                <button className='cu-p btn'>
                                    Оформить заказ
                                    <img src="/assets/arrow.svg" alt="arrow"/>
                                </button>
                            </div>
                        </>
                        : <div className={styles.cartEmpty}>
                            <img className='mb-20' src="/assets/cart-empty.png" alt=""/>
                            <h2 className='mb-10'>Корзина пустая</h2>
                            <p className='opacity-6 mb-40'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button className='cu-p btn'
                                    onClick={onCloseCart}>
                                Вернуться назад
                                <img src="/assets/back-arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ModalCart
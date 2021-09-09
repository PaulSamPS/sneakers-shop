import styles from './header.module.scss'
import clsx from 'clsx'

const Header = ({onCartOpen}) => {
    return (
        <header className={clsx(styles.header, 'd-flex justify-between align-center p-40')}>
            <div className='d-flex align-center cu-p'>
                <img
                    className='mr-15'
                    width={40}
                    height={40}
                    src='/assets/logo.svg'
                    alt='logo'/>
                <div>
                    <h3>Sneakers Shop</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='d-flex align-center'>
                <li className='mr-30 d-flex '>
                    <div className={clsx(styles.icons, 'mr-10 cu-p btn')}>
                        <img
                            onClick={onCartOpen}
                            width={20}
                            height={20}
                            src='/assets/cart.svg'
                            alt='cart'/>
                    </div>
                    <span>1250 руб.</span>
                </li>
                <li className='mr-30'>
                    <div className={clsx(styles.icons, 'cu-p btn')}>
                        <img
                            width={20}
                            height={20}
                            src='/assets/favorite.svg'
                            alt='favorite'/>
                    </div>
                </li>
                <li>
                    <div className={clsx(styles.icons, 'cu-p btn')}>
                        <img
                            width={20}
                            height={20}
                            src='/assets/union.svg'
                            alt='union'/>
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header
import { useEffect, useState } from 'react';
import CardItem from '../card-item/card-item'
import clsx from 'clsx'
import Spinner from '../spinner/spinner'
import ModalCart from '../modal-cart/modal-cart'

import styles from './content.module.scss'
import axios from 'axios';

const Content = ({
    onCartOpen,
    onCloseCart,
    onClickOverlay,
}) => {
    const [searchValue, setSearchValue] = useState('')
    const [cartItems, setCartItems] = useState([])
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://613a6aed1fcce10017e78eb2.mockapi.io/sneakers')
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
        axios.get('https://613a6aed1fcce10017e78eb2.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data)
            })
    }, [])


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    const onClearInput = () => {
        setSearchValue('')
    }

    const onAddToCart = (obj) => {
        axios.post ( 'https://613a6aed1fcce10017e78eb2.mockapi.io/cart', obj ).then ( res  =>
            setCartItems((prev) => [...prev, obj])
        )
    }

    const onRemoveItem = (id) => {
        axios.delete ( `https://613a6aed1fcce10017e78eb2.mockapi.io/cart/${id}`).then ( res  =>
            setCartItems((prev) => prev.filter((item) => item.id !== id))
        )
    }

    return (
        <main className='p-40'>
            <div className={clsx(styles.title,'d-flex justify-between align-center')}>
                <h2 className={styles.text}>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h2>
                <div className={clsx(styles.search, 'd-flex align-center')}>
                   <img
                       width={14}
                       height={14}
                       src="/assets/search.svg"
                       alt="search"
                   />
                    {
                        searchValue && <img
                            className={ clsx ( styles.clearInput, 'cu-p btn' ) }
                            src="/assets/delete.svg"
                            alt="remove"
                            onClick={ onClearInput }/>
                    }
                   <input onChange={ onChangeSearchInput } value={ searchValue } placeholder='Поиск...'/>
                </div>
            </div>
            <div className={clsx(styles.cards, 'mt-40')}>
                {
                    isLoading
                    ? <Spinner />
                    : items
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => {
                            return (
                                <CardItem {...item} key={item.id} onPlus={(obj) => onAddToCart(obj)}/>
                            )
                        })
                }
            </div>
            {
                onCartOpen
                && <ModalCart
                    onCloseCart={onCloseCart}
                    onClickOverlay={onClickOverlay}
                    cartItems={cartItems}
                    onPlus={(obj) => onAddToCart(obj)}
                    onRemoveItem={onRemoveItem}
                />
            }
        </main>
    )
}

export default Content
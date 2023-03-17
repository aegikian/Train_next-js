import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa'
import styles from '../styles/Header.module.css'

const Header = () => {
    const [locations, setLocation] = useState(() => {
        let lock = [];
        lock.length = 4;
        lock.fill(styles.link_nav)
        return lock
    })

    const links = [
        {
            link: "/",
            title: 'Главная',
            id: 1
        },
        {
            link: " /about",
            title: 'О нас',
            id: 2
        },
        {
            link: " /reviews",
            title: 'Отзывы',
            id: 3
        },
        {
            link: " /burgers",
            title: 'Бургеры',
            id: 4
        },
    ]


    return (
        <header className={styles.header}>
            <div>
                <FaHamburger className={styles.ham_pic} />
            </div>
            <nav>
                {
                    links.map((link, i) => (
                        <Link href={link.link} key={link.id} className={locations[i]} >
                            {link.title}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}

export default Header;

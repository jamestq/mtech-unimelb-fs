import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import mtechLogo from '../assets/mtech-logo.png';
import burgerIcon from '../assets/icons/burger.svg';

import styles from '../styles/Navbar.module.css';

export default function Navbar({pages, screenSize, windowWidth}){

    const [burgerClosed, setBurgerClosed] = useState(true);

    function changeBurgerStatus(){
        setBurgerClosed(!burgerClosed);
    }

    function closeBurger(){
        setBurgerClosed(true);
    }

    function getNavLinks(){
        const list = Object.keys(pages)
                    .map(page => 
                        <li key={page}>
                            <Link href={pages[page]} onClick={closeBurger}>{page}</Link>
                        </li>)
        return <ul>{list}</ul>
    }

    return <>
        <div className= {styles.navbar}>
            <div className={styles.navbarDisplay}>
                <Link className="links" href={"/"}>
                    <Image
                    src={mtechLogo}
                    height={80}
                    width={80}
                    alt="Mtech logo"
                    priority
                    />
                </Link>
                {windowWidth>screenSize.sm? 
                    getNavLinks() : 
                    <button onClick={changeBurgerStatus}>
                        <Image
                        src={burgerIcon}    
                        width={40}
                        height={30}
                        alt="burger-nav"
                        priority
                        className="burger" 
                        />
                    </button>
                }
            </div>
            {!burgerClosed && windowWidth<=screenSize.sm &&
                <div className={styles.burgerDisplay}>
                    {getNavLinks()}
                </div>
            }
        </div>
    </>
}
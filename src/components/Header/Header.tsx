'use client';

import Logo from 'components/UI/Logo/Logo';
import styles from './header.module.scss';
import ProfileLink from 'components/UI/ProfileLink/ProfileLink';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';

const Header = () => {
    const user = useAppSelector((state) => state.auth.user);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState<boolean>(false);

    function checkVisibilityHeader(){
        window.scrollY > 50 ? setIsHeaderScrolled(true) : setIsHeaderScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibilityHeader);
    }, []);

    return (
        <header className={`${styles.header} ${isHeaderScrolled ? styles.header__scroll : ''}`}>
            <div className={`${styles.header__container} ${isHeaderScrolled ? styles.header__container_scroll : ''}`}>
                <Logo/>
                {/* <Input className={styles['header-search']} size="large" placeholder="Limbo..." prefix={<SearchOutlined className={styles['header-search-icon']}/>} /> */}
                {/* <SearchOutlined className={styles['header-search-icon']}/> */}
                <ProfileLink userName={user?.name} userAvatar={user?.avatar}/>
            </div>
        </header>
    )
}

export default Header;
'use client';

import Logo from 'components/UI/Logo/Logo';
import styles from './header.module.scss';
import ProfileLink from 'components/UI/ProfileLink/ProfileLink';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Header = () => {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo/>
                {/* <Input className={styles['header-search']} size="large" placeholder="Limbo..." prefix={<SearchOutlined className={styles['header-search-icon']}/>} /> */}
                {/* <SearchOutlined className={styles['header-search-icon']}/> */}
                <ProfileLink userName={user?.name} userAvatar={user?.avatar}/>
            </div>
        </header>
    )
}

export default Header;
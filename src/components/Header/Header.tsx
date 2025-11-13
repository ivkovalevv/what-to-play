'use client';

import Logo from 'components/UI/Logo/Logo';
import styles from './header.module.scss';
import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ProfileLink from 'components/UI/ProfileLink/ProfileLink';

const Header = () => {
    const { Text } = Typography;

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo/>
                {/* <Input className={styles['header-search']} size="large" placeholder="Limbo..." prefix={<SearchOutlined className={styles['header-search-icon']}/>} /> */}
                {/* <SearchOutlined className={styles['header-search-icon']}/> */}
                <ProfileLink/>
            </div>
        </header>
    )
}

export default Header;
'use client';

import Logo from 'components/app/UI/Logo/Logo';
import styles from './header.module.scss';
import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ProfileLink from 'components/app/UI/ProfileLink/ProfileLink';

const Header = () => {
    const { Text } = Typography;

    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <Logo/>
                {/* <Input className={styles['header-search']} size="large" placeholder="Limbo..." prefix={<SearchOutlined className={styles['header-search-icon']}/>} /> */}
                {/* <SearchOutlined className={styles['header-search-icon']}/> */}
                <ProfileLink/>
            </div>
        </header>
    )
}

export default Header;
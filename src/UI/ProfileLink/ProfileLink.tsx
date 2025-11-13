'use client';

import styles from './profile-link.module.scss';
import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import Link from 'next/link';

const ProfileLink = () => {
    const { Text } = Typography;

    return (
        <Link href="/auth" className={styles.profile__link}>
            <Avatar className={styles.profile__link_icon} size={40} icon={<UserOutlined />} />
            <Text className={styles.profile__link_name}>Login</Text>
        </Link>
    )
}

export default ProfileLink;
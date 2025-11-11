'use client';

import styles from './profile-link.module.scss';
import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons'

const ProfileLink = () => {
    const { Text } = Typography;

    return (
        <a href='#' className={styles['profile-link']}>
            <Avatar size={40} icon={<UserOutlined />} />
            <Text className={styles['profile-link__name']}>Ivkovalevv</Text>
        </a> 
    )
}

export default ProfileLink;
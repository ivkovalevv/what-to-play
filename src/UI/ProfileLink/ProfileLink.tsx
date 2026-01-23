'use client';

import { useState, useEffect } from "react";
import styles from './profile-link.module.scss';
import { Avatar, Typography } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/slices/auth.slice';
import { usePathname } from "next/navigation";

interface ProfileLinkProps {
    userName?: string;
    userAvatar?: string;
}

const ProfileLink = (props: ProfileLinkProps) => {
    const { Text } = Typography;
    const dispatch = useAppDispatch();
    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleOpenChange = (info: boolean) => {
        setOpen(info);
        
        window.addEventListener('scroll', () => {
            setOpen(false);
        });
    }

    const items: MenuProps['items'] = [
    {
        key: '2',
        label: 'Profile',
        icon: <UserOutlined />,
    },
    {
        key: '3',
        label: (
            <button className={styles.logout_button} onClick={handleLogout}>Log out</button>
        ),
        icon: <LogoutOutlined />,
    },
    ];

    if (!isMounted) {
        return (
            <Link href="/auth" className={styles.profile__link}>
                <Avatar className={styles.profile__link_icon} size={40} icon={<UserOutlined />} />
                <Text className={styles.profile__link_name}>Login</Text>
            </Link>
        );
    }

    if(pathname === '/auth'){
        return null;
    }

    return (
        <>
            {props.userName ? (
                <Dropdown menu={{ items }} onOpenChange={handleOpenChange} open={open} trigger={['click']} overlayClassName={styles.dropdown}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space className={styles.space}>
                        <Avatar className={styles.profile__link_icon} size={40} src={props.userAvatar}/>
                        {props.userName}
                    </Space>
                    </a>
                </Dropdown>
            ) : (
                <Link href="/auth" className={styles.profile__link}>
                    {props.userAvatar ? (
                        <Avatar className={styles.profile__link_icon} size={40} src={props.userAvatar} />
                    ) : (
                        <Avatar className={styles.profile__link_icon} size={40} icon={<UserOutlined />} />
                    )}
                    <Text className={styles.profile__link_name}>{props.userName || 'Login'}</Text>
                </Link>
            )}
        </>
    )
}

export default ProfileLink;
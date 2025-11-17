'use client';

import { Flex, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState } from "react";
import emailjs from '@emailjs/browser'
import styles from "./auth-form.module.scss"
import Image from "next/image";
import { generateRandomPassword } from "components/utils/functions";

const AuthForm = () => {
    const [isFormInvalid, setIsFormInvalid] = useState('');
    const [isLodaing, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value } = e.target;
        setEmail(value.trim().toLowerCase());
        setIsFormInvalid('');
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    }

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        if (!validateEmail(email)) {
            setIsFormInvalid('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        const pass = generateRandomPassword();

        emailjs
        .send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            {
                to_email: email,
                user_email: process.env.NEXT_PUBLIC_EMAILJS_EMAIL!,
                message: 'Authorization request',
                password: pass
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
            (result) => {
                console.log('SUCCESS!', result.text)
                setIsLoading(false);
                setPassword(pass);
                console.log(password);
                alert('Сообщение отправлено!')
            },
            (error) => {
                console.log('FAILED...', error)
                setIsLoading(false)
                alert('Ошибка отправки!')
            }
        )
    }
    
    return (
        <div className={styles.form_wrapper}>
            <Image 
                width={150}
                height={150}
                src={'/assets/images/svg/logo.svg'} 
                className={styles.form_wrapper__logo} 
                alt='logo'/>
            <p className={styles.form_wrapper__heading}>Enter your email address to continue</p>

            {/* {loginMutation.isError && (
                <Alert
                    message="Login error"
                    description={getErrorMessage(loginMutation.error)}
                    type="error"
                    showIcon
                    closable
                    className="alert"
                />
            )} */}

            <form className={styles.form} onSubmit={sendEmail}>
                <Flex vertical gap="middle" style={{ width: '100%' }}>
                    <div className="input-groupe">
                        <Input 
                            name="email"
                            placeholder="Email" 
                            prefix={<UserOutlined className={styles.form__input_icon} />} 
                            value={email}
                            status={isFormInvalid && 'error'}
                            onChange={handleChange}
                            className={styles.form__input}/>
                        {isFormInvalid && (
                            <p className={styles.form__input_invalid}>
                                {isFormInvalid}
                            </p>
                        )}
                    </div>
                    <Button size='large' type="primary" disabled={!email || isFormInvalid !== ''} htmlType="submit" className={styles.form__button}>
                        {isLodaing ? <LoadingOutlined className="loading-icon"/> : 'Next'}
                    </Button>
                </Flex>
            </form>
        </div>
    )
}

export default AuthForm;
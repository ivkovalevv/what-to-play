'use client';

import { Flex, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import styles from "./auth-form.module.scss"
import Image from "next/image";

const AuthForm = () => {
    const [isFormInvalid, setIsFormInvalid] = useState('');
    const [email, setEmail] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value } = e.target;
        setEmail(value.trim().toLowerCase());
    };

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('сообщение отправляется')

        if (!email) return

        emailjs
        .send(
            'service_ivkov',     // Service ID
            'template_test1',    // Template ID  
            {
                to_email: email,
                user_email: 'ivkovalevv@gmail.com',
                message: 'Authorization request'
            },
            '6xewHig9R5Uzd5OeD'      // Public Key
        )
        .then(
            (result) => {
            console.log('SUCCESS!', result.text)
            alert('Сообщение отправлено!')
            },
            (error) => {
            console.log('FAILED...', error)
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
                            <p className="input-invalid">
                                {isFormInvalid}
                            </p>
                        )}
                    </div>
                    <Button size='large' type="primary" disabled={!email} htmlType="submit" className={styles.form__button}>
                        {/* <LoadingOutlined className="loading-icon"/>  */} Next
                    </Button>
                </Flex>
            </form>
        </div>
    )
}

export default AuthForm;
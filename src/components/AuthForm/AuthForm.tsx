'use client';

import { Flex, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoadingOutlined, EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import styles from "./auth-form.module.scss"
import Image from "next/image";
import { generateRandomPassword, validateEmail } from "components/utils/functions";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthForm = () => {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const [isFormInvalid, setIsFormInvalid] = useState('');
    const [isLodaing, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        setIsFormInvalid('');
        setFormData(prev => ({
        ...prev,
        [name]: value.trim()
        }));
    };


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email) return;

        if (!validateEmail(formData.email)) {
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
                to_email: formData.email,
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
                alert('Сообщение отправлено!')
            },
            (error) => {
                console.log('FAILED...', error)
                setIsLoading(false)
                alert('Ошибка отправки!')
            }
        )
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if(formData.email !== '' && formData.password === password){
            setIsLoading(false);
            const mockUser = {
                id: '1',
                email: formData.email,
                name: 'Hanzo Hasashi',
                avatar: '/assets/images/scorpion.jpg'
            };
            
            dispatch(login({
                user: mockUser,
                token: 'your-auth-token-here'
            }));
        } else {
            setIsLoading(false);
        }
    }
    
    return (
        <div className={styles.form_wrapper}>
            <Image 
                width={150}
                height={150}
                src={'/assets/images/svg/logo.svg'} 
                className={styles.form_wrapper__logo} 
                alt='logo'/>
            <h2 className={styles.form_wrapper__heading}>Registration</h2>
            <p className={styles.form_wrapper__description}>{
                password ? 'Check your email address and enter the password you sent' : 'Enter your email address to continue'
                }</p>

            <form className={styles.form} onSubmit={password ? handleLogin : sendEmail}>
                <Flex vertical gap="middle" style={{ width: '100%' }}>
                    <div className={styles.input_groupe}>
                        <Input 
                            name="email"
                            placeholder="Email" 
                            prefix={<UserOutlined className={styles.form__input_icon} />} 
                            value={formData.email}
                            status={isFormInvalid && 'error'}
                            onChange={handleChange}
                            className={styles.form__input}
                            disabled={isLodaing || password !== ''}/>
                        {password && (
                            <Input.Password
                                name="password"
                                placeholder="Password" 
                                prefix={<LockOutlined className={styles.form__input_icon}/>} 
                                value={formData.password}
                                status={isFormInvalid && 'error'}
                                disabled={isLodaing}
                                onChange={handleChange}
                                className={styles.form__input}
                                visibilityToggle={true}/>
                        )}
                        {isFormInvalid && (
                            <p className={styles.form__input_invalid}>
                                {isFormInvalid}
                            </p>
                        )}
                        <div className={styles.form_auth_description}>
                            <p className={styles.form_auth_description_text}>Do you have an account?</p>
                            <Link href="/login">Login</Link>
                        </div>
                    </div>
                    <Button size='large' type="primary" disabled={!formData.email || isFormInvalid !== ''} htmlType="submit" className={styles.form__button}>
                        {isLodaing ? (
                            <LoadingOutlined className="loading-icon"/>
                        ) : password !== '' ? (
                            'Login'
                        ) : (
                            'Next'
                        )}
                    </Button>
                </Flex>
            </form>
        </div>
    )
}

export default AuthForm;
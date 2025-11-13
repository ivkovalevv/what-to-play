import type { Metadata } from 'next';
import styles from "./auth-page.module.scss"
import AuthForm from 'components/components/AuthForm/AuthForm';

export const metadata: Metadata = {
  title: 'Authorization • What To Play',
  description: 'Login to your account on What To Play',
}

export default function Home() {
  return (
    <main className={styles.auth}>
      <div className={styles.auth__wrapper}>
        <div className={`container ${styles.auth__container}`}>
          <AuthForm></AuthForm>
        </div>
      </div>
    </main>
  );
}

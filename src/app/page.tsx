"use client";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import { useEffect } from 'react';
import axios from 'axios';

export default function Landing() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/users/check-auth/', { withCredentials: true });
        const data = res.data;

        const authStatus = data.authenticated;

        if (authStatus) {
          router.push('/chats/1');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        router.push('/login')
      }
    };

    checkAuth();
  }, [router]);


  return (
    <main className="w-full flex items-center justify-center">
      <span className={styles.loader}></span>
    </main>
  );
}

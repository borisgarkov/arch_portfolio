import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router'

export default function FadeInTransition(props) {
    const router = useRouter();
    const [classWrapper, setClassWrapper] = useState(styles.fadeIn);

    const handleClassChange = () => {
        setClassWrapper(styles.fadeOut);
    }

    useEffect(() => {
        router.events.on('routeChangeStart', handleClassChange);
        router.events.on('routeChangeError', handleClassChange);

        return () => {
            router.events.off('routeChangeStart', handleClassChange);
            router.events.off('routeChangeError', handleClassChange);
        }
    }, [router])

    return (
        <div className={classWrapper}>
            {
                props.children
            }
        </div>
    )
}
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router'
import LoadingButton from './LoadingButton';

export default function FadeInTransition(props) {
    const router = useRouter();
    const [classWrapper, setClassWrapper] = useState(styles.fadeIn);
    const [isLoading, setIsLoading] = useState(false);

    const addFadeOutClass = (url) => {
        if (url === router.asPath) {
            return
        }
        setClassWrapper(styles.fadeOut);
        setIsLoading(true);
    }

    const addFadeInClass = (url) => {
        if (url === router.asPath) {
            return
        }
        setIsLoading(false);
        setClassWrapper(styles.fadeIn);
    }

    useEffect(() => {
        router.events.on('routeChangeStart', addFadeOutClass);
        router.events.on('routeChangeError', addFadeInClass);
        router.events.on('routeChangeComplete', addFadeInClass);

        return () => {
            router.events.off('routeChangeStart', addFadeOutClass);
            router.events.off('routeChangeError', addFadeInClass);
            router.events.off('routeChangeComplete', addFadeInClass);
        }
    }, [router])

    return (
        <>
            {
                !isLoading
                    ? <div className={classWrapper}>
                        {
                            props.children
                        }
                    </div>
                    : <LoadingButton />
            }
        </>
    )
}
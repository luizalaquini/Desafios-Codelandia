import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Studio Ghibli</title>
                <link rel="icon" href="/icon-totoro.svg" />
            </Head>

            <div className={styles.body}>
                <div className={styles.head}>
                    
                    <img src='/logo.svg'></img>
                    
                    <div className={styles.social}>
                        <img src='/facebook.svg'></img>
                        <img src='/instagram.svg'></img>
                        <img src='/twitter.svg'></img>
                        <img src='/youtube.svg'></img>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.imgContainer}>
                        <img src='/kaonashi.png'></img>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.subtitle}>Hayao Miyazaki</p>
                        <p className={styles.title}>A Viagem de Chihiro</p>
                        <p className={styles.description}>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>

                        <div className={styles.buttonsContainer}>
                            <div className={styles.buttonWatchNow}>
                                <img src="/icon-play.svg" />
                                <a href='https://www.netflix.com/watch/60023642?source=35' target='_blank'>ASSISTIR AGORA</a>
                            </div>
                            <a href='https://www.youtube.com/watch?v=SgZI655GgHk' target='_blank' className={styles.buttonTrailer}> ASSISTA O TRAILER</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

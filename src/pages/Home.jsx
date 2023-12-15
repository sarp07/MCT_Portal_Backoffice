import React from 'react';
import styles from './styles/Home.module.css';
import { Container } from '../components';

const Home = () => {
    // Simüle edilmiş genel istatistik verileri
    const totalInvestors = 1500;
    const totalUsers = 5000;
    const totalLoansAmount = 1000000;
    const totalDonationsAmount = 50000;

    return (
        <Container>
            <div className={styles.homeContainer}>
                <div className={styles.mainContent}>
                    <br />
                    <div className={styles.statsContainer}>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Yatırımcı Sayısı</p>
                            <p className={styles.statValue}>{totalInvestors}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Kullanıcı Sayısı</p>
                            <p className={styles.statValue}>{totalUsers}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Verilen Kredi Miktarı</p>
                            <p className={styles.statValue}>${totalLoansAmount}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Bağış Miktarı</p>
                            <p className={styles.statValue}>${totalDonationsAmount}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <br />
                    <div className={styles.statsContainer}>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Kredi Başvurusu</p>
                            <p className={styles.statValue}>{totalInvestors}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Onaylanan Kredi Miktarı</p>
                            <p className={styles.statValue}>{totalUsers}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Reddedilen Kredi Miktarı</p>
                            <p className={styles.statValue}>${totalLoansAmount}</p>
                        </div>
                        <div className={styles.statItem}>
                            <p className={styles.statLabel}>Toplam Bağış Miktarı</p>
                            <p className={styles.statValue}>${totalDonationsAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;

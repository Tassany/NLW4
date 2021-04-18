import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown(){
    const {
        hasFinished,
        seconds,
        isActive,
        minutes,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled onClick={resetCountdown} className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ):(
                <>
                    {isActive ? (
                        <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                            Abandonar ciclo x
                        </button>
                    ):(
                        <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
            



        </div>
    );
}
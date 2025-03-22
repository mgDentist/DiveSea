import { useState, useEffect } from "react";
import styles from "./SliderTimer.module.scss";

const SliderTimer = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const endDateTime = new Date(endDate);
            const currentDate = new Date();
            const timeDifference = endDateTime - currentDate;

            if (timeDifference > 0) {
                const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
            } else {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timerId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timerId);
    }, [endDate]);

    return (
        <div className={styles.timer}>
            {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
            ? <p className={styles.timerText}>Expired</p>
            : <p className={styles.timerText}>
                {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </p>
            }
        </div>
    );
};

export default SliderTimer;
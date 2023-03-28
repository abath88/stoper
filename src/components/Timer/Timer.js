import styles from './Timer.module.scss';

const Timer = ({ time }) => {
    const date = new Date(time);
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }))
    const ms = date.getMilliseconds();
    const s = utcDate.getSeconds();
    const m = utcDate.getMinutes();
    const h = utcDate.getHours();
    return (
        <div className={styles.title}>{ h < 10 ? `0${h}` : h }:{ m < 10 ? `0${m}` : m }:{s < 10 ? `0${s}` : s}.{ms < 10 ? `0${ms}` : ms}</div>
    )
}

export default Timer;
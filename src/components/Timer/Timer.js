const Timer = ({ time }) => {
    const date = new Date(time);
    const ms = date.getMilliseconds()
    const s = date.getSeconds()
    const m = date.getMinutes()
    return (
        <div>{ m < 10 ? `0${m}` : m }:{s < 10 ? `0${s}` : s}:{ms < 10 ? `0${ms}` : ms}</div>
    )
}

export default Timer;
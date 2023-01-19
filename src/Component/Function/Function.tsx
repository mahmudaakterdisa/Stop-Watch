function timerFunction(timeInSeconds: number): (number | string)[] {
    let hours: number = Math.floor(timeInSeconds / 720000);
    let minutes: number = Math.floor((timeInSeconds - (hours * 720000)) / 12000);
    let seconds: number = Math.floor((timeInSeconds - (hours * 720000) - (minutes * 12000)) / 200);
    let milliseconds: number = (timeInSeconds - (seconds * 200) - (hours * 720000) - (minutes * 12000));

    return [
        hours < 10 ? `0${hours}` : hours,
        minutes < 10 ? `0${minutes}` : minutes,
        seconds < 10 ? `0${seconds}` : seconds,
        milliseconds < 10 ? `0${milliseconds}` : milliseconds
    ];
}

export default timerFunction;
function getRadom(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}
function getColor() {
    return `rgb(${getRadom(255, 0)},${getRadom(255, 0)},${getRadom(255, 0)})`;
}
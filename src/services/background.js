export default class BackgroundService {
    static setBackgroundImage(backgroundImage) {
        document.querySelector('body').style.backgroundImage = `url(${backgroundImage})`;
    }
}
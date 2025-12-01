import app from '@system.app'

export default {
    data: {
        title: ''
    },
    onInit() {
        const info = app.getInfo();
        this.title = `value is ${JSON.stringify(info)}`;
    },
    onTerminate() {
        app.terminate();
    },
};

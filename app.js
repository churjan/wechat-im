//app.js
import IMFactory from "./modules/im-sdk/im-factory";

App({
    globalData: {
        userInfo: {},
    },
    getIMHandler() {
        return this.iIMHandler;
    },
    onLaunch() {
      console.log(this, 555)
        this.iIMHandler = IMFactory.create();
    },
    onHide() {
        // this.iIMHandler.closeConnection();
    },
    onShow() {
     
        this.iIMHandler.createConnection({options: {url: 'ws://192.168.1.125:8001'}});
    }
});
import { HTTP, CHECK_LOGIN, SEND_CODE } from './http/api'
App({
  onLaunch(){
    wx.cloud.init({
      env:'dev-0g2dp67w10ab28df'
    }),
    this.checkLogin();
  },
  checkLogin() {
    // 检查登录了没有
    const token = wx.getStorageSync("TOKEN");
    if (token) {
      //登录了的话，过期了没有，过期了再执行登录
      wx.request({
        url: HTTP + CHECK_LOGIN,
        method: "GET",
        data: {
          token,
        },
        success: ({ statusCode }) => {
          if (statusCode !== 200) {
            //登录过期了
            this.login();
          } else {
            //登录没有过期，什么也不用干
          }
        },
        fail: (error) => {
          this.login();
        },
      });
    } else {
      this.login();
    }
  },

  login() {
    //登录:第一步，获得code
    wx.login({
      success({ code }) {
        console.log(code);
        // 登录第二步：将code发送给服务器
        wx.request({
          url: HTTP + SEND_CODE,
          method: "POST",
          data: {
            code,
          },
          // 登录第六步：获得登录态
          success(res) {
            const token = res.data.token;

            // 登录第七步：保存登录态
            wx.setStorageSync("TOKEN", token);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
    });
  },
})
// pages/index/index.js
import { HTTP, SET_USERINFO } from '../../http/api'
Page({
  getUserInfoAction(info) {
    if (info.detail.errMsg === 'getUserInfo:ok') {
      //将用户信息发送给后台
      wx.request({
        url: HTTP + SET_USERINFO,
        method: 'POST',
        data: {
          ...info.detail.userInfo,
          token: wx.getStorageSync('TOKEN')
        },
        success: (res) => {
          let { nickname, url } = res.data;
          this.setData({ isShow: false, name: nickname, url: url });
          console.log(res);
        },
        fail: (error) => {
          console.log(error);
        }
      })
    } else {

    }
    console.log(info);
  },
  logoutAction() {
    this.setData({ isShow: false })
  },

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    name: '',
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
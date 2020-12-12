// miniApp/pages/shopCart/shopCart.js

const path = 'http://localhost:8000/api/cart/queryCartData'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:path,
      method:'GET',
      data:{},
      success:(res)=>{
        console.log(res);
        
        let arr = res.data.data.map(item=>({
          title:item.title,
          goodsid:item.goodsid,
          price:item.price,
          count:item.count,
          imgurl:item.imgurl
        }))
      
       
        console.log(arr)
        this.setData({arr:arr});
      },
      fail:(err)=>{
        console.log(err)
      }
    })
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
// miniApp/pages/buyDetail/buyDetail.js

const path = 'http://localhost:8000/api/cart/addCartData'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:{},
    num:1,
    price:88,
    id:''
  },
  reduceAction(){
    if(this.data.num>1){
      this.setData({num:this.data.num-1})
    }else{
      // alert('最少一件起售')
    }
  },
  addAction(){
    this.setData({num:this.data.num +1})
  },
  buyAction(){
    console.log('立即购买');
    
  },
  cartAction(){
    //goodsid,title,price,imgurl
    console.log('加入购物车');
    console.log(this.data.arr);
    
    wx.request({
      url: path,
      method:'POST',
      data:{
        'goodsid':this.data.id,
        'title':this.data.arr.name,
        'price':this.data.price,
        'imgurl':this.data.arr.url,
        'count':this.data.num
      },
      success:(res)=>{
        console.log(res);
        
      },
      fail:(err)=>{
        console.log(err);
        
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (...options) {
    let arr = {};
    console.log(options);
    
    const {id,name,url} = options[0];
    // console.log(id,name,url);
    // arr.id = id;
    arr.name = name;
    arr.url = url;
    this.setData({id:id,arr:arr})
    
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
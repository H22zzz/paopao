// miniApp/pages/goodsDetail/goodsDetail.js
//https://m.you.163.com/item/list.json?__timestamp=1605334473074&style=pd&categoryId=1010000
const path = 'https://m.you.163.com/item/list.json'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    frontName:'',
    listData:[]
  },
  detailAction(ev){
    console.log(ev);
    const {id,name,url}  = ev.currentTarget.dataset;
    console.log(id);
    
    wx.navigateTo({
      url: `../buyDetail/buyDetail?id=${id}&name=${name}&url=${url}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (...options) {
    const {id} = options[0];
    console.log(id);
    
    wx.request({
      url: path, //仅为示例，并非真实的接口地址
      method:'GET',
      data:{
        '__timestamp':new Date().getTime(),
        'style':'pd',
        'categoryId':id
      },
      success: (res)=> {
        const {category,itemList} = res.data.data.categoryItemList[0];
        const name = category.name;
        const frontName = category.frontName;
      
        const list = itemList.map(item=>({
          id:item.id,
          name:item.name,
          primaryPicUrl:item.primaryPicUrl
        }))
        console.log(name,list)
        this.setData({name:name,frontName:frontName,listData:list})
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
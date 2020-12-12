// miniApp/pages/home/home.js

//https://m.you.163.com/xhr/index.json?__timestamp=1605277440243&
const path = 'https://m.you.163.com/xhr/index.json'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: [],
    text: '',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    cData: [],
    bDdata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: path,
      method: 'GET',
      data: {
        '__timestamp': new Date().getTime(),
      },
      success: (result) => {
        console.log('success...');
        console.log(result);
        function transform(para){
          const data  =  para.split('?')[1];
          const params = new Object;
          const aParams = data.split('&');
          // console.log(aParams);
          for(let i =0;i<aParams.length;i++){
            var data1 = aParams[i].split('=')
            // console.log(data1);
            params[data1[0]] = data1[1]
          }
          return params;
        }
        // banner数据
        const data = result.data.data.data.kingKongModule.kingKongList.slice(1, 9);
        // 分类数据
        const data1 = result.data.data.data.focusList.map(item => (item.picUrl));
        //列表数据
        const data2 = result.data.data.data.newItemList.map(item => ({
          id:item.id,
          name: item.name,
          primaryPicUrl: item.primaryPicUrl
        }));

        const cData = data.map(item => {
          let urls=[];
          urls.push(transform(item.schemeUrl));
          const id = urls.map(item=>(item.categoryId))[0];
          return {
            picUrl: item.picUrl,
            id: id,
            text: item.text
          }
        })

        console.log(data2);
        this.setData({
          image: data1,
          cData: cData,
          bData: data2
        })
        console.log(cData);
      },
      fail(error) {
        console.log('fail...');
        console.log(error);
      },
      complete() {
        console.log('complete...');
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
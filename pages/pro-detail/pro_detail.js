// pages/pro-detail/pro_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    number:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var did=options.did; 
     wx:wx.request({
       url: 'https://myserver.applinzi.com/supProducts/details?did='+did,
       method:'GET',
       success:(res)=>{
         console.log(res.data);
         this.setData({
           detail:res.data
         })
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

  },
  Cart:function(){
    wx.switchTab({
      url: '../shoppingcar/shop_car',
    })  
  },
  Total:function(){
    var n=this.data.number+1;
    if(n>99){n=99}
    this.setData({
      number:n
    })
  }
})
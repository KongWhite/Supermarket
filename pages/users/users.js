// pages/users/users.js.js
const app = getApp();
Page({
  bingGetUserInfo: function (e) {
    //console.log(e.detail.userInfo);
    app.globalData.userMsg = e.detail.userInfo;
    wx.navigateTo({
      url: '/pages/user_msg/user_msg',
    })
    //console.log(app.globalData.isView);
    //console.log(app.globalData.userMsg.nickName);
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    showView:""
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
    this.setData({
      showView: app.globalData.isView
    })
    console.log(this.data.showView)
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
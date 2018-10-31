// pages/user_msg/user_msg.js
const app = getApp();
Page({
  get_uname:function(e){
    //console.log(e.detail.value)
    this.setData({
      uname:e.detail.value
    })
  },
  get_phone:function(e){
    //console.log(e.detail.value)
    this.setData({
      phone: e.detail.value
    })
  },
  get_sex:function(e){
    //console.log(e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  bindDateChange: function (e) {
    //console.log(e)
      this.setData({
        dates: e.detail.value
      })
  },
  save:function(){
    wx.request({
      url: 'https://myserver.applinzi.com/supUser/add-user',
      method: 'post',
      data:{
        uid:1,
        uname:app.globalData.userMsg.nickName,
        nickname: this.data.uname,
        phone: this.data.phone,
        birth:this.data.dates
      }, 
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res)
      }

    })
    app.globalData.isView=true;
    wx.switchTab({
      url: '/pages/users/users',
    })
  },
 
  /**
   * 页面的初始数据
   */
  data: {
    dates:"",
    uname:"",
    phone:"",
    sex:"",
    is_true:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uname : app.globalData.userMsg.nickName,
      sex : app.globalData.userMsg.gender
    })
    console.log(app.globalData.userMsg.nickName);
    console.log(this.data.sex)
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
// pages/pro-detail/pro_detail.js
var util = require('../../utils/util.js');

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    number: 1,
    time: 0    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var did = options.did;
    console.log(did)
    wx: wx.request({
      url: 'https://myserver.applinzi.com/supProducts/details?did=' + did,
      method: 'GET',
      success: (res) => {
        //console.log(res.data);
        this.setData({
          detail: res.data
        })
      }
    })
    var time = util.formatTime(new Date());
    this.setData({
      time: time
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
  Cart: function (e) {
    var pid = e.target.dataset.did;
    console.log(pid);
    app.appData.pid = pid;
    wx.switchTab({
      url: '../shoppingcar/shop_car?pid=' + pid,
    })

  },
  Total: function () {
    var n = this.data.number + 1;
    if (n > 99) { n = 99 }
    this.setData({
      number: n
    })
  },
  ToCart:function(e){
    console.log(e)
    var pid=e.target.dataset.pid;
  //  console.log(pid)
      //console.log(this.data.user_id)
      //console.log(this.data.number);
      //console.log(e.target.dataset.pid)
    //向数据库插入数据
    wx.request({
      url: 'https://myserver.applinzi.com/supOrder/addPro',
      data: {
        "user_id":1001,                       //用户id 1001
        "count_num":this.data.number,         //产品数量
        "pid": e.target.dataset.pid           //产品id
      },
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      method: 'POST',
      success: (res)=>{
        console.log(res.data)
        wx.showToast({
            title:'添加成功',
            icon:'success',
            duration:2000
        })
      },
    }) 
  }

})
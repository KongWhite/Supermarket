// miniprogram/pages/component/pro/pro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    type:0

=======
    pros:[]
>>>>>>> c75f92545f5589dfb9616ebd8355ffd9382f0060
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    //接收传过来的参数
    //通过链接传参的方式获取参数
    console.log(options);
    var type = options.type;
    //通过商品类别名称的编号查询该类别下是商品
    this.setDate({
      type:type
=======
    var type = options.type;
    console.log(options);
    wx.request({
      url: 'https://myserver.applinzi.com/supProducts/list?type='+type,
      success:(result)=>{
        //console.log(result);
        this.setData({
          pros:result.data
        })
      }
    })
    wx.request({
      url: 'https://myserver.applinzi.com/supProducts/list?type=' + type,
      success: (result) => {
        //console.log(result);
        this.setData({
          pros: result.data
        })
      }
>>>>>>> c75f92545f5589dfb9616ebd8355ffd9382f0060
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
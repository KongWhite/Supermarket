// miniprogram/pages/component/pro/pro.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type:0,
    typeList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ///supProducts/list?type=type
    //url:"https://myserver.applinzi.com/supIndex/swiper",
    var type = options.type;
    //通过商品类别名称的编号查询该类别下是商品
    this.setData({
      type:type
    })
    wx.request({
      url:"https://myserver.applinzi.com/supProducts/list?type="+this.data.type,
      method:"GET",
      success:(res)=>{
        console.log(res);
        this.setData({
          typeList:res.data
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

  }
})
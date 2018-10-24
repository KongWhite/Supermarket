// miniprogram/pages/home/home.js
Page({
  data: {
    imgs:[],
    banner:[],
    imgs_list:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*获取服务器的轮播图片*/
    wx.request({
      url:"https://myserver.applinzi.com/supIndex/swiper",
      method:"GET",
      success:(res)=>{
        //console.log(res);
        this.setData({
          imgs:res.data
        })
      }
    })
    /*获取商品类型的图片*/
    wx.request({
      url:"https://myserver.applinzi.com/supIndex/banner",
      method:"GET",
      success:(res)=>{
        //console.log(res);
        this.setData({
          banner:res.data
        })
      }
    })
    /*获取下列商品列表的数据*/
    wx.request({
      url:"https://myserver.applinzi.com/supIndex/new-pro",
      method:"GET",
      success:(res)=>{
        //console.log(res);
        this.setData({
          imgs_list:res.data
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
// pages/pro-list/pro_list.js
Page({
  tab:function(e){
    var type = e.target.dataset.type;
    //this.data.num = e.target.dataset.num;
    this.setData({
      num:e.target.dataset.num
    })
    wx.request({
      url: 'http://176.137.16.31:3000/products/list?type='+type,
      success:(result)=>{
        //console.log(result.data);
        this.setData({
          pro_items:result.data
        })        
      }
    })
  },
  detail:function(e){
    var pid = e.target.dataset.pid;
    console.log(pid);
    wx.navigateTo({
      url: '../pro-detail/pro_detail?pid='+pid
    })
  },
  /**
   * 页面的初始数据
   */
  data:{
    num:0,
    pro_list:[],
    pro_items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://176.137.16.31:3000/products/list-name',
      success:(result)=>{
        this.setData({pro_list:result.data})
        console.log(this.data.pro_list);
      }
    })
    wx.request({
      url: 'http://176.137.16.31:3000/products/list?type=1001',
      success: (result) => {
        this.setData({
          pro_items: result.data
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
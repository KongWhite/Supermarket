// pages/shoppingcar/shop_car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    cartlist:[],
    haslist:true,
    selectAll: true,//默认情况下为全选
    totalprice:0
  },
   content:function(){
     var cartlist = this.data.cartlist;
     if (cartlist.length == 0) {
       this.setData({
         haslist: false
       })
     }
   },
   
   /*单选 */
   selectList:function(e){
     var index = e.currentTarget.dataset.index;
     var cartlist = this.data.cartlist;
     var is_checked = cartlist[index].is_checked;
     cartlist[index].is_checked = !is_checked;
     this.setData({
       cartlist: cartlist
     });
     this.getTotalprice();
   },
   /*全选*/ 
   selectAll:function(e){
     var index = e.currentTarget.dataset.index;
     var selectAll = this.data.selectAll;
     selectAll = !selectAll;
     var cartlist = this.data.cartlist;
     for(var i=0;i<cartlist.length;i++){
       cartlist[i].is_checked=selectAll;
     }
     this.setData({
       selectAll: selectAll,
       cartlist: cartlist
     });
     this.getTotalprice();
   },
   /*删除*/
   deletelist:function(e){
     var index=e.currentTarget.dataset.index;
     var cartlist=this.data.cartlist;
     cartlist.splice(index,1);
     this.setData({
       cartlist:cartlist
     })
     if (cartlist.length==0) {
       this.setData({
         haslist: false
       });
     }else{
       this.getTotalprice();
     }
   },
   /*总价*/ 
  getTotalprice:function(e){ 
    var cartlist=this.data.cartlist
    var total=0;
    for(var i=0;i<cartlist.length;i++){
      if(cartlist[i].is_checked){
        total+=cartlist[i].count_num * cartlist[i].price; 
      }
    }
    this.setData({
      cartlist:cartlist,
      totalprice:total.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://myserver.applinzi.com/supOrder/shoppingcar',
      success: (res) => {
        this.setData({
          cartlist: res.data
        });
        this.content();
        this.getTotalprice();
      }
    })
   
  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
     
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  addNum:function (e) {
    var cartlist=this.data.cartlist;
    var index = e.currentTarget.dataset.index;
    var n = cartlist[index].count_num;
    n++;
    cartlist[index].count_num=n;
    this.setData({
      cartlist:cartlist
    })
    this.getTotalprice();
  },
  subNum: function(e){
    var cartlist = this.data.cartlist;
    var index = e.currentTarget.dataset.index;
    var n = cartlist[index].count_num;
    n--;
    cartlist[index].count_num = n;
    if (cartlist[index].count_num < 1) { 
      cartlist[index].count_num = 1 
      }
    this.setData({
      cartlist: cartlist
    })  
    this.getTotalprice();   
  }
})
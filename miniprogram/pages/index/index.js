let db = wx.cloud.database();
let mybook = db.collection("mybook");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[]
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
    let that = this;
    mybook.get({
      success(res){
        let paid=0;
         res.data.forEach(function(item,index){
          paid+=parseFloat(item.price);
          

        })

        paid = paid.toFixed(2);
        console.log(paid)
        that.setData({
          bookList:res.data,
          paid:paid
        })
      }
    })
    let count =  mybook.where({
      _openid:"oV7gr5Mavaxb0WOE3wowCXnodAvo",
    }).count();
    count.then(res=>{
      this.setData({
        count:res.total,
      })
    })
   
    
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
  onBookDetail:function(e){
    console.log(e.currentTarget.dataset.id);
    let bookId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"../bookDetail/index?id="+bookId,
    })
  }
})
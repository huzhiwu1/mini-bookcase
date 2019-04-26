// pages/scanCode/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  onScanCode: function(e) {
    let that = this;
    wx.scanCode({
      scanType: "barCode",
      success(res) {
        wx.cloud.callFunction({
          name: "bookInfo",
          data: {
            isbn: res.result
          },
          success(res) {
            let bookInfo = JSON.parse(res.result);
            console.log(bookInfo);
            if ((bookInfo.msg = "ok")) {
              console.log("成功");
              //  const db = wx.cloud.database();
              //  const book = db.collection("mybook");
              //  book.add({
              //    data:bookInfo.result,
              //  })
              that.setData({
                bookInfo: bookInfo.result
              });
            }
          },
          fail(err) {
            console.error(err);
          }
        });
      }
    });
  },
  onAddBook: function(e) {
    let that = this;
    const db = wx.cloud.database();
    const book = db.collection("mybook");
    book.add({
      data: this.data.bookInfo,
      success(){
      // wx.navigateTo不能再tab上实现跳转
      wx.switchTab({
        url:"../index/index"
      })
      }
    });

  },
  
});

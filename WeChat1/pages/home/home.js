// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "CodeWhy",
    students: [
      {id:110, name: "kobei", age: 30},
      { id: 110, name: "kobei", age: 30 },
      { id: 110, name: "lottie", age: 30 },
      { id: 110, name: "kiaoja", age: 30 },
      { id: 110, name: "she", age: 30 },
      { id: 110, name: "ko", age: 30 },
      { id: 110, name: "bei", age: 30 }
    ],
    counter: 0
  },

  handlerButtonTap() {
    // this.data.counter++;不会刷新
    // console.log("按钮点击")

    this.setData({
      counter: this.data.counter + 1
    })
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
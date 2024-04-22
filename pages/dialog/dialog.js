// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currentTab2:0
  },
  switchToPage1: function () {
    this.setData({
      currentTab: 0
    });
  },
  switchToPage2: function () {
    this.setData({
      currentTab: 1
    });
  },


  deletePost: function() {
    // 点击删除按钮的事件处理函数
    console.log('点击了删除按钮');
    // 在这里执行删除帖子的逻辑
  },
  toggleLike: function() {
    // 点击点赞按钮的事件处理函数
    console.log('点击了点赞按钮');
    // 在这里执行点赞或取消点赞的逻辑
  },
  comment: function() {
    // 点击评论按钮的事件处理函数
    console.log('点击了评论按钮');
    // 在这里执行跳转到评论页面的逻辑
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
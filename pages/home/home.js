// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '' // 保存搜索关键词
  },

  // 搜索
  handleInput: function (e) {
    this.setData({
      keyword: e.detail.value // 更新搜索关键词
    });
  },
  handleSearch: function () {
    // 处理搜索逻辑，可以根据 this.data.keyword 进行搜索操作
    console.log("搜索关键词：", this.data.keyword);
    // 这里可以添加实际的搜索操作，比如向后端发送请求并处理返回的结果
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
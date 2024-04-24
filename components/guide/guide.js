Component({
  data: {
    imageUrl: '',
    textInfo: '',
    message: '',

  },
  onLoad(){
    wx.request({
      url: '',
      success: (res) => {
        const imageUrl = res.data.imageUrl;
        const textInfo = rex.data.textInfo;
        const message = rex.data.message;
        this.setData({
          imageUrl: imageUrl,
          textInfo: textInfo,
          message: message
        })
      },
      fail: (err) => {
        console.error(err);
      }
    })
  }
})
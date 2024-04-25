Component({
  data: {
    dataList: [{
        img: 'http://pic.funworld.cc/pic/1.png',
        tag: '#情感倾诉',
        viewers: '223',
        num: '2233',
        commit: [{
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
        ]
      },
      {
        img: 'http://pic.funworld.cc/pic/1.png',
        tag: '#情感倾诉',
        viewers: '223',
        num: '2233',
        commit: [{
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
        ]
      },
      {
        img: 'http://pic.funworld.cc/pic/1.png',
        tag: '#情感倾诉',
        viewers: '223',
        num: '2233',
        commit: [{
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
          {
            avatar: 'http://pic.funworld.cc/pic/狗.png',
            user: '只要ta',
            content: '倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
          },
        ]
      }
    ]
  },
  methods: {
    handleInput: function () {
      wx.request({
        url: '',
        method: 'GET',
        success: (res) => {
          this.setData({
            dataList: res.data
          });
        },
        fail: (err) => {
          console.error(err);
        }
      })
    }
  }
})
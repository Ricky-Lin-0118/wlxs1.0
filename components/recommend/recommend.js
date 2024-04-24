Component({
  data: {
    dataList: [
      {
        index: 1,
        avatarUrl: '../../image/白榆.png',
        imageList: [
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          }
        ],
        name: '白榆',
        time: '32分钟前',
        title: '学习交流——共筑知识之桥',
        content: '学习，是每个人成长道路上不可或缺的一部分。在这个信息爆炸的时代，如何高效学习...',
        tag: '#学习交流',
        viewers: '233',
        likeCount: '45',
        commentCount: '12'
      },
      {
        index: 1,
        avatarUrl: '../../image/白榆.png',
        imageList: [
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          }
        ],
        name: '白榆',
        time: '32分钟前',
        title: '学习交流——共筑知识之桥',
        content: '学习，是每个人成长道路上不可或缺的一部分。在这个信息爆炸的时代，如何高效学习...',
        tag: '#学习交流',
        viewers: '233',
        likeCount: '45',
        commentCount: '12'
      },
      {
        index: 1,
        avatarUrl: '../../image/白榆.png',
        imageList: [
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          },
          {
            url: '../../image/1.png'
          }
        ],
        name: '白榆',
        time: '32分钟前',
        title: '学习交流——共筑知识之桥',
        content: '学习，是每个人成长道路上不可或缺的一部分。在这个信息爆炸的时代，如何高效学习...',
        tag: '#学习交流',
        viewers: '233',
        likeCount: '45',
        commentCount: '12'
      }
    ]
  },
  methods: {
    handleInput: function() {
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
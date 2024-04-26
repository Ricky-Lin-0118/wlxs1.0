Component({
  data: {
    dataList: [{
        index: 1,
        imageList: [],
        title: '分手了不知道该怎么办',
        content: '我们一个月多前分的，因为她觉得我冷落她了，但是她后面又来找我了，所以我以为是小打小闹的。然后上上个星期因为我打游戏没陪她，她确实多次叫我不要打去陪陪她，然...',
        tag: '#学习交流',
        viewers: '233',
        likeCount: '45',
        commentCount: '12'
      },
      {
        index: 1,
        imageList: [{
            url: 'http://pic.funworld.cc/pic/知识1.png'
          },
          {
            url: 'http://pic.funworld.cc/pic/知识2.png'
          },
          {
            url: 'http://pic.funworld.cc/pic/知识3.png'
          }
        ],
        title: '学习交流——共筑知识之桥',
        content: '学习，是每个人成长道路上不可或缺的一部分。在这个信息爆炸的时代，如何高效学习...',
        tag: '#学习交流',
        viewers: '233',
        likeCount: '45',
        commentCount: '12'
      },
      {
        index: 1,
        imageList: [{
            url: 'http://pic.funworld.cc/pic/知识1.png'
          },
          {
            url: 'http://pic.funworld.cc/pic/知识2.png'
          },
          {
            url: 'http://pic.funworld.cc/pic/知识3.png'
          }
        ],
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
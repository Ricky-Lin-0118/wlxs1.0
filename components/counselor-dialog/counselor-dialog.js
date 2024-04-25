// components/counselor-dialog/counselor-dialog.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // avatarUrl: {
    //   type: String,
    //   value: ''
    // },
    // number1: {
    //   type: String,
    //   value: ''
    // },
    // text1: {
    //   type: String,
    //   value: ''
    // },
    // number2: {
    //   type: String,
    //   value: ''
    // },
    // text2: {
    //   type: String,
    //   value: ''
    // },
    // number3: {
    //   type: String,
    //   value: ''
    // },
    // text3: {
    //   type: String,
    //   value: ''
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatarUrl: 'http://pic.funworld.cc/pic/白榆.png',
    name:'白榆【情感分析师】',
    number1: '3681',
    text1: '帮助人次',
    number2: '12584',
    text2: '帮助时长',
    number3: '99.78',
    text3: '推荐值',
    textArray: [
      " "
    ],
    conversations: [
      { role: 'user', content: '我很难控制情绪，常常因为小事而发脾气' },
      { role: 'other', content: '你对于情绪管理感到有些困惑，这是很正常的。每个人都有情绪波动的时候，尤其是在面对一些小事情时，可能会不自觉地感到烦躁或生气。但是，我们都可以学会更加平和地应对这些情况，不让情绪过度影响我们的行为和决策。你可以尝试一些深呼吸、冥想或放松的方法来缓解紧张情绪，或者找亲朋好友倾诉，寻求他们的理解和支持。记住，情绪管理是一个渐进的过程，不要对自己太过苛求。慢慢地，你会发现自己越来越能够掌控自己的情绪，变得更加从容和自信。' },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
        // 处理关注事件
        handleFollow: function() {
          // 在这里编写关注事件的处理逻辑
          console.log('点击了关注按钮');
        }
  }
})
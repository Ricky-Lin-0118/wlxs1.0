// components/activity/activity.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    conversations: [
      { role: 'user', content: '我很难控制情绪，常常因为小事而发脾气' },
      { role: 'other', content: '你对于情绪管理感到有些困惑，这是很正常的。每个人都有情绪波动的时候，尤其是在面对一些小事情时，可能会不自觉地感到烦躁或生气。但是，我们都可以学会更加平和地应对这些情况，不让情绪过度影响我们的行为和决策。你可以尝试一些深呼吸、冥想或放松的方法来缓解紧张情绪，或者找亲朋好友倾诉，寻求他们的理解和支持。记住，情绪管理是一个渐进的过程，不要对自己太过苛求。慢慢地，你会发现自己越来越能够掌控自己的情绪，变得更加从容和自信。' },
      { role: 'user', content: '如何平衡工作和生活' },
      { role: 'other', content: '你可以尝试为工作和生活设定一些明确的界限。比如，在I作时间内尽量专注于工作，提高效率，而在下班后则全心全意地投入到家庭和个人生活中。当然，这并不是说我们要完全割裂工作和生活，而是要在两者之间找到一个和谐的共存方式。'},
      { role: 'other', content: '平衡工作和生活是一个渐进的过程，不要急于求成。只要我们用心去感受、去调整，就一定能够找到最适合自己的方式。加油哦!'},

    ],
    tag: '#学习交流',
    time:'3月30日 14：20',
    position:'武汉',
    comments:[
      {
        id:1,
        src: 'http://pic.funworld.cc/pic/狗.png',
        name: '只要he',
        introContent:'倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
        time:'21：56',
        position:'湖北',
        replyNum:'更多7条回复',
        reply:[
          {id:1,
            src: 'http://pic.funworld.cc/pic/白榆.png',
            name: '没心情',
            introContent:'我们需要付诸实践，积极参与到学习交流中去，才能真正感受到它的价值和意义',
            time:'09：56',
            position:'河南',}
        ],

      },
      {
        id:2,
        src: 'http://pic.funworld.cc/pic/狗.png',
        name: '只要he',
        introContent:'倾听是交流的基础，只有认真倾听他人的发言，我们才能理解他人的想法和需求',
        time:'21：56',
        position:'湖北',
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
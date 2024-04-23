// components/counseling/counseling.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    serviceTime: String,
    introContent:String,
    name: {
      type: String,
      value: '' // 可以设置默认值
    },
    // 从外部传入的服务时长数据
    serviceTime: {
      type: Number,
      value: 0 // 可以设置默认值
    },
    // 从外部传入的介绍内容数据
    introContent: {
      type: String,
      value: '' // 可以设置默认值
    },
    // 从外部传入的标签数组数据
    tags: {
      type: Array,
      value: [] // 可以设置默认值
    },
    gender:{
      type:String,
      value:''
    },
    age:{
      type:Number,
    },
    profession:{
      type:String,
      value:''
    },
    favorableRate:{
      type:Number,
      value:100
    },
    comment:{
      type:Number,
      value:0
    },
    maritalStatus:{
      type:String,
      value:''
    },
    constellation:{
      type:String,
      value:''
    },
    studio:{
      type:String,
      value:''
    },
    labels:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counselor1: [
      {
        id: 1,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        name: '白榆',
        serviceTime: 5,
        introContent: '心理学硕士学位，并在多个知名的心理咨询机构积累了丰富的工作经验。通过系统的学习的实践...',
        tags: [
          { id: 1, tag: '情感' },
          { id: 2, tag: '婚恋' },
          { id: 3, tag: '失恋' }
        ]
      },
      {
        id: 2,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        name: '牢宇',
        serviceTime: 91,
        introContent: '心理学硕士学位，并在多个知名的心理咨询机构积累了丰富的工作经验。通过系统的学习的实践...',
        tags: [
          { id: 4, tag: '情感' },
          { id: 5, tag: '婚恋' },
          { id: 6, tag: '失恋' }
        ]
      },
      {
        id: 3,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        name: '牢帆',
        serviceTime: 7,
        introContent: '简介',
        tags: [
          { id: 7, tag: '标签4' },
          { id: 8, tag: '标签5' },
          { id: 9, tag: '标签6' }
        ]
      }
    ],
    // pages/index/index.js
    counselor2: [
      {
        id: 1,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        gender: '女',
        age: 30,
        name: '白榆',
        profession: '情感分析师',
        favorableRate: 99,
        serviceTime: 100,
        comment: 20,
        maritalStatus: '未婚',
        constellation: '双鱼座',
        studio: '白榆心理情感工作室',
        labels: [
          { id: 1, label: '情感修复' },
          { id: 2, label: '情感修复' },
          // 可以根据需要添加更多的标签数据
        ]
      },
      {
        id: 2,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        gender: '女',
        age: 28,
        name: '姓名2',
        profession: '职业2',
        favorableRate: 90,
        serviceTime: 120,
        comment: 15,
        maritalStatus: '已婚有孩',
        constellation: '天蝎座',
        studio: '工作室2',
        labels: [
          { id: 3, label: '标签3' },
          { id: 4, label: '标签4' },
          // 可以根据需要添加更多的标签数据
        ]
      },
      {
        id: 3,
        src: 'http://pic.funworld.cc/pic/%E7%99%BD%E6%A6%86.png',
        gender: '女',
        age: 28,
        name: '姓名2',
        profession: '职业2',
        favorableRate: 90,
        serviceTime: 120,
        comment: 15,
        maritalStatus: '已婚',
        constellation: '天蝎座',
        studio: '工作室2',
        labels: [
          { id: 3, label: '标签3' },
          { id: 4, label: '标签4' },
          // 可以根据需要添加更多的标签数据
        ]
      }
      // 可以根据需要添加更多的 counselor2 数据
    ],

    test: [
      {w:'1'},
      {w:'2'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ip:'82.157.11.188' ,
    port:8080,
    password:'',
    islogin:1,
    inputipone:'',//登录注册时时输入的手机号
    compassiphone:'',//找回密码时输入的手机号
    loginbtnstate:true,
    strloginUser:'',//登录用户名
    strloginpassword:'',//用户密码
    switchChecked:'',//选中按钮
    passwordVisible: false // 控制密码显示与隐藏的状态
  },


  bindswitchchange: function (event) {
    //得到值
  var checkedValue = event.detail.value;
   console.log("开关状态"+checkedValue);
    var _this = this;
    if (checkedValue == true){
      _this.setData({
        switchChecked:true,
      })
     // wx.setStorageSync("iphone",_this.data.strloginUser);
     // wx.setStorageSync("password",_this.data.strloginpassword);
      //wx.setStorageSync("checkedValue", _this.data.switchChecked);
    
    console.log(checkedValue);
    } else if (checkedValue == false) {
      _this.setData({
        switchChecked: false
      })
     // wx.setStorageSync("iphone","");
     // wx.setStorageSync("password","");
    }
  },
  //输入密码（登录界面判断有无）
  password1:function(event){
    var that = this
    var m=event.detail.value
    console.log(event.detail.value)
   
    if(m!=''){
      this.setData({
        strloginpassword:m
      })
        if(this.data.strloginUser!=''&&(this.data.strloginUser.length==11))
        {
          this.setData({
            loginbtnstate:false
          })
        }
        else{
          this.setData({
            loginbtnstate:true,
          })
        
      }
    }
    else{
      this.setData({
        loginbtnstate:true,
        password:''
      })
    }
  },
  // 切换密码显示与隐藏的状态
  togglePasswordVisibility: function (e) {
    this.setData({
      passwordVisible: !this.data.passwordVisible // 切换密码显示与隐藏的状态
    });
    // e.preventDefault(); // 阻止默认的表单提交行为
    return false;
  },
  //输入手机号（登录界面判断有无）
  inputiphone1:function(event){
    console.log(event.detail.value)
    var m=event.detail.value

    if(m!=''&&(m.length==11)){
      this.setData({
        strloginUser:m
      })
        if(this.data.strloginpassword!='')
        {
          this.setData({
            loginbtnstate:false
          })
        }
        else{
          this.setData({
            loginbtnstate:true,
          })
        
      }
    }
    else{
      this.setData({
        loginbtnstate:true,
      })
    }
  },
  //输入密码（注册界面判断有无）
  password2:function(event){
    console.log(event.detail.value)
    var m=event.detail.value
    if(m!=''){
      this.setData({
        password:m
      })
        if(this.data.inputipone!=''&&(this.data.inputipone.length==11))
        {
          this.setData({
            loginbtnstate:false
          })
        }
        else{
          this.setData({
            loginbtnstate:true,
          })
        
      }
    }
    else{
      this.setData({
        loginbtnstate:true,
        password:''
      })
    }
  },
  //输入手机号（注册界面判断有无）
  inputiphone2:function(event){
    console.log(event.detail.value)
    var m=event.detail.value
    if(m!=''&&(m.length==11)){
      this.setData({
        inputipone:m
      })
        if(this.data.password!='')
        {
          this.setData({
            loginbtnstate:false
          })
        }
        else{
          this.setData({
            loginbtnstate:true,
          })
        
      }
    }
    else{
      this.setData({
        loginbtnstate:true,
        inputipone:''
      })
    }
  },
  //找回密码输入框
  compass:function(event){
    console.log("找回密码"+event.detail.value)
    var m=event.detail.value
    if(m!=''&&(m.length==11)){
      this.setData({
        compassiphone:m,
        loginbtnstate:false
      })
    }
    else{
      this.setData({
        loginbtnstate:true,
        inputipone:''
      })
    }
  },
  //登录
  onlogin:function(e){
    var that=this
    //记住密码
    var checkedValue = that.data.switchChecked;
    console.log(checkedValue);
    //如果记住密码则向微信缓存写入账号密码
    //如果不记住密码则清空微信缓存存在的账号密码
    if (checkedValue == true) {
      wx.setStorageSync("iphone",that.data.strloginUser);
      wx.setStorageSync("password",that.data.strloginpassword);
      wx.setStorageSync("checkedValue", that.data.switchChecked);
      wx.setStorageSync("wxlogin", false);
      console.log(that.data.loginbtnstate)
    } else if (checkedValue == false) {
      wx.setStorageSync("iphone","");
      wx.setStorageSync("password","");
      wx.setStorageSync("checkedValue", false);
      wx.setStorageSync("wxlogin", true);
    }
    //开始检查用户名和密码是否一致
    var userinfos=wx.getStorageSync('userjobs') ||[];//找数组
    if(userinfos.iphone==that.data.strloginUser){
      if(userinfos.password==that.data.strloginpassword)
      {

            wx.showToast({
              title: '登录成功',
              duration:2000,
            }),
            wx.switchTab({
                url: '../mine/mine',
              })
          }
      else{
        wx.showToast({
          title: '密码错误',
          duration:2000
        })
      }
    }
    else{
      wx.showToast({
        title: '用户名不存在',
        duration:2000
      })
    }
  },
  //注册
  formsubmit:function(e){
    var that=this
    console.log(e.detail.value)
    var obj={}
    obj.password=e.detail.value.inputpassword,
    obj.iphone=e.detail.value.iphone,
    console.log(obj)
    //存入多个注册用户
    //var arr=wx.getStorageSync('userjobs') ||[];
    //arr.push(obj);
    wx.setStorageSync('userjobs', obj);
    wx.showToast({
      title: '注册成功',
      duration:1000,
      success:function(){
        that.setData({
          islogin:1
        })
      }
    })
  },
  //找回密码
  comebackpassword:function(e){
  var that =this
  let wsy=wx.getStorageSync('userjobs') || [];//找数组
  console.log("输入的手机号"+that.data.compassiphone)
  console.log("本地缓存的手机号"+wsy.iphone)
 if(wsy.iphone==that.data.compassiphone)
  {
    wx.setClipboardData({
      data: wsy.password,
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
            that.setData({
              islogin:1
            })
            wx.showToast({
              title: '密码已复制',
              duration:2000
            })
          }
        })
      }
    })
  }
  else
  {
    wx.showToast({
      title: '该手机号码未注册',
      duration:2000
    })
  }
  },
  //转到注册
  register:function(event){
    var that = this
   that.setData({
    islogin:3
    })
  },
  //转到登录
  denglu:function(event){
    var that = this
    that.setData({
      islogin:1
    })
  },
  //转到忘记密码
  forget:function(event){
    this.setData({
      islogin:2
    })
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
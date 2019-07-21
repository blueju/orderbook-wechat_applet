let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId: "", //学号
    password: "", //密码
    loginSuccess: false, //是否登录成功
    nullTip: false //学号或密码是否为空
  },

  /**
   * 自己的方法
   */
  // 双向绑定-用户名
  editStudentId: function(event) {
    let studentId = event.detail.detail.value
    console.log(studentId)
    this.setData({
      studentId
    })
  },
  // 双向绑定-密码
  editPassword: function(event) {
    let password = event.detail.detail.value
    console.log(password)
    this.setData({
      password
    })
  },
  // 前往注册页面
  goRegister: function() {
    wx.redirectTo({
      url: '/pages/register/register',
    })
  },
  // 登录
  login: function() {
    let studentId = this.data.studentId
    let password = this.data.password
    console.log(studentId, password)
    // 判断用户名或密码是否为空
    if (!studentId || !password) {
      this.setData({
        nullTip: true
      })
      return false
    }
    // 保存this指向
    let that = this
    // 发送登录请求
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d33d8d8d378d9045f559bd5/login',
      method: "POST",
      data: {
        studentId,
        password
      },
      success: function(res) {
        console.log(res)
        // 全局变量保存用户学号和姓名
        app.globalData.userInfo.studentId = username
        app.globalData.userInfo.studentName = password
        // 显示登录成功提示
        that.setData({
          loginSuccess: true
        })
        // 跳转至主页
        wx.switchTab({
          url: '/pages/class-data/class-data',
        })
      },
      fail: function(err) {
        console.log("login fail error info:" + err)
      }
    })
  },
  // 重置
  reset: function() {
    this.setData({
      studentId: "",
      password: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
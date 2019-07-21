// pages/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId: "", //学号
    password: "", //密码
    registerSuccess: false, //是否登录成功
    nullTip: false //学号或密码是否为空
  },

  /**
   * 自己的方法
   */
  // 前往登录
  goLogin: function() {
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  // 双向绑定学号
  editStudentId: function(e) {
    console.log(e.detail.detail.value)
    this.setData({
      studentId: e.detail.detail.value
    })
  },
  // 双向绑定密码
  editPassword: function(e) {
    console.log(e.detail.detail.value)
    this.setData({
      password: e.detail.detail.value
    })
  },
  // 重置
  reset: function() {
    this.setData({
      studentId: "",
      password: ""
    })
  },
  // 注册
  register: function() {
    let studentId = this.data.studentId
    let password = this.data.password
    // 判断学号或密码是否为空
    if (!studentId || !password) {
      // 显示为空提示
      this.setData({
        nullTip: true,
      })
      return false
    }
    // 显示注册成功提示
    this.setData({
      registerSuccess: true,
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
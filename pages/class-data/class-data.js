// pages/class-data/class-data.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 班级订书数据
    classBookData: null,
    // 底部导航栏设置
    tabBar: [{
      pagePath: "/pages/class-data/class-data",
      text: "全班",
      iconSize: 40,
      iconPath: "/img/my.png",
      selectedIconPath: "/img/my-selected.png"
    }, {
      pagePath: "/pages/add-or-alter/add-or-alter",
      text: "订书/修改",
      iconSize: 40,
      iconPath: "/img/add-or-alter.png",
      selectedIconPath: "/img/add-or-alter-selected.png",
      style: "circle"
    }, {
      pagePath: "/pages/my/my",
      text: "我的",
      iconSize: 40,
      iconPath: "/img/my.png",
      selectedIconPath: "/img/my-selected.png"
    }]
  },
  /**
   * 我自己的方法
   */
  go: function(e) {
    console.log(e.detail.idx)
    switch (e.detail.idx) {
      case 0:
        wx.redirectTo({
          url: '/pages/class-data/class-data',
        })
        break
      case 1:
        wx.redirectTo({
          url: '/pages/add-or-alter/add-or-alter',
        })
        break
      case 2:
        wx.redirectTo({
          url: '/pages/my/my',
        })
        break
    }
  },

  // 获取全班订书信息
  getClassBookData: function() {
    // 保存this指向
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d33d8d8d378d9045f559bd5/class-book-data',
      method: "GET",
      success: function(res) {
        console.log("get class-book-data success")
        that.setData({
          classBookData: res.data.data.classBookData
        })
      },
      fail: function(err) {
        console.log('get class-book-data fail:' + err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData({
    //   tabBar: app.globalData.tabBar
    // })
    this.getClassBookData()
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
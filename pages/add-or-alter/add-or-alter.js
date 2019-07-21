// pages/add-or-alter/add-or-alter.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myBookData: null, //初始数据(不能动)
    tempData: null,
    confirmData: null //修改后数据
  },

  /**
   * 自己的方法
   */
  // 获取我的订书数据
  getMyBookData: function() {
    // 保存this指向
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d33d8d8d378d9045f559bd5/my-book-data',
      method: "GET",
      success: function(res) {
        console.log('getMyBookData success')
        let afterDeal = res.data.myBookData
        // 映射处理
        afterDeal.map(function(item, index) {
          switch (item.bookType) {
            case 1:
              item.bookType = "正版书"
              break
            case 2:
              item.bookType = "二手书"
              break
            case 3:
              item.bookType = "复印书"
              break
          }
        })
        that.setData({
          myBookData: afterDeal
        })
      },
      fail: function(err) {
        console.log('getMyBookData fail:' + err)
      }
    })
  },
  // 改变书本类型
  changeBookType: function(e) {
    console.log(e)
    // 修改的是哪本书（index）
    let whichBookIndex = e.currentTarget.dataset.index
    // 修改成了哪种书本类型（0：正版书，1：二手书，2：复印书）
    let afterAlterWhichType = e.detail.id
    if (!this.data.tempData) {
      this.setData({
        tempData: JSON.parse(JSON.stringify(this.data.myBookData))
      })
    }
    console.log("修改的书是：", this.data.tempData[whichBookIndex].bookName)
    console.log("修改前：", this.data.tempData[whichBookIndex].bookType)
    switch (afterAlterWhichType) {
      case 0:
        this.data.tempData[whichBookIndex].bookType = "正版书"
        break
      case 1:
        this.data.tempData[whichBookIndex].bookType = "二手书"
        break
      case 2:
        this.data.tempData[whichBookIndex].bookType = "复印书"
        break
    }
    console.log("修改后：", this.data.tempData[whichBookIndex].bookType)
    console.log(this.data.tempData)
    this.setData({
      confirmData: this.data.tempData
    })
  },

  //提交 
  submit: function() {
    console.log(this.data.confirmData)
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d33d8d8d378d9045f559bd5/my-book-data',
      method: "POST",
      data: this.data.confirmData,
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log("submit my-book-data fail")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMyBookData()
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
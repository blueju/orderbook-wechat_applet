let app = getApp()

// const {
//   $Toast
// } = require('../../../dist/base/index');

import {
  $Toast
} from '../../../dist/base/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId: "",
    studentName: "",
    oldPassword: "",
    newPassword: ""
  },
  /**
   * 自己的方法
   */
  // 提交
  submit: function() {
    $Toast({
      content: '修改成功',
      type: 'success'
    });
  },

  // 重置
  reset: function() {
    this.setData({
      oldPassword: "",
      newPassword: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      studentId: app.globalData.userInfo.studentId || "获取失败",
      studentName: app.globalData.userInfo.studentName || "获取失败"
    })
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
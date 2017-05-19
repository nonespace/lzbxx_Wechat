// pages/personal-center/personal-center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "http://file1.lydlr.com/c/300/300/tour/2016/0826/00945877530.jpg",
        list: [{ name: "修改个人资料", img: "../../images/person.png", url: "" },
                { name: "模块排序", img: "../../images/sorts.png" },
                { name: "我的推荐", img: "../../images/introuce.png" },
                { name: "我的直客", img: "../../images/master.png" },
                { name: "线路询价", img: "../../images/price.png" },
                { name: "通用", img: "../../images/all.png" },
                { name: "退出登录", img: "../../images/off.png" }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '奔跑吧，少年',
      desc: '跑也没有用',
      path: ''
    }
  }
})
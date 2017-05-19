Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "http://file1.lydlr.com/c/300/300/tour/2016/0826/00945877530.jpg",
    columnList: null,
    recommend_list:null
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      method: 'post',
      url: 'http://dalvuapi.dalvu.com/index.php/Api/index/index',
      data: {
        Uid: 1132,
        Sign_token: "871194654be5595cf59061d7c19b1592",
      },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        // if(res.data.status=="00002"){
        
        // }
        console.log(res.data.list)
        that.setData({columnList:res.data.columnList,recommend_list:res.data.list})
       
      }
    }) 
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },
  line_detail:function(event){
    console.log(event)

    wx.navigateTo({
      url: ''
    })

  }
})
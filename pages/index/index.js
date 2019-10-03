//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //swiper
    imgUrls: [
      '../../images/bun.jpg',
      '../../images/noodle.jpg',
      '../../images/pancake.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    
  },
  golist: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },
})

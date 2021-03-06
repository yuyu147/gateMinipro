/*
 * @Author: Chenxu
 * @Date: 2020-05-14 18:28:35
 * @LastEditTime: 2020-05-14 21:29:44
 */
// pages/setting1/setting1.js
import event from '../../utils/event'
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    language: '',
    toptipShow: false,
    errorShow: false,
    topTipMsg: '',
    form: {},
    levels: [
      wx.T.getLanguage().options.options34,
      wx.T.getLanguage().options.options35,
      wx.T.getLanguage().options.options36
    ],
    switch: [
      wx.T.getLanguage().options.options32,
      wx.T.getLanguage().options.options33
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: app.globalData.deviceName  // 设置页面标题
    })

    this.setLanguage();	// (1)
    event.on("languageChanged", this, this.setLanguage); // (2)
    this.initForm()
  },
  setLanguage () {
    this.setData({
      language: wx.T.getLanguage()
    });
  },
  // 修改等级
  changeLevel (event) {
    let value = event.detail.value;
    const key = event.currentTarget.dataset.field
    this.setData({
      form: {
        ...this.data.form,
        [key]: Number(value) + 1
      }
    })
  },
  // 初始化值
  initForm () {
    var tempJson = app.getContentToJson()
    // for (const key in tempJson) {
    //   if (tempJson.hasOwnProperty(key)) {
    //     var element = tempJson[key];
    //     // 去 0 操作
    //     tempJson[key] = element.replace(0, '')
    //   }
    // }
    this.setData({
      form: tempJson
    })
  },
  // showToptip
  showTopTip (event) {
    this.setData({
      toptipShow: false
    })
    const page = event.currentTarget.dataset.page
    const key = event.currentTarget.dataset.key
    this.setData({
      toptipShow: true,
      topTipMsg: this.data.language[page][key]
    })
  },
  // 输入框双向绑定
  formInputChange (event) {
    const value = event.detail.value
    const key = event.currentTarget.dataset.field
    this.setData({
      form: {
        ...this.data.form,
        [key]: value
      }
    })
  },
  // 保存
  saveFun (event) {
    const field = event.currentTarget.dataset.field
    const max = event.currentTarget.dataset.max
    if (!this.data.form[field] || this.data.form[field] == '') {
      this.setData({
        errorShow: true,
        topTipMsg: '写入数据不能为空!'
      })
      return false
    }
    if (Number(this.data.form[field]) >= Number(max) || Number(this.data.form[field]) < 0) {
      console.log(Number(this.data.form[field]), Number(max))
      this.setData({
        errorShow: true,
        topTipMsg: `写入的数据值大小超出范围! 最小值：0 最大值：${max}`
      })
      return false
    }

    // 判断没有 0 添 0 操作
    var sting16 = Number(this.data.form[field]).toString(16)
    // 特殊操作，存值 + 1
    if (field == 'F1' || field == 'F2') {
      sting16 = (Number(this.data.form[field]) + 1).toString(16)
    }
    var tempStr = String(sting16).length === 1 ? '0' + String(sting16) : String(sting16)
    console.log('0x' + field, '0x' + tempStr)

    app.writeBLECharacteristicValue('0x' + field, '0x' + tempStr)
  },
  // 退出断开连接
  logOut () {
    wx.reLaunch({ url: '../index/index' });
    wx.closeBluetoothAdapter()
  }
})
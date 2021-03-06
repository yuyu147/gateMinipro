/*
 * @Author: Chenxu
 * @Date: 2020-05-14 18:28:35
 * @LastEditTime: 2020-05-14 21:39:33
 */
//app.js
import locales from './utils/locales.js';
import T from './utils/i18n.js';
import {
  ab2hex,
  hexStringToArrayBuffer
} from './utils/util'

//用 /utils/locales 注册了 locale
T.registerLocale(locales);
//当前语言设置为用户上一次选择的语言，如果是第一次使用，则调用 T.setLocaleByIndex(0) 将语言设置成中文
T.setLocaleByIndex(wx.getStorageSync('langIndex') || 0);
//将 T 注册到 wx 之下，这样在任何地方都可以调用 wx.T.getLanguage() 来得到当前的语言对象了。
wx.T = T;

App({
  onLaunch: function () {

  },
  onShow: function (params) {
    console.log('app back')
    wx.reLaunch({ url: '/pages/index/index' });
  },
  onHide: function () {
    console.log('app exit')
    wx.closeBluetoothAdapter()
  },
  globalData: {
    content: '',
    // content: '01010101010101010101010101010101010101013201',
    wchs: [],
    deviceName: ''
  },
  getContentToJson () {
    var arr = []
    for (let index = 0; index < this.globalData.content.length; index += 2) {
      const tempStr = this.globalData.content.substring(index, index + 2)
      arr.push(tempStr)
    }
    // arr 是22 字节的数组，每一项都代表不同属性的值
    var tempJson = {
      F0: Number('0x' + arr[0]), // “出入口开启时长”，取值范围 1~255，单位秒
      F1: Number('0x' + arr[1]) - 1, // “延时开闸时间” ，取值范围0~5 // 特殊显示，-1 秒
      F2: Number('0x' + arr[2]) - 1, // “延时关闸时间” ，取值范围0~5 // 特殊显示，-1 秒
      F3: Number('0x' + arr[3]), // “开门转速等级” ，取值范围 1~10
      F4: Number('0x' + arr[4]), // “关门转速等级”，取值范围 1~10，
      F5: Number('0x' + arr[5]), // ”开门扭力等级” ，取值范围1~10，
      F6: Number('0x' + arr[6]), // “关门扭力等级”，取值范围1~10，
      F7: Number('0x' + arr[7]), // “是否检测常开门信号”，取值范围 取值范围 0~1
      F8: Number('0x' + arr[8]), // “刷卡是否记忆”取值范围 0~1
      F9: Number('0x' + arr[9]), // "左向通行语音”， 取值范围0~3
      FA: Number('0x' + arr[10]), // “右向通行语音”，取值范围 0~3       
      FB: Number('0x' + arr[11]), // “尾随进入语音”取值范围 0~2             
      FC: Number('0x' + arr[12]), // “非法闯入语音”取值范围 0~3  
      FD: Number('0x' + arr[13]), // ”反向进入提示语音”  
      E1: Number('0x' + arr[14]), // 音量调节

      E0: Number(String(arr[20]).substring('')[0]) || 1,  // 关门模式 拆分20字节的高半字节

      E2: Number('0x' + arr[15]), // “反向闯入处理方式”
      E3: Number('0x' + arr[16]), // “尾随进入处理方式” 
      E4: Number('0x' + arr[17]), // 防夹处理方式
      E5: Number('0x' + arr[18]), // 红外线对数
      E6: Number('0x' + arr[19]), // 红外开门设置

      E7: Number(String(arr[20]).substring('')[1]) || 1,  // “断电开闸设置” 拆分20字节的低半字节 

      E8: Number('0x' + arr[21]) // 底层喇叭播放的语言，只能有三种 中文 1 ，英文 2 ，第三种语言 3 .当前第三种语言为阿拉伯语
      // 还有一个备用 arr[21]
    }

    return tempJson
  },
  // 获取deviceCode
  getDeviceCode (deviceName) {
    switch (deviceName) {
      case 'PedestrianGate_8':
        return 0x08
      case 'PedestrianGate_7':
        return 0x07
      case 'PedestrianGate_6':
        return 0x06
      case 'PedestrianGate_5':
        return 0x05
      case 'PedestrianGate_4':
        return 0x04
      case 'PedestrianGate_3':
        return 0x03
      case 'PedestrianGate_2':
        return 0x02
      default:
        return 0x01
    }
  },
  // 写入数据
  writeBLECharacteristicValue (a, b, isTiaoshi) {
    // 向蓝牙设备发送4字节的数据
    // 分别为 产品序列编号 命令号 内容 异或校验
    const deviceHex = this.getDeviceCode(this.globalData.deviceName) // 设备代码
    const deviceHexString = deviceHex.toString(16).length === 1 ? `0x0${deviceHex.toString(16)}` : `0x${deviceHex.toString(16)}`
    const checkByte = (deviceHex ^ a ^ b).toString(16)
    const checkByteString = checkByte.length === 1 ? `0x0${checkByte}` : `0x${checkByte}`

    const value = ab2hex(hexStringToArrayBuffer(deviceHexString)).substring(2, 4) +
      ab2hex(hexStringToArrayBuffer(a)).substring(2, 4) +
      ab2hex(hexStringToArrayBuffer(b)).substring(2, 4) +
      ab2hex(hexStringToArrayBuffer(checkByteString)).substring(2, 4)


    // 写入服务 ， 调试模式是写入第一个服务 ， 有可能第一个第二个顺序会改变，isTiaoshi 一次只能写入一个字节，操作码
    wx.writeBLECharacteristicValue({
      deviceId: this.globalData.wchs[1].deviceId,
      serviceId: this.globalData.wchs[1].serviceId,
      characteristicId: this.globalData.wchs[1].characteristicId,
      value: hexStringToArrayBuffer(value),
      success: (res) => {
        console.log(value)
        wx.showToast({
          title: '操作成功！',  // 标题
          duration: 800   // 提示窗停留时间，默认1500ms
        })
      },
      fail: (res) => {
        console.log(res)
        // 检查报错信息
        if (res.errCode === 10006) {
          wx.showToast({
            title: '写入失败，设备断开连接！',  // 标题
            icon: 'none',
            duration: 1500   // 提示窗停留时间，默认1500ms
          })
          setTimeout(() => {
            wx.reLaunch({ url: '../index/index' });
          }, 1500);
        }
      }
    })

  }
})
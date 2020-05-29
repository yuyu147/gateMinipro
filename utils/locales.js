export default {
  'zh_cn': {
    'language': '简体中文',
    'save': '保存',
    'connect': '断开链接',
    'index1': '已发现',
    'index2': '个外围设备',
    'index3': '信号强度',
    'index4': '特性UUID',
    'index5': '特性值',
    'devices': {
      'PedestrianGate_1': '翼闸',
      'PedestrianGate_2': '摆闸',
      'PedestrianGate_3': '速通门',
      'PedestrianGate_4': '三辊闸',
      'PedestrianGate_5': '广告门',
      'PedestrianGate_6': '升降柱',
      'PedestrianGate_7': '全高转闸',
      'PedestrianGate_8': '圆柱摆闸'
    },
    'setting1': {
      'label1': '出入口开启时长:',
      'label2': '延时开闸时间:',
      'label3': '延时关闸时间:',
      'label4': '开门转速等级:',
      'label5': '关门转速等级:',
      'label6': '开门扭力等级:',
      'label7': '关门扭力等级:',
      'topTip1': '设置开闸后，无人通行，闸机自动关闸的时间，默认为 5秒。数据可取范围为3~250',
      'topTip2': '收到开闸信号后闸门延时开闸的时间，默认为 0秒',
      'topTip3': '设置行人通过通道内最后一对红外后延时关闸的时间，默认为 0秒',
      'topTip4': '调整开门速度，共有5个速度等级（1~5），值越大速度越快',
      'topTip5': '调整关门速度，共有5个速度等级（1~5），值越大速度越快',
      'topTip6': '调整开门时电机扭力大小，共有5个等级（1~5），值越大，电机输出扭力越大',
      'topTip7': '调整关门时电机扭力大小，共有5个等级（1~5），值越大，电机输出扭力越大'
    },
    'setting2': {
      'label1': '是否检测常开信号:',
      'label2': '刷卡是否记忆:',
      'label3': '左向通行语音:',
      'label4': '右向通行语音:',
      'label5': '尾随进入语音:',
      'label6': '非法闯入语音:',
      'label7': '反向进入语音:',
      'label8': '音量调节:',
      'topTip1': '是否允许开门信号持续超过5秒以上门就进入常开门模式，默认不允许通过门禁常开门，“否”、不检测该项，“是”、检测该项超过5秒认为是常开',
      'topTip2': '设置连续多次刷卡时控制器是否记忆刷卡次数。默认为不记忆刷卡次数',
      'topTip3': '左向通行语音选择：0、取消声音；1、欢迎光临；2、一路顺风；3、请进',
      'topTip4': '设置右向通行语音，可选内容：0、取消声音；1、欢迎光临；2、一路顺风；3、请进',
      'topTip5': '尾随进入时语音选择：0、取消声音；1、尾随进入；2、请刷卡，不满足可 定制声音',
      'topTip6': '非法闯入时语音选择：0、取消声音1、非法闯入请刷卡；2请刷卡；3、未授权',
      'topTip7': '反向进入时语音选择：0、取消声音1、反向进入；2请刷卡；3、未授权',
      'topTip8': '音量调节'
    },
    'setting3': {
      'label1': '反向闯入处理:',
      'label2': '尾随进入处理:',
      'label3': '防夹处理方式:',
      'label4': '红外线对数:',
      'label5': '红外开门设置:',
      'label6': '断电开闸设置:',
      'label8': '语音语种',
      'topTip1':
        `
          反向闯入设置，0、不处理反向进入，
          1、反向进入只是语音报警，
          2、反向进入语音报警并尝试关门（通道内防夹红外处有人就不关门，防夹红外处没人才关门），一旦关门，本次刷卡信号作废，需要重新刷卡开门
          3、 反向进入语音报警并尝试关门（通道内防夹红外处有人就不关门，防夹红外处没人才关门），关门以后如果反向信号撤销，就再次开门
          4、反向进入语音报警并强制立即关门（不论是防夹红外否有人），关门后本次刷卡信号作废，需要重新刷卡才开门。
          反向进入语音报警并强制立即关门（不论是防夹红外否有人），关门后如果反向信号撤销，再次开门数
        `,
      'topTip2': '尾随进入：0、不处理尾随，1、尾随只语音报警，2、尾随只要防夹信号没人就立即关门，3、尾随立即关门，不考虑防夹信号。',
      'topTip3': '遇到防夹信号时右3种处理方式：1、不处理防夹，2、有防夹时摆臂或翼门反弹回去，3、有防夹信号时摆臂或翼门暂停动作',
      'topTip4': '选择通道内红外线的对数，8对以下，请接在同一个控制器上，16对，请在2个控制器上接8个。最多能接16对红外对射',
      'topTip5': '红外开门：0、取消；1遇到左红外开门；2、右红外开门，3遇到左右红外都开门',
      'topTip6': '断电开闸设置0、断电不开闸，（1）、左开闸，（2）、右开闸。左开右开只是对摆闸有效',
      'topTip8': '底层喇叭播放的语言',
    },
    'setting4': {
      'label1': '初始化系统参数',
      'label2': '调换电机运动方向',
      'label3': '自动校正零位',
      'label4': '系统测试',
      'topTip1': '将系统参数恢复到出厂设置，非特殊情况，不要操作',
      'topTip2': '切换电机正反转方向，出厂前已经设定好，非特殊情况，不要操作',
      'topTip3': '让系统自动校正零位，出厂前已经设定好，非特殊情况，不要操作',
      'topTip4': '让系统自动测试',
      'c1': '确定要初始化?',
      'c2': '确定要调换电机运动方向?',
      'c3': '确定校正零位?',
      'c4': '确定执行系统测试?',
    }
  },
  'en': {
    'language': 'Simplified Chinese',
    'save': 'Save',
    'connect': 'Disconnect link',
    'index1': 'Found',
    'index2': 'A peripheral device',
    'index3': 'Signal strength',
    'index4': 'Feature UUID',
    'index5': 'Characteristic value',
    'devices': {
      'PedestrianGate_1': 'Wing Gate',
      'PedestrianGate_2': 'Swing gate',
      'PedestrianGate_3': 'Speed ​​gate',
      'PedestrianGate_4': 'Three roller gate',
      'PedestrianGate_5': 'Advertising door',
      'PedestrianGate_6': 'Lifting column',
      'PedestrianGate_7': 'Full height transfer gate',
      'PedestrianGate_8': 'Cylinder swing gate'
    },
    'setting1': {
      'label1': 'Duration of opening and exit',
      'label2': 'Delayed opening time',
      'label3': 'Delayed closing time',
      'label4': 'Door speed level',
      'label5': 'door closing speed level',
      'label6': 'Door opening torque level',
      'label7': 'Close door torque level',
      'topTip1': 'After setting the gate, no one will pass, and the gate will automatically close the gate. The default is 5 seconds. The data range is 3 ~ 250 ',
      'topTip2': 'The delay time of gate opening after receiving the gate opening signal, the default is 0 seconds',
      'topTip3': 'Set the delay time for pedestrians to pass through the last pair of infrared rays in the channel, the default is 0 seconds',
      'topTip4': 'Adjust the door opening speed, there are 5 speed levels (1 ~ 5), the larger the value, the faster the speed',
      'topTip5': 'Adjust the door closing speed, there are 5 speed levels (1 ~ 5), the larger the value, the faster the speed',
      'topTip6': 'Adjust the torque of the motor when opening the door, there are 5 levels (1 ~ 5), the greater the value, the greater the output torque of the motor',
      'topTip7': 'Adjust the torque of the motor when closing the door, there are 5 levels (1 ~ 5), the greater the value, the greater the output torque of the motor'
    },
    'setting2': {
      'label1': 'Whether to detect normally open door',
      'label2': 'Whether the card is remembered',
      'label3': 'Left to pass voice',
      'label4': 'Right-track voice',
      'label5': 'Tracking into voice',
      'label6': 'illegal intrusion into voice',
      'label7': 'Reverse entry prompt tone',
      'label8': 'Volume adjustment',
      'topTip1': 'Whether the door opening signal is allowed to continue for more than 5 seconds and the door enters the normally open mode. By default, the door is not allowed to pass the normally open door. "No", do not detect this item, "Yes", detect this item for more than 5 seconds and consider it Normally open',
      'topTip2': 'Set whether the controller memorizes the number of card swipes when swiping for multiple times. The default is not to remember the number of card swipes',
      'topTip3': 'Left-direction voice selection: 0, cancel the sound; 1, welcome to visit; 2, all the way downwind; 3. please enter',
      'topTip4': 'Set the right pass voice, optional content: 0, cancel the sound; 1, welcome to visit; 2, all the way downwind; 3. Please enter',
      'topTip5': 'Voice selection when trailing in: 0, cancel the sound; 1. trailing in; 2. swipe, please do not meet the customizable sound',
      'topTip6': 'Voice selection during illegal intrusion: 0, cancel sound 1, please swipe your card for illegal intrusion; 2 please swipe your card; 3. unauthorized',
      'topTip7': 'Voice selection during reverse entry: 0, cancel sound 1, reverse entry; 2 please swipe; 3, unauthorized',
      'topTip8': 'Volume adjustment'
    },
    'setting3': {
      'label1': 'Reverse intrusion processing',
      'label2': 'Tailed into processing',
      'label3': 'Anti-pinch processing method',
      'label4': 'Infrared logarithm',
      'label5': 'Infrared door opening setting',
      'label6': 'Power off and opening settings',
      'topTip1':
        `
          Reverse intrusion setting, 0, do not handle reverse entry,
          1. Reverse entry is only a voice alarm,
          2. Enter the voice alarm in reverse and try to close the door (someone in the anti-pinch infrared channel in the channel will not close the door, and no person in the anti-pinch infrared room will close the door). Once the door is closed, the card swipe signal will be invalid and the card will need to be reopened
          3. Enter the voice alarm in the reverse direction and try to close the door (someone in the anti-pinch infrared channel in the channel will not close the door, and no person in the anti-pinch infrared room will close the door). If the reverse signal is cancelled after the door is closed, the door will be opened again
          4. Enter the voice alarm in the reverse direction and force to close the door immediately (regardless of whether it is anti-pinch infrared or not). After the door is closed, the card swipe signal is invalid. You need to swipe the card again to open the door.
          Enter the voice alarm in the reverse direction and force to close the door immediately (whether it is anti-pinch infrared or not), if the reverse signal is cancelled after the door is closed, the number of doors opened again
        `,
      'topTip2': 'Tail-in entry: 0, do not process the trailing, 1, the trailing only voice alarm, 2, trailing as soon as the anti-pinch signal no one will close the door immediately, 3, trailing immediately close the door, regardless of the anti-pinch signal. ',
      'topTip3': 'Three processing methods on the right when encountering the anti-pinch signal: 1. Do not process anti-pinch, 2. Swing arm or wing door bounce back when anti-pinch, 3. Swing arm or wing door when anti-pinch signal Pause action ',
      'topTip4': 'Select the number of infrared rays in the channel, 8 pairs or less, please connect to the same controller, 16 pairs, please connect 8 controllers to 2 controllers. Can receive up to 16 pairs of infrared radiation ',
      'topTip5': 'Infrared door opening: 0, cancel; 1 meets left infrared door opening; 2, right infrared door opens, 3 both left and right infrared doors open',
      'topTip6': 'Set to 0 when the power is turned off and 0 is not turned on when the power is turned off. Opening from left to right is only effective for swing gates'
    },
    'setting4': {
      'label1': 'Initialize system parameters',
      'label2': 'Reverse the direction of motor movement',
      'label3': 'Automatic zero correction',
      'label4': 'System test',
      'topTip1': 'Restore the system parameters to the factory settings, no special circumstances, do not operate',
      'topTip2': 'Switch the motor forward and reverse direction, it has been set before leaving the factory, no special circumstances, do not operate',
      'topTip3': 'Let the system automatically correct the zero position, it has been set before leaving the factory, no special circumstances, do not operate',
      'topTip4': 'Let the system test automatically',
      'c1': 'Are you sure you want to initialize?',
      'c2': 'Are you sure to change the direction of motor movement?',
      'c3': 'Are you sure to correct the zero position?',
      'c4': 'Are you sure you want to perform system tests?',
    }
  }
}
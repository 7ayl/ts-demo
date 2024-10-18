// 中转站：汇总所有的模块来使用
import useChannelsStore from './modules/channels'

export default () => ({
    channels: useChannelsStore() // 调用方法得到 channels 模块对象
  })

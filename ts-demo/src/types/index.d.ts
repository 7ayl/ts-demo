export type ChannelsList = {
    id: number
    name: string
  }[]

export type ChannelsRes = {
    data: {
      channels: ChannelsList
    },
    message: string
  }
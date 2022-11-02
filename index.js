import 'dotenv/config'
import linebot from 'linebot'
import { scheduleJob } from 'node-schedule'
import fetchAnime from './commands/fetchAnime.js'
import fetchCourse from './commands/fetchCourse.js'
import rateUpdate from './utils/rateUpdate.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

let USDTWD = 30
const updateRate = async () => {
  USDTWD = await rateUpdate()
}
scheduleJob('0 0 * * *', updateRate)
updateRate()

bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text === '共通課程') {
    fetchCourse(event)
  } else if (event.message.text.startsWith('查動畫 ')) {
    fetchAnime(event)
  } else if (event.message.text.startsWith('查匯率')) {
    event.reply(USDTWD.toString())
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

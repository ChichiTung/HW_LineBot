import axios from 'axios'
import * as cheerio from 'cheerio'

export default async (event) => {
  try {
    const { data } = await axios.get(`https://ani.gamer.com.tw/animeVideo.php?sn=${event.message.text.substr(4)}`)
    const $ = cheerio.load(data)
    const score = $('.score-overall-number').text() || '目前無此動畫或動畫授權已到期！'
    event.reply(score)
  } catch (error) {
    event.reply('發生錯誤請稍後再試')
    console.error(error)
  }
}

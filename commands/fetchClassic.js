// 本週電影
import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/classic.js'
import writejson from '../utils/writejson_classic.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.imdb.com/chart/top?sort=ir')
    const $ = cheerio.load(data)

    const list = []

    const bubble = JSON.parse(JSON.stringify(template))

    // 抓隨機
    const random = Math.round(Math.random() * 250)
    // console.log(random)
    bubble.body.contents[0].contents[0].contents[0].url = $('.posterColumn').eq(random).find('img').attr('src').trim()

    bubble.body.contents[0].contents[0].contents[1].contents[0].contents[0].text = $('.titleColumn a').eq(random).text().trim()

    // bubble.body.contents[0].contents[0].contents[1].contents[0].contents[0].text = 'imdb:' + $('.imdbRating strong').eq(random).text().trim() + ' 分'

    // const rank = '第 ' + (random + 1) + ' 名'
    // const play = 'https://gimytv.tv/search/-------------.html?wd=' + (title) + '&submit='

    list.push(bubble)

    const reply = {
      type: 'flex',
      altText: '🎬經典推薦🎬',
      contents: {
        type: 'carousel',
        contents: list
      }

    }
    await event.reply(reply)
    writejson(reply, 'classic')
  } catch (error) {
    event.reply('經典初步來ˊˋ')
    console.error(error)
  }
}

// 本週電影
import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/movie_thisweek.js'
import writejson from '../utils/writejson_movieWeek.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://movies.yahoo.com.tw/movie_thisweek.html')
    const $ = cheerio.load(data)

    const list = []
    const bgColor = ['#007979bb', '#4B5F80cc', '#2E889499', '#8E9DBFdd', '#004B97bb', '#007979cc', '#8E9DBFdd', '#2E8894cc', '#4B5F80dd', '#004B97cc']

    for (let i = 0; i < $('.release_info').length; i++) {
      const bubble = JSON.parse(JSON.stringify(template))

      // 電影封面
      bubble.body.contents[0].url = $('.release_foto').eq(i).find('img').attr('data-src').trim()

      // 電影標題
      bubble.body.contents[1].contents[0].contents[0].text = $('.release_movie_name a:even').eq(i).text().trim()

      // 標題連結=>預告片
      // bubble.body.contents[1].contents[0].contents[0].action.uri = $('.btn_s_vedio').eq(i).attr('href').trim()

      // time table
      // bubble.body.contents[1].contents[0].action.uri =

      // 電影介紹(略)
      bubble.body.contents[1].contents[1].contents[0].text = $('.release_text').eq(i).text().trim().replace(/\n/g, '').substring(0, 35)

      // 電影介紹(完整)
      bubble.body.contents[1].contents[1].action.text = $('.release_text').eq(i).text().trim().replace(/\n/g, ' ').substring(0, 200)

      // 來點影評 用 encodeURI() 讓特殊字元可以吃進去
      bubble.body.contents[1].contents[2].contents[1].action.uri = encodeURI('https://news.agentm.tw/?s=' + $('.release_movie_name a:even').eq(i).text().trim().replace(/\s+/g, ''))

      // 去查時刻
      // bubble.body.contents[1].contents[3].uri =

      // 上映日期
      bubble.body.contents[2].contents[0].text = $('.release_movie_time').eq(i).text().trim().replaceAll(/上映日期：\n {16}/g, '').substring(5, 10).replaceAll('-', '/')

      // 背景顏色
      bubble.body.contents[1].backgroundColor = bgColor[i % 5]

      // 日期背景顏色
      // 背景顏色
      bubble.body.contents[2].backgroundColor = bgColor[i % 5 + 2

      ]

      list.push(bubble)
    }

    const reply = {
      type: 'flex',
      altText: '🎬本週新片🎬',
      contents: {
        type: 'carousel',
        contents: list
      }

    }
    await event.reply(reply)
    writejson(reply, 'movie_week')
  } catch (error) {
    event.reply('出不來啊啊啊啊')
    console.error(error)
  }
}

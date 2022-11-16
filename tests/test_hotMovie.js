import axios from 'axios'
import * as cheerio from 'cheerio'

// 熱映中
const main = async () => {
  try {
    const { data } = await axios.get('https://movies.yahoo.com.tw/movie_intheaters.html')

    const $ = cheerio.load(data)
    // 正文開始
    const list = []
    const idList = []
    for (let i = 0; i < 5; i++) {
      // lists.push($(this).text().trim())

      const title = $('.release_movie_name a:even').eq(i).text().trim()
      const source = $('.en a').eq(i).attr('href').trim()
      const id = source.substring(-5, 5)
      const expectLevel = $('.leveltext span').eq(i).text().trim()
      const time = $('.release_movie_time').eq(i).text().trim().replaceAll(/上映日期：\n {16}/g, '').substring(5, 10)
      const timeTable = $('.btn_s_time').eq(i).attr('href').trim()
      const text = $('.release_text').eq(i).text().trim().replace(/\n/g, '  ').substring(0, 38)
      const photo = $('.release_foto').eq(i).find('img').attr('data-src').trim()
      const clips = $('.btn_s_vedio').eq(i).attr('href').trim()
      const comments = 'https://news.agentm.tw/?s=' + $('.release_movie_name a:even').eq(i).text().trim()

      list.push({ title, source, id, expectLevel, time, timeTable, text, photo, clips, comments })
      idList.push({ id })
    }

    console.log(list)
  } catch (error) {
    console.error('error')
  }
}

main()

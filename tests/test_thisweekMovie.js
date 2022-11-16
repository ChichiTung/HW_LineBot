import axios from 'axios'
import * as cheerio from 'cheerio'

// 本周新片
const main = async () => {
  try {
    const { data } = await axios.get('https://movies.yahoo.com.tw/movie_thisweek.html')
    const $ = cheerio.load(data)
    // 正文開始
    const list = []
    for (let i = 0; i < $('.release_info').length; i++) {
      // lists.push($(this).text().trim())

      const title = $('.release_movie_name a:even').eq(i).text().trim()
      const expectLevel = $('.leveltext span').eq(i).text().trim()
      const time = $('.release_movie_time').eq(i).text().trim().replaceAll(/上映日期：\n {16}/g, '')
      const text = $('.release_text').eq(i).text().trim().replace(/\n/g, '  ')
      const photo = $('.release_foto').eq(i).find('img').attr('data-src').trim()

      const clips = $('.btn_s_vedio').eq(i).attr('href').trim()
      const comments = 'https://news.agentm.tw/?s=' + $('.release_movie_name a:even').eq(i).text().trim()

      list.push({ title, expectLevel, time, text, photo, clips, comments })
    }

    console.log(list)
  } catch (error) {
    console.error('error')
  }
}

main()

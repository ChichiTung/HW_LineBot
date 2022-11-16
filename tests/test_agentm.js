import axios from 'axios'
import * as cheerio from 'cheerio'

// 本周新片
const main = async () => {
  try {
    const movieTitle = '黑豹2'
    const { data } = await axios.get(`https://news.agentm.tw/?s=${movieTitle}`)
    // https://movies.yahoo.com.tw/movietime_result.html?movie_id=13462&area_id=28
    const $ = cheerio.load(data)
    // 正文開始
    const list = []
    for (let i = 0; i < 3; i++) {
      // lists.push($(this).text().trim())

      const title = $('.ec-title a').eq(i).text().trim()
      const source = $('.ec-fit').attr('href').trim()
      const img = $('.ec-fit').find('img').attr('data-src').trim()

      list.push({ img, title, source })
    }

    console.log(list)
  } catch (error) {
    console.error('error')
  }
}

main()

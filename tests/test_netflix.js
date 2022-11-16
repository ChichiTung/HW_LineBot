// https://top10.netflix.com/
import axios from 'axios'
import * as cheerio from 'cheerio'

// 熱映中
const main = async () => {
  try {
    const { data } = await axios.get('https://top10.netflix.com/taiwan')

    const $ = cheerio.load(data)
    // 正文開始
    const list = []
    for (let i = 0; i < 10; i++) {
      // lists.push($(this).text().trim())

      // const img = $('.banner-image').eq(i).attr('src').trim()
      const img = $('.banner-image').eq(i).attr('src').trim()
      const title = $('.banner-image').eq(i).attr('alt').trim()
      const web = $('.banner-hours-graf').eq(i).find('a').attr('href').trim().replace('title', 'tw/title')
      list.push({ img, title, web })
    }

    console.log(list)
  } catch (error) {
    console.error('error')
  }
}

main()

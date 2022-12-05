import axios from 'axios'
import * as cheerio from 'cheerio'

// 熱映中
const main = async () => {
  try {
    const { data } = await axios.get('https://www.imdb.com/chart/top?sort=ir')

    const $ = cheerio.load(data)
    // 正文開始
    const list = []

    // 抓隨機
    const random = Math.round(Math.random() * 250)
    console.log(random)

    // lists.push($(this).text().trim())
    const rank = '第 ' + (random + 1) + ' 名'
    const title = $('.titleColumn a').eq(random).text().trim()
    const img = $('.posterColumn').eq(random).find('img').attr('src').trim()
    const score = 'imdb:' + $('.imdbRating strong').eq(random).text().trim() + ' 分'
    const play = 'https://gimytv.tv/search/-------------.html?wd=' + (title) + '&submit='
    // const source = $('.en a').eq(i).attr('href').trim()
    // const id = source.substring(-5, 5)
    // const expectLevel = $('.leveltext span').eq(i).text().trim()
    // const time = $('.release_movie_time').eq(i).text().trim().replaceAll(/上映日期：\n {16}/g, '').substring(5, 10)
    // const timeTable = $('.btn_s_time').eq(i).attr('href').trim()
    // const text = $('.release_text').eq(i).text().trim().replace(/\n/g, '  ').substring(0, 38)
    // const photo = $('.release_foto').eq(i).find('img').attr('data-src').trim()
    // // const clips = $('.btn_s_vedio').eq(i).attr('href').trim()
    // const comments = 'https://news.agentm.tw/?s=' + $('.release_movie_name a:even').eq(i).text().trim()

    list.push({ rank, title, img, score, play })

    console.log(list)
  } catch (error) {
    console.log(error)
    // console.error('error')
  }
}

main()

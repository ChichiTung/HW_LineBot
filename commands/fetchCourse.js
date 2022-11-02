import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/course.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    const courses = []
    $('#general .card').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.hero.url = 'https://wdaweb.github.io/' + $(this).find('img').attr('src').substr(2).trim()
      bubble.body.contents[0].text = $(this).find('.card-title').text().trim()
      bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.card-description').text().trim()
      courses.push(bubble)
    })
    const reply = {
      type: 'flex',
      altText: '共通課程查詢結果',
      contents: {
        type: 'carousel',
        contents: courses
      }
    }
    event.reply(reply)
    writejson(reply, 'courses')
    // console.log(JSON.stringify(reply, null, 2))
  } catch (error) {
    console.error(error)
  }
}

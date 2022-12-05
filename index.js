import 'dotenv/config'
import linebot from 'linebot'
// import { scheduleJob } from 'node-schedule'
// import express from 'express'
// import fetchAnime from './commands/fetchAnime.js'
import fetchCourse from './commands/fetchCourse.js'
import fetchMovieWeek from './commands/fetchMovieWeek.js'
import fetchMovieHot from './commands/fetchMovieHot.js'
import fetchImage from './commands/fetchImage.js'
import fetchTheater from './commands/fetchTheater.js'
import fetchClassic from './commands/fetchClassic.js'
// import quickreply from './templates/qr_movie_hit.json' assert {type:jason}

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text === '共通課程') {
    fetchCourse(event)
  } else if (event.message.text.startsWith('找找電影院')) {
    fetchTheater(event)
  } else if (event.message.text.startsWith('本週新片')) {
    fetchMovieWeek(event)
  } else if (event.message.text.startsWith('上映中')) {
    fetchMovieHot(event)
  } else if (event.message.text.startsWith('圖片')) {
    fetchImage(event)
  } else if (event.message.text.startsWith('經典推薦')) {
    fetchClassic(event)
  }
})
// const linebotParser = bot.parser()

// app.post('/', linebotParser)

// app.get('/', (req, res) => {
//   res.status(200).send('ok')
// })

// app.listen(process.env.PORT || 3000, () => {
//   console.log('機器人啟動')
// })

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

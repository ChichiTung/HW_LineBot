
export default async (event) => {
  try {
    const reply = {
      type: 'text',
      text: '請選擇你想知道的電影院資訊~',
      quickReply: {
        items: [
          // {
          //   type: 'action',
          //   imageUrl: 'https://i.pinimg.com/originals/97/5c/e0/975ce0a8948a8afe490955a1ae158fec.gif',
          //   action: {
          //     type: 'message',
          //     label: 'Sushi',
          //     text: 'Sushi'
          //   }
          // },
          {
            type: 'action',
            imageUrl: 'https://i.gifer.com/7UqT.gif',
            action: {
              type: 'location',
              label: '分享定位，找最近的電影院',
              text: '找最近的電影院'
            }
          },
          {
            type: 'action',
            imageUrl: 'https://i.pinimg.com/originals/8b/71/93/8b7193b2110a034a2fe037437afc80b3.gif',
            action: {
              type: 'message',
              label: '電影院票價',
              text: 'https://vvnlens.com/theater-ticket-price/'
            }
          }
          // {
          //   type: 'action',
          //   action: {
          //     type: 'location',
          //     label: 'Send location'
          //   }
          // }
        ]
      }
    }

    event.reply(reply)

    // console.log(JSON.stringify(reply, null, 2))
  } catch (error) {
    console.error(error)
  }
}

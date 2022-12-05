
export default async (event) => {
  try {
    // const image = JSON.parse(JSON.stringify(template))
    // const i = 'https://i.pinimg.com/originals/97/5c/e0/975ce0a8948a8afe490955a1ae158fec.gif'
    const reply = {
      // type: 'image',
      // originalContentUrl: `${i}`,
      // previewImageUrl: `${i}`

      type: 'text',
      text: 'Select your favorite food category or send me your location!',
      quickReply: {
        items: [
          {
            type: 'action',
            imageUrl: 'https://example.com/sushi.png',
            action: {
              type: 'message',
              label: 'Sushi',
              text: 'Sushi'
            }
          },
          {
            type: 'action',
            imageUrl: 'https://example.com/tempura.png',
            action: {
              type: 'message',
              label: 'Tempura',
              text: 'Tempura'
            }
          },
          {
            type: 'action',
            action: {
              type: 'location',
              label: 'Send location'
            }
          }
        ]
      }
    }

    event.reply(reply)

    // console.log(JSON.stringify(reply, null, 2))
  } catch (error) {
    console.error(error)
  }
}

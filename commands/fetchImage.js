
export default async (event) => {
  try {
    // const image = JSON.parse(JSON.stringify(template))
    const i = 'https://i.pinimg.com/originals/97/5c/e0/975ce0a8948a8afe490955a1ae158fec.gif'
    const reply = {
      type: 'image',
      originalContentUrl: `${i}`,
      previewImageUrl: `${i}`
    }

    event.reply(reply)

    // console.log(JSON.stringify(reply, null, 2))
  } catch (error) {
    console.error(error)
  }
}

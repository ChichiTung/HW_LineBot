export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://movies.yahoo.com.tw/i/r/w420/production/movies/June2022/EYSyqlKZVN1EFARUkSdA-800x1142.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '8:10',
        gravity: 'center',
        action: {
          type: 'message',
          label: 'action',
          text: '怪奇物語'
        }
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '美國 人氣',
                color: '#E4F2ED',
                size: 'md',
                flex: 0,
                align: 'end',
                weight: 'bold'
              }
            ],
            flex: 0,
            spacing: 'lg',
            backgroundColor: '#BAD99C99',
            alignItems: 'flex-end',
            paddingAll: '3px',
            cornerRadius: '20px',
            paddingStart: '8px',
            paddingEnd: '8px'
          }
        ],
        position: 'absolute',
        offsetTop: '18px',
        offsetEnd: '18px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        position: 'absolute',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          endColor: '#00000000',
          startColor: '#00000099'
        },
        width: '100%',
        height: '40%',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '怪奇物語',
                    size: 'xl',
                    color: '#ffffff',
                    weight: 'bold'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '第四季',
                        color: '#a9a9a9',
                        size: 'sm',
                        flex: 0,
                        align: 'end'
                      }
                    ],
                    flex: 0,
                    spacing: 'lg'
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'box',
                        layout: 'baseline',
                        contents: [
                          {
                            type: 'text',
                            text: 'NO.1',
                            color: '#E4F2ED',
                            size: 'sm',
                            flex: 0,
                            align: 'end'
                          }
                        ],
                        flex: 0,
                        spacing: 'lg',
                        backgroundColor: '#45617399',
                        paddingAll: '2px',
                        cornerRadius: '20px',
                        paddingStart: '8px',
                        paddingEnd: '8px'
                      }
                    ],
                    position: 'absolute',
                    offsetEnd: '0px'
                  }
                ]
              }
            ],
            spacing: 'xs'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '20px'
      }
    ],
    paddingAll: '0px'
  }
}

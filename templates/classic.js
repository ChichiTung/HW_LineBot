export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
                aspectMode: 'fit',
                size: 'sm',
                margin: '5px'
              }
            ],
            width: '72px',
            height: '72px',
            cornerRadius: '10px'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                contents: [
                  {
                    type: 'span',
                    text: '料理鼠王',
                    weight: 'bold',
                    color: '#000000',
                    size: 'lg'
                  }
                ],
                size: 'sm',
                wrap: true,
                align: 'start',
                position: 'relative',
                adjustMode: 'shrink-to-fit'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: 'IMDb : 8.0',
                    size: 'md',
                    color: '#bcbcbc'
                  }
                ],
                spacing: 'sm',
                margin: 'md',
                offsetTop: '6px'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: 'Rank  217  of IMDb Top 250 Movies',
                    size: 'xxs',
                    color: '#bcbcbc'
                  }
                ],
                spacing: 'sm',
                margin: 'md',
                position: 'relative'
              }
            ],
            margin: '5px'
          }
        ],
        spacing: 'xl',
        paddingAll: '20px'
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
                type: 'filler'
              },
              {
                type: 'text',
                text: '📝  IMDb 影評',
                color: '#333333',
                flex: 0,
                margin: '0px'
              }
            ],
            position: 'relative',
            flex: 0,
            offsetTop: '4px',
            offsetStart: '25px',
            action: {
              type: 'uri',
              label: 'action',
              uri: 'http://linecorp.com/'
            }
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'text',
                text: '🎦  線上看看',
                color: '#333333',
                flex: 0,
                margin: '40px'
              }
            ],
            position: 'relative',
            flex: 0,
            offsetTop: '4px',
            margin: '5px',
            offsetStart: '20px',
            action: {
              type: 'uri',
              label: 'action',
              uri: 'http://linecorp.com/'
            }
          }
        ],
        backgroundColor: '#FFD306',
        height: '30px'
      }
    ],
    paddingAll: '0px'
  }
}

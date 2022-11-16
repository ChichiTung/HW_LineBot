export default

{
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://movies.yahoo.com.tw/i/r/w420/production/movies/October2022/ITXoSsMKLpqEJ0cx8Yhf-1080x1527.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '2:3',
        gravity: 'top'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '刀劍神域劇場版 –Progressive- 陰沉薄暮的詼諧曲',
                size: 'xl',
                color: '#FFFFFF',
                weight: 'bold',
                style: 'normal',
                action: {
                  type: 'uri',
                  label: 'action',
                  uri: 'https://movies.yahoo.com.tw/video/%E5%88%80%E5%8A%8D%E7%A5%9E%E5%9F%9F%E5%8A%87%E5%A0%B4%E7%89%88-progressive-%E9%99%B0%E6%B2%89%E8%96%84%E6%9A%AE%E7%9A%84%E8%A9%BC%E8%AB%A7%E6%9B%B2-%E9%95%B7%E7%89%88%E9%A0%90%E5%91%8A-022052702.html?movie_id=14177'
                }
              },
              {
                type: 'separator',
                margin: '5px'
              }
            ],
            action: {
              type: 'uri',
              label: 'action',
              uri: 'http://linecorp.com/'
            }
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '本部劇場版是描述在TV版系列中所沒出現過的浮游城《艾恩葛朗特》第5層的故',
                color: '#ebebeb',
                size: 'sm',
                flex: 0,
                wrap: true,
                margin: '5px'
              }
            ],
            spacing: 'lg',
            action: {
              type: 'message',
              label: 'action',
              text: '本部劇場版是描述在TV版系列中所沒出現過的浮游城《艾恩葛朗特》第5層的故事。在已公開的預告片中，出現了放 著攻略遊戲不管只沉溺於PK（獵殺玩家）的集團、對著亞絲娜拔刀相向的不明人士、以及披著黑色風衣的男人緊逼而來！另外， 似乎透漏兩大公會正發生著什麼問題的「想要通關這個遊戲，DKB跟ALS都是必需的」的這句話又有著什麼含意？    桐人和亞絲 娜在前作就參戰的米特、亞魯戈以及艾基爾的協力之下挺身對抗Boss，然而出現在桐人面前的卻是與封測時不同的強大怪物──。 究竟桐人與亞絲娜等人能否成功通關第五層呢！？'
            },
            paddingTop: '5px'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://ppt.cc/frpFhx@.png',
                    size: '20px',
                    position: 'relative',
                    offsetEnd: '0px',
                    offsetBottom: '-2px',
                    margin: '10px'
                  },
                  {
                    type: 'text',
                    text: '來點影評',
                    color: '#ffffff',
                    flex: 0,
                    offsetStart: '5px',
                    offsetTop: '-3px'
                  }
                ],
                spacing: '5px',
                action: {
                  type: 'uri',
                  label: 'action',
                  uri: 'https://news.agentm.tw/?s=%E5%88%80%E5%8A%8D'
                }
              },
              {
                type: 'filler'
              }
            ],
            borderWidth: '1px',
            cornerRadius: '4px',
            spacing: 'sm',
            borderColor: '#ffffff',
            margin: 'lg',
            height: '40px',
            maxWidth: '120px',
            position: 'relative',
            offsetTop: '5px'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://ppt.cc/f0vDdx@.png',
                    size: '20px',
                    position: 'relative',
                    offsetEnd: '0px',
                    offsetBottom: '-2px',
                    margin: '10px'
                  },
                  {
                    type: 'text',
                    text: '去查時刻',
                    color: '#ffffff',
                    flex: 0,
                    offsetStart: '5px',
                    offsetTop: '-3px'
                  }
                ],
                spacing: '5px'
              },
              {
                type: 'filler'
              }
            ],
            borderWidth: '1px',
            cornerRadius: '4px',
            spacing: 'sm',
            borderColor: '#FFFFFFFF',
            margin: 'xxl',
            height: '40px',
            position: 'absolute',
            offsetBottom: '15px',
            offsetStart: '160px',
            width: '120px',
            action: {
              type: 'uri',
              label: 'action',
              uri: 'http://linecorp.com/'
            }
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        backgroundColor: '#007979bb',
        paddingTop: '18px',
        paddingAll: '20px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '11/04',
            color: '#FFFFFFDD',
            align: 'center',
            size: 'sm',
            offsetTop: '3px',
            weight: 'bold',
            style: 'normal',
            gravity: 'top'
          }
        ],
        position: 'absolute',
        cornerRadius: '20px',
        offsetTop: '18px',
        backgroundColor: '#00E3E3cc',
        offsetStart: '18px',
        height: '25px',
        width: '53px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'IMDb：4.1',
            color: '#009393',
            align: 'center',
            size: 'sm',
            offsetTop: '3px',
            weight: 'bold',
            style: 'normal',
            wrap: true
          }
        ],
        position: 'absolute',
        cornerRadius: '20px',
        offsetTop: '18px',
        offsetEnd: '10px',
        height: '25px',
        width: '80px',
        backgroundColor: '#FFFFFF99'
      }
    ],
    paddingAll: '0px'
  }
}

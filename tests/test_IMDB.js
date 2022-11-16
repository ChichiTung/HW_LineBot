import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-ratings',
  params: { tconst: 'tt6443346' },
  headers: {
    'X-RapidAPI-Key': '18c88888a1mshab3267117321c88p179901jsnc85acaf0fbf7',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
}

axios.request(options).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})

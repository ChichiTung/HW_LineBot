import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    return data.USDTWD.Exrate
  } catch (error) {
    console.log('匯率更新錯誤')
    return 30
  }
}

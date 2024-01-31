const getDateAndTime = () => {
  console.clear()
  const date = new Date()
  let hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (hour > 12) hour = hour - 12

  let finalDate = `${day < 10 ? '0' + day : day}:${
    month < 10 ? '0' + month : month
  }:${year}`

  let finalTime = `${hour < 10 ? '0' + hour : hour}:${
    min < 10 ? '0' + min : min
  }:${sec < 10 ? '0' + sec : sec}`

  console.log('Date: ' + finalDate, 'Time: ' + finalTime)
}

export default getDateAndTime

document.addEventListener("DOMContentLoaded", function () {
    // ! рандомные цвета цифры
    function getRandomColor() {
        let  red = Math.floor(Math.random() * 256);
        let  green = Math.floor(Math.random() * 256);
        let  blue = Math.floor(Math.random() * 256);
        let  randomRGB = `rgb(${red},${green},${blue})`
      
        let span = document.querySelector("span")
        span.className = "year"
        span.style.color = randomRGB
        return span
    }
    setInterval(getRandomColor, 1000)
    // * применение
    let p = document.querySelector("h1")
        p.className = "hello"
   
    let h2 = document.querySelector("h2")
        h2.className = "challenge"
    let h3 = document.querySelector("h3")
        h3.className = "datee"
    function getDate() {
        let date = new Date()
        let month = date.getMonth() + 1
        if (month == 1) {
            month = "Январь"
        } else if (month == 2) {
            month = "Февраль"
        } else if (month == 3) {
            month = "Март"
        } else if (month == 4) {
            month = "Апрель"
        } else if (month == 5) {
            month = "Май"
        } else if (month == 6) {
            month = "Июнь"
        } else if (month == 7) {
            month = "Июль"
        } else if (month == 8) {
            
            month = "Август"
        } else if (month == 9) {
            month = "Сентябрь"
        } else if (month == 10) {
            month = "Октябрь"
        } else if (month == 11) {
            month = "Ноябрь"
        } else if (month == 12) {
            month = "Декабрь"
        }
        
        let day = date.getDate()
        let year = date.getFullYear()
        let time = date.getHours()
        if(time < 10) {
            time = "0" + time
        }
        let minutes = date.getMinutes()
        if(minutes < 10) {
            minutes = "0" + minutes
        }
        let seconds = date.getSeconds()
        if(seconds < 10) {
            seconds = "0" + seconds
        }
        let  red = Math.floor(Math.random() * 256);
        let  green = Math.floor(Math.random() * 256);
        let  blue = Math.floor(Math.random() * 256);
        let  randomRGB = `rgb(${red},${green},${blue})`
        h3.style.backgroundColor = randomRGB
        h3.style.display = "inline"
        h3.style.padding = "10px 30px"
        h3.textContent = `${day} ${month} ${year} ${time}:${minutes}:${seconds}`

        }
    setInterval(getDate, 1000)
    
    let li = document.querySelectorAll("li")
 
    console.log(li.length)
  li[0].style.backgroundColor = "rgb(33, 191, 115)"
  li[1].style.backgroundColor = "rgb(238, 184, 6)"
})



      

let date = new Date()
let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let tarih
let hangiGun
let newDate
let dateGoes


while (1) {
    setInterval(function(){
        date = new Date()
        hangiGun = days[date.getDay()-1]
        newDate = date.toString()
        newDate = newDate.slice(16,24)
        tarih = newDate + " " + hangiGun
    
        dateGoes = document.getElementById("myClock")
        dateGoes.innerHTML = tarih
    },1000)

    setInterval()
}
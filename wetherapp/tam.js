//api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric
const apikey =  "edc228562ac0a8aa3116d41c0687cf56"
const form = document.querySelector('form')
const text = document.querySelector('.text')
const submit  = document.querySelector('.submit')
const list = document.querySelector('ul')
const msg = document.querySelector('.msg')
form.addEventListener('submit',weatherapp)

function weatherapp(event){
    event.preventDefault();
    const textval = text.value
    console.log(textval)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${textval}&appid=${apikey}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const  {main, name , weather,sys}=data;
        const li =document.createElement('li')
        li.classList.add('liststyle')
        const markup = `
            <h1>${name} ${sys.country}</h1>

            <h2>${Math.round(main.temp)}c</h2>

            <p>${weather[0]['description']}

        `
        li.innerHTML=markup
        list.appendChild(li)
        text.value=' '
        msg.innerText=' '
    })
    .catch(()=>{
        msg.innerText='*Invalid City'
        text.value=" "
    })   
}
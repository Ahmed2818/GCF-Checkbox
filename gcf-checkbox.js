var toggles = document.querySelectorAll('.toggle')
var good = document.querySelector('#good') 
var cheap = document.querySelector('#cheap')
var fast = document.querySelector('#fast')


toggles.forEach(toggle => toggle.addEventListener('change' , (e) => 
doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theClickedOne){
            fast.checked = false
        }
        if(cheap === theClickedOne){
            good.checked = false
        }
        if(fast === theClickedOne){
            cheap.checked = false
        }
    }
}
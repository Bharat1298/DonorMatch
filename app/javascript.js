const supplies = document.querySelector("#selector");

supplies.addEventListener('change', event => {
    alert(event.target.value);
})
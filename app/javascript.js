const {MongoClient} = require('mongodb');

const supplies = document.querySelector("#selector");

supplies.addEventListener('change', event => {
    alert(event.target.value);
})
// bharatkhadka1298
// WtmAib8U3gM6Ra2w
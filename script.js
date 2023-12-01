let sendbtn = document.getElementById('sendbtn');

let searchInput = document.getElementById('rootSearch');

let appMain = document.querySelector('.appMain');
//let msgbox = document.querySelector('.msgbox');

sendbtn.addEventListener('click', function() {

    for(i = 0;i < 900;i++) {
    let msgbox = document.createElement('div');

        msgbox.classList.add('msgbox');

    appMain.appendChild(msgbox);
  
    msgbox.innerHTML = searchInput.value;

    if(i > 10) {
        appMain.style.overflow = "scroll";
    }

    }
    
});

//To delete msgbox - by removing the child msgbox
msgbox.addEventListener('click', function() {
    appMain.removeChild(msgbox);
})







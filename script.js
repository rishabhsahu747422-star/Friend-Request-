var h5 = document.querySelector('h5')
var btn = document.querySelector('button')
let Friend = false
btn.addEventListener('click',function(){
    if(Friend == false){
        h5.innerHTML = 'Sending Request...'
        h5.style.color = 'gray'
        btn.disabled = true;
     

    setTimeout(() => {
        h5.innerHTML = 'Friends'
        h5.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        btn.disabled = false;
        Friend =true;
    }, 2000);
}else{
    h5.innerHTML = 'Removing...';
        h5.style.color = 'gray'
        btn.disabled = true;

        setTimeout(() => {
        h5.innerHTML = 'Stranger'
        h5.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        btn.disabled = false;
        Friend =true;
    }, 2000);
}
})

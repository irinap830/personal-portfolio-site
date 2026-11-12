function isClicked(){
    if (document.getElementById('App')) {
      addEventListener('click', () => {
        window.location.href = 'adelin.html';
      });
    }
    else{
        addEventListener('click',()=>{
            window.location.href = 'irina.html';
        })
    }
}

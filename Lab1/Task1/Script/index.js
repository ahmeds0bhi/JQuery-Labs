let x = 1;
let time;
let img = document.querySelector('.active');

//-------- JQuery
function showImage (){
   x++;
    if (x>3){
    x = 1;
    }
    $('.active').attr("src" , `images/${x}.jpg`);
    }

    time = setInterval(displayImages , 1000);

    $(".btn").on('click', function(){
    clearInterval(time);
    })

// -----------Javascript
function displayImages(){
    x++;
    if (x>3){
        x = 1;
    }
    img.setAttribute('src' , `images/${x}.jpg`)   
}


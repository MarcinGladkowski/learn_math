//Wybor losowego obrazka z folderu:
//var randImg = Math.floor((Math.random()*10)+1);
//$('#my_image').attr('src', './images/svg/' + randImg + '.svg').css('height', '10vh');

$(function(){
//    loadRandom();
    $('#clickMe').on('click',function(){
        loadRandom();
    });
});
var randLoad = 0;
//var imgS = $('#imageTable > tbody > tr > td > img');
//imgS.css('display'; 'none');

function loadRandom(){
    var ranNums=[];
//    random quantity of elements
    randLoad = Math.floor((Math.random() * 10) + 1);
    console.log(randLoad);
    
    while(ranNums.length < randLoad){
        var n =Math.floor((Math.random()*10)+1);
            ranNums.push(n);
    }
    var i=0;
//    add images
    var imgS = $('#imageTable > tbody > tr > td > img');
    imgS.each(function(){
        $(this).attr('src','images/svg/'+ranNums[i]+'.svg');
        i++;
    });
//    imgS.fadeIn(500);
    
}

var buttons = $('button');
//add index for each button
buttons.each(function(i){
       $(this).attr('index', i + 1);
    });

buttons.on("click", function(){
        var a = $(this).attr('index');
        console.log(a);
        console.log('przycisk działa');
             if ( a == randLoad) {
                 alert('Jesteś świetny!');
             } else {
                 alert('Spróbuj jeszcze raz');
             }
});
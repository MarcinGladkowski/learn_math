//Wybor losowego obrazka z folderu:
//var randImg = Math.floor((Math.random()*10)+1);
//$('#my_image').attr('src', './images/svg/' + randImg + '.svg').css('height', '10vh');

$(function(){
    loadRandom();
//    $('#clickMe').on('click',function(){
//        removeAnimals();
//        loadRandom();
//    });
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
        var n =Math.floor((Math.random()*20)+1);
            ranNums.push(n);
    }
    var i=0;

    for (var i = 0; i < randLoad; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg/'+ranNums[i]+'.svg');
    img.appendTo('#imageDiv').css('display', 'flex').css('height', '15vh');
}

}
function removeAnimals (){
    $("#imageDiv").empty();
}

var buttons = $('button');
//add index for each button
buttons.each(function(i){
       $(this).attr('index', i + 1);
    });

var points = 0;

buttons.on("click", function(){
        var a = $(this).attr('index');
        var container = $('#imageDiv');
        console.log(container);
        console.log(a);
        console.log('przycisk działa');
             if ( a == randLoad) {
                 
                 container.animate(
            {'top': '+=100px'}, 100).animate(
            {'top': '-=100px'}, 100);
                 
            removeAnimals();
            loadRandom();   
            points += 1;
            console.log(points);
            $('#points').text('Twoje punkty:'+points);
                 
             } else {
                 
               container.animate(
            {'left': '+=100px'}, 100).animate(
            {'left': '-=100px'}, 100);
                 
    }
});
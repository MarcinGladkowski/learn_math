$(document).ready(function(){
console.log('działa!');

$('body').delay(3000).animate({
        scrollTop: $('nav').offset().top
}, 4000);   
    
//load functions
$(function(){
    game1();
    game2(); 
});
    
$(window).on('scroll', sticky);
//sticky nav
var nav = $('nav');
var top = nav.offset().top;

function sticky () {
    var scrollT = $(document).scrollTop();
    if( scrollT > top) {
    nav.addClass('sticky')
  } else {
    nav.removeClass('sticky');
  }
};

$('#dyplom').hide();
    
//function showLevels (){
//    var nav = $('nav');
//    var dyplom = $('<div>');
//    dyplom.attr('class', 'dyplom');
//    dyplom.appendTo(dyp).css('display', 'flex').text('Gratulacje');
//}
    
    
function dyplom() {
    var dyp = $('#dyplom');
    var dyplom = $('<div>');
    dyplom.attr('class', 'dyplom');
    dyplom.appendTo(dyp).css('display', 'flex').text('Gratulacje');
}
function earse(){
   $('#error' + countBad).hide('slow');
}
function earseShow(){
    for (var i=1; i<4; i++) {
        $('#error' + i).show('slow');
    }
   
}
var randLoad = 0;
function game1(){
    
    $('#level').addClass('level');
    
    var ranNums=[];
//    random quantity of elements
    randLoad = Math.floor((Math.random() * 10) + 1);
//    console.log(randLoad);
    
    while(ranNums.length < randLoad){
        var n =Math.floor((Math.random()*30)+1);
            ranNums.push(n);
    }
    for (var i = 0; i < randLoad; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg/'+ranNums[i]+'.svg');
    img.appendTo('#imageDiv').css('display', 'flex').css('height', '15vh');
}

}
//end game1
function removeAnimals (){
    $("#imageDiv").empty();
}
function removeElements (){
    $("#icons1").empty();
    $("#icons2").empty();
}

var buttons = $('button');
//add index for each button
buttons.each(function(i){
       $(this).attr('index', i + 1);
});

var points = 0,
    countBad = 0,
    countGood = 0;

buttons.on("click", function(){
        var a = $(this).attr('index');
        var container = $('#imageDiv');
    
             if ( a == randLoad) {
//            good choice     
            container.animate(
            {'top': '+=100px'}, 100).animate(
            {'top': '-=100px'}, 100);
                 
//            reflesh animals (remove and load)
            removeAnimals();
            game1();   
                 
            points += 1;
            countGood += 1;
//            write points in div
            $('#points').text(points);
             if (countGood == 1) {
//                 alert('GRATULACJE - skończyłeś grę. Twoje punkty to:'+points);
//               reflesh animals (remove and load)
                 removeAnimals();
                 game1();
                 $('#points').text(points);
//                 add student logo
                 $('#level').attr('class', 'level1');
//                  scroll to game2 2
                 $('body').animate({
                    scrollTop: $("#game2").offset().top
                }, 4000);
              }
             } else {
//            bad choice  
            container.animate({'left': '+=100px'}, 100).animate({'left': '-=100px'}, 100);
//           3 time bad choise - delete points 
            countBad += 1;
//             remove earse
            earse();   
            endGame();
        }

});
//53 x 45 fotele  , '*', '/'
//game2  
var option = ['+', '-'],
    operation = function(v1,v2, action) {
      switch(action) {
          case '+': return v1 + v2; 
              break;
          case '-': return v1 - v2; 
              break;
//          case '*': return v1 * v2; 
//              break;
//          case '/': return v1 / v2; 
//              break;
    }
};
var val1 = 0;
var val2 = 0;
var oper;
var summary;

function game2() {
    var val1Array=[];
    var val2Array=[];
    
    val1 = Math.floor((Math.random() * 10) + 1);
    val2 = Math.floor((Math.random() * 10) + 1);
    oper = Math.floor((Math.random() *  option.length));
    
    var container = $('#box1');
    var lbl = $('#action');
    lbl.text('Podaj sumę działania:').addClass('text');
    
//    lbl.text('Podaj sumę działania: ' + val1 + ' ' + option[oper] + ' ' + val2 + ' = ');

//    action substrication
    if (( oper == 1 ) && (val1 < val2)) {
      [val1, val2] = [val2, val1];
        val1;
        val2;
    }
    val1;
    val2;
    summary = (operation(val1, val2, option[oper]))
//    display icons row 1
     while(val1Array.length < val1){
        var n =Math.floor((Math.random()*30)+1);
            val1Array.push(n);
    }
    for (var i = 0; i < val1; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg2/'+val1Array[i]+'.svg');
    img.appendTo('#icons1').css('display', 'flex').css('height', '15vh');
}

//    display icons row 2
     while(val2Array.length < val2){
        var n =Math.floor((Math.random()*30)+1);
            val2Array.push(n);
    }
    for (var i = 0; i < val2; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg2/'+val2Array[i]+'.svg');
    img.appendTo('#icons2').css('display', 'flex').css('height', '15vh');
}
//        sign between rows
    if (oper == 0) {
        var sign = $('#sign');
        var signNew = $('<img id="svgSign"/>').attr('id','plus');
        signNew.attr('src', 'images/svg3/plus.svg');
        signNew.appendTo(sign);
    } 
    if (oper == 1) {
        var sign = $('#sign');
        var signNew = $('<img id="svgSign"/>').attr('id','minus');
        signNew.attr('src', 'images/svg3/minus.svg');
        signNew.appendTo(sign);
    }
}

function removeNumber (){
    $("#result").val('');
}
function plus() {
    var ans = $('#ans2');
    imgs1 = $('#icons1').find('img');
    imgs2 = $('#icons2').find('img');
    ans.appendTo(imgs1, imgs2).css('height', '15vh').animate({opacity:0}, 3000);
}
function removeAns2() {
    $("#ans2").empty();
}
function removeSign() {
    $('#sign').empty();
}

var btn = $('#countBtn');
var result = $('#result');

btn.on('click', function() { 
    console.log('Wpisany wynik: ' + result.val());
       if (summary == result.val() ) {
           console.log('Dobra odpowiedź');
           $('#icons1').animate(
            {'top': '-=100px'}, 100).animate(
            {'top': '+=100px'}, 100);
           $('#icons2').animate(
            {'top': '-=100px'}, 100).animate(
            {'top': '+=100px'}, 100);
           
    points += 1;
    countGood += 1;
//  write points in div
           $('#points').text(points);
             if (countGood == 2) {
//                  add professor logo
                 $('#level').attr('class', 'level2');
             }
             if (countGood == 3) {
//               show section dyplom
                 $('#dyplom').show('slow');
//               create dyplom
                 dyplom();
                $('body').animate({
                    scrollTop: $("#dyplom").offset().top
                }, 2000);
                nav.hide('slow');
             }
           
    removeNumber();
    removeElements();
    removeSign();
    game2(); 
           
           if ($('#sign').find('img').attr('id') == 'plus') {
              console.log('znak plus');
           }
            if ($('#sign').find('img').attr('id') == 'minus') {
               console.log('znak minus'); 
           }

           
    } 
    else {
//      3 time bad choise - delete points 
        countBad += 1;
//      remove earse
        earse();
        
        endGame()
        
        console.log('Zła odpowiedź');
           $('#icons1').animate({'left': '+=100px'}, 100).animate({'left': '-=100px'}, 100);
        $('#icons1').animate({'right': '+=100px'}, 100).animate({'right': '-=100px'}, 100);
           $('#icons2').animate({'left': '+=100px'}, 100).animate({'left': '-=100px'}, 100);
    }
//end button 2
});

function endGame(){
    if (countBad > 3) {
        countBad = 0;
        points = 0;
        $('#points').text(points);
        alert('Zacznij jeszcze raz');
        console.log('Game over')
        removeNumber();
        removeElements();
        removeAnimals();
        removeSign();
        game1();
        game2(); 
        earseShow();
    }
}    

})

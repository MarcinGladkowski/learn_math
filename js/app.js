
//load functions
$(function(){
    game1();
    game2();
});


var randLoad = 0;
function game1(){
    var ranNums=[];
//    random quantity of elements
    randLoad = Math.floor((Math.random() * 10) + 1);
//    console.log(randLoad);
    
    while(ranNums.length < randLoad){
        var n =Math.floor((Math.random()*30)+1);
            ranNums.push(n);
    }
    var i=0;

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
function removeElemens (){
    $("#icons1").empty();
    $("#icons2").empty();
}

var buttons = $('button');
//add index for each button
buttons.each(function(i){
       $(this).attr('index', i + 1);
});

var points = 0;
var countBad = 0;
var countGood = 0;

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
            $('#points').text('Twoje punkty:'+points);
             if (countGood == 10) {
                 alert('GRATULACJE - skończyłeś grę. Twoje punkty to:'+points);
//               reflesh animals (remove and load)
                 removeAnimals();
                 game1();
                 points = 0;
                 $('#points').text('Twoje punkty:'+points);
                 
              }
             } else {
//            bad choice  
            container.animate({'left': '+=100px'}, 100).animate({'left': '-=100px'}, 100);
//           3 time bad choise - delete points 
            countBad += 1;
            if (countBad > 3) {
                alert('postaraj się bardziej - Twoje punkty zostały anulowane');
                countBad = 0;
                points = 0;
                $('#points').text('Twoje punkty:'+points);
            } 
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
var oper = 0;
var summary;

function game2() {
    var val1Array=[];
    var val2Array=[];
    var val1 = Math.floor((Math.random() * 10) + 1);
    var val2 = Math.floor((Math.random() * 10) + 1);
    var oper = Math.floor((Math.random() *  option.length));
    var container = $('#box1');
    var lbl = $('#action');
    lbl.text(val1 + ' ' + option[oper] + ' ' + val2 + ' = ');
    summary = (operation(val1, val2, option[oper]));
    console.log('Wynik działania: ' + summary);
//    display icons row 1
     while(val1Array.length < val1){
        var n =Math.floor((Math.random()*30)+1);
            val1Array.push(n);
    }
    var i=0;

    for (var i = 0; i < val1; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg2/'+val1Array[i]+'.svg');
    img.appendTo('#icons1').css('display', 'flex').css('height', '15vh');
}
    if (oper == 0) {
        $('#sign').text('+');
    } 
    if (oper == 1) {
        $('#sign').text('-');
    }
//    display icons row 2
     while(val2Array.length < val2){
        var n =Math.floor((Math.random()*30)+1);
            val2Array.push(n);
    }
    var i=0;

    for (var i = 0; i < val2; i++) {
    var img = $('<img id="icon">');
    img.attr('src', 'images/svg2/'+val2Array[i]+'.svg');
    img.appendTo('#icons2').css('display', 'flex').css('height', '15vh');
}
    

}
function removeNumber (){
    $("#result").empty();
}



var btn = $('#countBtn');
var result = $('#result');

btn.on('click', function() { 
    console.log('Wpisany wynik: ' + result.val());
    console.log(summary);
       if (summary == result.val() ) {
           console.log('super');
       } else {console.log('błąd');}
    removeNumber();
    removeElemens();
    game2(); 

});


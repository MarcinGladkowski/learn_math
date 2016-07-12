
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
//53 x 45 fotele
//game2  
var  results = [],
    option = ['+', '-', '*', '/'],
    operation = function(v1,v2, action) {
      switch(action) {
          case '+': return v1 + v2; 
              break;
          case '-': return v1 - v2; 
              break;
          case '*': return v1 * v2; 
              break;
          case '/': return v1 / v2; 
              break;
    }
};
function game2() {
    
    var val1 = Math.floor((Math.random() * 10) + 1);
    var val2 = Math.floor((Math.random() * 10) + 1);
    var oper = Math.floor(Math.random()*option.length) % 4;

    var container = $('#box1');
    var lbl = $('#action');
    
    lbl.text(val1 + ' ' + option[oper] + ' ' + val2 + ' = ');
    
    var btn = $('#countBtn');
    var result = $('#result');
    
    btn.on('click', function() { 
            if(operation(val1, val2, option[oper]) == result.val()) {
                console.log('dobrze');
            } else {
                 console.log('źle');
            }
//        game2(); 

    });

}
    
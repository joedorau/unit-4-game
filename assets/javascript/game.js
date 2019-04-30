//steps to make the game

//game with 4 crystals(btn)
//each crystal need a random number generator (1-12)
//computer generates a random number
    //(19-120)
//each crystal produces a random number when clicking, adding the pervious number
//it should eaqual total score so win 
//or over the computer numbner and lose
//add win lose counter


// var computer_random_number;
var win=0;
var lost=0;
var score= 0;
//computer random number
var computer_random_number=Math.floor(Math.random()*101+20)
$('#compResult').html('Computer Number:'+ computer_random_number);


//player random number
for (i=0; i<4;i++){
    var crystalRandomNum=Math.floor(Math.random()*13)
    var crystal = $('<div>')
   
    crystal.attr({"class": 'crystal',"data-rand":crystalRandomNum})
   
    $(".container").append(crystal);
}


$('.crystal').on('click', function(){
    
var number= parseInt($(this).attr('data-rand'));
score +=number
console.log(score)
if(score > computer_random_number){
    lost++;
    $('#lost').html('lost '+ lost);
    console.log('lost')

}else if (score ===computer_random_number) {
    win++;
    $('#win').html('win ' +win);
    console.log('win')
}


});
//pseudo coding d
//computer will generate a random number 19-120
// click on the one of the 4 crystal 
//each crystal has a random number 1-12
// when you click on it, the crystal will add u the value of that random number. If you keep hitting the crysta it will add to the pervious player score
//if computer score and playerare equal player wins
//player score is higher then computer then computer wins
//display win and lose counter
//win or lose, the game will restart 

  

var readlineSync = require('readline-sync');
if (readlineSync.keyInYN('Do you want to play this game!!')) {
 var User=readlineSync.question("Enter your name !!");
  console.log("welcome "+User);
  var score=0;
  const superHeroes= [{
    name:"BatMan",
    color:"black",
    power:"intellegence"
  },
  { 
    name:"SuperMan",
    color:"red",
    power:"Strength"}];
quest=[{
  question:"Who is my favourite superhero?",
  answer:superHeroes[0].name
      },
       {
  question:"What is batmans costume colour?",
  answer:superHeroes[0].color
       },
       {
  question:"Who is superHero god?",
  answer:superHeroes[1].name
       },
      {
  question:"What is superman costume colour?",
  answer:superHeroes[1].color
       }];
  function play(answer,ans){
    if(answer.toUpperCase()==ans.toUpperCase())
    {console.log("Right Answer!!");
      return score+=1;}
    else
            console.log("Wrong Answer!!")

  }
  function game(){
    for(i=0;i<quest.length;i++)
  {  
    var ans=readlineSync.question(quest[i].question);
    play(quest[i].answer,ans);
    console.log(User+" your score is:"+score)
  }
    console.log("GAME OVER,YOUR FINAL SCORE: "+score)

  }
  game()

}
 else {
  // Another key was pressed.
  console.log('Game Over');
  
}

var score;
var action;
var timerem;
var correctans;
var playing = false;

document.getElementById('start').onclick=function(){
	if (playing==true) {//reset button
		location.reload();
	}
	else{
		playing=true;
		score=0;
		document.getElementById('svalue').innerHTML=score;
		document.getElementById('timeremaining').style.display="block";
		document.getElementById('start').innerHTML="Reset";
		
		//countdown
		timerem=60;
		document.getElementById('valuerem').style.display=timerem;
		//gameover hide
		document.getElementById('gameover').style.display="none";

		function startcnt(){
			action=setInterval(function(){//start countdown
				timerem -=1;
				document.getElementById('valuerem').innerHTML=timerem;

				if(timerem==0){
					clearInterval(action);//stop countdown
					document.getElementById('gameover').style.display="block";
					document.getElementById('gameover').innerHTML=
					"<p>Game Over</p><p>Your Score: "+ score +".</p>"
					playing=false;
					document.getElementById('timeremaining').style.display="none";
		            document.getElementById('start').innerHTML="Start Game";
				}
			},1000);
		}

		startcnt();
		generateQA();
		boxclick();

		function generateQA(){
			
			var x=1+Math.round(9*Math.random());
			var y=1+Math.round(9*Math.random());
			correctans=x*y;
			//document.getElementById('question').innerHTML="hii"
			document.getElementById('question').innerHTML=x+"x"+y;

			var correctoption=1 + Math.round(3*Math.random());
			document.getElementById('box'+correctoption).innerHTML=correctans;

			for(i=1;i<5;i++){
				if(i!=correctoption){
					var wrongans= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
					document.getElementById('box'+i).innerHTML=wrongans
					if(wrongans==correctans){
						wrongans= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
					    document.getElementById('box'+i).innerHTML=wrongans
					}
					
				}
			}


		}
		//box click
	function boxclick(){
		for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctans){
        //correct answer
            //increase score by 1
            score++;
            document.getElementById("svalue").innerHTML = score;
            //hide wrong box and show correct box
            document.getElementById('wrong').style.display="none";
            document.getElementById('correct').style.display="block";
            setTimeout(function(){
                document.getElementById('correct').style.display="none";   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            document.getElementById('correct').style.display="none";
            document.getElementById('wrong').style.display="block"; 
            setTimeout(function(){
                document.getElementById('wrongs').style.display="none";
            }, 1000);
        }
    }
}   
}

	}

		}
		//document.getElementById('question').innerHTML="hii";
	}

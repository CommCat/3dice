    const score = []
       
    function roll() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        score.push(randomNumber);
        const dice = document.getElementById("dice");
        dice.innerHTML = randomNumber
    }
   
    const button = document.getElementById("button");

    button.addEventListener("click", function(){
        const result = roll();
        return result;
        });


    function roll2() {
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        score.push(randomNumber2);
        const dice2 = document.getElementById("dice2");
        dice2.innerHTML = randomNumber2
        }
       
    const button2 = document.getElementById("button2");
    
    button2.addEventListener("click", function(){
        const result2 = roll2();
        return result2;
            });

    function roll3() {
        const randomNumber3 = Math.floor(Math.random() * 6) + 1;
        score.push(randomNumber3);
        const dice3 = document.getElementById("dice3");
        dice3.innerHTML = randomNumber3
        }
        
    const button3 = document.getElementById("button3");
    
    button3.addEventListener("click", function(){
        const result3 = roll3();
        return result3;
            });

 
   function showResults(){     
        const final = score.reduce(
        (anterior, actual) => anterior + actual )
        const finalResult = document.getElementById("finalResult");
        finalResult.innerHTML = final;      
        /*alert(`These are your throws: ${score}`);*/
        const runningScore = document.getElementById("history");
        runningScore.innerHTML = score;
    };

    

    const button4 = document.getElementById("button4");
    
    button4.addEventListener("click", function(){
        const results = showResults()
        return results;
        
    });
     
    
     
    
       
       

    
    
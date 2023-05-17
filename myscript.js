

    /*for(
        let i=1; i<=6; i= i + 1) {
            const li= document.createElement('li');

            let randomNumber=document.getElementById('randomNumber').value;

            let submit= document.querySelector('button');
            let result=document.getElementById('result');

            submit.addEventListener('click', function(){

                if(randomNumber=== i) {
                    result.append('What a luck, you picked up an equal number. Try again!')

                    console.log(i);
                    console.log(randomNumber);
                }

                else if(randomNumber> i) {
                    result.append('You won!')

                    console.log(i);
                    console.log(randomNumber);
                }
    
                else if(randomNumber< i) {
                    result.append('You lost, try again!');

                    console.log(i);
                    console.log(randomNumber);
                }
            })

            
        }*/


        /*1.Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.*/

        let randomNumber;
        randomNumber= Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber);


        let userrandomNumber;
        userrandomNumber= Math.floor(Math.random() * 6) + 1;
        console.log(userrandomNumber);

        




        /*2.Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

        let result=document.getElementById('result');
        let submit= document.querySelector('button');


        submit.addEventListener('click', function(){


        if (randomNumber === userrandomNumber){
            console.log('Ops, something went wrong');
        }

        else if(randomNumber > userrandomNumber){
            console.log('You lost, try again!');
        }

        else if(randomNumber < userrandomNumber){
            console.log('You won!');
        }

        }
        )




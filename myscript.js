

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

        const result=document.getElementById('result').innerHTML;
        let submit= document.querySelector('button');


        submit.addEventListener('click', function(){


        if (randomNumber === userrandomNumber){
            console.log('Ops, something went wrong');
            document.getElementById('result').append('Ops, something went wrong');
            document.getElementById('result').style.color='orange';
        }

        else if(randomNumber > userrandomNumber){
            console.log('You lost, try again!');
            document.getElementById('result').append('You lost, try again!');
            document.getElementById('result').style.color='red';
        }

        else if(randomNumber < userrandomNumber){
            console.log('You won!');
            document.getElementById('result').append('You won!');
            document.getElementById('result').style.color='green';
        }

        }
        )

        /*second exercise*/

        /*1.Chiedi all’utente la sua email*/ 

        const userEmail= prompt ('Insert your email');
        console.log(userEmail);

        /*4.controlla che sia nella lista di chi può accedere*/
        const listEmail=['simonacartolina@hotmail.com', 'gino@gmail.it', 'ginetta@gmail.it' ];
        console.log(listEmail);

        listEmail[i]=true;

        if(listEmail===true){
            console.log('Logged in');
        }
        /*3. stampa un messaggio appropriato sull’esito del controllo.*/




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
            document.getElementById('result').textContent="Ops, something went wrong";
            document.getElementById('result').style.color='orange';
        }

        else if(randomNumber > userrandomNumber){
            console.log('You lost, try again!');
            document.getElementById('result').textContent="You lost, try again!";
            document.getElementById('result').style.color='red';
        }

        else if(randomNumber < userrandomNumber){
            console.log('You won!');
            document.getElementById('result').textContent="You won!";
            document.getElementById('result').style.color='green';
        }

        }
        )

        /*second exercise*/

        const emailList=['simonacartolina@hotmail.com', 'gino@gmail.it', 'ginetta@gmail.it' ];
        const userEmail= prompt ('Insert your email');


        const ulElement=document.querySelector('ul');
        const login= document.querySelector ('#Login');

        let found=true;


        login.addEventListener('click', function(){


        for(i=0; i < emailList.length ; i++){
            const li=document.createElement('li');
            console.log(i, emailList[i]);

            /*3. stampa un messaggio appropriato sull’esito del controllo.*/
            if(emailList[i] === userEmail){
                found=true;
                console.log('Logged in');
                
                document.querySelector ('ul').textContent="Logged in";
                ulElement.appendChild(li);
            }
            else{
                console.log('Access denied');
                document.querySelector ('ul').textContent="Access denied";
                            ulElement.appendChild(li);
            }
}})



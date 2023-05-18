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
        const found=true;


        const ulElement=document.querySelector('ul');
        const login= document.querySelector ('#Login');

        


        login.addEventListener('click', function(){

        for(i=0; i < emailList.length ; i++){
            const liElement=document.createElement('li');
            console.log(i, emailList[i]);

            /*3. stampa un messaggio appropriato sull’esito del controllo.*/
            if(emailList[i] === userEmail){

                found=true;

                document.querySelector ('ul').textContent="Logged in";
                ulElement.append(liElement);
            }
            else{
                document.querySelector ('ul').textContent="Access denied";
                ulElement.append(liElement);
            }
}})

if(found=true) {
    console.log('Logged in');
}
else if(found=false){
    console.log('Logged in');
}

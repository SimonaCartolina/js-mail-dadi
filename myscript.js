

    for(
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

            
        }


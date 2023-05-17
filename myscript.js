const ulElement= document.querySelector('ul');

    for(
        let i=1; i<=6; i= i + 1) {
            const li= document.createElement('li');

            let randomNumber=document.getElementById('randomNumber').value;

            let submit= document.querySelector('button');

            submit.addEventListener('click', function(){

                if(randomNumber=== i) {
                    alert="What a luck, you picked up an equal number. Try again!";
                    ulElement.appendChild(li);
                    console.log(i);
                    console.log(randomNumber);
                }

                else if(randomNumber> i) {
                    alert="You won!";
                    ulElement.appendChild(li);
                    console.log(i);
                    console.log(randomNumber);
                }
    
                else if(randomNumber< i) {
                    alert="You lost, try again!";
                    ulElement.appendChild(li);
                    console.log(i);
                    console.log(randomNumber);
                }
            })

            
        }


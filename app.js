// Set initial Value of count 
let count = 0;


// Getting Dom and Buttons

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn')

// console.log(btns);


// Using for Each Loop Method to loop through all the buttons

btns.forEach(function(btn){
    // console.log(item);

    //Using event listener while looping
    btn.addEventListener('click', function(e){
        
        //Creating variable to store classlits of buttons
        const styles = e.currentTarget.classList;

        //Setting conditions

        if(styles.contains('decrease')){
            count--;
        }

        else if(styles.contains('increase')){
            count ++;
        }else{
            count = 0;
        }
        

        if(count > 0){
            value.style.color  = 'green';
        }

        if(count < 0){
            value.style.color  = 'red';

        }

        if(count === 0){
            value.style.color  = '#222';

        }

        // Updating DOM

        value.textContent = count;
        
    })

})











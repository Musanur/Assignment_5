     // allFood event handler start
    allEventHandler('vegan-inner', 'vegan-details')
    allEventHandler('sandwich-inner', 'sandwich-details')
    allEventHandler('momo-inner', 'momo-details')
    allEventHandler('noodles-inner', 'noodles-details')
    allEventHandler('avocado-inner', 'avocado-details')
    allEventHandler('cabbage-inner', 'cabbage-details')
    allEventHandler('carrot-inner', 'carrot-details')
    allEventHandler('mozzarella-inner', 'mozzarella-details')


    function allEventHandler(foodInner,  foodDetails){
        const allInner = document.getElementById(foodInner) ;
        allInner.addEventListener('click', function(){
            const allFood = document.getElementById('vegan-food');
            allFood.style.display='none';
            const allDetails = document.getElementById(foodDetails);
            allDetails.style.display='block'

        })
    }
     // allFood event handler end

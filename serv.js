 







 
    
             
/**SERVICES********************************** */

const  servicesParents = document.querySelector('.services_items'),
servicesItem = document.querySelectorAll('.services_item');




function showService(i){
    servicesItem[i].style.transition='0.7s'
    servicesItem[i].style.overflow='hidden'
    servicesItem[i].style.height='300px'
}

function hideService(){
   
    servicesItem.forEach(item=>{
        item.style.transition='0.7s'
        item.style.overflow='hidden'
        item.style.height='70px'
    })
}

hideService()
showService(0)

servicesParents.addEventListener('click',(e)=>{
   
    const target=e.target;
    servicesItem.forEach((item,i)=>{
        if( item==target || e.target.tagName == 'H3' && e.target.parentNode == item){
            hideService()
            showService(i)
        }
    })
})



        


 
      
   



  

   

  
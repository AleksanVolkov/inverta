const tabsParrent = document.querySelector('.product_tabs'),
      tabsInfoParrent = document.querySelector('.product_inform_box');

const tabsArr = document.querySelectorAll('.product_tabs_item'),
      tabsInfoArr = document.querySelectorAll('.info_item'),
      photoArr = document.querySelectorAll('.photo')

      hideInfo(tabsInfoArr)
      showInfo(0)
      
      
      function hideInfo(arr){

        for(let i=0;i<arr.length; i++){
            
            tabsArr[i].style.borderBottom= "none"
            arr[i].style.display='none';
        }

      }

      tabsParrent.addEventListener('click',(e)=>{
        const target= e.target
        
      
      
        tabsArr.forEach((item,inc)=>{
            if(target && target==item)
           
            for(let i = 0; i<tabsInfoArr.length;i++){
                
                if(i==inc){
                    hideInfo(tabsInfoArr)
                    showInfo(i)
                    sliderLoop(photoArr)
                    
                }
            }
            
           

        })
       

       
       
      })

      function showInfo(i){
        
        tabsInfoArr[i].style.display='flex'
        tabsArr[i].style.borderBottom= "8px solid #E4B564"
        tabsInfoParrent.style.border="4px solid #E4B564"

      }

      function sliderLoop(photo){
        let endField = (photo.length+1)*600
        console.log(endField)

      }
      
      

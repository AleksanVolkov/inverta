const tabsParrent = document.querySelector('.product_tabs'),
      tabsInfoParrent = document.querySelector('.product_inform_box');

const tabsArr = document.querySelectorAll('.product_tabs_item'),
      tabsInfoArr = document.querySelectorAll('.info_item'),
      photoArr = document.querySelectorAll('.photo'),
      photoField=document.querySelector('.product_field');

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
                  
                    
                }
            }
            
           

        })
       

       
       
      })

      function showInfo(i){
        
        tabsInfoArr[i].style.display='flex'
        tabsArr[i].style.borderBottom= "8px solid #E4B564"
        tabsInfoParrent.style.border="4px solid #E4B564"

      }

      let position=-10;
      let move =595;
      let moveMob =280;

      counter = 0;
      const availableScreenWidth = window.screen.availWidth;

      console.log(availableScreenWidth)


      let endField = photoArr.length + 1
      
      setInterval( function sliderLoop(){
                      
        if(endField-3>counter && availableScreenWidth>600){
          photoField.style.transform=`translateX(${-position-move-5}px)`;
          position+=595
          counter+=1
        }else if(endField-3>counter && availableScreenWidth<600){
          photoField.style.transform=`translateX(${-position-moveMob-5}px)`;
          position+=280
          counter+=1

        }else{
          position=-10
          counter=0
        }
                      
       

      },6000)
      

      
      
      
      
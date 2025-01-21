const parentWrapper = document.querySelector('.houses_wrapper');


const housesArr = [

    {
        prevImg:'./images/houses/project1/prew.webp',
        title:'Проект A-1',
        parametrs:{
            size:'размер: 17.3м x 20.1м',
            square:'общая площадь: 345.56м'
        },
        link:'https://inverta.by/chastnye_doma',
        alt:'дом под ключ 345 квадратных метров фасад штукатурка и дерево'
        
    },
    {
        prevImg:'./images/houses/project2/prew2.webp',
        title:'Проект A-2',
        parametrs:{
            size:'размер: 10.3м x 10.1м',
            square:'общая площадь: 204.39.56м'
        },
        link:'https://inverta.by/chastnye_doma',
        alt:'дом под ключ 205 квадратных метров фасад штукатурка и камень'
    }


]


housesArr.forEach(item=>{

    const itemHouse = document.createElement('div');
    itemHouse.classList.add('hous_item')
    
    
    
    console.log(item)
    
    
    
    
    itemHouse.innerHTML=`
    
    
    
                            
    <img class="houses_prev_img" src="${item.prevImg}" alt="${item.alt}">
    
    <h3>${item.title}</h3>
    <p>xарактеристики:</p>
    <ul>
        <li>${item.parametrs.size}</li>
        <li>${item.parametrs.square}</li>
    </ul>
    
    <button onclick="window.location.href='${item.link}'">подробнее</button>
    
    
    
    `
    
    
    parentWrapper.append(itemHouse)
    


})










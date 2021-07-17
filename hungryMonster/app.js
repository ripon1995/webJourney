function fetchData() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(response => response.json())
    .then(data => showData(data.meals));
}
function showData(data) {
    console.log(data);
    //console.log(data[0].strCategory);
    const itemContainer = document.getElementById('itemContainer');
   

    for(let i=0;i<data.length;i++)
    {
        const item = document.createElement('div');
        item.className = 'item';
        const itemHeader = document.createElement('h3');
        itemHeader.innerText = data[i].strCategory;
        item.appendChild(itemHeader);
        itemContainer.appendChild(item);
    }

    
}

fetchData();
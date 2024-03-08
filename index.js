function renderstds()
{
    let stds =document.getElementById('stds')
    
    fetch('https://render-uo1s.onrender.com/hussein')
      .then(response => response.json())
      .then(data =>  {
        data.forEach(element => {
            let option=document.createElement('option')
            option.innerHTML=element.name;
            stds.appendChild(option);
        });
      })
}
renderstds();
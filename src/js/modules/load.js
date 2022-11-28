function load({inputData,gridData,searchData,accesKey,imgCount}){
    const input = document.querySelector(inputData);
    const grid = document.querySelector(gridData);
    const searchBtn = document.querySelector(searchData);
    input.addEventListener('keydown',(e)=>{
        if(e.key==="Enter"){
            loadImg();
        }
    });
    searchBtn.addEventListener('click',loadImg);
    function loadImg(){
        removeImages();
        const url = 'https://api.unsplash.com/search/photos/?query='+input.value+
        '&per_page='+imgCount+'&client_id='+accesKey;
        fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{
                alert(response.status);
            }
        }).then(data=>{ 
            const imageNodes =[];
            for(let i =0;i<data.results.length;i++){

            }
            data.results.forEach((e,i) => {
                imageNodes[i] = document.createElement('div');
                imageNodes[i].className = 'img';
                imageNodes[i].style.backgroundImage="url(" + data.results[i].urls.raw+")";
                imageNodes[i].addEventListener('dblclick',()=>{
                    window.open(data.results[i].links.download,'_blank');
                });
                grid.appendChild(imageNodes[i]);
            });
        });
        
    }
    function removeImages(){
        grid.innerHTML='';
    }
}
export default load;
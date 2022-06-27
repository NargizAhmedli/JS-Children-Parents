let btnCreat=document.getElementsByClassName('btn')[0];
btnCreat.onclick =function(){
    let inputText=document.getElementById('inputText');
    
    let newli=document.createElement('li');
    newli.innerText=inputText.value;
    
    newli.classList.add('list-group-item')
    document.querySelector('ul').appendChild(newli)
    
    let spanItem=document.createElement('span')
    spanItem.innerText='X';
    spanItem.style.float='right';
    spanItem.style.color='blue';
    spanItem.style.cursor='pointer';
    spanItem
    newli.appendChild(spanItem);
    spanItem.onclick=function(){
        newLi.remove();
    }
    inputText.value="";

}

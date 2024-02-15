function displayEventInformation(event){
    const divEle=document.getElementById('eventInfo');
    divEle.innerHTML=
        `<p>Event Type: ${event.type}</p>
        <p>Key Code: ${event.keyCode}</p>
        <p>Key name: ${event.key}</p>`;
}
document.addEventListener('keydown',function (event){
    displayEventInformation(event);
});
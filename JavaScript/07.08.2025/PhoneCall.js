function calling(){
    setTimeout(() => console.log('Dialing...'),0);
    setTimeout(() => console.log('Ringing...'),1000);
    setTimeout(() => console.log('Call connected...'),3000);    
}

calling();
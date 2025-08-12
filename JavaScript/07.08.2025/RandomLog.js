function randomDelay() {
    const delay = Math.floor(Math.random() * 6);
    setTimeout(() => {
        console.log(`Message after ${delay} seconds`)
    },delay * 1000);
}
randomDelay();
  
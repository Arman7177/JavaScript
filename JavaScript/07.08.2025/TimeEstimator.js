function estimator(seconds) {
    console.log('Task Started');
    setTimeout(() => {
       console.log("Task Finished");
    },seconds * 1000);
}
estimator(3);
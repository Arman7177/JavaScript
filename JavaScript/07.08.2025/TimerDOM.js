function processing() {
    document.getElementById('done').textContent = 'Processing...'
    setTimeout(()=>{
        document.getElementById('done').textContent = 'Done'
    },3000)
}
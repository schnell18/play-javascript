let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toISOString());
    
}, 1000);

setTimeout(() => { clearInterval(clock); }, 20000);

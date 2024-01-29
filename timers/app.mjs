// This schedules a callback to run once after 3 seconds.
const timeout = setTimeout(() => {
    console.log('setTimeout');
  }, 3000);

// This schedules the callback to run every 1 second.
let i=1;  
setInterval(() => {
    console.log(`setInterval ${i}s`);
    i += 1;
  }, 1000);
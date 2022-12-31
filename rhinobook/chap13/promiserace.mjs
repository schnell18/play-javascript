// import fetch from 'node-fetch';

const urls = [
    "https://ifconfig.io/",
    "https://www.iplocation.net/find-ip-address",
];
let promises = urls.map(url => fetch(url).then(r => r.text()));

Promise.race(promises).then(result => {
    console.log("result => ".concat(result));
});

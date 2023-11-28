

const p = new Promise((resolve, reject) => {
    resolve("promise it done")
})

 async function getdata() {
     const val = await p;
     console.log(val);
}
getdata()
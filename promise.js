const posts=[
    {title:"post one",body:"this is post one",createdat:new Date().getTime()},
    {title:"post two",body:"this is second post",createdat:new Date().getTime()}
];
function getpost() {
    setTimeout(()=>{
        let output="";
        posts.forEach((post,) => {
            output+=`<li>${post.title} ${post.body}-${(new Date().getTime()-post.createdat)/1000}</li>`
            
        });
        document.body.innerHTML=output;
    },1000)
}
function createpost(newpost){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push({...newpost,createdat:new Date().getTime()});
            const error=false;
        if(!error){
            resolve();
        }
        else{
            reject("eroor:something went wrong");
        }
            
        },7000);
        
    })

}
function deletepost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement=posts.pop();
                resolve(lastelement);
            }
            else{
                reject("array is empty")
            }
        },1000);
        
        
    })
}
createpost({title:"fkjdwkehbj",body:"fjwnef"})
.then(()=>{
    getpost();
    deletepost().then(()=>{
        getpost();
        deletepost().then(()=>{
            getpost();
            deletepost().then(()=>{
                getpost();
                deletepost().then(()=>{
                    getpost();
                })
            })
        })
    })
});

self.addEventListener("install", async event => {
   // TODO
});

self.addEventListener("fetch", async event => {
   // TODO
});

const btn=document.querySelector('.save');

function btnClick(){
   console.log('btn click')
};

const options={
   once:false,
   passive:true
}
btn.addEventListener('click',btnClick,options);
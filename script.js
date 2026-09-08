let selected = null;

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-go]").forEach(b=>{
  b.addEventListener("click",()=>show(b.dataset.go));
});

document.querySelectorAll(".answer").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll(".answer").forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected");
    selected = Number(b.dataset.score);
  });
});

document.getElementById("show-result").addEventListener("click",()=>{
  if(selected===null){
    alert("回答を1つ選んでください。");
    return;
  }
  show("result");
});

let selectedScore = null;

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-go]").forEach(btn=>{
  btn.addEventListener("click",()=>showPage(btn.dataset.go));
});

document.querySelectorAll(".answer").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedScore = Number(btn.dataset.score);
  });
});

document.getElementById("result-btn").addEventListener("click",()=>{
  if(selectedScore === null){
    alert("回答を1つ選んでください。");
    return;
  }
  showPage("page-result");
});

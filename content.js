var searchText = ["1t3", "1t4", "2t3", "2t4", "3t3", "3t4", "4t2"];

window.onload = (event) => {
console.log('page is fully loaded');
 var h=new Date();
 var h1,m;
 h1=h.getHours();
 m=h.getMinutes();
 if((h1==7||h1==19)&&m==50){
  sessionStorage.setItem("flag", "0");
 console.log(i.getHours());}
 
if(sessionStorage.getItem("flag")=="1"){ cleano();}
};

document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);

  
//是否只显示当前区
 if(event.keyCode==36&&event.ctrlKey){
if(sessionStorage.getItem("user")!=null){
if(sessionStorage.getItem("flag")!="1"){
 
 var ps;
 var pi; 
ps=sessionStorage.getItem("user");
pi=  prompt ();
 if(pi==ps){
 sessionStorage.setItem("flag", "1");
 alert ("只显示34区");
 cleano();
}
 
}else{ sessionStorage.setItem("flag", "0"); alert ("显示所有区");}
}else{ alert ("未设置账号");}
 }
 if(event.keyCode==35&&event.ctrlKey){
sessionStorage.setItem("user", prompt ());}
  
 
});

 
function cleano() {

 var table = document.getElementById("OnLine");
 var cells = table.getElementsByTagName("tr");

 for(var j=0;j<searchText.length;j++){
 for (var i = 0; i < cells.length; i++) {
 var cellText = cells[i].innerHTML.toLowerCase(); // 将单元格文本转换为小写字母
 if (cellText.indexOf(searchText[j].toLowerCase()) !== -1) {// 将搜索文本转换为小写字母
  
  document.getElementById("OnLine").deleteRow(i);
   i--;
   
  }
 }
 }
}

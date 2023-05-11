var searchText = ["1t3", "1t4", "2t3", "2t4", "3t3", "3t4", "7t6"];
window.onload = (event) => {
console.log('page is fully loaded');
  var i=new Date();
 if(i.getHours()==8&&i.getHours()==20){
  sessionStorage.setItem("flag", "0");
 console.log(i.getHours());}
if(sessionStorage.getItem("flag")=="1"){ cleano();}
};

document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);

  
//是否只显示当前区
 if(event.keyCode==36&&event.ctrlKey){
  
 var ps="888";
 var pi; 
pi=  prompt ();

if(pi==ps){
if(sessionStorage.getItem("flag")!="1"){

 sessionStorage.setItem("flag", "1");
 alert ("只显示当前区");
 cleano();

 
}else{ sessionStorage.setItem("flag", "0"); alert ("显示所有区");}
 }

}
  
 
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

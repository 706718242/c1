var searchText = ["1t3", "1t4", "2t3", "2t4", "3t3", "3t4", "4t2"];

window.onload = (event) => {
console.log('page is fully loaded');
 var h=new Date();
 var h1,m;
 h1=h.getHours();
 m=h.getMinutes();
 if((h1==7||h1==19)&&m>=50){
  sessionStorage.setItem("flag", "0");
 }
 
if(sessionStorage.getItem("flag")=="1"){ co(); cf();}
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

 
function co() {

 var table = document.getElementById("OnLine");
 var cells = table.getElementsByTagName("tr");

 for(var j=0;j<searchText.length;j++){
 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[0].innerText.toLowerCase(); // 将单元格文本转换为小写字母
 if (Text.indexOf(searchText[j]) != -1) {
  
  document.getElementById("OnLine").deleteRow(i);
   i--;
   
  }
 }
 }}


 var cfd=[];
var a=0,b=0,c=0;
var t=0;//找到次数
function cf() {

 var table = document.getElementById("OnLine");
 var cells = table.getElementsByTagName("tr");


 for (var i = 1; i < cells.length; i++) {
 cfd[i] = cells[i].getElementsByTagName("td")[0].innerText; 
 cff(cfd[i]);
 if(c>0&&c<0.9){ 
  
    cells[i].style.backgroundColor = "red";
                  //找到要插入行的位置
   
    // table.insertRow(0);
 
     //cell[1].innerHTML = cells[i].innerHTML;
    // table.deleteRow(i);
               
               
               }
  else{cells[i].style.backgroundColor = "#ffc107"; }
  if(c==0){cells[i].style.backgroundColor = "";}
 }
 }

function cff( cfff) {
 a=0;b=0;c=0;
 var table = document.getElementById("OnMachine");
 var cells = table.getElementsByTagName("tr");
var aa,bb;
 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[0].innerText; 
 if (Text.indexOf(cfff) != -1) {
   aa=parseInt(cells[i].getElementsByTagName("td")[3].innerText); 
   bb=parseInt(cells[i].getElementsByTagName("td")[4].innerText);
 
   a=aa;
   b=bb;
    console.log(a);
   console.log(b);
   c=b/a;
  console.log(c);

  //parseInt();
  }

  
 }

 
 }

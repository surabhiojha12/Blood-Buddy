var id=localStorage.getItem('id');
var sid;
var numm;
var age;
  var wt;
  var smoke;
  var travel;
  var weekend;
  var role;
  var gender;
  var emo;
  var bp;
  var a;
  var w;
  var s;
  var t;
  var we;
  var r;
  var g;
  var n;
  var er;
  var e;

var database=firebase.database();
function addonif(){
  var thht=document.getElementById('yemo').value;
  if(thht.length>30)
  addon();
  else
  window.alert("Try Again");
}
function addon(){
var venue=document.getElementById('venue').value;

var date=document.getElementById('date').value;
var ref=database.ref('member/'+sid);
var data={
    venue:venue,
   date:date,
    don:don
};
var ref2=database.ref('member/'+sid+'/no');
ref2.on('value',hmdt,erdt);
numm++;


localStorage.setItem('no',numm);
localStorage.setItem('ddt',date);
ref2.set({
  no:numm
});
ref3=database.ref('member/'+sid+'/sur');

ref3.once('value',ldata,eee);
ref3.set({
  bp:bp,
  age:age,
  wt:wt,
  smoke:smoke,
  travel:travel,
  weekend:weekend,
  role:role,
  gender:gender,
  emo:emo,
  no:numm});


ref.push(data);    
window.alert("succesfull");
}
function ldata(data){
  job=data.val();
bp=Number(job.bp);
age=Number(job.age);
wt=Number(job.wt);
smoke=Number(job.smoke);
travel=Number(job.travel);
weekend=Number(job.weekend);
role=Number(job.role);
gender=Number(job.gender);
emo=Number(job.emo);
console.log(bp);
}
function eee(data){
  console.log(data);
}
function hmdt(data){
  var no=data.val();
  numm=Number(no.no);

}
function erdt(data){
  console.log(data);
}
function getdata(data){
    var jobs=data.val();
    var keys=Object.keys(jobs);
    for(var i=0;i<keys.length;i++)
{  
  var k=keys[i];

  if(jobs[k].id==id)
  {
    sid=keys[i];
    ref=database.ref('member/'+sid);
    ref.on('value',asimdt,asimer);
     
  }
  
}
}
function asimdt(data){
  var jobs=data.val();
  var keys=Object.keys(jobs);
  var k=keys[0];
  var n = new Date();
  var d=Date(jobs[k].dod)-n;
  console.log(d);
  

  
}
function asimer(data){
  console.log(data);
}
function errdata(data){
    console.log(data);
}
document.addEventListener("DOMContentLoaded", function() {
  idget();
  
  });
  function idget(){
    var ref=database.ref('member');
    ref.on('value',getdata,errdata);
  }
 function bsearch()
 {
   

var ref=database.ref('member');

    ref.on('value',medt,erdt);
   
}
   
 
 function medt(data1){
  var blood=document.getElementById('bloodthrist').value;
  var yard=document.getElementById('gyard').value;
  var mat=[[1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0],[1,0,1,0,0,0,0,0],[1,1,1,1,0,0,0,0],[1,0,0,0,1,0,0,0],[1,1,0,0,1,1,0,0],
  [1,0,1,0,1,0,1,0],[1,1,1,1,1,1,1,1]];
  var tr='<tr>';
  var etr='</tr>';
  var th='<th>';
  var eth='</th>';
  var td='<td>';
  var etd='</td>';
  var mainele= "";
  var name=[];
  var pno=[];
  var bgg=['O-','O+','A-','A+','B-','B+','AB-','AB+'];
  var bgp=[];
  var scr=[];
  for(var i=7;i>-1;i--)
  {
    if(mat[blood][i]==1)
    {
      var jobs=data1.val();
      var keys=Object.keys(jobs);
      for(var j=0;j<keys.length;j++)
      {
        var k=keys[j];
       
        if((jobs[k].bg==i)&&(jobs[k].city==yard))
        {

          
          refu=database.ref('member/'+k+'/sur');
          refu.once('value',gtt,err);
          console.log(bp);
          var output = net.run({ bp: bp, a: a, w: w, s:s, t:t , we:we, r:r , g:g , n:n , er:er , e:e });
          scr.push(output.yes);
          name.push(jobs[k].name);
          pno.push(jobs[k].phone);
          bgp.push(jobs[k].bg);
        }

      }
      
    

    }
  }
  console.log(scr);
  for (var i = (name.length - 1); i >= 0; i--) {
		//Number of passes
		for (var j = (name.length - i); j > 0; j--) {
			//Compare the adjacent positions
			if (scr[j] < scr[j - 1]) {
				//Swap the numbers
				var tmp = name[j];
				name[j] = name[j - 1];
        name[j - 1] = tmp;
        tmp = pno[j];
				pno[j] = pno[j - 1];
        pno[j - 1] = tmp;
        tmp = bgp[j];
				bgp[j] = bgp[j - 1];
        bgp[j - 1] = tmp;
        tmp = scr[j];
				scr[j] = scr[j - 1];
				scr[j - 1] = tmp;
			}
		}
  }
  var tr='<tr style="border-bottom:1pt solid black;">';
    var etr='</tr>';
    var th='<th>';
    var eth='</th>';
    var td='<td>';
    var etd='</td>';
    var mainele=tr+th+'Name'+eth+th+'phone'+eth+th+'Blood Group'+eth+etr;
  for(var k=0;k<name.length;k++)
  {
    mainele=mainele+tr+td+name[k]+etd+td+pno[k]+etd+td+bgg[bgp[k]]+etd+etr;

  }
  document.getElementById('spane').innerHTML=mainele;
  
}
function erdt(data){
  console.log(data);
} 
 function ghdata(data)
 {
   var temp=data.val();
   tpt=temp.pt; }
   function ehdata(data){
     console.log(data);
   }
function surveyjs(){
  var emo;
  var bp=Number(document.getElementById('bp').value);
  var age=Number(document.getElementById('age').value);
  var wt=Number(document.getElementById('wt').value);
  var smoke=Number(document.getElementById('smoke').value);
  var travel=Number(document.getElementById('travel').value);
  var weekend=Number(document.getElementById('weekend').value);
  var role=Number(document.getElementById('role').value);
  var gender=Number(document.getElementById('gender').value);
  var e=Number(document.getElementById('emo').value);
  if(e.length>40){
    emo=1;
  }
  else if(e.length>20)
  {
    emo=2;
  }
  else{
    emo=3;
  }
window.alert("success");
var ref4=database.ref('member/'+sid+'/sur');
ref4.set({
 bp:bp,
 age:age,
 wt:wt,
 smoke:smoke,
 travel:travel,
 weekend:weekend,
 role:role,
 gender:gender,
 emo:emo,
 no:0
});
}
function gtt(data){
  jobs=data.val();
  bp=jobs.bp;
  a=jobs.age;
  w=jobs.wt;
  s=jobs.s;
  t=jobs.t;
  we=jobs.weekend;
  r=jobs.role;
  g=jobs.gender;
  n=numm;
  er=1;
  e=jobs.emo;
  
}
function err(data){
  console.log(data);
}
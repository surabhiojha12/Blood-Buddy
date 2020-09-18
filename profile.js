var database=firebase.database();

var id=localStorage.getItem('id');
var sidd;

function displaypro()
{
var ref=database.ref('member');
ref.on('value',gtdata,errdata);


}
function gtdata(data){
    var jobs=data.val();
    var keys=Object.keys(jobs);
    for(var i=0;i<keys.length;i++)
{  
  var k=keys[i];
  var noo=localStorage.getItem('no');
  var lasdt=localStorage.getItem('ddt');
  var bgg=['O-','O+','A-','A+','B-','B+','AB-','AB+'];
  if(jobs[k].id==id)
{
document.getElementById('addr').innerHTML=jobs[k].add;
document.getElementById('demm').innerHTML=jobs[k].name;
document.getElementById('email').innerHTML=jobs[k].email;
document.getElementById('phone').innerHTML=jobs[k].phone;
document.getElementById('bggg').innerHTML=bgg[jobs[k].bg];
document.getElementById('dno').innerHTML=noo;
if(noo>=3)
document.getElementById("bronze").classList.remove("w3-hide");
if(noo>=5)
document.getElementById("silver").classList.remove("w3-hide");
if(noo>=8)
document.getElementById("gold").classList.remove("w3-hide");
}
}
}
function errdata(data){
    console.log(data);
}
document.addEventListener("DOMContentLoaded", function() {
   
    displaypro();
   
  });
  
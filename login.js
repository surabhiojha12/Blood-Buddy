var database=firebase.database();
function logg(){
    var ref=database.ref('member');
    ref.on('value',idddata,eddata);
}
function idddata(data){
    var email=document.getElementById('emai').value;
    var pass=document.getElementById('password').value;
    var jobs=data.val();
    var keys=Object.keys(jobs);
    for(var i=0;i<keys.length;i++)
{  
  var k=keys[i];

 
  if((jobs[k].email==email)&&(jobs[k].pas=pass))
  {
    sid=jobs[k].id;
    localStorage.setItem('id',jobs[k].id);
    window.location="dashboard.html";
  }
}
}
function eddata(data){
    console.log(data);
}
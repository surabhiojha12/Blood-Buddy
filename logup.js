var database=firebase.database();
var iddd;
var pt;
function addmember(){
	iddd++;
	 var ref=database.ref('member');
	var name=document.getElementById('name').value;
	var dob=document.getElementById('dob').value;
	var phone=document.getElementById('phone').value;
	var bg=document.getElementById('bg').value;
	bg=Number(bg);
	var email=document.getElementById('email').value;
	var city=document.getElementById('city').value;
	var add=document.getElementById('address').value;
	var pas=document.getElementById('pas').value;
	var data={
		name:name,
		dob:dob,
		phone:phone,
		bg:bg,
		email:email,
		city:city,
		add:add,
		id:iddd,
		pas:pas
	};

	var keyy=ref.push(data).key;
	console.log(keyy);
	var ref2=database.ref('member/'+keyy+'/no');
	ref2.set({
		no:0
	});
	
	window.alert("successfull");
	incs();
}
function idget()
{
  var ref=database.ref("id");
  ref.on('value',iddata,edata);
  
}
function iddata(data){
	var idd=data.val();
	id=idd.id;
	id=Number(id);
console.log(id);
iddd=id;
}
  function edata(data)
  {
	console.log(data);
  }
  document.addEventListener("DOMContentLoaded", function() {
	idget();
  });
  function incs()
{
  var ref=database.ref('id');
  ref.set({
    id:iddd
  })
}
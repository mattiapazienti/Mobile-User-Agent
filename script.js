var target = document.getElementsByTagName('body');
var check = {any:function(){return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);}};
if(check.any())target.setAttribute('class','mobile');
// check only iphone
// if(check.any('iPhone'))target.setAttribute('class','iphone');


// With jQuery

var target = $('body');
var check={any:function(){return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);}};

if(check.any()) {
target.addClass('mobile');
}

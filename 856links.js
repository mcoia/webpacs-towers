function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("CA");
    stringsToHide[2] = new Array ("missouriwestern");
    stringsToHide[3] = new Array ("ncmissouri");
    stringsToHide[4] = new Array ("nwmissouri");
    
    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToHide[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToHide) {
	    for (var l in stringsToHide[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToHide[k][l]) > -1) {
			$(element).parent().parent().hide()
		    }    
		});
	    }
	}
	if ($(".bibLinks tr[style*=none]").length < $(".bibLinks a").length){
	    $(".bibLinks").show();       
	}
    }  
}
    
    
    $(document).ready(function () {
	hideLinks();
});
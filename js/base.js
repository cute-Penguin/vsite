$(function(){
	$(".fixtop").css({height:($(window).height() - $(".fixtop").offset().top)});
	$.ajax({
		type : 'POST',
		url : "http://139.196.195.197:8080/Travel/m/vsysArea/listCity.do",
		dataType : "json",
		data : {
			deviceId : 8,
			tocken : 8,
			appId : 1,
			userId : 1
		},
		success : function(res){
			if( res && res.hot && res.hot.length != 0 ){
				renderHotCityList( res.hot );
			}
			if( res && res.data && res.data.length != 0 ){
				renderCitylist( res.data );
			}
		},
		error : function(res){

		}
	});
});

function renderHotCityList( data ){
	var source  = $("#hotcity-template").html();
  	var template = Handlebars.compile(source);
  	var context = template( data );
  	$("#hotcity").append( context );
}

function renderCitylist( data ){
	var citydata = data.data;
	var hotdata = data.hot;
}
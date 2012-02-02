function move_tab_bg(t,target){
	if(target===null){
		var name=t.data('tab-name');
		target=$('.'+name+'.tab.selected');
	}
	var d=10;
	var t_new_xy={
		width:target.outerWidth(0)+d
		,height:target.outerHeight(0)+d
		,left:target.position().left+(target.outerWidth(1)-target.outerWidth(0))-d/2
		,top:target.position().top+(target.outerHeight(1)-target.outerHeight(0))-d/2
	};
	var delay=Math.abs(t.position().left-t_new_xy.left)/1.5;
	t.animate({
		width:t_new_xy.width+'px'
		,height:t_new_xy.height+'px'
		,left:t_new_xy.left+'px'
		,top:t_new_xy.top+'px'
	},delay);
}

$(function(){

	$('.tab').bind('click keypress',function(){
		var t=$(this);
		var name=t.data('tab-name');
		var c=t.data('tab-c');
		// tabs
		$('.'+name+'.tab').removeClass('selected').find('.c span').addClass('pseudo_link');
		t.addClass('selected').find('.c span').removeClass('pseudo_link');
		// content tabs
		$('.'+name+'.tab-c').addClass('hidden');
		$('.'+name+'.tab-c'+'.'+c).removeClass('hidden');
		// bg
		var bg = $('.'+name+'.tab-bg');
		move_tab_bg(bg,t);
	});

	$('.tab-bg').each(function(){
		var t = $(this).removeClass('hidden').html('');
		move_tab_bg(t,null);
	});

});
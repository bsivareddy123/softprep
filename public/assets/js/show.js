
	$(document).ready(function(){
	   $(".main_dashboard").hide();
		$(".toggler").click(function(){
			$(".main_dashboard").slideToggle("slow");					
		});
	});

	MathJax.Hub.Queue([ "Typeset", MathJax.Hub, "content" ]);
    $("#flg").on('click', function(event){
		if($("#flg").hasClass('btn-link-toggler flag-hide active'))
            {
	          $("#flg").removeClass('btn-link-toggler flag-hide active').addClass('btn-link-toggler flag-hide');
	          $('[name="flagStatus"]').val('UNFLAGGED');
			}
		else
			{
				$("#flg").addClass('btn-link-toggler flag-hide active');
				$('[name="flagStatus"]').val('FLAGGED');
			}
	});
	$(function(){
		$('.flg').on('click', function(e){
			var isChecked = e.target.checked;
			if(isChecked){
				$('[name="flagStatus"]').val('flagged')
			} else {
				$('[name="flagStatus"]').val('')
			}
		});
	});
	
		totalTime();
	
	wizard();
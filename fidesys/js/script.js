
// LOGIN PAGE
$(function() {
	$('.checkmark-show').on('click', function() {
		$(this).toggleClass('checked')
		if ($(this).hasClass('checked')) {
			$('.password-field').find('input:password').prop({type:"text"})
		} else {
			$('.password-field').find('input:text').prop({type:"password"})

		}
	})
})



// SETTINGS TABS

$(function(){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children(".tabs-content").children("div").hide();
                $(tabs).children(".tabs-content").children("div").eq(i).show();
                $(tabs).children(".tabs-name").children("ul").children("li").removeClass("active");
                $(tabs).children(".tabs-name").children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children(".tabs-name").children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children(".tabs-name").children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
});
$(document).ready(function(){
    $(".settings-tabs").lightTabs();
});



// MODALS
$(function() {
	$('.update-plan-popup').hide()
	$('.update-plan').on('click', function() {
		$('.update-plan-popup').show()
	})
	$('.popup .close').on('click', function() {
		$(this).parent().parent().hide()
	})
})

// FORMS 
// https://jqueryvalidation.org/documentation/
$(function() {
	$('#person_details input').on('input', function () {
		$('.person_details_btn').removeClass('active')

		$('#person_details').validate();
		if ($('#person_details input').valid()) {
			$('.person_details_btn').addClass('active')
		}
	});
	$('#change_pass input.new_pass').on('input', function () {
		$('#change_pass input.new_pass').removeClass('error_1')
		$('.change_pass_btn').removeClass('active')

		var value_1 = $('#change_pass input.current_pass').val()
		var value_2 = $(this).val()
		console.log(value_2)
		if ($('#change_pass input').valid() && (value_1 == value_2)) {
			$('.change_pass_btn').addClass('active')
		} else if (value_1 !== value_2) {
			$('#change_pass input.new_pass').addClass('error_1')
		}
		console.log(value_1 !== value_2)
		$('#change_pass').validate();
	});
	$('#signup_form input').on('input', function () {
		$('.signup_btn').removeClass('active')
		$('#signup_form').validate();
		if ($('#signup_form input').valid()) {
			$('.signup_btn').addClass('active')
		}
	});
	$('#login_form input').on('input', function () {
		$('.login_btn').removeClass('active')
		$('#login_form').validate();
		if ($('#login_form input').valid()) {
			$('.login_btn').addClass('active')
		}
	});
	$('#restore_form input').on('input', function () {
		$('.restore_btn').removeClass('active')
		$('#restore_form').validate();
		if ($('#restore_form input').valid()) {
			$('.restore_btn').addClass('active')
		}
	});
	$('#billing_email').validate();

})

(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });
    var regex= /^[0-9]{9,11}$/;
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {

            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
        if($(input).attr('type') == 'tel'){
            if($(input).val().trim().match(regex)==null){
                return false;
            }
        }
        alert("Thanks you , we will response for you  early !!!")
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    // show form
    $(".wrap-contact100").css('display', 'none');
    $(".contact100-form-symbol").click(function() {
        $(".wrap-contact100").toggle("slow");
    });
    //Email-Link
    $('#EmailLink').on('click', function (event) {
      event.preventDefault();
      var email = 'ryansportsclub@gmail.com';
      var subject = 'Contact us';
      var emailBody = 'Dear: Ryan Sports Club';
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });

})(jQuery);
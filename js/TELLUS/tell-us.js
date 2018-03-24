  $(document).ready(function() {
    $('#suggestion_form').bootstrapValidator({
        // To use feedback icons;
        feedbackIcons: {
            valid: 'fa fa-check ',
            invalid: 'fa fa-remove ',
            validating: 'fa fa-refresh fa-2x'
        },
        excluded: [':disabled'],
        fields: {
            fullname: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },

            message_box: {
                validators: {
                  stringLength: {
                    min: 10,
                    max: 200,
                    message:'Please enter at least 10 characters and no more than 200'
                },
                notEmpty: {
                    message: 'Please supply a description of your project'
                }
            }
        }
    }
})
    .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#suggestion_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

    // complaint/compliments
    $('#Complaints_form').bootstrapValidator({
        // To use feedback icons;
        feedbackIcons: {
            valid: 'fa fa-check fa-2x',
            invalid: 'fa fa-remove fa-2x',
            validating: 'fa fa-refresh'
        },
        fields: {
            fullname: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            about:{
                validators:{
                    notEmpty:{
                        message:'Please supply your Feedback'
                    }
                }
            },
            message_box: {
                validators: {
                  stringLength: {
                    min: 10,
                    max: 200,
                    message:'Please enter at least 10 characters and no more than 200'
                },
                notEmpty: {
                    message: 'Please supply a description of your project'
                }
            }
        }
    }
})
    .on('success.form.bv', function(e) {
            $('#success_message2').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#Complaints_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

});


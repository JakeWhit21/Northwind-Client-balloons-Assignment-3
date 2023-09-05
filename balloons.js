$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    //when page loads play animation
    $(document).ready(function () {
        $('#happyBirthday').removeClass().addClass('animate__animated animate__flash');
    });
});
//select all button functionality
$('#selectAll').on('click', function () {
    $('.form-check-input').each(function () {
        $(this).prop('checked', true);
    });
});
//select none button functionality
$('#selectNone').on('click', function () {
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
});

//check for no balloons selected
$('#submit').on('click', function () {
    if ($('.form-check-input:checked').length == 0) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });
    
//hover functionality
$('#redLabel').hover(function() {
    $('#happyBirthday').css("color", "slategray");
  }).mouseover(function() {
    $('#happyBirthday').css("color", "red");
  });

  $('#greenLabel').hover(function() {
    $('#happyBirthday').css("color", "slategray");
  }).mouseover(function() {
    $('#happyBirthday').css("color", "green");
  });

  $('#blueLabel').hover(function() {
    $('#happyBirthday').css("color", "slategray");
  }).mouseover(function() {
    $('#happyBirthday').css("color", "blue");
  });
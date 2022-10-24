$(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);
        
        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
        
        // Radio button
        $('.radio-group .radio').click(function(){
            $(this).parent().parent().find('.radio').removeClass('selected');
            $(this).addClass('selected');
        });
    })

// alert	
// function myalertt(){
//     swal("Good job!", "You clicked the button!", "success");
//  }
// validation form-job.html
function validation1(){
    if(document.form1.full_name.value==""){
        swal( "تنبيه","يرجئ ادخال الاسم", "error");
    }
    else if(document.form1.email.value==""){
        swal( "تنبيه","يرجئ ادخال الايميل","error"); 
    }
    else if(document.form1.adrss_job.value==""){
        swal( "تنبيه","  يرجئ ادخال العنوان","error"); 
    }
    else if(document.form1.file_cv.value==""){
        swal( "تنبيه","يجب ارفاق الملف سيرةالذاتية","error"); 
    }


    else{
        swal("شكرا"," تم التسجيل بنجاح","success"); 
    }
   
}



// validation form for material.html

function validation2(){
    if(document.form2.full_name.value==""){
        swal( "تنبيه","رجئ ادخال الاسم", "error");
    }
    else if(document.form2.Phone.value==""){
        swal( "تنبيه","يرجئ ادخال رقم الهاتف","error"); 
    }
    else if(document.form2.adress.value==""){
        swal( "تنبيه","  يرجئ ادخال العنوان","error"); 
    }
   


    else{
        swal("شكرا","تم تسجل طلبك سيتم تواصل معك","success"); 
    }
   
}


// validation form for volnteer.

function validation3(){
    if(document.form3.fname1.value==""){
        swal( "تنبيه","رجئ ادخال الاسم", "error");
    }
    else if(document.form3.adress1.value==""){
        swal( "تنبيه","يرجئ ادخال العنوان","error"); 
    }
    else if(document.form3.email1.value==""){
        swal( "تنبيه","  يرجئ ادخال البريد الالكتروني","error"); 
    }
    else if(document.form3.adressjob.value==""){
        swal( "تنبيه","  يرجئ ادخال العنوان الوضيفي","error"); 
    }
    
   


    else{
        swal("شكرا","تم تسجل طلبك سيتم تواصل معك","success"); 
    }
   
}



 
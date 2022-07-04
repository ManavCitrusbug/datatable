$(document).ready(function () {

    $.ajax({
        url: '/datas/',
        type: 'GET',

        success: function (data) {
            var val;
            var len=data.data.length;
            var page=len/40;
           
            for (var i = 0; i < data.data.length; i++) {
                val = data.data[i];

                $('#rowdata').append(`<tr  id= "${val.id}">
                <td  class='text-center'>${val.id}</td>
                <td  class='text-center'>${val.Age}</td>
                <td  class='text-center'>${val.Sex}</td>
                <td  class='text-center'>${val.Job}</td>
                <td  class='text-center'>${val.Housing}</td>
                <td  class='text-center'>${val.Saving_accounts}</td>
                <td  class='text-center'>${val.Checking_account}</td>
                <td  class='text-center'>${val.Credit_amount}</td>
                <td  class='text-center'>${val.Duration}</td>
                <td  class='text-center'>${val.Purpose}</td>
                </tr>

                `);
            }
            $('#page').html("");
            for (i = 0; i < page; i++) {
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();  
            $('#rowdata tr').slice (0, 40).show();
            $('#page li a:first').addClass('active');  
            $('#page li a').bind('click', function() {  
            $('#page li a').removeClass('active');  
                $(this).addClass('active');  
                var currPage = $(this).attr('rel');  
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;  
                var end = start + 40;  
                $('#rowdata tr').css('opacity','0.0').hide().slice(start, end).  
                css('display','table-row').animate({opacity:1}, 300);  
            });  


        }

    });

})
function home(){
    $.ajax({
        url: '/datas/',
        type: 'GET',

        success: function (data) {
            var val;
            var len=data.data.length;
            var page=len/40;
           
            for (var i = 0; i < data.data.length; i++) {
                val = data.data[i];

                $('#rowdata').append(`<tr  id= "${val.id}">
                <td  class='text-center'>${val.id}</td>
                <td  class='text-center'>${val.Age}</td>
                <td  class='text-center'>${val.Sex}</td>
                <td  class='text-center'>${val.Job}</td>
                <td  class='text-center'>${val.Housing}</td>
                <td  class='text-center'>${val.Saving_accounts}</td>
                <td  class='text-center'>${val.Checking_account}</td>
                <td  class='text-center'>${val.Credit_amount}</td>
                <td  class='text-center'>${val.Duration}</td>
                <td  class='text-center'>${val.Purpose}</td>
                </tr>

                `);
            }
            $('#page').html("");
            for (i = 0; i < page; i++) {
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();  
            $('#rowdata tr').slice (0, 40).show();
            $('#page li a:first').addClass('active');  
            $('#page li a').bind('click', function() {  
            $('#page li a').removeClass('active');  
                $(this).addClass('active');  
                var currPage = $(this).attr('rel');  
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;  
                var end = start + 40;  
                $('#rowdata tr').css('opacity','0.0').hide().slice(start, end).  
                css('display','table-row').animate({opacity:1}, 300);  
            });  


        }

    });
    
}
function range_page() {
    var range = $('#range').val();

    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            var listdata = parseInt(range);
            var page = data.data.length / listdata;
            $('#page').html("");
            for (i = 0; i < page; i++) {
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();  
            $('#rowdata tr').slice (0, listdata).show();
            $('#page li a:first').addClass('active');  
            $('#page li a').bind('click', function() {  
            $('#page li a').removeClass('active');  
                $(this).addClass('active');  
                var currPage = $(this).attr('rel');  
                var currentpage = parseInt(currPage);
                var start = currentpage * listdata;  
                var end = start + listdata;  
                $('#rowdata tr').css('opacity','0.0').hide().slice(start, end).  
                css('display','table-row').animate({opacity:1}, 300);  
            });  

        }

    })
}

function Age(){
    $.ajax({
        url:'/Agedata/',
        type:'GET',
        success:function(data){
            // list=[];
            console.log(data)


        }
    })

}




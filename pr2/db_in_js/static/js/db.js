$(document).ready(function(){

    $.ajax({
        url:'/datas/',
        type:'GET',

        success:function(data){

            for (var i=0;i<data.data.length;i++) {
                val = data.data[i];
                $('#data').append("<tr class=' table-active' >");
                $('#data').append("<td  class='text-center'>"+val.id+"</td>");
                $('#data').append("<td class='text-center'>"+val.Age+"</td>");
                $('#data').append("<td class='text-center'>"+val.Sex+"</td>");
                $('#data').append("<td class='text-center'>"+val.Job+"</td>");
                $('#data').append("<td class='text-center'>"+val.Housing+"</td>");
                $('#data').append("<td class='text-center'>"+val.Saving_accounts+"</td>");
                $('#data').append("<td class='text-center'>"+val.Checking_account+"</td>");
                $('#data').append("<td class='text-center'>"+val.Credit_amount+"</td>");
                $('#data').append("<td class='text-center'>"+val.Duration+"</td>");
                $('#data').append("<td class='text-center'>"+val.Purpose+"</td>");
                $('#data').append("</tr>");
                
            }
        }

    });
})
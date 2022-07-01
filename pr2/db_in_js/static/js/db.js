$(document).ready(function () {

    // $.ajax({
    //     url: '/datas/',
    //     type: 'GET',

    //     success: function (data) {
    //         var val;
    //         var len;
    //         for (var i = 0; i < data.data.length; i++) {
    //             val = data.data[i];

    //             $('#data').append(`<tr  id= "${val.id}">
    //             <th  class='text-center'>${val.id}</th>
    //             <td  class='text-center'>${val.Age}</td>
    //             <td  class='text-center'>${val.Sex}</td>
    //             <td  class='text-center'>${val.Job}</td>
    //             <td  class='text-center'>${val.Housing}</td>
    //             <td  class='text-center'>${val.Saving_accounts}</td>
    //             <td  class='text-center'>${val.Checking_account}</td>
    //             <td  class='text-center'>${val.Credit_amount}</td>
    //             <td  class='text-center'>${val.Duration}</td>
    //             <td  class='text-center'>${val.Purpose}</td>
    //             </tr>

    //             `);
    //         }

    //     }

    // });

})
function range_page() {
    var range = $('#range').val();
    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            $('#page').html("");
            $('#data').html("");
            $('#page').append(`<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`);
            var page = data.data.length / range;
            for (var i = 1; i < page; i++) {
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' href=" + i + ">" + i + "</a></li>");

            }
            $('#page').append(`<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>`);
          
            $('#page').html();

        }

    })



}

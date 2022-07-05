$(document).ready(function () {

    $.ajax({
        url: '/datas/',
        type: 'GET',

        success: function (data) {
            var val;
            var len = data.data.length;
            var page = len / 40;

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
            $('#rowdata tr').slice(0, 40).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;
                var end = start + 40;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });


        }

    });

})
function Homepagination() {
    $.ajax({
        url: '/datas/',
        type: 'GET',

        success: function (data) {
            var val;
            var len = data.data.length;
            var page = len / 40;

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
            $('#rowdata tr').slice(0, 40).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;
                var end = start + 40;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
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
            $('#rowdata tr').slice(0, listdata).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * listdata;
                var end = start + listdata;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });

        }

    })
}
function Pagination() {
    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            var len = data.data.length;
            var page = len / 40;
            $('#page').html("");
            for (i = 0; i < page; i++) {
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();
            $('#rowdata tr').slice(0, 40).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;
                var end = start + 40;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });
        }
    })
}



$(".header").on("click", function () {

    var header = $(this).html();

    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            if (header == 'Age') {

                var data_array = data["data"];
                data_array.sort(function (a, b) {
                    return a.Age - b.Age;
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center" style='font-size:18px;'><b>${data_array[i].Age}</b></td>
                            <td class="text-center">${data_array[i].Sex}</td>
                            <td class="text-center">${data_array[i].Job}</td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                }

            }

            if (header == 'Sex') {

                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Sex.localeCompare(b.Sex)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center" style='font-size:18px;'><b>${data_array[i].Sex}</b></td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Job') {

                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return a.Job - b.Job;
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Job}</b></td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Housing') {


                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Housing.localeCompare(b.Housing)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Housing}</b></td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Saving accounts') {


                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Saving_accounts.localeCompare(b.Saving_accounts)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Saving_accounts}</b></td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Checking account') {


                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Checking_account.localeCompare(b.Checking_account)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Checking_account}</b></td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Credit amount') {


                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return a.Credit_amount - b.Credit_amount
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Credit_amount}</b></td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Duration') {


                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return a.Duration - b.Duration
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Duration}</b></td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                Pagination();

            }
            if (header == 'Purpose') {


                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Purpose.localeCompare(b.Purpose)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Purpose}</b></td>
                </tr>`)
                }
                Pagination();

            }
        }
    })
});

function filter() {
    var val = $('#filterdata').val();
    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            if (val == 'Age') {
                $('#serching').keyup(function () {
                    agefilter();
                })
                function agefilter() {
                    var age = parseInt($('#serching').val());
                    agelist = [];
                    var vals;

                    if (age != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (age == vals.Age) {
                                agelist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }
                            

                        }
                       

                    }
                    if (isNaN(age)) {
                        $('#validation').html("*****Invalid Age*****");
                        $('#validation').css("color", "red");
                        $('#filterdata').val($('#filterdatas').html());
                        $('#serching').val("");
                    }
                    if (agelist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = agelist.length / 10;
                        for (var i = 0; i < agelist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${agelist[i].id}</td>
                                <td class="text-center" style='font-size:18px;'><b>${agelist[i].Age}</b></td>
                                <td class="text-center">${agelist[i].Sex}</td>
                                <td class="text-center">${agelist[i].Job}</td>
                                <td class="text-center">${agelist[i].Housing}</td>
                                <td class="text-center">${agelist[i].Saving_accounts}</td>
                                <td class="text-center">${agelist[i].Checking_account}</td>
                                <td class="text-center">${agelist[i].Credit_amount}</td>
                                <td class="text-center">${agelist[i].Duration}</td>
                                <td class="text-center"  >${agelist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (agelist.length > 10) {
                            for (i = 0; i < page; i++) {
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 10).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 10;
                                var end = start + 10;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }

            }
            // if(val=='Sex'){
            //     $('#serching').keyup(function () {
            //         agefilter();
            //     })
            //     function agefilter() {
            //         var age = parseInt($('#serching').val());
            //         agelist = [];
            //         var vals;

            //         if (age != '') {
            //             for (var i = 0; i < data.data.length; i++) {
            //                 vals = data.data[i]
            //                 if (age == vals.Age) {
            //                     agelist.push(vals);
            //                 }
            //                 else {
            //                     $('#validation').html("*****No data Found*****");
            //                     $('#validation').css('color', 'red');
            //                     $('#valnav').css('border', '3px solid red');
            //                 }
                            

            //             }
                       

            //         }
            //         if (isNaN(age)) {
            //             $('#validation').html("*****Invalid Age*****");
            //             $('#validation').css("color", "red");
            //             $('#filterdata').val($('#filterdatas').html());
            //             $('#serching').val("");
            //         }
            //         if (agelist.length != 0) {
            //             $('#validation').html("*****Data found successfully****");
            //             $('#validation').css('color', 'green');
            //             $('#valnav').css('border', '3px solid green');
            //             $("#rowdata").html("")
            //             var page = agelist.length / 10;
            //             for (var i = 0; i < agelist.length; i++) {

            //                 $("#rowdata").append(`<tr><td class="text-center">${agelist[i].id}</td>
            //                     <td class="text-center" style='font-size:18px;'><b>${agelist[i].Age}</b></td>
            //                     <td class="text-center">${agelist[i].Sex}</td>
            //                     <td class="text-center">${agelist[i].Job}</td>
            //                     <td class="text-center">${agelist[i].Housing}</td>
            //                     <td class="text-center">${agelist[i].Saving_accounts}</td>
            //                     <td class="text-center">${agelist[i].Checking_account}</td>
            //                     <td class="text-center">${agelist[i].Credit_amount}</td>
            //                     <td class="text-center">${agelist[i].Duration}</td>
            //                     <td class="text-center"  >${agelist[i].Purpose}</td>
            //                     </tr>`)
            //             }
            //             $('#page').html("");
            //             if (agelist.length > 10) {
            //                 for (i = 0; i < page; i++) {
            //                     $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + i + "</a></li>");
            //                 }

            //                 $('#page').html();
            //                 $('#rowdata tr').hide();
            //                 $('#rowdata tr').slice(0, 10).show();
            //                 $('#page li a:first').addClass('active');
            //                 $('#page li a').bind('click', function () {
            //                     $('#page li a').removeClass('active');
            //                     $(this).addClass('active');
            //                     var currPage = $(this).attr('rel');
            //                     var currentpage = parseInt(currPage);
            //                     var start = currentpage * 10;
            //                     var end = start + 10;
            //                     $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
            //                         css('display', 'table-row').animate({ opacity: 1 }, 300);
            //                 });
            //             }

            //         }
            //     }


            // }

        }
    })
}



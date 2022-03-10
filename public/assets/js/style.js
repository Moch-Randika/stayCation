
// jquery category  edit
$("#dataTable").on("click", ".button-edit-Category", function () {
    let id = $(this).data("id");
    let name = $(this).data("name");
    $('#edit-modal-category').modal('show')
    $(".id").val(id);
    $(".name").val(name)
    
})
// jquery category  delete
$("#dataTable").on("click", ".button-delete-Category", function () {
    let id = $(this).data("id");
    let name = $(this).data("name");
    $("#delete-modal-category").modal("show")
    $(".name").val(name)
    $("#formCategorydelete").attr('action', `/admin/category/${id}?_method=delete`);
})


// jquery bank edit
$("#dataTable").on("click", ".button-edit-bank", function () {
    let id = $(this).data("id");
    let nameBank = $(this).data("namebank");
    let nomorRekening = $(this).data("nomorrekening");
    let name = $(this).data("name");
    let imageUrl = $(this).data("imageurl")
    $('#modal-edit-bank').modal('show')
    $(".id").val(id);
    $(".nameBank").val(nameBank);
    $(".nomorRekening").val(nomorRekening);
    $(".name").val(name);
    $(".imageUrl").val(imageUrl);
})

$("#dataTable").on("click", ".button-delete-bank", function () {
    let id = $(this).data("id");
    let nameBank = $(this).data("namebank");
    let nomorRekening = $(this).data("nomorrekening");
    $('#modal-delete-bank').modal('show')
    console.info(id)
    $(".value").val(`${nameBank} - ${nomorRekening}`)
    $(".nameBank").val(nameBank);
    $(".nomorRekening").val(nomorRekening);
    $("#formBankdelete").attr('action', `/admin/bank/${id}?_method=delete`);
})





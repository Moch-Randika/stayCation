
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
    $(".id").val(id);
    $(".name").val(name)
    
})


// jquery bank edit
$("#dataTable").on("click", ".button-edit-bank", function () {
    let id = $(this).data("id");
    let nameBank = $(this).data("namebank");
    let nomorRekening = $(this).data("nomorrekening");
    let name = $(this).data("name");
    let imageUrl = $(this).data("imageurl")
    $('#button-edit-bank').modal('show')
    $(".id").val(id);
    $(".nameBank").val(nameBank);
    $(".nomorRekening").val(nomorRekening);
    $(".name").val(name);
    $(".imageUrl").val(imageUrl);
    // $(".imageUrl").attr('src', `/public/${imageUrl}`)

})





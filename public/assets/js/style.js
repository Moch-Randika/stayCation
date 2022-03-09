$("#dataTable").on("click", ".button-edit", function () {
    let id = $(this).data("id");
    let name = $(this).data("name");
    $('#edit-modal').modal('show')
    $(".id").val(id);
    $(".name").val(name)
    
})
$("#dataTable").on("click", ".button-delete", function () {
    let id = $(this).data("id");
    let name = $(this).data("name");
    $('#delete-modal').modal('show')
    $(".id").val(id);
    $(".name").val(name)
    
})
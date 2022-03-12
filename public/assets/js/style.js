 // Replace the <textarea id="editor1"> with a CKEditor 4
    // instance, using default configuration.
    CKEDITOR.replace("about");




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

// jquery bank delete
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

$("#itemUpdate").on("click", ".button-update-item", function () {
    let title = $(this).data("title")
    let price = $(this).data("price")
    let country = $(this).data("country")
    let city = $(this).data("city")
    let i = $(this).data("description")
    let categoryId = $(this).data("categoryid")
  $('#button-update-item').modal('show').html()
  $(".title").val(title)
  $(".price").val(price)
  $(".country").val(country)
  $(".city").val(city)
  $("#about").val(CKEDITOR.instances.about.setData(`${i}`))
  $(".categoryId").val(categoryId)
  console.info(i)
})






// carousel
let multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  let carouselWidth = $(".carousel-inner")[0].scrollWidth;
  let cardWidth = $(".carousel-item").width();
  let scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}



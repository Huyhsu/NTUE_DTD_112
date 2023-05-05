$("#imageModal").on("show.bs.modal", function (event) {
  const screenWidth = $(window).width();
  if (screenWidth < 1199) {
    event.preventDefault();
  } else {
    var button = event.relatedTarget;
    var imgSrc = $(button).data("bs-imgsrc");
    var modalImg = $("#imageModal").find(".modal-body img");
    modalImg.attr("src", imgSrc);
  }
});

// $("#imageModal").on("show.bs.modal", function (event) {
//   var button = event.relatedTarget;
//   var imgSrc = $(button).data("bs-imgsrc");
//   var modalImg = $("#imageModal").find(".modal-body img");
//   modalImg.attr("src", imgSrc);
// });

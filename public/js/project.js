var Shuffle = window.Shuffle;
var jQuery = window.jQuery;

var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
  itemSelector: ".shuffle-item",
  // sizer: ".my-sizer-element",
  buffer: 1,
});

jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
  var input = evt.currentTarget;
  if (input.checked) {
    myShuffle.filter(input.value);
  }
});

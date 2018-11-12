// Check Off Specific Todos by Clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});

// Click on the X to delete todo
$("span").click(function(){
  alert("Clicked on a span!");
})
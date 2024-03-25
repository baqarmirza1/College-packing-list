$(".to-pack-button").click(function() {
    var input = $(".to-pack-input").val();
    $(".packing-list").append("<li> I'm going to pack " + input + ".</li>");
});

$(".course-button").click(function(){
    var input2 = $(".course-input").val();
    $(".course-list").append("<li> I'm excited to enroll in " + input2 + "!</li>");
});
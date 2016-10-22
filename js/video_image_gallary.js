$(function() {

    $("#tabs").tabs();
    var playr = videojs("example_video_1");
    var elements = document.querySelectorAll("#thumb span");
    var imgs = document.querySelectorAll("#thumb span img");


    $("#thumb span img").on('click', function() {
        $("#thumb span img").removeClass("active");
        $(this).addClass("active");

    })


    // Hover states on the static widgets
    $("#dialog-link, #icons li").hover(
        function() {
            $(this).addClass("ui-state-hover");
        },
        function() {
            $(this).removeClass("ui-state-hover");
        }
    );

    $(".vThumbs1").on("click", function() {
        $(".tab2img").attr("src", "images/71141.jpg");
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=KzARx0EuDgc'
        }]);
        playr.play();

    });
    $(".vThumbs2").on("click", function() {
        $(".tab2img").attr("src", "images/455456147_1280x720.jpg");
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=HtipPCt317Y'
        }]);
        playr.play();

    });
    $(".vThumbs3").on("click", function() {

        $(".tab2img").attr("src", "images/Awesome And Beautiful Nature Pics_MyClipta_003.jpg");
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=PT2_F-1esPk'
        }]);
        playr.play();

    });
    $(".vThumbs4").on("click", function() {
        $(".tab2img").attr("src", "images/god-gifted-beautiful-nature-5-728.jpg");
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=-qE1nUBqlR4'
        }]);
        playr.play();

    });
    $(".vThumbs5").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=MiOdN6omGP8'
        }]);
        playr.play();

    });
    $(".vThumbs6").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=tUHG9ZATf8M'
        }]);
        playr.play();

    });
    $(".vThumbs7").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=nmFaZ6dVkt4'
        }]);
        playr.play();

    });
    $(".vThumbs8").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=O2Bsw3lrhvs'
        }]);
        playr.play();

    });
    $(".vThumbs9").on("click", function() {

        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=gbug3zTm3Ws'
        }]);
        playr.play();

    });
    $(".vThumbs10").on("click", function() {

        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=wX0aiMVvnvg'
        }]);
        playr.play();

    });
    $(".vThumbs11").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=YVwQNDS-Zes'
        }]);
        playr.play();

    });
    $(".vThumbs12").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=XWo9qybK1WY'
        }]);
        playr.play();

    });
    $(".vThumbs13").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=e0Ka3fvYYTc'
        }]);
        playr.play();
        $(".vThumbs13 img").toggleClass("active");

    });
    $(".vThumbs14").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=Tf4sa0BVJVw'
        }]);


        playr.play();

    });
    $(".vThumbs15").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=7eCdgsoHm7E'
        }]);


        playr.play();

    });
    $(".vThumbs16").on("click", function() {
        playr.src([{
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=M5Kgm2I-jFU'
        }]);
        playr.play();

    });




})
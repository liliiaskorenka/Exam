var gulp = require("gulp");
var less = require("gulp-less");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var autoprefixer = require("gulp-autoprefixer");
var sync = require("browser-sync").create();
var image = require("gulp-image");
var imagemin = require("gulp-imagemin");

var isDevelopment = true;
gulp.task("css:own", function() {
    return gulp.src("src/Styles/main.less")
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer("last 2 versions"))
        .pipe(nano())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});
gulp.task("css:vendor", function() {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/font-awesome/css/font-awesome.css",
        "node_modules/jquery-scrollToTop/dist/css/scrollToTop.css",
        "node_modules/jquery-datetime-picker/jquery.datetimepicker.css",
        "node_modules/bxslider/dist/jquery.bxslider.css",
        "node_modules/toastr/build/toastr.min.css",
        "node_modules/datatables/media/css/jquery.dataTables.min.css",
        "ihover/ihover.css",
        "Animate-Elements-In-When-They-Come-Into-View-jQuery-CSS3-Animate-It-Plugin/css/animations.css",
        "node_modules/bootstrap-star-rating/css/star-rating.css",
        "node_modules/datatables/media/css/jquery.dataTables.css"

    ])
        .pipe(gulpIf(!isDevelopment, nano()))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("js:own", function() {
    return gulp.src("src/js/main.js")
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest("dist/js"));
});
gulp.task("js:vendor", function() {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "node_modules/jquery-scrollToTop/dist/jquery-scrollToTop.js",
        "node_modules/php-date-formatter/js/php-date-formatter.js",
        "node_modules/jquery-datetime-picker/jquery.datetimepicker.js",
        "node_modules/jquery-form-validator/form-validator/jquery.form-validator.js",
        "node_modules/bxslider/dist/jquery.bxslider.js",
        //"node_modules/jquery-ui/ui/"
        "node_modules/toastr/build/toastr.min.js",
        "node_modules/jquery-googlemap/jquery.googlemap.js",
        "node_modules/datatables/media/js/jquery.dataTables.js",
        "node_modules/twbs-pagination/tests/jquery.twbsPagination.js",

        "node_modules/bootstrap-star-rating/js/star-rating.js",
        /*"Animate-Elements-In-When-They-Come-Into-View-jQuery-CSS3-Animate-It-Plugin/js/css3-animate-it.js",*/
        "node_modules/datatables/media/js/jquery.dataTables.js"
    ])
        .pipe(concat("vendor.js"))
        .pipe(gulpIf(!isDevelopment, uglify()))
        .pipe(gulp.dest("dist/js"));
});
gulp.task("fonts", function() {
    return gulp.src([
        "src/Fonts/*.{ttf,otf}",
        "node_modules/font-awesome/fonts/**"
    ])
        .pipe(gulp.dest("dist/Fonts"));
});
gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});
gulp.task("images", function() {
    return gulp.src("src/Images/*.{png,jpg,gif,jpeg,svg}")
        // @todo uncomment at final ver because it slows down project
        /*.pipe(imagemin())*/
        .pipe(gulp.dest("dist/Images"));
});
gulp.task("json", function() {
    return gulp.src("src/json/*.json")
        .pipe(gulp.dest("dist/json"));
});

gulp.task("css", ["css:own", "css:vendor"]);
gulp.task("js", ["js:own", "js:vendor"]);
gulp.task("watch", ["build"], function() {
    sync.init({
        server: "dist"
    });
    gulp.watch("src/Styles/**/*.less", ["css:own"]);
    gulp.watch("src/js/*.js", ["js:own"]);
    gulp.watch("dist/js/*.js").on("change", sync.reload);
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("dist/*.html", ["html"]).on("change", sync.reload);
    gulp.watch("src/Fonts/*.{ttf,otf}", ["fonts"]);
    gulp.watch("dist/Fonts/**/*.{ttf,otf}", ["fonts"]).on("change", sync.reload);
    gulp.watch("src/Images/*.{png,jpg,gif,jpeg,svg}", ["images"]);
    gulp.watch("dist/Images/*.{png,jpg,gif,jpeg,svg}", ["images"]).on("change", sync.reload);
    gulp.watch("src/json/*.json", ["json"]);
    gulp.watch("dist/json/*.json", ["json"]).on("change", sync.reload);
});
gulp.task("build", ["html", "css", "js", "fonts", "images", "json"]);
gulp.task("default", ["build", "watch"]);
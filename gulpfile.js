//目的：编译sass文件


//1）引入gulp和gulp-sass两个包
var gulp = require('gulp'); //本地安装为了在这里引入gulp
var sass = require('gulp-sass');
var sass = require('gulp-less');


// 2)编写任务
gulp.task('buildSass', function() {
    console.log('编译完成');

    // 匹配文件
    return gulp.src('./src/sass/*.scss')

    // 编译
    .pipe(sass({ outputStyle: 'expanded' }))

    // 输出文件
    .pipe(gulp.dest('./src/css'));
});


// 监听sass文件修改，并自动编译
gulp.task('jtSass', function() {
    gulp.watch('./src/sass/*.scss', ['buildSass']);
});


// 3)编写任务
gulp.task('buildLess', function() {
    console.log('编译完成');

    // 匹配文件
    return gulp.src('./src/less/*.less')

    // 编译
    .pipe(sass({ outputStyle: 'expanded' }))

    // 输出文件
    .pipe(gulp.dest('./src/css'));
});


// 监听sass文件修改，并自动编译
gulp.task('jtLess', function() {
    gulp.watch('./src/less/*.less', ['buildLess']);
});
// 运行任务（全局安装为了运行gulp任务）
// 在命令提示符进行
// 格式：gulp 任务名
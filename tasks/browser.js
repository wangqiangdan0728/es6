//构建工具
import gulp from 'gulp';
//gulp语句作if判断
import gulpif from 'gulp-if';
//gulp常用工具，函数集合
import gutil from 'gulp-util';
//热更新，自动更新
import livereload from 'gulp-livereload';
//解析命令行参数
import args from './util/args';

gulp.task('browser', (cb) => {
    if (!args.watch) return cb();

    gulp.watch('app/**/*.js', ['scripts']); //第一个参数，监听的目录；第二个参数，执行的操作
    gulp.watch('app/**/*.ejs', ['pages']); //第一个参数，监听的目录；第二个参数，执行的操作
    gulp.watch('app/**/*.css', ['css']); //第一个参数，监听的目录；第二个参数，执行的操作
})
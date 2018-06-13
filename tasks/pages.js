//构建工具
import gulp from 'gulp';
//gulp语句作if判断
import gulpif from 'gulp-if';
//热更新，自动更新
import livereload from 'gulp-livereload';
//解析命令行参数
import args from './util/args';

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs') // **/*,代表app文件夹下所有的.ejs,不局限于app文件夹下
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})
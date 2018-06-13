//构建工具
import gulp from 'gulp';
//gulp语句作if判断
import gulpif from 'gulp-if';
//热更新，自动更新
import livereload from 'gulp-livereload';
//解析命令行参数
import args from './util/args';

gulp.task('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch, livereload()))
})
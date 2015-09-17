gulp                    = require('gulp')
sass                    = require('gulp-sass')
gulpReact               = require('gulp-react')
coffeex                 = require('gulp-coffee-react')
vinylSourceStream       = require('vinyl-source-stream')
browserSync             = require('browser-sync')
browserify              = require('browserify')
reactify                = require('reactify')

gulp.task 'sass', ->
    gulp.src './assets/scss/**/!(_)*.scss'
    .pipe do sass
    .pipe gulp.dest './build/css'

gulp.task 'coffee', ->
    gulp.src './assets/coffee/**/*.coffee'
    .pipe do coffeex
    .pipe gulp.dest './build'

gulp.task 'js', ->
    browserify './app/app.js'
    .transform reactify
    .bundle()
    .pipe vinylSourceStream 'app.js'
    .pipe gulp.dest './build/js/'
    .pipe browserSync.stream()

gulp.task 'app', ['sass', 'js'], ->

gulp.task 'server', ['app'], ->
    browserSync.init
        server: './',
        open: false
    # gulp watch tack
    gulp.watch './assets/scss/**/*.scss', ['sass']
    gulp.watch ['./app/**/*.js','./app/**/*.jsx'], ['js']

gulp.task 'default', ['server']
require! [ \gulp \gulp-load-plugins \bower, \shelljs ]
pkg = require \./package.json

$ = gulpLoadPlugins(/*lazy: false*/)

# TODO watch?
# TODO add plumber
# TODO fix the log in git-check

paths =
	scss		: [ 'src/scss/**/*.scss' ]
	js			: [ 'src/js/**/*.js' ]
	templates	: [ 'src/templates/**/*.html' ]


gulp.task \git-check, (done)!->
	unless shelljs.which \git
		console.log 'fix meh'
		# console.log(
		# 	'  ' + $.util.colors.red('Git is not installed.')
		# 	'\n  Git, the version control system, is required to download Ionic.'
		# 	'\n  Download git here:', $.util.colors.cyan('http://git-scm.com/downloads') + '.'
		# 	'\n  Once git is installed, run \'' + $.util.colors.cyan('gulp install') + '\' again.'
		# )
		
		process.exit 1
	
	done!

gulp.task \install, [ \git-check ], ->
	bower.commands.install!.on \log, (data)-> $.util.log \bower, $.util.colors.cyan data.id, data.message

gulp.task \bump, require \gulp-cordova-bump

gulp.task \scss, (done)!->
	gulp.src 'src/scss/ionic.app.scss'
		.pipe $.plumber errorHandler: $.notify.onError "\n\n===== Error: SCSS =====\n\n<%= error.message %>\n\n"
		.pipe $.sass!
		.pipe gulp.dest \./www/dist/css/
		.pipe $.minifyCss keepSpecialComments: 0
		.pipe $.rename extname: \.min.css
		.pipe gulp.dest \./www/dist/css/
		.on \end, done

gulp.task \build, ->
	gulp.src 'src/js/**/*.js'
		.pipe $.plumber errorHandler: $.notify.onError "\n\n===== Error: Build =====\n\n<%= error.message %>\n\n"
		.pipe $.sourcemaps.init!
		.pipe $.ngAnnotate single_quotes: true
		.pipe $.concat \app.js
		.pipe $.uglify!
		.pipe $.sourcemaps.write!
		.pipe $.header 'window.VERSION = "<%= pkg.version %>";', { pkg : pkg }
		.pipe gulp.dest \www/dist

gulp.task \templates, ->
	gulp.src 'src/templates/**/*.html'
		.pipe $.angularTemplatecache \templates.js, { module: \starter, root: \templates/ }
		.pipe gulp.dest \www/dist

gulp.task \default, [ \scss, \templates, \build ]

gulp.task \watch, ->
	gulp.watch paths.scss		, [ \scss ]
	gulp.watch paths.js			, [ \build ]
	gulp.watch paths.templates	, [ \templates ]


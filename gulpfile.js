const
  gulp            = require('gulp')
  , rsync         = require('gulp-rsync')
;

gulp.task('default', () => {

});

gulp.task('rsync', () => {
  return gulp.src(['*.yml', '*.pub', './redis/*', './nginx/*'])
    .pipe(rsync({
      root: './',
      hostname: 'ansible',
      destination: '~/playbooks'
    }));
});

gulp.task('watch', () => {
  gulp.watch('./*.yml', ['rsync']);
});

const
  gulp            = require('gulp')
  , rsync         = require('gulp-rsync')
;

gulp.task('default', (done) => {
  done();
});

gulp.task('rsync', () => {
  return gulp.src(['*.yml', '*.pub', './redis/*', './nginx/*', './ssl/*', './ssh/*', './influxdb/*', './elk/*', './uriel/*'])
    .pipe(rsync({
      root: './',
      hostname: 'ansible',
      destination: '~/playbooks'
    }));
});

gulp.task('watch', () => {
  gulp.watch('./*.yml', gulp.series('rsync'));
});

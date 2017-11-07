const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('build', shell.task([
        'cp -fR _book/.git/ _book-git',
        'gitbook build', 
        'mv _book-git _book/.git',
        'cp -fR post-book/* _book/'
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'cd _book && git ci -am && git push github master']
  )
);

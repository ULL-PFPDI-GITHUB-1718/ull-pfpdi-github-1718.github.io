const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([          // gitbook destroys everything in the _book directory!
        'cp -fR _book/.git/ _book-git', // save git info
        'gitbook build',                // build HTML in _book
        'mv _book-git _book/.git',      // restore git info
        'cp -fR post-book/* _book/'     // restore README.md in _book (and other aditional files)
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'cd _book && git ci -am "new version" && git push git@github.com:ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io.git master']
  )
);

gulp.task('ghrepo', shell.task(
  'hub browse ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io'
));

gulp.task('apuntes', shell.task(
  'open https://ull-pfpdi-github-1718.github.io'
));

gulp.task("pre-install", shell.task([
      "npm i -g gitbook-cli",
]));

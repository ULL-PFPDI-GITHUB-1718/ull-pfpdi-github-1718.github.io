const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([         // gitbook destroys everything in the _book directory!
        'cp -fR _book/.git/ _book-git', // save git info
        'gitbook build',                // build HTML in _book
        'mv _book-git _book/.git',      // restore git info
        'cp -fR post-book/* _book/'     // restore README.md in _book (and other aditional files)
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'cd _book && ' +                 // change to the HTML directory
      'git ci -am "new version" && ' + // commit changes
      'git push git@github.com:ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io.git master' // push changes to github repo
    ]
  )
);

gulp.task('ghrepo', shell.task( // Open a browser in the github book repo
  'hub browse ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io'
));

gulp.task('sourcesrepo', shell.task( // Open a browser in the github book repo
  'hub browse ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io.sources'
));

gulp.task('apuntes', shell.task( // Open web browser in the github deployment of this book
  'open https://ull-pfpdi-github-1718.github.io'
));

gulp.task("pre-install", shell.task([ // global dependencies
      "npm i -g gitbook-cli",
			"brew install hub"
]));

gulp.task("push", shell.task([ // push to github not to gitbook
      'git ci -am "new version" && git push github master',
]));


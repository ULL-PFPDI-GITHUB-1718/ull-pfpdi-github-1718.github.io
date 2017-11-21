* [Set Up Git](https://help.github.com/articles/set-up-git/) GitHub Guide
* [Adding an existing project to GitHub using the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
* [Cloning a repository](https://help.github.com/articles/cloning-a-repository/)

* [Learning Path: Learning Git and GitHub can seem daunting but with this helpful list of training resources, you will be a Git-guru in no time.](https://services.github.com/on-demand/resources/)
* [Git Cheet Sheets](https://services.github.com/on-demand/resources/cheatsheets/)

### Mi Fichero de configuración de `git`: `~/.gitconfig`

```bash
[user]
	email = blahbkah.blah.@gmail.com
	name = Casiano Blah
[color]
	status = auto
	diff = auto
[merge]
	tool = vimdiff
[alias]
	lg = log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr %an)%Creset' --abbrev-commit --date=relative
	wipe = "!git reset --hard;git clean -fd"
	co = checkout
	ci = commit
  lsb = ls-tree --name-only -r 
[core]
	excludesfile = /Users/casiano/.gitignore_global
[difftool "sourcetree"]
	cmd = opendiff \"$LOCAL\" \"$REMOTE\"
	path = 
[mergetool "sourcetree"]
	cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
	trustExitCode = true
[credential]
  helper = osxkeychain
[push]
	default = simple
[filter "media"]
	clean = git-media-clean %f
	smudge = git-media-smudge %f
[filter "lfs"]
	clean = git lfs clean %f
	smudge = git lfs smudge %f
	required = true
[hub]
	protocol = https
```

### Mi fichero `~/.gitignore_global `

```
.DS_Store
*.swp
*.swo
*.tar.gz
coverage
```

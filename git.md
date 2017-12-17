### git tag [tag name]
### git tag
_shows all tag names_
### git tag [tag name]^
_refers to parent of tag_
### git revert HEAD [file name]
_cancel commits_
### git checkout [file name]
_abandons changes in file since last commit_
### git reset --hard <tag name>
### git tag -d <tag name>
_delete tag_
### git hist --max-count=1
_displays latest commit_
### git hist master --all
_displays all commits_
### git commit --amend -m "comment"
_ammend commit comment_

### mkdir [folder name]
_make folder_
### git mv [file name] [folder name]
_copy file into folder_

### ls -C .git
_displays files in project's root directory_
### ls -C .git/objects
_generates a directory list_
_The directory names are the first two letters of the sha1 hash of the object stored in git_
### ls -C .git/objects/[dir]
_display files that contain objects stored in git_
### cat .git/config
_display contents of project-specific configuration file_
### ls .git/refs
### ls .git/refs/heads
### ls .git/refs/tags
### cat .git/refs/tags/v1
### cat .git/HEAD
_references current branch_

### git checkout -b [branch name]
_creates new branch_
### git checkout [branch name]
_switch to existing branch_
### git merge master
_merge files/current branch into master branch_
### git hist --all
_displays all commits_

### git push -u origin [branch name]
_push changes in current branch into another branch on Github_
### git push origin master
_send changes back up to forked repo on Github_
### git push
_push changes in current branch into repo on Github_

### git remote add [remote name] [git repo name].git
_add location to push respo changes into_

---
id: skill-git
title: Git Knowledge
source: https://git-scm.com/docs
crawled: 2026-06-11
pages: 12

# Git 知识库
> 爬取来源: https://git-scm.com/docs | 12 页内容

## Git - Reference
来源: https://git-scm.com/docs
# Reference

Quick reference guide:Cheat Sheet

### Setup and Config

- git
- config
- help
- bugreport
- Credential helpers

### Getting and Creating Projects

- init
- clone

### Basic Snapshotting

- add
- status
- diff
- commit
- notes
- restore
- reset

### Branching and Merging

- branch
- checkout
- switch
- merge
- mergetool
- log
- stash
- tag
- worktree

### Sharing and Updating Projects

- fetch
- pull
- push
- remote
- submodule

### Inspection and Comparison

- show
- difftool
- range-diff
- shortlog
- describe

### Patching

- apply
- cherry-pick
- rebase
- revert

### Debugging

- bisect
- blame
- grep

### Guides

- gitattributes
- Command-line interface conventions
- Everyday Git
- Frequently Asked Questions (FAQ)
- Glossary
- Hooks
- gitignore
- gitmodules
- Revisions
- Submodules
- Tutorial
- Workflows
- All guides...

### Email

- imap-send
- format-patch
- send-email
- request-pull

### External Systems

- svn
- fast-import

### Administration

- clean
- fsck
- reflog
- filter-branch
- instaweb
- archive
- bundle

### Server Admin

- daemon
- update-server-info

### Plumbing Commands

- cat-file
- check-ignore
- checkout-index
- commit-tree
- count-objects
- diff-index
- for-each-ref
- hash-object
- ls-files
- ls-tree
- merge-base
- read-tree
- rev-list
- rev-parse
- show-ref
- symbolic-ref
- update-index
- update-ref
- verify-pack
- write-tree
## Git
来源: https://git-scm.com/

Git is afree and open sourcedistributed version control system designed to handle everything from small to
        very large projects with speed and efficiency.
Git islightning fastand has a huge ecosystem ofGUIs,hosting services, andcommand-line tools.
Pro Gitby Scott Chacon and Ben Straub is available toread online for free.
        Dead tree versions are available onAmazon.com.

#### Latest source release

## Git
来源: https://git-scm.com/about
# About Git
## Git is fast

Git was built to work on the Linux kernel, meaning that it was built to handle
repositories with tens of millions of lines of code from the start.
Speed and performance has always been a primary design goal of Git.
Git also stores repository history efficiently. As of 2025, the current version
of the Linux kernel's source code is 1.7 GB.
Git stores the full history of the Linux project (1.4 million commits) in only 5.5 GB.

## Git is widely used

According to the2022 Stack Overflow developer survey,
96% of professional developers use Git.

## Git has a huge ecosystem of tools

The core Git project is just a command-line tool, but Git exploded in popularity
in the early 2010s thanks toGit hosting serviceslike GitLab, GitHub, and more.
Since Git was created, manyGUIs, editor integrations,
andcommand line toolshave been built to make working with Git more convenient.
You favorite developer tools might already have a built-in Git integration.

## Free and Open Source

Git is released under theGNU General Public License version 2.0, which is anopen source license.
  The Git project chose to use GPLv2 to guarantee your freedom to
  share and change free software---to make sure the software is
  free for all its users.
However, we do restrict the use of the term "Git" and thelogosto avoid confusion. Please see ourtrademarkpolicy for details.
## Git
来源: https://git-scm.com/about/trademark
## GIT TRADEMARK POLICY
### 1 Purpose

The Git Project is a member project of Software Freedom
  Conservancy ("Conservancy"). Conservancy holds rights in the Marks
  on behalf of the Git Project in accordance with its non-
  profit charitable mission.
Conservancy has adopted this Policy to protect the Marks (as
  defined below) and to make sure that the identity of Git software
  and its free and open source nature is clear to everyone. By
  using this Policy, the Git Project can spread the use of the
  Git software while making sure that the Marks are protected in a
  way that's consistent with U.S. trademark law (U.S. Registration 4680534).  This Policy is
  written to allow all clear and appropriate use of the Marks while
  disapproving use of the Marks in ways that could confuse users as
  to where the software came from, or that implies an otherwise non-
  existent association with the Git Project. By adhering to this
  Policy, you help to promote to the public the freedom to use and
  develop the Git software.
Throughout this Policy, the word "Marks" refers to the following:
- The literal mark "Git"
The literal mark "Git"
- The logos and graphic marks displayed and available for
  download athttps://git-scm.com/community/logos
The logos and graphic marks displayed and available for
- The slogan "the stupid content tracker"
The slogan "the stupid content tracker"
This Policy is only concerned with the Marks associated with the Git
  Project, and does not address any copyrights associated with the
  Git software.

### 2 Guidelines for using the Marks
#### 2.1 Trademark symbol on first mention

The first prominent mention of a Mark should be immediately
  followed by a symbol for, as applicable, a registered trademark
  (®) or an unregistered trademark (™). For example: "Git™".
This requirement is waived in all contexts where such marks are
  not required to protect the intellectual property rights associated
  with the Marks, such as email, online discussion, and academic papers.
  We encourage the use of the applicable symbols whenever possible, but
  recognize that many users will omit them in non-commercial and informal
  contexts.
You can use "Git and the Git logo are either registered trademarks
  or trademarks of Software Freedom Conservancy, Inc., corporate home of
  the Git Project, in the United States and/or other countries." when
  you need to mention "Git" in e.g. list of trademarks held by other
  people.

#### 2.2 Use of the Marks without written permission

You may use the Marks without prior written permission (subject
  to the other sections):
- To refer to the Git software in substantially unmodified
  form. "Substantially unmodified" means built from the source
  code provided by the Git Project, possibly with minor
  modifications including but not limited to: the enabling or
  disabling of certain features by default, translations into
  other languages, changes required for compatibility with a
  particular operating system distribution, or the inclusion of
  bug-fix patches.
To refer to the Git software in substantially unmodified
- To identify the Git software as a distinct component of a
  software offering.
To identify the Git software as a distinct component of a
- To factually refer to the Git Project itself, its products,
  or its protocols.
To factually refer to the Git Project itself, its products,
In addition, you may use the Marks to refer to products,
  services, or communities outside of the Git software and Git
  Project without written permission in the following contexts:
- When referring to Git software that is not substantially
  unmodified, to say that such software is a "derivative of"
  or "based on" Git.
- When referring to a third-party software product and/or service that
  is interoperable with the Git software, in the format "[Product Name]
  for Git" -- provided that such use otherwise complies with the rest of
  this Policy.
We do not charge a fee for a license to use the Marks
  in these contexts. However, we do of course welcome donations.
  If you're interested in donating to the Git Project, care of
  Conservancy, visithttps://git-scm.com/sfc.
  Conservancy is a United States 501(c)(3) public charity.

#### 2.3 Prohibited usages of the Marks

You may not use the Marks in the following ways:
- In any way likely to cause confusion as to the identity of the
  Git Project, the provenance of its software, or the
  software's license.
In any way likely to cause confusion as to the identity of the
- In any way that indicates a greater degree of association
  between you and the Git Project than actually exists.
In any way that indicates a greater degree of association
- In any way that implies a designated successor to Git (e.g.,
  "Git++" is not permitted).
In any way that implies a designated successor to Git (e.g.,
- In any way that indicates that Git favors one distribution,
  platform, product, etc. over another except where explicitly
  indicated in writing by Conservancy.
In any way that indicates that Git favors one distribution,
- In any other way that dilutes or otherwise infringes upon the
  trademark rights of Conservancy and the Git Project in the
  Marks.
In any other way that dilutes or otherwise infringes upon the
- To refer to the Git software, modified by a third party to the point of
  inoperability with Git software in substantially unmodified form.
To refer to the Git software, modified by a third party to the point of
In addition, you may not use any of the Marks as a syllable in a new word
  or as part of a portmanteau (e.g., "Gitalicious", "Gitpedia") used as a
  mark for a third-party product or service. For the avoidance of doubt, this
  provision applies even to third-party marks that use the Marks as a syllable
  or as part of a portmanteau to refer to a product or service's use of Git
  code.
Please be aware that GitHub and GitLab are exceptions to this Policy
  because they are subject to explicit licensing arrangements that pre-date, and
  thus take precedence, over this Policy.

#### 2.4 Limitations to this Policy

This Policy does not confer any rights to use the trademarks
  "Software Freedom Conservancy," "Conservancy," or to use any other
  trademarks other than the Marks listed in Section 1. This Policy
  does not authorize you to act as an agent for Conservancy, enter
  into any agreement on behalf of or otherwise create any
  liability for the Git Project or Conservancy.

#### 2.5 Use of the Marks in merchandising

You may not create and/or sell merchandise bearing any of the Marks. If
  you are interested in using creating and/or selling merchandise bearing any of
  the Marks, please send proofs of your designs to us atTRADEMARK@SFCONSERVANCY.ORG.

### 3 Rights reserved by Conservancy

Conservancy reserves the sole right to:
- Determine compliance with this Policy.
Determine compliance with this Policy.
- Modify this Policy in ways consistent with its mission of
  protecting the public.
Modify this Policy in ways consistent with its mission of
- Grant exceptions to this Policy, of any kind and for any reason
  whatsoever, other clauses notwithstanding.
Grant exceptions to this Policy, of any kind and for any reason

### 4 Questions

This Policy is designed to keep the Marks safe in order to
  protect this software's reputation, earned by the contributions
  of the Git Project to the free and open source software
  community and to the public at large. If you see any use of the Marks
  anywhere that you think violates this Policy or otherwise goes against the
  spirit of the Git Project and Conservancy's mission, please bring
  it to Conservancy's attention by contacting us atTRADEMARK@SFCONSERVANCY.ORG.
If you have questions about using the Marks, or if you think you
  should be able to use the Marks for any purpose not allowed by
  this Policy and would like permission for that use, please contact
  Conservancy by emailingTRADEMARK@SFCONSERVANCY.ORGor by writing to Git Project c/o Software Freedom Conservancy, 137
  Montague St.  Ste 380, Brooklyn, NY 11201-3548.
## Git - Learn
来源: https://git-scm.com/learn
# Learn
### Pro Git Book

The entire Pro Git book written
      by Scott Chacon and Ben Straub is available to read online for free.
      Print copies are available onAmazon.com.

### Videos

Short videos introducing Git for total beginners.
- What is Version Control?(05:59)
- What is Git?(08:15)
- Get Going with Git(04:26)
- Quick Wins with Git(05:06)

### Cheat Sheet

The most common Git commands, with diagrams illustrating the difference
      between merge and rebase.

### External Links

Ever-evolving collection of tutorials, books, videos, and other Git resources from the community.
## Git Cheat Sheet
来源: https://git-scm.com/cheat-sheet
# Git Cheat Sheet
## Getting Started
### Start a new repo:

```
git init

### Clone an existing repo:

git clone <url>

## Prepare to Commit
### Add untracked file or unstaged changes:

git add <file>

### Add all untracked files and unstaged changes:

git add .

### Choose which parts of a file to stage:

git add -p

### Move file:

git mv <old> <new>

### Delete file:

git rm <file>

### Tell Git to forget about a file without deleting it:

git rm --cached <file>

### Unstage one file:

git reset <file>

### Unstage everything:

git reset

### Check what you added:

git status

## Make Commits
### Make a commit (and open text editor to write message):

git commit

### Make a commit:

git commit -m 'message'

### Commit all unstaged changes:

git commit -am 'message'

## Move Between Branches
### Switch branches:

git switch <name>
git checkout <name>

### Create a branch:

git switch -c <name>
git checkout -b <name>

### List branches:

git branch

### List branches by most recently committed to:

git branch--sort=-committerdate

### Delete a branch:

git branch -d <name>

### Force delete a branch:
## Diff Staged/Unstaged Changes
### Diff all staged and unstaged changes:

git diff HEAD

### Diff just staged changes:

git diff --staged

### Diff just unstaged changes:

git diff

## Diff Commits
### Show diff between a commit and its parent:

git show <commit>

### Diff two commits:

git diff <commit> <commit>

### Diff one file since a commit:

git diff <commit> <file>

### Show a summary of a diff:

git diff <commit> --stat
git show <commit> --stat

## Ways to refer to a commit

Every time we say<commit>, you can use any of these:
<commit>
a branchmaina tagv0.1a commit ID3e887aba remote branchorigin/maincurrent commitHEAD3 commits agoHEAD^^^ or HEAD~3
a branch
main
a tag
v0.1
a commit ID
3e887ab
a remote branch
origin/main
current commit
HEAD
3 commits ago
HEAD^^^ or HEAD~3

## Discard Your Changes
### Delete unstaged changes to one file:

git restore <file>
git checkout <file>

### Delete all staged and unstaged changes to one file:

git restore --staged --worktree <file>
git checkout HEAD <file>

### Delete all staged and unstaged changes:

git reset --hard

### Delete untracked files:

git clean

### 'Stash' all staged and unstaged changes:

git stash

## Edit History
### "Undo" the most recent commit (keep your working directory the same):

git reset HEAD^

### Squash the last 5 commits into one:

git rebase -i HEAD~6
Then change "pick" to "fixup" for any commit you want to combine with the previous one

### Undo a failed rebase:

git reflog BRANCHNAME
Then manually find the right commit ID in the reflog, then run:
git reset --hard <commit>

### Change a commit message (or add a file you forgot):

git commit --amend

## Code Archaeology
### Look at a branch's history:

git log main
git log --graph main
git log --oneline

### Show every commit that modified a file:

git log <file>

### Show every commit that modified a file, including before it was renamed:

git log --follow <file>

### Find every commit that added or removed some text:

git log -G banana

### Show who last changed each line of a file:

git blame <file>

## Combine Diverged Branches
### Combine with rebase:

git switch banana
git rebase main

### Combine with merge:

git switch main
git merge banana

### Combine with squash merge:

git merge --squash banana

### Bring a branch up to date with another branch (aka "fast-forward merge"):
### Copy one commit onto the current branch:

git cherry-pick <commit>

## Restore an Old File
### Get the version of a file from another commit:

git checkout <commit> <file>
git restore <file> --source <commit>

## Add a Remote

git remote add <name> <url>

## Push Your Changes
### Push themainbranch to the remoteorigin:

origin
git push origin main

### Push the current branch to its remote "tracking branch":

git push

### Push a branch that you've never pushed before:

git push -u origin <name>

### Force push:

git push --force-with-lease

### Push tags:

git push --tags

## Pull Changes
### Fetch changes (but don't change any of your local branches):

git fetch origin main

### Fetch changes and then rebase your current branch:

git pull --rebase

### Fetch changes and then merge them into your current branch:

git pull origin main
git pull

## Configure Git
### Set a config option:

git config user.name 'Your Name'

### Set option globally:

git config --global ...

### Add an alias:

git config alias.st status

### See all possible config options:

man git-config

## Important Files
### Local git config:

.git/config

### Global git config:

~/.gitconfig

### List of files to ignore:

.gitignore
## Git - Videos
来源: https://git-scm.com/videos
# Videos

- What is Git?Length:08:15

#### What is Git?

Length:08:15
- Quick Wins with GitLength:05:06

#### Quick Wins with Git

Length:05:06
- What is Version Control?Length:05:59

#### What is Version Control?

Length:05:59
- Get Going with GitLength:04:26

#### Get Going with Git

Length:04:26
## Git - External Links
来源: https://git-scm.com/doc/ext
# External Links
## Tutorials
### Short & Sweet

- Official Git TutorialThe official gittutorial man page is a good place to start.

#### Official Git Tutorial

The official gittutorial man page is a good place to start.
- Git ImmersionA guided tour that walks through the fundamentals of Git.

#### Git Immersion

A guided tour that walks through the fundamentals of Git.
- Everyday GitLearn the basics with 20 of the most common commands.

#### Everyday Git

Learn the basics with 20 of the most common commands.
- Backlog Git TutorialIt includes an introduction for complete beginners as well as hands-on tutorials for intermediate learners.
            (Japanese/Korean/Simplified Chinese/Traditional Chinese/Vietnamese)

#### Backlog Git Tutorial

It includes an introduction for complete beginners as well as hands-on tutorials for intermediate learners.

### Diving Deeper

- Ry’s Git
            TutorialA hands-on introduction to the entire Git porcelain.

#### Ry’s Git
            Tutorial

A hands-on introduction to the entire Git porcelain.
- Git for Computer ScientistsA quick introduction to Git internals for people who aren't scared by words like Directed Acyclic Graph.

#### Git for Computer Scientists

A quick introduction to Git internals for people who aren't scared by words like Directed Acyclic Graph.
- Git MagicAn alternative book with the sourceonline.

#### Git Magic

An alternative book with the sourceonline.
- Git for Data ScienceBest practices and typical Git workflows for data science.

#### Git for Data Science

Best practices and typical Git workflows for data science.
- Git for DesignersNo knowledge of version control? No problem.

#### Git for Designers

No knowledge of version control? No problem.
- git-drawgit-draw is a small tool that draws nearly the full content of a tiny git repository as a graph. It helps people with an engineering background learning Git's internals.

#### git-draw

git-draw is a small tool that draws nearly the full content of a tiny git repository as a graph. It helps people with an engineering background learning Git's internals.
- GitHub DocsGuides on a variety of Git and GitHub related topics.

#### GitHub Docs

Guides on a variety of Git and GitHub related topics.

## Books

- Pro GitBy Scott Chacon and Ben Straub

#### Pro Git

By Scott Chacon and Ben Straub
- Git in PracticeBy Mike McQuaid

#### Git in Practice

By Mike McQuaid
- Git in the TrenchesBy Peter Savage

#### Git in the Trenches

By Peter Savage
- Git for TeamsBy Emma Jane Hogbin Westby

#### Git for Teams

By Emma Jane Hogbin Westby
- Learning Git: A Hands-On and Visual Guide to the Basics of GitBy Anna Skoulikari

#### Learning Git: A Hands-On and Visual Guide to the Basics of Git

By Anna Skoulikari
- Version Control with Git, 2nd ed.By Jon Loeliger & Matthew McCullough

#### Version Control with Git, 2nd ed.

By Jon Loeliger & Matthew McCullough
- Pragmatic Guide to GitBy Travis Swicegood

#### Pragmatic Guide to Git

By Travis Swicegood
- Pragmatic Version Control Using GitBy Travis Swicegood

#### Pragmatic Version Control Using Git

- Git Internals Peepcode PDFBy Scott Chacon

#### Git Internals Peepcode PDF

By Scott Chacon
- Learn Git in a Month of LunchesBy Rick Umali

#### Learn Git in a Month of Lunches

By Rick Umali
- Beginning Git and GitHubBy Mariot Tsitoara

#### Beginning Git and GitHub

By Mariot Tsitoara
- Boost Your Git DXBy Adam Johnson

#### Boost Your Git DX

By Adam Johnson

## Videos

- Tech Talk: Linus Torvalds on GitLinus Torvalds visits Google to share his thoughts on Git, the SCM system he created.

#### Tech Talk: Linus Torvalds on Git

Linus Torvalds visits Google to share his thoughts on Git, the SCM system he created.
- Introduction to Git: Scott ChaconThis talk introduces the Git Version Control System by looking at what Git is doing when you run the commands you need to do basic version control with it.

#### Introduction to Git: Scott Chacon

This talk introduces the Git Version Control System by looking at what Git is doing when you run the commands you need to do basic version control with it.

## Courses

- Versioned and reproducible storage of code and dataIn this course you will learn how to create reproducible research results and write source code efficiently together.

#### Versioned and reproducible storage of code and data

In this course you will learn how to create reproducible research results and write source code efficiently together.
- Versioned and reproducible storage of code and dataThree-day course on Git in data science

#### Versioned and reproducible storage of code and data

Three-day course on Git in data science
## Git - Tools
来源: https://git-scm.com/tools
# Tools

The community has built a huge number of tools to make it easier to use Git.
    While you can use Git on its own, most Git users use some of these extra tools.
    There are editor integrations, GUIs, tools for resolving merge conflicts,
    hosting services, and much more.

### Command Line Tools

Tools to view and manipulate your Git history

### GUIs

Graphical user interfaces and editor integrations

### Hosting

Git repository hosting
## Git - Command Line Tools
来源: https://git-scm.com/tools/command-line
# Command Line Tools
### TUIs

- lazygit: simple terminal UI for git commands
- tig: ncurses-based text-mode interface for git
- forgit: A utility tool powered by fzf for using git interactively
- gitu: A TUI Git client inspired by Magit
- gitui: Blazing fast terminal-ui for Git written in Rust

### Manage Git history

- git-absorb: git commit --fixup, but automatic
- git-filter-repo:  Quickly rewrite git repository history (filter-branch replacement)
- git-imerge: Incremental merge for Git
- mergiraf: A syntax-aware git merge driver for a growing collection of programming languages and file formats.
- git-branchless: Branchless workflow for Git

### Shell prompt integrations

- Starship: The minimal, blazing-fast, and infinitely customizable prompt for any shell!
- git-prompt.sh: Bash prompt that comes with Git

### Manage large files

- git-annex
- git-lfs

### Diff tools

- delta: A syntax highlighting pager for Git diffs
- difftastic: A structural diff that understands syntax
- diff-so-fancy: diff-so-fancy strives to make your diffs human readable instead of machine readable

### Manage hooks

- pre-commit:  A framework for managing and maintaining multi-language pre-commit hooks.
- lefthook: A fast Git hooks manager written in Go

### Collections of Git tools

- git-extras: Git repo summary, repl, changelog population, author commit percentages and more
- git-toolbelt: A suite of useful Git commands that aid with scripting or every day command line usage

### Other

- mob.sh: Fast git handover for remote pair/mob programming.
- git-secrets: Prevents you from committing secrets and credentials into git repositories
- Commitizen: Create committing rules for projects, auto bump versions and auto changelog generation
- git-town: Additional Git commands that automate the creation, synchronization, shipping, and cleanup of Git branches
## Git - GUI Clients
来源: https://git-scm.com/tools/guis
# GUI Clients

Git comes with built-in GUI tools for committing (git-gui) and browsing (gitk), but there are several third-party tools for users looking for platform-specific experience.
If you want to add another GUI tool to this list, justfollow the instructions.
AllWindowsMacLinuxAndroidiOS0LinuxGUIs are shown below ↓
- GitHub DesktopPlatforms:Mac, WindowsPrice:FreeLicense:MIT

#### GitHub Desktop

Platforms:Mac, WindowsPrice:FreeLicense:MIT
- SourceTreePlatforms:Mac, WindowsPrice:FreeLicense:Proprietary

#### SourceTree

Platforms:Mac, WindowsPrice:FreeLicense:Proprietary
- GitKraken DesktopPlatforms:Linux, Mac, WindowsPrice:Free / $48+/user annuallyLicense:Proprietary

#### GitKraken Desktop

Platforms:Linux, Mac, WindowsPrice:Free / $48+/user annuallyLicense:Proprietary
- TortoiseGitPlatforms:WindowsPrice:FreeLicense:GNU GPL

#### TortoiseGit

Platforms:WindowsPrice:FreeLicense:GNU GPL
- MagitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:GNU GPL

#### Magit

Platforms:Linux, Mac, WindowsPrice:FreeLicense:GNU GPL
- Git ExtensionsPlatforms:WindowsPrice:FreeLicense:GNU GPL

#### Git Extensions

- SmartGitPlatforms:Linux, Mac, WindowsPrice:Free for non-commercial use / $59/user annuallyLicense:Proprietary

#### SmartGit

Platforms:Linux, Mac, WindowsPrice:Free for non-commercial use / $59/user annuallyLicense:Proprietary
- TowerPlatforms:Mac, WindowsPrice:$69+/user annually (Free 30-day trial)License:Proprietary

#### Tower

Platforms:Mac, WindowsPrice:$69+/user annually (Free 30-day trial)License:Proprietary
- MeGit (based on EGit)Platforms:Linux, Mac, WindowsPrice:FreeLicense:EPL2.0

#### MeGit (based on EGit)

Platforms:Linux, Mac, WindowsPrice:FreeLicense:EPL2.0
- Sublime MergePlatforms:Linux, Mac, WindowsPrice:$99/user / $75/user annually (Free evaluation)License:Proprietary

#### Sublime Merge

Platforms:Linux, Mac, WindowsPrice:$99/user / $75/user annually (Free evaluation)License:Proprietary
- GitUpPlatforms:MacPrice:FreeLicense:GNU GPL

#### GitUp

Platforms:MacPrice:FreeLicense:GNU GPL
- ForkPlatforms:Mac, WindowsPrice:$59.99 (Free evaluation)License:Proprietary

#### Fork

Platforms:Mac, WindowsPrice:$59.99 (Free evaluation)License:Proprietary
- GlintPlatforms:Linux, Mac, WindowsPrice:Free / $35/user annuallyLicense:Proprietary

#### Glint

Platforms:Linux, Mac, WindowsPrice:Free / $35/user annuallyLicense:Proprietary
- gitgPlatforms:Linux, WindowsPrice:FreeLicense:GNU GPL

#### gitg

Platforms:Linux, WindowsPrice:FreeLicense:GNU GPL
- ungitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### ungit

Platforms:Linux, Mac, WindowsPrice:FreeLicense:MIT
- FugitivePlatforms:Linux, Mac, WindowsPrice:FreeLicense:Vim

#### Fugitive

Platforms:Linux, Mac, WindowsPrice:FreeLicense:Vim
- GitAhead (no longer under active development)Platforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### GitAhead (no longer under active development)

- LazyGitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### LazyGit

- tigPlatforms:Linux, Mac, WindowsPrice:FreeLicense:GPL-2.0

#### tig

Platforms:Linux, Mac, WindowsPrice:FreeLicense:GPL-2.0
- GuitarPlatforms:Linux, Mac, WindowsPrice:FreeLicense:GNU GPL

#### Guitar

- GitButlerPlatforms:Linux, Mac, WindowsPrice:FreeLicense:FSL-1.1-MIT

#### GitButler

Platforms:Linux, Mac, WindowsPrice:FreeLicense:FSL-1.1-MIT
- AnchorpointPlatforms:Mac, WindowsPrice:Free / 20€License:Proprietary

#### Anchorpoint

Platforms:Mac, WindowsPrice:Free / 20€License:Proprietary
- Working CopyPlatforms:iOSPrice:Free / $19.99License:Proprietary

#### Working Copy

Platforms:iOSPrice:Free / $19.99License:Proprietary
- GitfoxPlatforms:MacPrice:€39,99/user annually / €79,99 (Free 30-day trial)License:Proprietary

#### Gitfox

Platforms:MacPrice:€39,99/user annually / €79,99 (Free 30-day trial)License:Proprietary
- git-colaPlatforms:Linux, Mac, WindowsPrice:FreeLicense:GNU GPL

#### git-cola

- GitUIPlatforms:Linux, Mac, WindowsPrice:Free, but donations welcomeLicense:MIT

#### GitUI

Platforms:Linux, Mac, WindowsPrice:Free, but donations welcomeLicense:MIT
- giggle (no longer under active development)Platforms:LinuxPrice:FreeLicense:GNU GPL

#### giggle (no longer under active development)

Platforms:LinuxPrice:FreeLicense:GNU GPL
- Aurees (no longer under active development)Platforms:Linux, Mac, WindowsPrice:FreeLicense:Proprietary

#### Aurees (no longer under active development)

Platforms:Linux, Mac, WindowsPrice:FreeLicense:Proprietary
- MeldPlatforms:Linux, WindowsPrice:FreeLicense:GPLv2 or later

#### Meld

Platforms:Linux, WindowsPrice:FreeLicense:GPLv2 or later
- SnailGitPlatforms:MacPrice:Free (limited) / $9.99License:Proprietary

#### SnailGit

Platforms:MacPrice:Free (limited) / $9.99License:Proprietary
- RepoZPlatforms:Mac, WindowsPrice:FreeLicense:MIT

#### RepoZ

- CongPlatforms:WindowsPrice:FreeLicense:Proprietary

#### Cong

Platforms:WindowsPrice:FreeLicense:Proprietary
- GitDrivePlatforms:iOSPrice:Free / $6.99License:Proprietary

#### GitDrive

Platforms:iOSPrice:Free / $6.99License:Proprietary
- GitFiendPlatforms:Linux, Mac, WindowsPrice:FreeLicense:Proprietary

#### GitFiend

- GitAtomicPlatforms:WindowsPrice:$17.99+/user annually (Free 30-day trial)License:Proprietary

#### GitAtomic

Platforms:WindowsPrice:$17.99+/user annually (Free 30-day trial)License:Proprietary
- NitroGitPlatforms:WindowsPrice:Free for non-commercial use / 20€/userLicense:Proprietary

#### NitroGit

Platforms:WindowsPrice:Free for non-commercial use / 20€/userLicense:Proprietary
- GitFinderPlatforms:MacPrice:Free (limited) / $29.95 (Free 30-day trial)License:Proprietary

#### GitFinder

Platforms:MacPrice:Free (limited) / $29.95 (Free 30-day trial)License:Proprietary
- VershdPlatforms:Linux, Mac, WindowsPrice:Free for non-commercial use / $37/user annuallyLicense:Proprietary

#### Vershd

Platforms:Linux, Mac, WindowsPrice:Free for non-commercial use / $37/user annuallyLicense:Proprietary
- GitVinePlatforms:Linux, Mac, WindowsPrice:FreeLicense:Proprietary

#### GitVine

- PolyGitPlatforms:iOSPrice:Free (limited) / $11.99/year / $39.99License:Proprietary

#### PolyGit

Platforms:iOSPrice:Free (limited) / $11.99/year / $39.99License:Proprietary
- GitguiPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### Gitgui

- GittyupPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### Gittyup

- KommitPlatforms:LinuxPrice:FreeLicense:GNU GPL

#### Kommit

- GitViewerPlatforms:iOS, MacPrice:Free / $6.99 (Free 7-day trial)License:Proprietary

#### GitViewer

Platforms:iOS, MacPrice:Free / $6.99 (Free 7-day trial)License:Proprietary
- CommandGitPlatforms:WindowsPrice:$5.99/MO (Free 14-day trial)License:Proprietary

#### CommandGit

Platforms:WindowsPrice:$5.99/MO (Free 14-day trial)License:Proprietary
- gitonicPlatforms:Linux, Mac, WindowsPrice:FreeLicense:AGPL-3.0-or-later

#### gitonic

Platforms:Linux, Mac, WindowsPrice:FreeLicense:AGPL-3.0-or-later
- GitnuroPlatforms:Linux, Mac, WindowsPrice:FreeLicense:GNU GPL

#### Gitnuro

- GitBreezePlatforms:Linux, Mac, WindowsPrice:FreeLicense:Proprietary

#### GitBreeze

- Pragma-gitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### Pragma-git

- GitKraken CLIPlatforms:Linux, Mac, WindowsPrice:Free / $48.00+/user annuallyLicense:Proprietary

#### GitKraken CLI

Platforms:Linux, Mac, WindowsPrice:Free / $48.00+/user annuallyLicense:Proprietary
- SourceGitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:MIT

#### SourceGit

- RelaGitPlatforms:Linux, Mac, WindowsPrice:FreeLicense:LGPL-3.0-or-later

#### RelaGit

Platforms:Linux, Mac, WindowsPrice:FreeLicense:LGPL-3.0-or-later
- Puppy GitPlatforms:AndroidPrice:FreeLicense:GPLv3

#### Puppy Git

Platforms:AndroidPrice:FreeLicense:GPLv3
- RetconPlatforms:MacPrice:$49.99/user annually (Free 14-day trial)License:Proprietary

#### Retcon

Platforms:MacPrice:$49.99/user annually (Free 14-day trial)License:Proprietary
- ChangesPlatforms:MacPrice:FreeLicense:MIT

#### Changes

Platforms:MacPrice:FreeLicense:MIT
There are other great GUI tools available as well. Have a look at the list ofinterfaces, frontends and toolsin the Git Wiki.
## Community - Git
来源: https://git-scm.com/community
# Community
## Mailing List

General questions or comments for the Git community can be sent to the mailing list by using the email addressgit@vger.kernel.org.
If you wish to report any possible bug for Git, please use this mailing list as well.
You do not need to subscribe: you will be Cc'd in replies. Please keep the Cc list intact when replying (use "Reply to all"). Greylisting may delay your first post for a few hours.  Note also that the list only acceptsplain-text email; please disable HTML in your outgoing messages.
By subscribing (clickhere), you can make sure you're not missing follow-up discussions and you can also learn about other development in the community.  The listarchivecan be found on lore.kernel.org.
Windows-specific questions can also be asked atGit for Windows' discussions(if in doubt whether your question is Windows-specific, or if you prefer mailing lists or want to avoid GitHub, just use the generalGit mailing list). Please submit Windows-specific bugs toGit for Windows' bug tracker.
If you're a downstream packager of Git, consider joining theGit packagers mailing listfor low-volume announcements from the developers, as well as other discussion related to packaging & porting Git.

## Bug Reporting

Bugs in git can be reported directly to the mailing list (see above for
    details). Note that you do not need to subscribe to the list to send
    to it. You can help us out by attempting to reproduce the bug in the latest
    released version of git, or if you're willing to build git from source, thenextbranch.
    Sometimes an attempted fix may be pending in this branch, in which case
    your feedback as to whether the fix worked for you will be appreciated.
If you are using git 2.27.0 or later, you can rungit bugreportin the repository
    where you observed the bug,
    which generates a template to guide you through writing a useful bug
    report and gathers some diagnostic information about your
    environment.
Bugs related to this website can be reported at itsissue tracker.
    Bugs related to the content of the "Pro Git" book can be reported at itsissue tracker.
If you are new to submitting bugs, you might findthis
      guidehelpful for producing useful bug reports.

## Reporting Security Issues

Issues which are security relevant should be disclosed privately to
    theGit Securitymailing list.

## IRC Channel

If the manpages and this book aren’t enough and you need in-person help, you can try the#gitchannel on theLibera ChatIRC server (irc.libera.chat). These channels are regularly filled with hundreds of people who are all very knowledgeable about Git and are often willing to help.
    The#git-develchannel welcomes Git development discussion, and might be able to help you contribute to Git.
If you need specific help about one of the for-profit Git hosting sites, you might try their own IRC channels (such as#githubor#gitlab) on the same IRC server.

## Discord Server

TheGit Community Discord Serveralso has many knowledgeable and helpful people. Additionally, it provides a space to be able to voice chat about patches, designs, or anything else Git related.

## Logos

VariousGit logosin PNG (bitmap) and EPS (vector) formats are available for use in online and print projects.

## Newsletter

There is a monthly community newsletter called"Git Rev News", withits archiveandits latest edition. Information on how to subscribe can be found on thededicated webpage.

## Contributing to Git

TheDocumentation directoryin the Git source code has several files of interest to developers who are looking to help contribute. After reading thecoding guidelinesandcode of conduct, you can learnhow to submit patches. If you are just starting out, you can read theMy First Contribution tutorial. For those looking to get more deeply involved, there is ahowto for Git maintainers.
TheGit Developer Pageshave aHacking Git pagewhich lists useful development resources. They also haveinformationfor people applying to work on Git as part of programs likeOutreachyor theGoogle Summer of Code.
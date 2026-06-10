---
id: skill-linux
title: Linux Knowledge
source: https://linuxcommand.org/
crawled: 2026-06-11
pages: 15

# Linux 知识库


> 爬取来源: https://linuxcommand.org/ | 15 页内容

## LinuxCommand.org: Learn The Linux Command Line. Write Shell Scripts.


来源: https://linuxcommand.org/

- Home
- Learning the Shell
- Writing Shell Scripts
- Resources
- Books
- Adventures
- Blog

# Now what?

You have Linux installed and running. The GUI is working fine, but you are
getting tired of changing your desktop themes. You keep seeing this "terminal"
thing.Don't worry, we'll show youwhat to do.
Like the site? You'll love the book!The Linux Command Lineby William Shotts
© 2000-2026,William E. Shotts, Jr.Verbatim copying and distribution of this entire article is
permitted in any medium, provided this copyright notice is preserved.
Linux® is a registered trademark of Linus Torvalds.

## LinuxCommand.org: Learn The Linux Command Line. Write Shell Scripts.


来源: https://linuxcommand.org/index.php

# Now what?

## LinuxCommand.org: Learning the shell.


来源: https://linuxcommand.org/lc3_learning_the_shell.php

# Why Bother?

Why do you need to learn the command line anyway? Well, let me tell you a
story. Many years ago we had a problem where I worked. There was a shared drive
on one of our file servers that kept getting full. I won't mention that this
legacy operating system did not support user quotas; that's another story. But
the server kept getting full and it stopped people from working. One of our
software engineers spent a couple of hours writing a C++ program that would
look through all the user's directories and add up the space they were using
and make a listing of the results. Since I was forced to use the legacy OS
while I was on the job, I installeda
  Linux-like command line environment for it.When I heard about the
  problem, I realized I could perform this task with this
  single line:
```
du -s * | sort -nr > $HOME/user_space_report.txt
Graphical user interfaces (GUIs) are helpful for many tasks, but they are
not good for all tasks. I have long felt that most computers today are not
powered by electricity. They instead seem to be powered by the "pumping" motion
of the mouse. Computers were supposed to free us from manual labor, but how
many times have you performed some task you felt sure the computer should be
able to do but you ended up doing the work yourself by tediously working the
mouse?  Pointing and clicking, pointing and clicking.
I once heard an author say that when you are a child you use a computer by
looking at the pictures. When you grow up, you learn to read and write. Welcome
to Computer Literacy 101. Now let's get to work.

## Contents

- What is "the Shell"?
- Navigation
- Looking Around
- A Guided Tour
- Manipulating Files
- Working with Commands
- I/O Redirection
- Expansion
- Permissions
- Job Control

## LinuxCommand.org: Writing shell scripts.


来源: https://linuxcommand.org/lc3_writing_shell_scripts.php

# Here is Where the Fun Begins

With the thousands of commands available to the command line user, how can
we remember them all?  The answer is, we don't. The real power of the computer
is its ability to do the work for us. To get it to do that, we use the power of
the shell to automate things. We writeshell scripts.

## What are Shell Scripts?

In the simplest terms, a shell script is a file containing a series of commands. The shell
reads this file and carries out the commands as though they have been entered directly on
the command line.
The shell is somewhat unique, in that it is both a powerful command line interface to the
system and a scripting language interpreter. As we will see, most of the things that can be
done on the command line can be done in scripts, and most of the things that can be done
in scripts can be done on the command line.
We have already covered many shell features, but we have focused on those
features most often used directly on the command line. The shell also provides
a set of features usually (but not always) used when writing programs.
Scripts unlock the power of our Linux machine. So let's have some fun!

## Contents

- Writing Our First
		Script and Getting It to Work

- Editing the Scripts We Already Have
- Here Scripts
- Variables
- Command Substitution and Constants
- Shell Functions
- Some Real Work
- Flow Control - Part
		1

- Stay Out of Trouble
- Keyboard Input and
		Arithmetic
		2

- Positional
		Parameters

- Flow Control - Part 3
- Errors and Signals and Traps (Oh My!) - Part 1
- Errors and Signals and Traps (Oh My!) - Part 2

## LinuxCommand.org: Resources


来源: https://linuxcommand.org/lc3_resources.php

## Manual Pages

Here is documentation for many of the commands mentioned on
LinuxCommand.org, as well as others. These include:

- Bash Builtins- commands built into the shell itself
- The GNU Coreutils- the essential utilities included with most Linux
  distributions. These are divided into three groups:File UtilitiesText UtilitiesShell Utilities

- File Utilities
- Text Utilities
- Shell Utilities
- Other Commands- other commonly-used Linux utilities

## Shell Scripts

- new_scriptA bash shell script template generator. Use this script to
	help write your own shell scripts. Generated templates include
	useful shell functions, error and signal handling, and
	command-line option and argument parsing.
new_script
A bash shell script template generator. Use this script to

- my_cloudImplements a primitive cloud storage system using any
	available remote host running an SSH server.
my_cloud
Implements a primitive cloud storage system using any

- photo2mailRe-sizes large image files (photos) for use as attachments to email
	messages, blog postings, etc.
photo2mail
Re-sizes large image files (photos) for use as attachments to email

- program_listCreates an annotated list of programs in a directory. Useful for
	exploring your system.
program_list
Creates an annotated list of programs in a directory. Useful for

## Popular Series From The Blog

- Building An All-text Linux WorkstationA 14-part series describing the creation of a general purpose
workstation that uses only text-based programs.
Building An All-text Linux Workstation
A 14-part series describing the creation of a general purpose

- Getting Ready For Ubuntu 10.04This series goes through the process of upgrading a Linux system
from one version of Linux to another by doing a fresh
install. Covers backup and installation techniques.
Getting Ready For Ubuntu 10.04
This series goes through the process of upgrading a Linux system

- New Features In Bash 4.xCovers features added to the fourth major release of bash.
New Features In Bash 4.x
Covers features added to the fourth major release of bash.

## Other Sites You Might Enjoy


### Bash And Scripting

- The Bash Reference ManualPerhaps in response to the usability issues found in the bash man page,
    theGNU Projectproduced the Bash
    Reference Manual.  You can think of it as the bash man page translated into
    human readable form.  While it lacks a tutorial focus and contains no usage
    examples, it is much easier to read and is more usefully organized than the
    bash man page.
The Bash Reference Manual
Perhaps in response to the usability issues found in the bash man page,

- Greg's WikiThe bash man page and the Bash Reference Manual both extensively
    document the features found in bash.  However, when we want a description
    of bash behavior, different resources are needed.  The best by far is
    Greg's Wiki.  This site covers a variety of topics, but of particular
    interest to us are theBash
    FAQwhich contains over one hundred frequently asked questions about
    bash, theBash
    Pitfallswhich describes many of the common problems script writers
    encounter with bash, and theBash Guide, a useful set of
    tutorials for bash users.  There are also several fun to readrants.
Greg's Wiki
The bash man page and the Bash Reference Manual both extensively

- Bash Hacker's WikiLike Greg's Wiki, the Bash Hackers Wiki provides many different articles
    relating to bash, its features, and its behavior.  Included are some useful
    tutorials on various programming techniques and issues with scripting with
    bash.  While the writing is, at times, a little chaotic, it does contain
    useful information.
Bash Hacker's Wiki
Like Greg's Wiki, the Bash Hackers Wiki provides many different articles

- Chet Ramey's Bash PageChet Ramey is the current maintainer of bash and he has his own page.
    On it, you can find version information, latest news, and other things.
    The most useful document on the Bash Page is its version of theBash FAQ.  TheNEWSfile contains a
    concise list of features that have been added to each version of bash.
Chet Ramey's Bash Page
Chet Ramey is the current maintainer of bash and he has his own page.

- Advanced Bash Scripting HOWTOThe Advanced Bash Scripting HOWTO is a detailed look at bash shell
    programming. A thoughtful treatment with lots of examples and exercises. A
    good companion piece for the LinuxCommand.org tutorials.
Advanced Bash Scripting HOWTO
The Advanced Bash Scripting HOWTO is a detailed look at bash shell

- The Bash Prompt HOWTOThe Bash Prompt HOWTO is a surprisingly interesting discussion of all
    the things you can make the prompt do.
The Bash Prompt HOWTO
The Bash Prompt HOWTO is a surprisingly interesting discussion of all

- Linux From ScratchThe Linux From Scratch tutorial will step you through the process of
    building a complete Linux system from source code.
Linux From Scratch
The Linux From Scratch tutorial will step you through the process of

### Linux Standards

- The Linux Filesystem Hierarchy StandardThe Linux Filesystem Hierarchy Standard describes the standard layout of
    a Linux system. A good site to visit if you want to learn how and why Linux
    is organized the way it is.
The Linux Filesystem Hierarchy Standard
The Linux Filesystem Hierarchy Standard describes the standard layout of

- Linux Standard BaseLinux Standard Base is a project devoted to developing a standard for
    Linux distributions.
Linux Standard Base
Linux Standard Base is a project devoted to developing a standard for

### Fighting For Your Freedom

- Free Software FoundationThe Free Software Foundation (FSF) is dedicated to promoting computer
    users' right to use, study, copy, modify, and redistribute computer
    programs.
Free Software Foundation
The Free Software Foundation (FSF) is dedicated to promoting computer

- Electronic Frontier FoundationEFF is working to protect our fundamental rights regardless of
    technology, to educate the press, policymakers and the general public about
    civil liberties issues related to technology, and to act as a defender of
    those liberties.
Electronic Frontier Foundation
EFF is working to protect our fundamental rights regardless of

- Software Freedom Law CenterSFLC provides legal representation and other law-related services to
    protect and advance Free and Open Source Software.  Founded in 2005, the
    Center now represents many of the most important and well-established free
    software and open source projects.
Software Freedom Law Center
SFLC provides legal representation and other law-related services to

## Linux Command Line Books by William Shotts


来源: https://linuxcommand.org/tlcl.php

# The Linux Command Line


## by William Shotts

Seventh Internet Edition
Designed for the new command line user, this 596-page volume covers
the same material as LinuxCommand.org but in much greater detail.  In
addition to the basics of command line use and shell scripting,The
Linux Command Lineincludes chapters on many common programs used on
the command line, as well as more advanced topics.

- Released under a BY-NC-ND Creative Commonslicense,
    this book is available for free download in PDF format.Download ithere.
    Read the release noteshere.
Released under a BY-NC-ND Creative Commonslicense,

- Download example scripts from the bookhere.
Download example scripts from the bookhere.

- The book is available in printed form, published byNo Starch Press.Based on the Seventh Internet Edition, the third print edition may be purchased wherever fine books are sold.
    No Starch Press also offers electronic formats for popular e-readers.In addition to English, the printed book is also
    available in the following languages:Korean:available fromBJ PUBLICSerbian:available fromMikro KnjigaChinese (Traditional):available fromGOTOPChinese (Simplified):available fromPT PressRussian:available fromPiterPolish:available fromHelion
The book is available in printed form, published byNo Starch Press.Based on the Seventh Internet Edition, the third print edition may be purchased wherever fine books are sold.
    No Starch Press also offers electronic formats for popular e-readers.
In addition to English, the printed book is also
    available in the following languages:

- Korean:available fromBJ PUBLIC
- Serbian:available fromMikro Knjiga
- Chinese (Traditional):available fromGOTOP
- Chinese (Simplified):available fromPT Press
- Russian:available fromPiter
- Polish:available fromHelion
- Read reviews atNo Starch PressandAmazon.
Read reviews atNo Starch PressandAmazon.

- FindThe Linux Command Lineatyour local library.
FindThe Linux Command Lineatyour local library.

- Want to translate the Creative Commons version ofThe Linux Command Line?Please see theCommunity Translation Policyfor details.The following community translations are now available:ArabicTranslation by Abd Allatif EymshSpanishTranslation by Adriano SánchezPortuguese (in progress).Translation byMatheus SalesItalian (in progress).Translation byFrancesco CargiuliRomanian (in progress).Translation byPaval VladFarsiTranslation byAmirhosain ShahsavariDutch (in progress).Translation byTom Van LooyFrench (in progress).Translation byVincent de Paul BAKPATINAKurdish (in progress).Translation byAga Ismael AbdallaTurkishTranslation byRecep ŞenelSwedish (HTML,PDF).Translation byJosef Andersson
Want to translate the Creative Commons version ofThe Linux Command Line?Please see theCommunity Translation Policyfor details.
The following community translations are now available:

- ArabicTranslation by Abd Allatif Eymsh
- SpanishTranslation by Adriano Sánchez
- Portuguese (in progress).Translation byMatheus Sales
- Italian (in progress).Translation byFrancesco Cargiuli
- Romanian (in progress).Translation byPaval Vlad
- FarsiTranslation byAmirhosain Shahsavari
- Dutch (in progress).Translation byTom Van Looy
- French (in progress).Translation byVincent de Paul BAKPATINA
- Kurdish (in progress).Translation byAga Ismael Abdalla
- TurkishTranslation byRecep Şenel
- Swedish (HTML,PDF).Translation byJosef Andersson

# Adventures with the Linux Command Line


## by William Shotts

First Internet Edition
In this 250+ page sequel/suplement toThe Linux Command Linewe'll
look at even more cool tools and fun command line topics. With 14 action-packed
chapters, it's perfect for makers, students, and anyone wanting to learn
additional Linux history, techniques, and skills.

- Released under a Creative Commonslicense,
Released under a Creative Commonslicense,

## LinuxCommand.org: Adventures


来源: https://linuxcommand.org/lc3_adventures.php

# But Wait... There's More!

This collection is a supplement to my book,The Linux
Command Line(TLCL), so if you don't already have a copy, please
download one or, if you prefer, pick up a printed copy from your favorite
bookseller or library. We are going to build on our experience with the command
line and add some more tools and techniques to our repertoire.  Like TLCL, this
collection is not about Linux system administration; rather it is a collection
of topics I consider both fun and interesting. It covers many tools that will
be of interest to budding system administrators, but the topics were chosen for
other reasons.  Some were chosen because they are "classic" Unix,
others because they are just "something you should know," but mostly
they were chosen because I find them fun and interesting.
The adventures are alsoavailable in book form.

## Contents

- Midnight CommanderWe will look at Midnight Commander, a character-based directory
        browser and file manager that bridges the two worlds of the familiar
        graphical file manager and the common command line tools such ascp,mv, andrm.

### Midnight Commander

We will look at Midnight Commander, a character-based directory

- Terminal MultiplexersWhat if we could run multiple terminal sessions inside a single
        terminal window? Or how about if we could detach a running session and
        return to it later, on a different machine? Sound impossible? It's not.

### Terminal Multiplexers

What if we could run multiple terminal sessions inside a single

- Less TypingFingers getting tired? Wrists starting to ache? Time to learn how do
        more with less typing.

### Less Typing

Fingers getting tired? Wrists starting to ache? Time to learn how do

- More RedirectionWe'll look at I/O redirection again in a little more depth and learn a
        few tricks along the way.

### More Redirection

We'll look at I/O redirection again in a little more depth and learn a

- tputWhile our command line environment is certainly powerful, it can be
        lacking when it comes to visual appeal. It doesn't have to be that way.
        Learn to take control of terminal output and add some visual spice.

### tput

While our command line environment is certainly powerful, it can be

- dialogWe're going to look atdialog, a program that displays
        various kinds ofdialog boxesthat we can incorporate into our
        shell scripts to give them a much friendlier face.

### dialog

We're going to look atdialog, a program that displays
dialog

- AWKOne of the great things we can do in the shell is embed other
        programming languages within the body of our scripts. In this
        adventure, we are going to look at one such program,awk,
        a classic pattern matching and text processing language.

### AWK

One of the great things we can do in the shell is embed other
awk

- Other ShellsWhile we have spent a great deal of time learning the bash shell,
        it's not the only game in town. Unix has had several popular shells and
        almost all are available for Linux, too.

### Other Shells

While we have spent a great deal of time learning the bash shell,

- Power TerminalsIn this adventure, we are going to look at a few of the different
        terminal programs and the many interesting things we can do with
        them.

### Power Terminals

In this adventure, we are going to look at a few of the different

- Vim, with VigorVim is a very powerful program. In fact, it's safe to say that vim
        can do anything. It's just a question of figuring out how. In this
        adventure, we will acquire an intermediate level of skill in this
        popular tool.

### Vim, with Vigor

Vim is a very powerful program. In fact, it's safe to say that vim

- sourceWe looked atsourcebriefly when we worked with the.profileand.bashrcfiles used to establish
        the shell environment.In this adventure, we will look atsourceagain and discover the ways it can make our scripts
        more powerful and easier to maintain.

### source

We looked atsourcebriefly when we worked with the.profileand.bashrcfiles used to establish
        the shell environment.
source
.profile
.bashrc
In this adventure, we will look atsourceagain and discover the ways it can make our scripts

- Coding Standards Part 1Most programming organizations have formal standards for coding
        practice and style. We will look at some and create one of our own.

### Coding Standards Part 1

Most programming organizations have formal standards for coding

- Coding Standards Part 2There's one problem with having a coding standard. Once you have it,
        you have to follow it. In this adventure we will learn aboutnew_script, a shell script template generator that
        performs much of the tedious mechanical work.

### Coding Standards Part 2

There's one problem with having a coding standard. Once you have it,

- SQLStructured Query Language (SQL) is thelingua francaof the
        database world. It's also a useful and important skill. In this
        adventure, we will look at its major features and techniques, as well
        as discover a command-line tool that makes SQL easy to use with our
        scripts and projects.

### SQL

Structured Query Language (SQL) is thelingua francaof the

## Learning the shell - Lesson 1: What is the shell?


来源: https://linuxcommand.org/lc3_lts0010.php

# What is "the Shell"?

Simply put, the shell is a program that takes commands from the keyboard
  and gives them to the operating system to perform. In the old days, it was
  the only user interface available on a Unix-like system such as Linux.
  Nowadays, we havegraphical user interfaces (GUIs)in addition tocommand line interfaces (CLIs)such as the shell.
On most Linux systems a program calledbash(which stands for Bourne Again
  SHell, an enhanced version of the original Unix shell program,sh, written by Steve Bourne) acts as the shell program. Besidesbash, there are other shell programs available for
  Linux systems. These include:ksh,tcshandzsh.
bash
ksh
tcsh
zsh

## What's a "Terminal?"

It's a program called aterminal emulator. This is a program that
  opens a window and lets you interact with the shell. There are a bunch of
  different terminal emulators we can use. Some Linux distributions install
  several. These might includegnome-terminal,konsole,xterm,rxvt,kvt,nxterm, andeterm.
gnome-terminal
konsole
xterm
rxvt
kvt
nxterm
eterm

## Starting a Terminal

Window managers usually have a way to launch a terminal from the menu.
  Look through the list of programs to see if anything looks like a terminal
  emulator. While there are a number of different terminal emulators, they all
  do the same thing. They give us access to a shell session. You will probably
  develop a preference for one, based on the different bells and whistles
  it provides.

## Testing the Keyboard

OK, let's try some typing. Bring up a terminal window. The first thing we
  should see is ashell promptthat contains our user name and the name
  of the machine followed by a dollar sign. Something like this:
Excellent! Now type some nonsense characters and
	press the enter key.
kdkjflajfks
If all went well, we should have gotten an error message complaining that
  it cannot understand the command:
Wonderful! Now press the up-arrow key. Watch how our previous command
  "kdkjflajfks" returns. Yes, we havecommand history. Press the
  down-arrow and we get the blank line again.
Recall the "kdkjflajfks" command using the up-arrow key if needed. Now,
  try the left and right-arrow keys. We can position the text cursor anywhere
  in the command line. This allows us to easily correct mistakes.

## You're not operating as root, are you?

If the last character of your shell prompt is # rather than $, you are
  operating as thesuperuser. This means that you have administrative
  privileges. This can be dangerous, since you are able to delete or overwrite
  any file on the system. Unless you absolutely need administrative privileges,
  do not operate as the superuser.

## Using the Mouse

Even though the shell is a command line interface, the mouse is still
  handy.
Besides using the mouse to scroll the contents of the terminal window, we
  can can use it to copy text. Drag the mouse over some text (for example,
  "kdkjflajfks" right here on the browser window) while holding down the left
  button. The text should highlight. Release the left button and move the mouse
  pointer to the terminal window and press the middle mouse button
  (alternately, press both the left and right buttons at the same time when
  working on a touch pad).  The text we highlighted in the browser window
  should be copied into the command line.

## A few words about focus...

When you installed your Linux system and its window manager (most likely
  Gnome or KDE), it was configured to behave in some ways like that legacy
  operating system.
In particular, it probably has itsfocus policyset to "click to
  focus." This means that in order for a window to gain focus (become active)
  you have to click in the window. This is contrary to traditional X Window
  behavior. You should consider setting the focus policy to "focus follows
  mouse".  You may find it strange at first that windows don't raise to the
  front when they get focus (you have to click on the window to do that), but
  you will enjoy being able to work on more than one window at once without
  having the active window obscuring the other. Try it and give it a fair
  trial; I think you will like it. You can find this setting in the
  configuration tools for your window manager.

## Further Reading

- TheWikipedia entry for Steve Bourne, developer of the original Bourne shell
- TheWikipedia article on the Unix shell, the place where all this fun got started
- The"Power Terminals"Adventure

## Learning the shell - Lesson 2: Navigation


来源: https://linuxcommand.org/lc3_lts0020.php

# Navigation

In this lesson, we will introduce our first three commands:pwd(print working
directory),cd(change directory), andls(list files and directories).
pwd
Those new to the command line will need to pay close attention to this
lesson since the concepts will take some getting used to.

## File System Organization

Like Windows, the files on a Linux system are arranged in what is called ahierarchical directory structure. This means that they are organized in
a tree-like pattern ofdirectories(called folders in other systems),
which may contain files andsubdirectories. The first directory in the
file system is called theroot directory. The root directory contains
files and subdirectories, which contain more files and subdirectories and so on
and so on.
Most graphical environments include a file manager program used to view and
manipulate the contents of the file system. Often we will see the file system
represented like this:
One important difference between Windows and Unix-like operating systems
such as Linux is that Linux does not employ the concept of drive letters. While
Windows drive letters split the file system into a series of different trees
(one for each device), Linux always has a single tree. Different storage
devices may be different branches of the tree, but there is always just a
single tree.

## pwd

Since the command line interface cannot provide graphic pictures of the file
system structure, we must have a different way of representing it. To do this,
think of the file system tree as a maze, and that we are standing in it. At any
given moment, we are located in a single directory. Inside that directory, we
can see its files and the pathway to itsparent directoryand the
pathways to the subdirectories of the directory in which we are standing.
The directory we are standing in is called theworking directory. To
see the name of the working directory, we use thepwdcommand.
When we first log on to our Linux system, the working directory is set to
ourhome directory.  This is where we put our files. On most systems,
the home directory will be called /home/user_name, but it can be anything
according to the whims of the system administrator.
To list the files in the working directory, we use thelscommand.
We will come back tolsin the next lesson. There
are a lot of fun things you can do with it, but we have to talk about pathnames
and directories a bit first.
To change the working directory (where we are standing in the maze) we use
thecdcommand. To do this, we typecdfollowed by thepathnameof the desired working
directory. A pathname is the route we take along the branches of the tree to
get to the directory we want. Pathnames can be specified two different ways;absolute pathnamesorrelative pathnames. Let's look with
absolute pathnames first.
An absolute pathname begins with the root directory and follows the tree
branch by branch until the path to the desired directory or file is completed.
For example, there is a directory on your system in which most programs are
installed. The pathname of the directory is/usr/bin. This means
from the root directory (represented by the leading slash in the pathname)
there is a directory called "usr" which contains a directory called "bin".
/usr/bin
Let's try this out:
cd /usr/bin
Now we can see that we have changed the current working directory to/usr/binand that it is full of files. Notice how the shell prompt
has changed?  As a convenience, it is usually set up to display the name of the
working directory.
Where an absolute pathname starts from the root directory and leads to its
destination, a relative pathname starts from the working directory. To do this,
it uses a couple of special notations to represent relative positions in the
file system tree. These special notations are "." (dot) and ".." (dot dot).
The "." notation refers to the working directory itself and the ".."
notation refers to the working directory's parent directory. Here is how it
works. Let's change the working directory to /usr/bin again:
O.K., now let's say that we wanted to change the working directory to the
parent of/usr/binwhich is/usr. We could do that
two different ways. First, with an absolute pathname:
/usr
cd /usr
Or, with a relative pathname:
cd ..
Two different methods with identical results. Which one should we use? The
one that requires the least typing!
Likewise, we can change the working directory from/usrto/usr/binin two different ways. First using an absolute
pathname:
cd ./bin
Now, there is something important that we must point out here. In most
cases, we can omit the "./". It is implied. Typing:
cd bin
would do the same thing. In general, if we do not specify a pathname to
something, the working directory will be assumed. There is one important
exception to this, but we won't get to that for a while.

## A Few Shortcuts

If we typecdfollowed by nothing,cdwill change the working directory to our home
directory.
A related shortcut is to typecd
~user_name. In this case,cdwill
change the working directory to the home directory of the specified user.
cd
~user_name
Typingcd -changes the working
directory to the previous one.
cd -

## Important facts about file names

- File names that begin with a period character are hidden. This only
    means thatlswill not list them unless we sayls -a. When your account was created, several
    hidden files were placed in your home directory to configure things for
    your account. Later on we will take a closer look at some of these files to
    see how you can customize ourenvironment. In addition, some
    applications will place their configuration and settings files in your home
    directory as hidden files.
File names that begin with a period character are hidden. This only
ls -a

- File names in Linux, like Unix, are case sensitive. The file names
    "File1" and "file1" refer to different files.
File names in Linux, like Unix, are case sensitive. The file names

- Linux has no concept of a "file extension" like Windows systems. You
    may name files any way you like. However, while Linux itself does not care
    about file extensions, many application programs do.
Linux has no concept of a "file extension" like Windows systems. You

- Though Linux supports long file names which may contain embedded
    spaces and punctuation characters, limit the punctuation characters to
    period, dash, and underscore.Most importantly, do not embed spaces
    in file names.If you want to represent spaces between words in a
    file name, use underscore characters. You will thank yourself
    later.
Though Linux supports long file names which may contain embedded

## Learning the shell - Lesson 3: Looking around


来源: https://linuxcommand.org/lc3_lts0030.php

# Looking Around

Now that we know how to move from working directory to working directory,
we're going to take a tour of our Linux system and, along the way, learn some
things about what makes it tick. But before we begin, we have to learn about
some tools that will come in handy during our journey. These are:

- ls(list files and directories)
- less(view text files)
less

- file(classify a file's contents)
file
Thelscommand is used to
list the contents of a directory. It is probably
the most commonly used Linux command. It can be
used in a number of different ways. Here are some
examples:
Examples of the ls commandCommandResultlsList the files in the working directoryls /binList the files in the/bindirectory (or
    any other directory we care to specify)ls -lList the files in the working directory in long formatls -l /etc /binList the files in the/bindirectory and
    the/etcdirectory in long formatls -la ..List all files (even ones with names
    beginning with a period character, which are
    normally hidden) in the parent of the working
    directory in long format
CommandResult
lsList the files in the working directory
ls /binList the files in the/bindirectory (or
    any other directory we care to specify)
ls /bin
/bin
ls -lList the files in the working directory in long format
ls -l
ls -l /etc /binList the files in the/bindirectory and
    the/etcdirectory in long format
ls -l /etc /bin
List the files in the/bindirectory and
/etc
ls -la ..List all files (even ones with names
ls -la ..
These examples also point out an important concept about commands. Most
commands operate like this:
wherecommandis the name of the command,-optionsis one or
more adjustments to the command's behavior, andargumentsis one or more
"things" upon which the command operates.
In the case ofls, we see thatlsis the name of the command, and that it can have one or
more options, such as-aand-l, and it can operate on one or more files or
directories.

### A Closer Look at Long Format

If we use the-loption withls, you will get a file listing that
contains a wealth of information about the files
being listed. Here's an example:
-rw-------   1 me       me            576 Apr 17  2019 weather.txt
drwxr-xr-x   6 me       me           1024 Oct  9  2019 web_page
-rw-rw-r--   1 me       me         276480 Feb 11 20:41 web_site.tar
-rw-------   1 me       me           5743 Dec 16  2018 xmas_file.txt

----------     -------  -------  -------- ------------ -------------
    |             |        |         |         |             |
    |             |        |         |         |         File Name
    |             |        |         |         |
    |             |        |         |         +---  Modification Time
    |             |        |         |
    |             |        |         +-------------   Size (in bytes)
    |             |        |
    |             |        +-----------------------        Group
    |             |
    |             +--------------------------------        Owner
    |
    +----------------------------------------------   File Permissions

File NameThe name of the file or directory.Modification TimeThe last time the file was modified. If the
  last modification occurred more than six months
  in the past, the date and year are displayed.
  Otherwise, the time of day is shown.SizeThe size of the file in bytes.GroupThe name of the group that has file
  permissions in addition to the file's owner.OwnerThe name of the user who owns the file.File PermissionsA representation of the file's access
  permissions. The first character is the type of
  file. A "-" indicates a regular (ordinary) file.
  A "d" indicates a directory. The second set of
  three characters represent the read, write, and
  execution rights of the file's owner. The next
  three represent the rights of the file's group,
  and the final three represent the rights granted
  to everybody else. We'll discuss this in more detail
  in a later lesson.
File Name
The name of the file or directory.
Modification Time
The last time the file was modified. If the
  Otherwise, the time of day is shown.
Size
The size of the file in bytes.
Group
The name of the group that has file
  permissions in addition to the file's owner.
Owner
The name of the user who owns the file.
File Permissions
A representation of the file's access

## less

lessis a program that lets us view text files.
This is very handy since many of the files used to control and configure Linux
are human readable.

## What is "text"?

There are many ways to represent information on a computer. All methods
involve defining a relationship between the information and some numbers that
will be used to represent it.  Computers, after all, only understand numbers
and all data is converted to numeric representation.
Some of these representation systems are very complex (such as compressed
multimedia files), while others are rather simple. One of the earliest and
simplest is calledASCII text.ASCII(pronounced "As-Key") is short for
American Standard Code for Information Interchange. This is a simple encoding
scheme that was first used on Teletype machines to map keyboard characters to
numbers.
Text is a simple one-to-one mapping of characters to numbers. It is very
compact. Fifty characters of text translates to fifty bytes of data. Throughout
a Linux system, many files are stored in text format and there are many Linux
tools that work with text files. Even Windows systems recognize the importance
of this format. The well-known NOTEPAD.EXE program is an editor for plain ASCII
text files.
Thelessprogram is invoked by simply typing:
lesstext_file
This will display the file.

### Controlling less

Once started,lesswill display the text file one
page at a time. We can use the Page Up and Page Down keys to move through the
text file. To exitless, we type "q". Here are some
commands thatlesswill accept:
Keyboard commands for the less programCommandActionPage Up or bScroll back one pagePage Down or spaceScroll forward one pageGGo to the end of the text file1GGo to the beginning of the text file/charactersSearch forward in the text file for an
    occurrence of the specifiedcharactersnRepeat the previous searchhDisplay a complete list less commands and optionsqQuit
CommandAction
Page Up or bScroll back one page
Page Down or spaceScroll forward one page
GGo to the end of the text file
1GGo to the beginning of the text file
/charactersSearch forward in the text file for an
    occurrence of the specifiedcharacters
nRepeat the previous search
hDisplay a complete list less commands and options
qQuit

## file

As we wander around our Linux system, it is helpful to determine what kind
of data a file contains before we try to view it. This is where thefilecommand comes in.filewill examine a file and tell us what kind of file it is.
To use thefileprogram, we just type:
filename_of_file
Thefileprogram can recognize most types of
files, such as:
Various kinds of filesFile TypeDescriptionViewable as text?ASCII textThe name says it allyesBourne-Again shell script textAbashscriptyesELF 64-bit LSB executableAn executable binary programnoELF 64-bit LSB shared objectA shared librarynoGNU tar archiveA tape archive file. A common way of storing groups of files.no, usetar tvfto view listing.gzip compressed dataAn archive compressed withgzipnoHTML document textA web pageyesJPEG image dataA compressed JPEG imagenoPostScript document textA PostScript fileyesZip archive dataAn archive compressed withzipno
File TypeDescriptionViewable as text?
ASCII textThe name says it allyes
Bourne-Again shell script textAbashscriptyes
ELF 64-bit LSB executableAn executable binary programno
ELF 64-bit LSB shared objectA shared libraryno
GNU tar archiveA tape archive file. A common way of storing groups of files.no, usetar tvfto view listing.
tar tvf
gzip compressed dataAn archive compressed withgzipno
gzip
HTML document textA web pageyes
JPEG image dataA compressed JPEG imageno
PostScript document textA PostScript fileyes
Zip archive dataAn archive compressed withzipno
zip
While it may seem that most files cannot be viewed as text, a surprising
number can be.  This is especially true of the important configuration files.
During our adventure we will see that many features of the operating system are
controlled by text configuration files and shell scripts. In Linux, there are
no secrets!

## Learning the shell - Lesson 4: A Guided Tour


来源: https://linuxcommand.org/lc3_lts0040.php

# A Guided Tour

It's time to take our tour. The table below lists some interesting places to
explore. This is by no means a complete list, but it should prove to be an
interesting adventure. For each of the directories listed below, do the
following:

- cdinto each directory.
- Uselsto list the contents of the directory.
- If there is an interesting file, use thefilecommand to determine its contents.
- For text files, uselessto view them.
Interesting directories and their contentsDirectoryDescription/The root directory where the file system
    begins. The root directory will probably
    contain only subdirectories./bootThis is where the Linux kernel and boot loader
    files are kept. The kernel is a file calledvmlinuz./etcThe/etcdirectory
    contains the configuration files for the
    system. All of the files in/etcshould be text files. Some points of
    interest are:/etc/passwdThepasswdfile
      contains the essential information for each
      user. This is where user accounts are defined./etc/fstabThefstabfile
      contains a table of devices that get mounted
      when the system boots.  This file defines
      the system's disk drives./etc/hostsThis file lists the network host names
      and IP addresses that are intrinsically known
      to the system./etc/init.dThis directory contains the scripts
      that start various system services
      at boot time./bin, /usr/binThese two directories contain most of the programs for the
    system. The/bindirectory has the essential
    programs that the system requires to operate,
    while/usr/bincontains
    applications for the system's users./sbin, /usr/sbinThesbindirectories
    contain programs for system administration, mostly for use by the superuser./usrThe/usrdirectory
    contains a variety of things that support
    user applications. Some highlights:/usr/share/X11Support files for the X Window system/usr/share/dictDictionaries for the spelling checker.  Yes, Linux comes with a
      spelling checker. Seelookandaspell./usr/share/docVarious documentation files in a
      variety of formats./usr/share/manThe man pages are kept here./usr/local/usr/localand its
    subdirectories are used for the installation
    of software and other files for use on the
    local machine. What this really means is that
    software that is not part of the official
    distribution (which usually goes in/usr/bin) goes here.When you find interesting programs to
    install on your system, they should be
    installed in one of the/usr/localdirectories. Most
    often, the directory of choice is/usr/local/bin./varThe/vardirectory
    contains files that change as the system is
    running. This includes:/var/logDirectory that contains log files.  These are updated as the system
      runs. It's a good idea to view the files in this directory from time to
      time, to monitor the health of your system./var/spoolThis directory is used to hold files that are queued for some
      process, such as mail messages and print jobs. When a user's mail first
      arrives on the local system (assuming it has local mail, a rare occurrence
      on modern machines that are not mail servers), the messages are first
      stored in/var/spool/mail/libThe shared libraries (similar to DLLs in
    that other operating system) are kept
    here./home/homeis where users
    keep their personal work. In general, this is
    the only place users are allowed to write
    files. This keeps things nice and clean :-)/rootThis is the superuser's home directory./tmp/tmpis a directory
    in which programs can write their temporary files./devThe/devdirectory
    is a special directory, since it does not
    really contain files in the usual sense.
    Rather, it contains devices that are available
    to the system. In Linux (like Unix), devices
    are treated like files. You can read and
    write devices as though they were files. For
    example/dev/fd0is the
    first floppy disk drive,/dev/sdais the first hard
    drive. All the devices that the kernel
    understands are represented here./procThe/procdirectory
    is also special. This directory does not
    contain files. In fact, this directory does
    not really exist at all. It is entirely
    virtual. The/procdirectory contains little peep holes into the
    kernel itself. There are a group of numbered
    entries in this directory that correspond to
    all the processes running on the system. In
    addition, there are a number of named entries
    that permit access to the current
    configuration of the system. Many of these
    entries can be viewed. Try viewing/proc/cpuinfo. This entry will
    tell you what the kernel thinks of the system's
    CPU./mediaFinally, we come to/media, a normal directory which is
    used in a special way. The/mediadirectory is used formount points. As we learned in thesecond lesson, the
    different physical storage devices (like hard
    disk drives) are attached to the file system
    tree in various places. This process of
    attaching a device to the tree is calledmounting. For a device to be
    available, it must first be mounted.When your system boots, it reads a list of mounting instructions in the/etc/fstabfile, which describes which device is
    mounted at which mount point in the directory tree. This takes care of the
    hard drives, but we may also have devices that are considered temporary,
    such as optical disks and USB storage devices. Since these are removable, they do not
    stay mounted all the time. The/mediadirectory
    is used by the automatic device mounting mechanisms found in modern desktop
    oriented Linux distributions.  To see what devices and mount points are
    used, typemount.
DirectoryDescription
/The root directory where the file system
    contain only subdirectories.
/bootThis is where the Linux kernel and boot loader
    files are kept. The kernel is a file calledvmlinuz.
/boot
vmlinuz
/etcThe/etcdirectory
      at boot time.
/etc/passwdThepasswdfile
/etc/passwd
Thepasswdfile
      user. This is where user accounts are defined.
passwd
/etc/fstab
Thefstabfile
      the system's disk drives.
fstab
/etc/hosts
This file lists the network host names
      to the system.
/etc/init.d
This directory contains the scripts
/bin, /usr/binThese two directories contain most of the programs for the
    applications for the system's users.
/bin, /usr/bin
/sbin, /usr/sbinThesbindirectories
    contain programs for system administration, mostly for use by the superuser.
/sbin, /usr/sbin
sbin
/usrThe/usrdirectory
      variety of formats./usr/share/manThe man pages are kept here.
/usr/share/X11Support files for the X Window system/usr/share/dictDictionaries for the spelling checker.  Yes, Linux comes with a
/usr/share/X11
Support files for the X Window system
/usr/share/dict
Dictionaries for the spelling checker.  Yes, Linux comes with a
      spelling checker. Seelookandaspell.
look
aspell
/usr/share/doc
Various documentation files in a
      variety of formats.
/usr/share/man
The man pages are kept here.
/usr/local/usr/localand its
    often, the directory of choice is/usr/local/bin.
/usr/local
/usr/local/bin
/varThe/vardirectory
      stored in/var/spool/mail
/var
/var/logDirectory that contains log files.  These are updated as the system
/var/log
Directory that contains log files.  These are updated as the system
      time, to monitor the health of your system.
/var/spool
This directory is used to hold files that are queued for some
/var/spool/mail
/libThe shared libraries (similar to DLLs in
    here.
/lib
/home/homeis where users
    files. This keeps things nice and clean :-)
/home
/rootThis is the superuser's home directory.
/root
/tmp/tmpis a directory
    in which programs can write their temporary files.
/tmp
/devThe/devdirectory
    understands are represented here.
/dev
/dev/fd0
/dev/sda
/procThe/procdirectory
    CPU.
/proc
/proc/cpuinfo
/mediaFinally, we come to/media, a normal directory which is
/media
mount

## A weird kind of file...

During your tour, you probably noticed a strange kind of directory entry,
particularly in the/libdirectory. When listed withls -l, you might have seen something like this:
lrwxrwxrwx     25 Jul  3 16:42 System.map -> /boot/System.map-4.0.36-3
-rw-r--r-- 105911 Oct 13  2018 System.map-4.0.36-0.7
-rw-r--r-- 105935 Dec 29  2018 System.map-4.0.36-3
-rw-r--r-- 181986 Dec 11  2019 initrd-4.0.36-0.7.img
-rw-r--r-- 182001 Dec 11  2019 initrd-4.0.36.img
lrwxrwxrwx     26 Jul  3 16:42 module-info -> /boot/module-info-4.0.36-3
-rw-r--r--  11773 Oct 13  2018 module-info-4.0.36-0.7
-rw-r--r--  11773 Dec 29  2018 module-info-4.0.36-3
lrwxrwxrwx     16 Dec 11  2019 vmlinuz -> vmlinuz-4.0.36-3
-rw-r--r-- 454325 Oct 13  2018 vmlinuz-4.0.36-0.7
-rw-r--r-- 454434 Dec 29  2018 vmlinuz-4.0.36-3
Notice the files,System.map,
module-infoandvmlinuz. See the
strange notation after the file names?
System.map,
module-info
Files such as this are calledsymbolic
links. Symbolic links are a special type of
file that points to another file. With symbolic
links, it is possible for a single file to have
multiple names. Here's how it works: Whenever the
system is given a file name that is a symbolic
link, it transparently maps it to the file it is
pointing to.
Just what is this good for? This is a very handy
feature. Let's consider the directory listing above
(which is the/bootdirectory of an old
system). This system has had multiple
versions of the Linux kernel installed. We can see
this from the filesvmlinuz-4.0.36-0.7andvmlinuz-4.0.36-3. These file names suggest
that both version 4.0.36-0.7 and 4.0.36-3 are
installed. Because the file names contain the
version it is easy to see the differences in the
directory listing. However, this would be confusing
to programs that rely on a fixed name for the
kernel file. These programs might expect the kernel
to simply be called"vmlinuz". Here is
where the beauty of the symbolic link comes in. By
creating a symbolic link calledvmlinuzthat points tovmlinuz-4.0.36-3, we have
solved the problem.
vmlinuz-4.0.36-0.7
vmlinuz-4.0.36-3
"vmlinuz"
To create symbolic links, we use thelncommand.

## Further Reading

- To learn more about the organization of the Linux filesystem, consult
  theFilesystem Hierarchy Standard

## Learning the shell - Lesson 5: Manipulating Files


来源: https://linuxcommand.org/lc3_lts0050.php

# Manipulating Files

This lesson will introduce the following
commands:

- cp- copy files and directories
- mv- move or rename files and directories
- rm- remove files and directories
- mkdir- create directories
mkdir
These four commands are among the most frequently used Linux commands. They
are the basic commands for manipulating both files and directories.
Now, to be frank, some of the tasks performed by these commands are more
easily done with a graphical file manager. With a file manager, you can drag
and drop a file from one directory to another, cut and paste files, delete
files, etc. So why use these old command line programs?
The answer is power and flexibility. While it is easy to perform simple file
manipulations with a graphical file manager, complicated tasks can be easier
with the command line programs. For example, how would you copy all the HTML
files from one directory to another, but only copy files that did not exist in
the destination directory or were newer than the versions in the destination
directory? Pretty hard with with a file manager.  Pretty easy with the command
line:
cp -u *.html destination

## Wildcards

Before we begin with our commands, we'll first look at a shell feature that
makes these commands so powerful. Since the shell uses filenames so much, it
provides special characters to help you rapidly specify groups of filenames.
These special characters are calledwildcards. Wildcards allow you to
select filenames based on patterns of characters. The table below lists the
wildcards and what they select:
Summary of wildcards and their meaningsWildcardMeaning*Matches any characters?Matches any single character[characters]Matches any character that is a member of
    the setcharacters. The set of
    characters may also be expressed as aPOSIX
    character classsuch as one of the following:POSIX Character Classes[:alnum:]Alphanumeric characters[:alpha:]Alphabetic characters[:digit:]Numerals[:upper:]Uppercase alphabetic characters[:lower:]Lowercase alphabetic characters[!characters]Matches any character that is not a member
    of the setcharacters
WildcardMeaning
*Matches any characters
?Matches any single character
[characters]Matches any character that is a member of
    character classsuch as one of the following:POSIX Character Classes[:alnum:]Alphanumeric characters[:alpha:]Alphabetic characters[:digit:]Numerals[:upper:]Uppercase alphabetic characters[:lower:]Lowercase alphabetic characters
POSIX Character Classes[:alnum:]Alphanumeric characters[:alpha:]Alphabetic characters[:digit:]Numerals[:upper:]Uppercase alphabetic characters[:lower:]Lowercase alphabetic characters
[:alnum:]Alphanumeric characters
[:alpha:]Alphabetic characters
[:digit:]Numerals
[:upper:]Uppercase alphabetic characters
[:lower:]Lowercase alphabetic characters
[!characters]Matches any character that is not a member
Using wildcards, it is possible to construct
very sophisticated selection criteria for
filenames. Here are some examples of patterns and
what they match:
Examples of wildcard matchingPatternMatches*All filenamesg*All filenames that begin with the
    character "g"b*.txtAll filenames that begin with the
    character "b" and end with the characters
    ".txt"Data???Any filename that begins with the
    characters "Data" followed by exactly 3 more
    characters[abc]*Any filename that begins with "a" or "b"
    or "c" followed by any other characters[[:upper:]]*Any filename that begins with an uppercase
    letter. This is an example of a character class.BACKUP.[[:digit:]][[:digit:]]Another example of character classes. This pattern
    matches any filename that begins with the
    characters "BACKUP." followed by exactly two
    numerals.*[![:lower:]]Any filename that does not end with a
    lowercase letter.
PatternMatches
*All filenames
All filenames
g*All filenames that begin with the
    character "g"
All filenames that begin with the
b*.txtAll filenames that begin with the
    ".txt"
b*.txt
Data???Any filename that begins with the
    characters
Data???
Any filename that begins with the
[abc]*Any filename that begins with "a" or "b"
    or "c" followed by any other characters
[abc]*
Any filename that begins with "a" or "b"
[[:upper:]]*Any filename that begins with an uppercase
    letter. This is an example of a character class.
[[:upper:]]*
Any filename that begins with an uppercase
BACKUP.[[:digit:]][[:digit:]]Another example of character classes. This pattern
    numerals.
BACKUP.[[:digit:]][[:digit:]]
Another example of character classes. This pattern
*[![:lower:]]Any filename that does not end with a
*[![:lower:]]
Any filename that does not end with a
We can use wildcards with any command that
accepts filename arguments.
Thecpprogram copies
files and directories. In its simplest form, it
copies a single file:
cpfile1 file2
It can also be used to copy multiple files (and/or directories) to a
different directory:
cpfile... directory
A note on notation:... signifies that an item can be
repeated one or more times.
Other useful examples ofcpand its options include:
Examples of the cp commandCommandResultscpfile1 file2Copies the contents offile1intofile2. Iffile2does not exist,
    it is created;otherwise,file2is
    silently overwritten with the contents offile1.cp -ifile1 file2Like above however, since the "-i"
    (interactive) option is specified, iffile2exists, the user is prompted
    before it is overwritten with the contents offile1.cpfile1 dir1Copy the contents offile1(into a
    file namedfile1) inside of directorydir1.cp -Rdir1 dir2Copy the contents of the directorydir1. If directorydir2does
    not exist, it is created. Otherwise, it
    creates a directory nameddir1within
    directorydir2.
CommandResults
cpfile1 file2Copies the contents offile1intofile2. Iffile2does not exist,
    silently overwritten with the contents offile1.
cp -ifile1 file2Like above however, since the "-i"
    before it is overwritten with the contents offile1.
cp -ifile1 file2
cpfile1 dir1Copy the contents offile1(into a
    file namedfile1) inside of directorydir1.
cpfile1 dir1
cp -Rdir1 dir2Copy the contents of the directorydir1. If directorydir2does
cp -Rdir1 dir2
Themvcommand moves or renames
files and directories depending on how it is
used. It will either move one or more files to a
different directory, or it will rename a file or
directory. To rename a file, it is used like
this:
mvfilename1 filename2
To move files (and/or directories) to a different directory:
mvfile... directory
Examples ofmvand its
options include:
Examples of the mv commandCommandResultsmvfile1 file2Iffile2does not exist, thenfile1is renamedfile2.Iffile2exists, its contents are
    silently replaced with the contents offile1.mv -ifile1 file2Like above however, since the "-i"
    before it is overwritten with the contents offile1.mvfile1 file2 dir1The filesfile1andfile2are
    moved to directorydir1. Ifdir1does not exist,mvwill
    exit with an error.mvdir1 dir2Ifdir2does not exist, thendir1is renameddir2. Ifdir2exists, the directorydir1is moved within directorydir2.
mvfile1 file2Iffile2does not exist, thenfile1is renamedfile2.Iffile2exists, its contents are
    silently replaced with the contents offile1.
mvfile1 file2
mv -ifile1 file2Like above however, since the "-i"
mv -ifile1 file2
mvfile1 file2 dir1The filesfile1andfile2are
    exit with an error.
mvfile1 file2 dir1
mvdir1 dir2Ifdir2does not exist, thendir1is renameddir2. Ifdir2exists, the directorydir1is moved within directorydir2.
mvdir1 dir2
Thermcommand removes (deletes)
files and directories.
rmfile...
Using the recursive option (-r),rmcan also be used to delete directories:
rm -rdirectory...
Examples ofrmand its
Examples of the rm commandCommandResultsrmfile1 file2Deletefile1andfile2.rm -ifile1 file2Like above however, since the "-i"
    (interactive) option is specified, the user
    is prompted before each file is deleted.rm -rdir1 dir2Directoriesdir1anddir2are deleted along with all of their
    contents.
rmfile1 file2Deletefile1andfile2.
rmfile1 file2
rm -ifile1 file2Like above however, since the "-i"
    is prompted before each file is deleted.
rm -ifile1 file2
rm -rdir1 dir2Directoriesdir1anddir2are deleted along with all of their
rm -rdir1 dir2

## Be careful with rm!

Linux does not have an undelete
command. Once you delete something withrm, it's gone. You can inflict terrific
damage on your system withrmif you are not careful, particularly with
wildcards.
Before you usermwith wildcards, try this helpful
trick:construct your command usinglsinstead. By doing this, you can see
the effect of your wildcards before you delete
files. After you have tested your command withls, recall the command with the
up-arrow key and then substitutermforlsin the
command.

## mkdir

Themkdircommand is used
to create directories. To use it, you simply
type:
mkdirdirectory...

## Using Commands with Wildcards

Since the commands we have covered here accept multiple
file and directories names as arguments, you can use wildcards to
specify them. Here are a few examples:
Command examples using wildcardsCommandResultscp *.txt text_filesCopy all files in the current working directory with names
    ending with the characters ".txt" to an existing directory namedtext_files.mv dir1 ../*.bak dir2Move the subdirectorydir1and all the files ending
    in ".bak" in the current working directory's parent directory
    to an existing directory nameddir2.rm *~Delete all files in the current working directory that end
    with the character "~". Some applications create backup files
    using this naming scheme. Using this command will clean them
    out of a directory.
cp *.txt text_filesCopy all files in the current working directory with names
    ending with the characters ".txt" to an existing directory namedtext_files.
cp *.txt text_files
mv dir1 ../*.bak dir2Move the subdirectorydir1and all the files ending
    to an existing directory nameddir2.
mv dir1 ../*.bak dir2
rm *~Delete all files in the current working directory that end
rm *~

## Further Reading

- Chapter 4 ofThe Linux Command Linecovers this topic in more detail

## Learning the shell - Lesson 6: Working with Commands


来源: https://linuxcommand.org/lc3_lts0060.php

# Working with Commands

Up until now, we have seen a number of commands and their mysterious options
and arguments. In this lesson, we will try to remove some of that mystery. We
will introduce the following commands.

- type- Display information about command type
type

- which- Locate a command
which

- help- Display reference page for shell builtin
help

- man- Display an on-line command reference
man

## What are "Commands?"

Commands can be one of 4 different kinds:

- An executable programlike all those files we saw in /usr/bin. Within this
category, programs can becompiled binariessuch as programs written in C and
C++, or programs written inscripting languagessuch as the shell, Perl, Python,
Ruby, etc.

- A command built into the shell itself.bash provides a number of commands
internally calledshell builtins. Thecdcommand,
for example, is a shell builtin.

- A shell function.These are miniature shell scripts incorporated into theenvironment. We will cover configuring the environment and writing shell
functions in later lessons, but for now, just be aware that they exist.

- An alias.Commands that we can define ourselves, built from other commands.
  This will be covered in a later lesson.

## Identifying Commands

It is often useful to know exactly which of the four kinds of commands is being used and
Linux provides a couple of ways to find out.

### type

Thetypecommand is a shell builtin that displays
the kind of command the shell will execute, given a particular command name. It
works like this:
typecommand
where “command” is the name of the command we want to examine. Here are some
type type
type ls
type cp
Here we see the results for three different commands. Notice that the one
forlsand how the ls command is actually an alias
for thelscommand with the “-- color=auto” option
added. Now we know why the output fromlsis
displayed in color!

### which

Sometimes there is more than one version of an executable program installed
on a system. While this is not very common on desktop systems, it's not unusual
on large servers. To determine the exact location of a given executable, thewhichcommand is used:
which ls
whichonly works for executable programs, not
builtins nor aliases that are substitutes for actual executable programs.

## Getting Command Documentation

With this knowledge of what a command is, we can now search for the
documentation available for each kind of command.

### help

bashhas a built-in help facility available for
each of the shell builtins. To use it, type “help” followed by the name of the
shell builtin.  Optionally, we can add the -m option to change the format of
the output. For example:
help -m cd
A note on notation:When square brackets appear in the description of a command's
syntax, they indicate optional items. A vertical bar character indicates mutually exclusive
items. In the case of thecdcommand above:
cd [-L|-P] [dir]
This notation says that the commandcdmay be
followed optionally by either a “-L” or a “-P” and further, optionally followed
by the argument “dir”.

### --help

Many executable programs support a “--help” option that displays a description of the
command's supported syntax and options. For example:
mkdir --help
Some programs don't support the “--help” option, but try it anyway. Often it
results in an error message that will reveal similar usage information.

### man

Most executable programs intended for command line use provide a formal
piece of documentation called amanualorman page. A special
paging program calledmanis used to view them. It is
used like this:
manprogram
where “program” is the name of the command to view.  Man pages vary somewhat
in format but generally contain a title, a synopsis of the command's syntax, a
description of the command's purpose, and a listing and description of each of
the command's options. Man pages, however, do not usually include examples, and
are intended as a reference, not a tutorial. Let's try viewing the man page for
thelscommand:
man ls
On most Linux systems,manuseslessto display the manual page, so all of the familiarlesscommands work while displaying the page.

### README and Other Documentation Files

Many software packages installed on your system have documentation files
residing in the/usr/share/docdirectory.  Most of these are
stored in plain text format and can be viewed withless. Some of the files are in HTML format and can be
viewed with a web browser. We may encounter some files ending with a “.gz”
extension. This indicates that they have been compressed with thegzipcompression program. The gzip package includes a
special version oflesscalledzlessthat will display the contents of gzip-compressed
zless

## Learning the shell - Lesson 7: I/O Redirection


来源: https://linuxcommand.org/lc3_lts0070.php

# I/O Redirection

In this lesson, we will explore a powerful feature used by command line
programs calledinput/output redirection. As we have seen, many commands
such aslsprint their output on the display. This
does not have to be the case, however. By using some special notations we canredirectthe output of many commands to files, devices, and even to the
input of other commands.

## Standard Output

Most command line programs that display their results do so by sending their
results to a facility calledstandard output. By default, standard
output directs its contents to the display. To redirect standard output to a
file, the ">" character is used like this:
ls > file_list.txt
In this example, thelscommand is executed and
the results are written in a file namedfile_list.txt. Since the
output oflswas redirected to the file, no results
appear on the display.
file_list.txt
Each time the command above is repeated,file_list.txtis
overwritten from the beginning with the output of the commandls. To have the new resultsappendedto the file instead,
we use ">>" like this:
ls >> file_list.txt
When the results are appended, the new results are added to the end of the
file, thus making the file longer each time the command is repeated. If the
file does not exist when we attempt to append the redirected output, the file
will be created.

## Standard Input

Many commands can accept input from a facility calledstandard input.
By default, standard input gets its contents from the keyboard, but like
standard output, it can be redirected. To redirect standard input from a file
instead of the keyboard, the "<" character is used like this:
sort < file_list.txt
In the example above, we used thesortcommand to process the contents
offile_list.txt.  The results are output on the display since the
standard output was not redirected.  We could redirect standard output to
another file like this:
sort
sort < file_list.txt > sorted_file_list.txt
As we can see, a command can have both its input and output redirected. Be
aware that the order of the redirection does not matter. The only requirement
is that the redirection operators (the "<" and ">") must appear after the
other options and arguments in the command.

## Pipelines

The most useful and powerful thing we can do with I/O redirection is to
connect multiple commands together to form what are calledpipelines.
With pipelines, the standard output of one command is fed into the standard
input of another. Here is a very useful example:
ls -l | less
In this example, the output of thelscommand is
fed intoless. By using this"|
less"trick, we can make any command have scrolling output.
"|
less"
By connecting commands together, we can accomplish amazing feats. Here are
some examples to try:
Examples of commands used together with pipelinesCommandWhat it doesls -lt |headDisplays the 10 newest files in the current directory.du| sort -nrDisplays a list of directories and how
    much space they consume, sorted from the
    largest to the smallest.find. -type f -print |wc-lDisplays the total number of files in the
    current working directory and all of its
    subdirectories.
CommandWhat it does
ls -lt |headDisplays the 10 newest files in the current directory.
ls -lt |head
du| sort -nrDisplays a list of directories and how
    largest to the smallest.
du| sort -nr
find. -type f -print |wc-lDisplays the total number of files in the
find. -type f -print |wc-l

## Filters

One kind of program frequently used in pipelines is called afilter.
Filters take standard input and perform an operation upon it and send the
results to standard output. In this way, they can be combined to process
information in powerful ways. Here are some of the common programs that can act
as filters:
Common filter commandsProgramWhat it doessortSorts standard input then outputs the
    sorted result on standard output.uniqGiven a sorted stream of data from
    standard input, it removes duplicate lines of
    data (i.e., it makes sure that every line is
    unique).grepExamines each line of data it receives
    from standard input and outputs every line
    that contains a specified pattern of
    characters.fmtReads text from standard input, then
    outputs formatted text on standard
    output.prTakes text input from standard input and
    splits the data into pages with page breaks,
    headers and footers in preparation for
    printing.headOutputs the first few lines of its input.
    Useful for getting the header of a file.tailOutputs the last few lines of its input.
    Useful for things like getting the most
    recent entries from a log file.trTranslates characters. Can be used to
    perform tasks such as upper/lowercase
    conversions or changing line termination
    characters from one type to another (for
    example, converting DOS text files into Unix
    style text files).sedStream editor. Can perform more
    sophisticated text translations thantr.awkAn entire programming language designed
    for constructing filters. Extremely
    powerful.
ProgramWhat it does
sortSorts standard input then outputs the
    sorted result on standard output.
uniqGiven a sorted stream of data from
    unique).
uniq
grepExamines each line of data it receives
    characters.
grep
fmtReads text from standard input, then
    output.
fmt
prTakes text input from standard input and
    printing.
headOutputs the first few lines of its input.
    Useful for getting the header of a file.
head
tailOutputs the last few lines of its input.
    recent entries from a log file.
tail
trTranslates characters. Can be used to
    style text files).
sedStream editor. Can perform more
    sophisticated text translations thantr.
sed
awkAn entire programming language designed

## Performing tasks with pipelines

- Printing from the command line.Linux
    provides a program calledlprthat
    accepts standard input and sends it to the
    printer. It is often used with pipes and
    filters. Here are a couple of examples:cat poorly_formatted_report.txt | fmt | pr | lpr

cat unsorted_list_with_dupes.txt | sort | uniq | pr | lprIn the first example, we usecatto read the file and output it
    to standard output, which is piped into the
    standard input offmt.
    fmtformats the text into neat paragraphs
    and outputs it to standard output, which is
    piped into the standard input ofpr. prsplits the text neatly into
    pages and outputs it to standard output, which
    is piped into the standard input oflpr. lprtakes its standard input
    and sends it to the printer.The second example starts with an unsorted
    list of data with duplicate entries. First,catsends the list intosortwhich sorts it and feeds
    it intouniqwhich
    removes any duplicates. Nextprandlprare used to paginate and print the list.
Printing from the command line.Linux
    filters. Here are a couple of examples:
lpr
cat poorly_formatted_report.txt | fmt | pr | lpr

cat unsorted_list_with_dupes.txt | sort | uniq | pr | lpr
In the first example, we usecatto read the file and output it
    and sends it to the printer.
cat
fmt.
pr. pr
lpr. lpr
The second example starts with an unsorted

- Viewing the contents of tar filesOften you will see software distributed as agzipped tar file. This is a traditional
    Unix style tape archive file (created withtar) that has
    been compressed withgzip. You can
    recognize these files by their traditional file
    extensions, ".tar.gz" or ".tgz". You can use the
    following command to view the directory of such
    a file on a Linux system:tar tzvf name_of_file.tar.gz | less
Viewing the contents of tar filesOften you will see software distributed as agzipped tar file. This is a traditional
    a file on a Linux system:
tar
tar tzvf name_of_file.tar.gz | less

## Further Reading

- Chapter 6 ofThe Linux Command Linecovers
  this topic in more detail.

- Chapters 19 through 21 ofThe Linux Command Lineprovide an in-depth look
  at the text processing tools available in Linux.

- To learn more about the AWK programming language, consider theAWK adventure.

## Learning the shell - Lesson 8: Expansion


来源: https://linuxcommand.org/lc3_lts0080.php

# Expansion

Each time we type a command line and press the enter key, bash performs
several processes upon the text before it carries out our command. We have seen
a couple of cases of how a simple character sequence, for example “*”, can have
a lot of meaning to the shell. The process that makes this happen is calledexpansion. With expansion, we type something and it is expanded into
something else before the shell acts upon it. To demonstrate what we mean by
this, let's take a look at theechocommand.echois a shell builtin that performs a very simple task.
It prints out its text arguments on standard output:
echo
echo this is a test
That's pretty straightforward. Any argument passed toechogets displayed. Let's try
another example:
echo *
So what just happened? Why didn'techoprint “*”?
As we recall from our work with wildcards, the “*” character means match any
characters in a filename, but what we didn't see in our original discussion was
how the shell does that. The simple answer is that the shell expands the “*”
into something else (in this instance, the names of the files in the current
working directory) before theechocommand is
executed. When the enter key is pressed, the shell automatically expands any
qualifying characters on the command line before the command is carried out, so
theechocommand never saw the “*”, only its expanded
result. Knowing this, we can see thatechobehaved as
expected.

## Pathname Expansion

The mechanism by which wildcards work is calledpathname expansion. If we try some
of the techniques that we employed in our earlier lessons, we will see that they are really
expansions. Given a home directory that looks like this:
we could carry out the following expansions:
echo D*
and:
echo *s
or even:
echo [[:upper:]]*
and looking beyond our home directory:
echo /usr/*/share

## Tilde Expansion

As we recall from our introduction to thecdcommand, the tilde character (“~”) has a special meaning. When used at the
beginning of a word, it expands into the name of the home directory of the
named user, or if no user is named, the home directory of the current user:
echo ~
If user “foo” has an account, then:
echo ~foo

## Arithmetic Expansion

The shell allows arithmetic to be performed by expansion. This allow us to use the shell
prompt as a calculator:
echo $((2 + 2))
Arithmetic expansion uses the form:
$((expression))
where expression is an arithmetic expression consisting of values and arithmetic
operators.
Arithmetic expansion only supports integers (whole numbers, no decimals), but can
perform quite a number of different operations.
Spaces are not significant in arithmetic expressions and expressions may be nested. For
example, to multiply five squared by three:
echo $(($((5**2)) * 3))
Single parentheses may be used to group multiple subexpressions. With this technique,
we can rewrite the example above and get the same result using a single expansion
instead of two:
echo $(((5**2) * 3))
Here is an example using the division and remainder operators. Notice the effect of
integer division:
echo Five divided by two equals $((5/2))
echo with $((5%2)) left over.

## Brace Expansion

Perhaps the strangest expansion is calledbrace expansion. With it, we can create
multiple text strings from a pattern containing braces. Here's an example:
echo Front-{A,B,C}-Back
Patterns to be brace expanded may contain a leading portion called apreambleand a
trailing portion called apostscript. The brace expression itself may contain either a
comma-separated list of strings, or a range of integers or single characters. The pattern
may not contain embedded whitespace. Here is an example using a range of integers:
echo Number_{1..5}
A range of letters in reverse order:
echo {Z..A}
Brace expansions may be nested:
echo a{A{1,2},B{3,4}}b
So what is this good for? The most common application is to make lists of files or
directories to be created. For example, if we were a photographer and had a large
collection of images we wanted to organize into years and months, the first thing we
might do is create a series of directories named in numeric “Year-Month” format. This
way, the directory names will sort in chronological order. We could type out a complete
list of directories, but that's a lot of work and it's error-prone too. Instead, we could do
mkdir Photos
cd Photos
mkdir {2017..2019}-{01..12}
Pretty slick!

## Parameter Expansion

We're only going to touch briefly onparameter expansionin this lesson, but we'll be
covering it more later. It's a feature that is more useful in shell scripts than directly
on the command line. Many of its capabilities have to do with the system's ability to
store small chunks of data and to give each chunk a name. Many such chunks, more
properly calledvariables, are available for our examination. For example, the variable
named “USER” contains our user name. To invoke parameter expansion and reveal the
contents of USER we would do this:
echo $USER
To see a list of available variables, try this:
printenv | less
With other types of expansion, if we mistype a pattern, the
expansion will not take place and the echo command will simply display the mistyped
pattern. With parameter expansion, if we misspell the name of a variable, the expansion
will still take place, but will result in an empty string:
echo $SUER

## Command Substitution

Command substitutionallows us to use the output of a command as an expansion:
echo $(ls)
A clever one goes something like this:
ls -l $(which cp)
Here we passed the results ofwhich cpas an
argument to thelscommand, thereby getting the
listing of of thecpprogram without having to know
its full pathname. We are not limited to just simple commands. Entire pipelines
can be used (only partial output shown):
which cp
file $(ls /usr/bin/* | grep bin/zip)
In this example, the results of the pipeline became the argument list of the file
There is an alternate syntax for command substitution in older shell programs which is
also supported inbash. It uses back-quotes instead of the dollar sign and parentheses:
ls -l `which cp`

## Quoting

Now that we've seen how many ways the shell can perform expansions, it's time to learn
how we can control it. Take for example:
echo this is a     test
or:
[me@linuxbox ~]$ echo The total is $100.00
In the first example, word-splitting by the shell removed extra whitespace
from the echo command's list of arguments. In the second example, parameter
expansion substituted an empty string for the value of “$1” because it was an
undefined variable. The shell provides a mechanism calledquotingto
selectively suppress unwanted expansions.

## Double Quotes

The first type of quoting we will look at is double quotes. If we place text inside double
quotes, all the special characters used by the shell lose their special meaning and are
treated as ordinary characters. The exceptions are “$”, “\” (backslash), and “`” (back-
quote). This means that word-splitting, pathname expansion, tilde expansion, and brace
expansion are suppressed, but parameter expansion, arithmetic expansion, and command
substitution are still carried out. Using double quotes, we can cope with filenames
containing embedded spaces. Imagine we were the unfortunate victim of a file calledtwo words.txt. If we tried to use this on the command line, word-splitting would
cause this to be treated as two separate arguments rather than the desired single argument:
two words.txt
ls -l two words.txt
By using double quotes, we can stop the word-splitting and get the desired result; further, we
can even repair the damage:
ls -l "two words.txt"
mv "two words.txt" two_words.txt
There! Now we don't have to keep typing those pesky double quotes.
Remember, parameter expansion, arithmetic expansion, and command substitution still
take place within double quotes:
echo "$USER $((2+2)) $(cal)"
We should take a moment to look at the effect of double quotes on command substitution.
First let's look a little deeper at how word splitting works. In our earlier example, we saw
how word-splitting appears to remove extra spaces in our text:
echo this is a     test
By default, word-splitting looks for the presence of spaces, tabs, and newlines (linefeed
characters) and treats them as delimiters between words. This means that unquoted
spaces, tabs, and newlines are not considered to be part of the text. They only serve as
separators. Since they separate the words into different arguments, our example
command line contains a command followed by four distinct arguments. If we add
double quotes:
echo "this is a     test"
word-splitting is suppressed and the embedded spaces are not treated as delimiters, rather
they become part of the argument. Once the double quotes are added, our command line
contains a command followed by a single argument.
The fact that newlines are considered delimiters by the word-splitting mechanism causes
an interesting, albeit subtle, effect on command substitution. Consider the following:
echo $(cal)
echo "$(cal)"
In the first instance, the unquoted command substitution resulted in a command line
containing thirty-eight arguments. In the second, a command line with one argument that
includes the embedded spaces and newlines.

## Single Quotes

When we need to suppress all expansions, we use single quotes. Here is a comparison of
unquoted, double quotes, and single quotes:
echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER"
echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER'
As we can see, with each succeeding level of quoting, more and more of the expansions
are suppressed.

## Escaping Characters

Sometimes we only want to quote a single character. To do this, we can precede a
character with a backslash, which in this context is called theescape character. Often
this is done inside double quotes to selectively prevent an expansion:
echo "The balance for user $USER is: \$5.00"
It is also common to use escaping to eliminate the special meaning of a character in a
filename. For example, it is possible to use characters in filenames that normally have
special meaning to the shell. These would include “$”, “!”, “&”, “ “, and others. To
include a special character in a filename we can to this:
mv bad\&filename good_filename
To allow a backslash character to appear, escape it by typing “\\”. Note that within single
quotes, the backslash loses its special meaning and is treated as an ordinary character.

## More Backslash Tricks

If we look at themanpages for any program
written by theGNU project, we will see that
in addition to command line options consisting of a dash and a single letter,
there are also long option names that begin with two dashes.  For example, the
following are equivalent:
Why do they support both? The short form is for lazy typists on the command
line and the long form is mostly for scripts though some options may only be
available in long form.  Sometimes it is better to use a long option when the
option is obscure or we want to document more clearly what an option is. This
is especially useful when writing scripts where maximum readability is
desired, and besides, anytime we can save ourselves a trip to the man page is a
good thing.As we might suspect, using the long form options can make a single command
line very long.  To combat this problem, we can use a backslash to get the
shell to ignore a newline character like this:ls -l \
   --reverse \
   --human-readable \
   --full-timeUsing the backslash in this way allows us to embed newlines in our command.
Note that for this trick to work, the newline must be typed immediately after
the backslash. If we put a space after the backslash, the space will be
ignored, not the newline. Backslashes are also used to insert special
characters into our text. These are calledbackslash escape characters.
Here are the common ones:Escape CharacterNamePossible Uses\nnewlineAdding blank lines to text\ttabInserting horizontal tabs to text\aalertMakes our terminal beep\\backslashInserts a backslash\fformfeedSending this to our printer ejects the pageThe use of the backslash escape characters is very common. This idea first
appeared in the C programming language. Today, the shell, C++, Perl, python,
awk, tcl, and many other programming languages use this concept. Using theechocommand with the -e option will allow us to
demonstrate:[me@linuxbox me]$echo -e "Inserting several blank lines\n\n\n"Inserting several blank lines

[me@linuxbox me]$echo -e "Words\tseparated\tby\thorizontal\ttabs."Words separated   by  horizontal  tabs
[me@linuxbox me]$echo -e "\aMy computer went \"beep\"."My computer went "beep".
[me@linuxbox me]$echo -e "DEL C:\\WIN2K\\LEGACY_OS.EXE"DEL C:\WIN2K\LEGACY_OS.EXETop|Previous|Contents|Next© 2000-2026,William E. Shotts, Jr.Verbatim copying and distribution of this entire article is
permitted in any medium, provided this copyright notice is preserved.Linux® is a registered trademark of Linus Torvalds.
As we might suspect, using the long form options can make a single command
shell to ignore a newline character like this:
Using the backslash in this way allows us to embed newlines in our command.
Here are the common ones:
Escape CharacterNamePossible Uses\nnewlineAdding blank lines to text\ttabInserting horizontal tabs to text\aalertMakes our terminal beep\\backslashInserts a backslash\fformfeedSending this to our printer ejects the page
Escape CharacterNamePossible Uses
\nnewlineAdding blank lines to text
\ttabInserting horizontal tabs to text
\aalertMakes our terminal beep
\\backslashInserts a backslash
\fformfeedSending this to our printer ejects the page
The use of the backslash escape characters is very common. This idea first
demonstrate:
echo -e "Inserting several blank lines\n\n\n"
echo -e "Words\tseparated\tby\thorizontal\ttabs."
echo -e "\aMy computer went \"beep\"."
echo -e "DEL C:\\WIN2K\\LEGACY_OS.EXE"

```

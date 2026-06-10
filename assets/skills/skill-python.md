---
id: skill-python
title: Python Knowledge
source: https://docs.python.org/3/tutorial/
crawled: 2026-06-11
pages: 15

# Python 知识库
> 爬取来源: https://docs.python.org/3/tutorial/ | 15 页内容

## The Python Tutorial — Python 3.14.6 documentation
来源: https://docs.python.org/3/tutorial/
### Navigation

- index
- modules|
- next|
- previous|
- Python»
- 3.14.6 Documentation»
- The Python Tutorial
- ThemeAutoLightDark|

# The Python TutorialÂ¶

Tip
This tutorial is designed forprogrammersthat are new to the Python language,notbeginnerswho are new to programming.
Python is an easy to learn, powerful programming language. It has efficient
high-level data structures and a simple but effective approach to
object-oriented programming. Pythonâs elegant syntax and dynamic typing,
together with its interpreted nature, make it an ideal language for scripting
and rapid application development in many areas on most platforms.
The Python interpreter and the extensive standard library are freely available
in source or binary form for all major platforms from the Python website,https://www.python.org/, and may be freely distributed. The same site also
contains distributions of and pointers to many free third party Python modules,
programs and tools, and additional documentation.
The Python interpreter is easily extended with new functions and data types
implemented in C or C++ (or other languages callable from C). Python is also
suitable as an extension language for customizable applications.
This tutorial introduces the reader informally to the basic concepts and
features of the Python language and system. Be aware that it expects you to
have a basic understanding of programming in general. It helps to have a Python
interpreter handy for hands-on experience, but all examples are self-contained,
so the tutorial can be read off-line as well.
For a description of standard objects and modules, seeThe Python Standard Library.The Python Language Referencegives a more formal definition of the language.  To write
extensions in C or C++, readExtending and Embedding the Python InterpreterandPython/C API reference manual. There are also several books covering Python in depth.
This tutorial does not attempt to be comprehensive and cover every single
feature, or even every commonly used feature. Instead, it introduces many of
Pythonâs most noteworthy features, and will give you a good idea of the
languageâs flavor and style. After reading it, you will be able to read and
write Python modules and programs, and you will be ready to learn more about the
various Python library modules described inThe Python Standard Library.
TheGlossaryis also worth going through.
- 1. Whetting Your Appetite
- 2. Using the Python Interpreter2.1. Invoking the Interpreter2.1.1. Argument Passing2.1.2. Interactive Mode2.2. The Interpreter and Its Environment2.2.1. Source Code Encoding
- 2.1. Invoking the Interpreter2.1.1. Argument Passing2.1.2. Interactive Mode
- 2.1.1. Argument Passing
- 2.1.2. Interactive Mode
- 2.2. The Interpreter and Its Environment2.2.1. Source Code Encoding
- 2.2.1. Source Code Encoding
- 3. An Informal Introduction to Python3.1. Using Python as a Calculator3.1.1. Numbers3.1.2. Text3.1.3. Lists3.2. First Steps Towards Programming
- 3.1. Using Python as a Calculator3.1.1. Numbers3.1.2. Text3.1.3. Lists
- 3.1.1. Numbers
- 3.1.2. Text
- 3.1.3. Lists
- 3.2. First Steps Towards Programming
- 4. More Control Flow Tools4.1.ifStatements4.2.forStatements4.3. Therange()Function4.4.breakandcontinueStatements4.5.elseClauses on Loops4.6.passStatements4.7.matchStatements4.8. Defining Functions4.9. More on Defining Functions4.9.1. Default Argument Values4.9.2. Keyword Arguments4.9.3. Special parameters4.9.3.1. Positional-or-Keyword Arguments4.9.3.2. Positional-Only Parameters4.9.3.3. Keyword-Only Arguments4.9.3.4. Function Examples4.9.3.5. Recap4.9.4. Arbitrary Argument Lists4.9.5. Unpacking Argument Lists4.9.6. Lambda Expressions4.9.7. Documentation Strings4.9.8. Function Annotations4.10. Intermezzo: Coding Style
- 4.1.ifStatements
- 4.2.forStatements
```
for
- 4.3. Therange()Function
range()
- 4.4.breakandcontinueStatements
break
continue
- 4.5.elseClauses on Loops
else
- 4.6.passStatements
pass
- 4.7.matchStatements
match
- 4.8. Defining Functions
- 4.9. More on Defining Functions4.9.1. Default Argument Values4.9.2. Keyword Arguments4.9.3. Special parameters4.9.3.1. Positional-or-Keyword Arguments4.9.3.2. Positional-Only Parameters4.9.3.3. Keyword-Only Arguments4.9.3.4. Function Examples4.9.3.5. Recap4.9.4. Arbitrary Argument Lists4.9.5. Unpacking Argument Lists4.9.6. Lambda Expressions4.9.7. Documentation Strings4.9.8. Function Annotations
- 4.9.1. Default Argument Values
- 4.9.2. Keyword Arguments
- 4.9.3. Special parameters4.9.3.1. Positional-or-Keyword Arguments4.9.3.2. Positional-Only Parameters4.9.3.3. Keyword-Only Arguments4.9.3.4. Function Examples4.9.3.5. Recap
- 4.9.3.1. Positional-or-Keyword Arguments
- 4.9.3.2. Positional-Only Parameters
- 4.9.3.3. Keyword-Only Arguments
- 4.9.3.4. Function Examples
- 4.9.3.5. Recap
- 4.9.4. Arbitrary Argument Lists
- 4.9.5. Unpacking Argument Lists
- 4.9.6. Lambda Expressions
- 4.9.7. Documentation Strings
- 4.9.8. Function Annotations
- 4.10. Intermezzo: Coding Style
- 5. Data Structures5.1. More on Lists5.1.1. Using Lists as Stacks5.1.2. Using Lists as Queues5.1.3. List Comprehensions5.1.4. Nested List Comprehensions5.2. Thedelstatement5.3. Tuples and Sequences5.4. Sets5.5. Dictionaries5.6. Looping Techniques5.7. More on Conditions5.8. Comparing Sequences and Other Types
- 5.1. More on Lists5.1.1. Using Lists as Stacks5.1.2. Using Lists as Queues5.1.3. List Comprehensions5.1.4. Nested List Comprehensions
- 5.1.1. Using Lists as Stacks
- 5.1.2. Using Lists as Queues
- 5.1.3. List Comprehensions
- 5.1.4. Nested List Comprehensions
- 5.2. Thedelstatement
del
- 5.3. Tuples and Sequences
- 5.4. Sets
- 5.5. Dictionaries
- 5.6. Looping Techniques
- 5.7. More on Conditions
- 5.8. Comparing Sequences and Other Types
- 6. Modules6.1. More on Modules6.1.1. Executing modules as scripts6.1.2. The Module Search Path6.1.3. âCompiledâ Python files6.2. Standard Modules6.3. Thedir()Function6.4. Packages6.4.1. Importing * From a Package6.4.2. Intra-package References6.4.3. Packages in Multiple Directories
- 6.1. More on Modules6.1.1. Executing modules as scripts6.1.2. The Module Search Path6.1.3. âCompiledâ Python files
- 6.1.1. Executing modules as scripts
- 6.1.2. The Module Search Path
- 6.1.3. âCompiledâ Python files
- 6.2. Standard Modules
- 6.3. Thedir()Function
dir()
- 6.4. Packages6.4.1. Importing * From a Package6.4.2. Intra-package References6.4.3. Packages in Multiple Directories
- 6.4.1. Importing * From a Package
- 6.4.2. Intra-package References
- 6.4.3. Packages in Multiple Directories
- 7. Input and Output7.1. Fancier Output Formatting7.1.1. Formatted String Literals7.1.2. The String format() Method7.1.3. Manual String Formatting7.1.4. Old string formatting7.2. Reading and Writing Files7.2.1. Methods of File Objects7.2.2. Saving structured data withjson
- 7.1. Fancier Output Formatting7.1.1. Formatted String Literals7.1.2. The String format() Method7.1.3. Manual String Formatting7.1.4. Old string formatting
- 7.1.1. Formatted String Literals
- 7.1.2. The String format() Method
- 7.1.3. Manual String Formatting
- 7.1.4. Old string formatting
- 7.2. Reading and Writing Files7.2.1. Methods of File Objects7.2.2. Saving structured data withjson
- 7.2.1. Methods of File Objects
- 7.2.2. Saving structured data withjson
json
- 8. Errors and Exceptions8.1. Syntax Errors8.2. Exceptions8.3. Handling Exceptions8.4. Raising Exceptions8.5. Exception Chaining8.6. User-defined Exceptions8.7. Defining Clean-up Actions8.8. Predefined Clean-up Actions8.9. Raising and Handling Multiple Unrelated Exceptions8.10. Enriching Exceptions with Notes
- 8.1. Syntax Errors
- 8.2. Exceptions
- 8.3. Handling Exceptions
- 8.4. Raising Exceptions
- 8.5. Exception Chaining
- 8.6. User-defined Exceptions
- 8.7. Defining Clean-up Actions
- 8.8. Predefined Clean-up Actions
- 8.9. Raising and Handling Multiple Unrelated Exceptions
- 8.10. Enriching Exceptions with Notes
- 9. Classes9.1. A Word About Names and Objects9.2. Python Scopes and Namespaces9.2.1. Scopes and Namespaces Example9.3. A First Look at Classes9.3.1. Class Definition Syntax9.3.2. Class Objects9.3.3. Instance Objects9.3.4. Method Objects9.3.5. Class and Instance Variables9.4. Random Remarks9.5. Inheritance9.5.1. Multiple Inheritance9.6. Private Variables9.7. Odds and Ends9.8. Iterators9.9. Generators9.10. Generator Expressions
- 9.1. A Word About Names and Objects
- 9.2. Python Scopes and Namespaces9.2.1. Scopes and Namespaces Example
- 9.2.1. Scopes and Namespaces Example
- 9.3. A First Look at Classes9.3.1. Class Definition Syntax9.3.2. Class Objects9.3.3. Instance Objects9.3.4. Method Objects9.3.5. Class and Instance Variables
- 9.3.1. Class Definition Syntax
- 9.3.2. Class Objects
- 9.3.3. Instance Objects
- 9.3.4. Method Objects
- 9.3.5. Class and Instance Variables
- 9.4. Random Remarks
- 9.5. Inheritance9.5.1. Multiple Inheritance
- 9.5.1. Multiple Inheritance
- 9.6. Private Variables
- 9.7. Odds and Ends
- 9.8. Iterators
- 9.9. Generators
- 9.10. Generator Expressions
- 10. Brief tour of the standard library10.1. Operating system interface10.2. File wildcards10.3. Command-line arguments10.4. Error output redirection and program termination10.5. String pattern matching10.6. Mathematics10.7. Internet access10.8. Dates and times10.9. Data compression10.10. Performance measurement10.11. Quality control10.12. Batteries included
- 10.1. Operating system interface
- 10.2. File wildcards
- 10.3. Command-line arguments
- 10.4. Error output redirection and program termination
- 10.5. String pattern matching
- 10.6. Mathematics
- 10.7. Internet access
- 10.8. Dates and times
- 10.9. Data compression
- 10.10. Performance measurement
- 10.11. Quality control
- 10.12. Batteries included
- 11. Brief tour of the standard library â part II11.1. Output formatting11.2. Templating11.3. Working with binary data record layouts11.4. Multi-threading11.5. Logging11.6. Weak references11.7. Tools for working with lists11.8. Decimal floating-point arithmetic
- 11.1. Output formatting
- 11.2. Templating
- 11.3. Working with binary data record layouts
- 11.4. Multi-threading
- 11.5. Logging
- 11.6. Weak references
- 11.7. Tools for working with lists
- 11.8. Decimal floating-point arithmetic
- 12. Virtual Environments and Packages12.1. Introduction12.2. Creating Virtual Environments12.3. Managing Packages with pip
- 12.1. Introduction
- 12.2. Creating Virtual Environments
- 12.3. Managing Packages with pip
- 13. What Now?
- 14. Interactive Input Editing and History Substitution14.1. Tab Completion and History Editing14.2. Alternatives to the Interactive Interpreter
- 14.1. Tab Completion and History Editing
- 14.2. Alternatives to the Interactive Interpreter
- 15. Floating-Point Arithmetic:  Issues and Limitations15.1. Representation Error
- 15.1. Representation Error
- 16. Appendix16.1. Interactive Mode16.1.1. Error Handling16.1.2. Executable Python Scripts16.1.3. The Interactive Startup File16.1.4. The Customization Modules
- 16.1. Interactive Mode16.1.1. Error Handling16.1.2. Executable Python Scripts16.1.3. The Interactive Startup File16.1.4. The Customization Modules
- 16.1.1. Error Handling
- 16.1.2. Executable Python Scripts
- 16.1.3. The Interactive Startup File
- 16.1.4. The Customization Modules

#### Previous topic

Changelog

#### Next topic

1.Whetting Your Appetite

### This page

- Report a bug
- Improve this page
- Show source

### Navigation
## Changelog — Python 3.14.6 documentation
来源: https://docs.python.org/3/whatsnew/changelog.html
### Navigation

- Whatâs New in Python»
- Changelog

# ChangelogÂ¶
## Python nextÂ¶

Release date: XXXX-XX-XX

### LibraryÂ¶

- gh-143988: Fixed crashes insocket.socket.sendmsg()andsocket.socket.recvmsg_into()that could occur if buffer sequences
are concurrently mutated.
gh-143988: Fixed crashes insocket.socket.sendmsg()andsocket.socket.recvmsg_into()that could occur if buffer sequences
socket.socket.sendmsg()
socket.socket.recvmsg_into()

### Core and BuiltinsÂ¶

- gh-150988: Fix a reference leak inOSErrorwhen attributes are set
beforesuper().__init__().
gh-150988: Fix a reference leak inOSErrorwhen attributes are set
OSError
super().__init__()

## Python 3.14.6 finalÂ¶

Release date: 2026-06-10

### SecurityÂ¶

- gh-151159: Update Android and iOS installers to use OpenSSL 3.5.7.
gh-151159: Update Android and iOS installers to use OpenSSL 3.5.7.
- gh-150599: Fix a possible stack buffer overflow inbz2when abz2.BZ2Decompressoris reused after a decompression error. The
decompressor now becomes unusable after libbz2 reports an error.
gh-150599: Fix a possible stack buffer overflow inbz2when abz2.BZ2Decompressoris reused after a decompression error. The
bz2
bz2.BZ2Decompressor
- gh-149835:shutil.move()now resolves symlinks viaos.path.realpath()when checking whether the destination is inside
the source directory, preventing a symlink-based bypass of that guard.
gh-149835:shutil.move()now resolves symlinks viaos.path.realpath()when checking whether the destination is inside
shutil.move()
os.path.realpath()
- gh-149698: Update bundledlibexpatto
version 2.8.1 for the fix forCVE 2026-45186.
gh-149698: Update bundledlibexpatto
- gh-87451: Theftplibmoduleâs undocumentedftpcpfunction no
longer trusts the IPv4 address value returned from the source server in
response to thePASVcommand by default, completing the fix for
CVE-2021-4189.  As withftplib.FTP, the former behavior can be
re-enabled by setting thetrust_server_pasv_ipv4_addressattribute on
the sourceftplib.FTPinstance toTrue.  Thanks to Qi Deng at
Aurascape AI for the report.
gh-87451: Theftplibmoduleâs undocumentedftpcpfunction no
ftplib
ftpcp
PASV
ftplib.FTP
trust_server_pasv_ipv4_address
True
- gh-149486:tarfile.data_filter()now validates link targets using
the same normalised value that is written to disk, strips trailing
separators from the member name when resolving a symlinkâs directory, and
rejects link members that would replace the destination directory itself.
This closes several path-traversal bypasses of thedataextraction
filter.
gh-149486:tarfile.data_filter()now validates link targets using
tarfile.data_filter()
data
- gh-149079: Fix a potential denial of service inunicodedata.normalize(). The canonical ordering step of Unicode
normalization used a quadratic-time insertion sort for reordering
combining characters, which could be exploited with crafted input
containing many combining characters in non-canonical order. Replaced with
a linear-time counting sort for long runs.
gh-149079: Fix a potential denial of service inunicodedata.normalize(). The canonical ordering step of Unicode
unicodedata.normalize()
- gh-149018: Improved protection against XML hash-flooding attacks inxml.parsers.expatandxml.etree.ElementTreewhen Python is
compiled with libExpat 2.8.0 or later.
gh-149018: Improved protection against XML hash-flooding attacks inxml.parsers.expatandxml.etree.ElementTreewhen Python is
xml.parsers.expat
xml.etree.ElementTree

### Core and BuiltinsÂ¶

- gh-151112: Fix a crash in the compiler that could occur when running out
of memory.
gh-151112: Fix a crash in the compiler that could occur when running out
- gh-151126: Fix a crash, when thereâs no memory left on a device, which
happened in:code compilation -_winapi.CreateProcess()Now these places raise properMemoryErrorerrors.
gh-151126: Fix a crash, when thereâs no memory left on a device, which
happened in:
- code compilation -_winapi.CreateProcess()
code compilation -_winapi.CreateProcess()
_winapi.CreateProcess()
Now these places raise properMemoryErrorerrors.
MemoryError
- gh-150700: Fix aSystemErrorwhen compiling a class-scope
comprehension containing alambdathat references__class__,__classdict__, or__conditional_annotations__. Patch by Bartosz
SÅawecki.
gh-150700: Fix aSystemErrorwhen compiling a class-scope
SystemError
lambda
__class__
__classdict__
__conditional_annotations__
- gh-150633: Fix the frozen importer accepting module names with embedded
null bytes, which caused it to bypass thesys.modulescache and
create duplicate module objects.
gh-150633: Fix the frozen importer accepting module names with embedded
sys.modules
- gh-148613: Fix a data race in the free-threaded build betweengc.set_threshold()and garbage collection scheduling during object
allocation.
gh-148613: Fix a data race in the free-threaded build betweengc.set_threshold()and garbage collection scheduling during object
gc.set_threshold()
- gh-149156: Fix an intermittent crash afteros.fork()when perf
trampoline profiling is enabled and the child returns through trampoline
frames inherited from the parent process.
gh-149156: Fix an intermittent crash afteros.fork()when perf
os.fork()
- gh-149449: Fix a use-after-free crash when theunicodedatamodule
was removed fromsys.modulesand garbage-collected between calls
that decode\N{...}escapes or use thenamereplacecodec error
handler.
gh-149449: Fix a use-after-free crash when theunicodedatamodule
unicodedata
\N{...}
namereplace
- gh-150207: Fix a crash when a memory allocation fails during tokenizer
initialization. A properMemoryErroris now raised instead.
gh-150207: Fix a crash when a memory allocation fails during tokenizer
- gh-150107:asyncio:sendfile()andsock_sendfile()event
loop methods now callfile.seek(offset)iffilehas aseek()method, even ifoffsetis0(default value).
gh-150107:asyncio:sendfile()andsock_sendfile()event
asyncio
sendfile()
sock_sendfile()
file.seek(offset)
seek()
- gh-150146: Fix a crash on a complex type variable substitution.fromtypingimportTypeVar;memoryview[TypeVar("")][*typing.Mapping[...,...]]used to fail due to missingNULLcheck on_unpack_argsC
function call.
gh-150146: Fix a crash on a complex type variable substitution.
fromtypingimportTypeVar;memoryview[TypeVar("")][*typing.Mapping[...,...]]used to fail due to missingNULLcheck on_unpack_argsC
fromtypingimportTypeVar;memoryview[TypeVar("")][*typing.Mapping[...,...]]
NULL
_unpack_args
- gh-149590: Fix crash when faulthandler is imported more than once.
gh-149590: Fix crash when faulthandler is imported more than once.
- gh-149816: Fix a race condition in_PyBytes_FromListin free-threading
mode.
gh-149816: Fix a race condition in_PyBytes_FromListin free-threading
_PyBytes_FromList
- gh-149816: Fix a race condition inmemoryviewwith
free-threading.
gh-149816: Fix a race condition inmemoryviewwith
memoryview
- gh-149805: Fix aSystemErrorwhen compiling a compiling__classdict__class annotation. Found by OSS-Fuzz in#512907042.
gh-149805: Fix aSystemErrorwhen compiling a compiling__classdict__class annotation. Found by OSS-Fuzz in#512907042.
- gh-149738:sqlite3: Disallow removingrow_factoryandtext_factoryattributes of a connection to prevent a crash on a query.
gh-149738:sqlite3: Disallow removingrow_factoryandtext_factoryattributes of a connection to prevent a crash on a query.
sqlite3
row_factory
text_factory
- gh-139808: Add branch protections for AArch64 (BTI/PAC) in assembly code
used by-Xperf_jit(Linux perf profiler integration).
gh-139808: Add branch protections for AArch64 (BTI/PAC) in assembly code
-Xperf_jit
- gh-148450: Fixabc.register()so it invalidates type version tags for
registered classes.
gh-148450: Fixabc.register()so it invalidates type version tags for
abc.register()

### LibraryÂ¶

- gh-151039: Fix a crash when staticdatetimetypes outlive the_datetimemodule.
gh-151039: Fix a crash when staticdatetimetypes outlive the_datetimemodule.
datetime
_datetime
- gh-150913: Fixsqlite3.Blobslice assignment to raiseTypeErrorandIndexErrorfor type and size mismatches
respectively, even when the target slice is empty.
gh-150913: Fixsqlite3.Blobslice assignment to raiseTypeErrorandIndexErrorfor type and size mismatches
sqlite3.Blob
TypeError
IndexError
- gh-143008: Fix race conditions when re-initializing aio.TextIOWrapperobject.
gh-143008: Fix race conditions when re-initializing aio.TextIOWrapperobject.
io.TextIOWrapper
- gh-150750: Fix a race condition incollections.deque.index()with
gh-150750: Fix a race condition incollections.deque.index()with
collections.deque.index()
- gh-150685: Update bundled pip to 26.1.2
gh-150685: Update bundled pip to 26.1.2
- gh-150406: Fix a possible crash occurring duringsocketmodule
initialization when the system is out of memory on platforms without a
reentrantgethostbyname.
gh-150406: Fix a possible crash occurring duringsocketmodule
socket
gethostbyname
- gh-150372:readline: Fix a potential crash during tab completion
caused by an out-of-memory error during module initialization.
gh-150372:readline: Fix a potential crash during tab completion
readline
- gh-150157: Fix a crash in free-threaded builds that occurs when pickling
by name objects without a__module__attribute whilesys.modulesis concurrently being modified.
gh-150157: Fix a crash in free-threaded builds that occurs when pickling
__module__
- gh-150175: Fix race condition inunittest.mock.ThreadingMockwhere concurrent calls could lose increments tocall_countand other
attributes due to a missing lock in_increment_mock_call.
gh-150175: Fix race condition inunittest.mock.ThreadingMockwhere concurrent calls could lose increments tocall_countand other
unittest.mock.ThreadingMock
call_count
_increment_mock_call
- gh-84353: Preserve non-UTF-8 encoded filenames when appending to azipfile.ZipFile.  Previously, non-ASCII names stored in a legacy
encoding (without the UTF-8 flag bit set) could be corrupted when the
central directory was rewritten: they were decoded as cp437 and then
re-stored as UTF-8.
gh-84353: Preserve non-UTF-8 encoded filenames when appending to azipfile.ZipFile.  Previously, non-ASCII names stored in a legacy
zipfile.ZipFile
- gh-149816: Fix race condition inssl.SSLContext.sni_callback
gh-149816: Fix race condition inssl.SSLContext.sni_callback
ssl.SSLContext.sni_callback
- gh-149995: Update various docstrings intyping.
gh-149995: Update various docstrings intyping.
typing
- gh-88726: Theemailpackage now uses standard MIME charset names
âgb2312â and âbig5â instead of non-standard names âeucgb2312_cnâ and
âbig5_twâ.
gh-88726: Theemailpackage now uses standard MIME charset names
email
- gh-149571: Fix the C implementation ofxml.etree.ElementTree.Element.itertext(): it no longer emits text
for comments and processing instructions.
gh-149571: Fix the C implementation ofxml.etree.ElementTree.Element.itertext(): it no longer emits text
xml.etree.ElementTree.Element.itertext()
- gh-149921: Fix reference leaks in error paths of the_interpchannelsand_interpqueuesextension modules.
gh-149921: Fix reference leaks in error paths of the_interpchannelsand_interpqueuesextension modules.
_interpchannels
_interpqueues
- gh-149816: Fix a race condition in_random.Random.__init__method in
free-threading mode.
gh-149816: Fix a race condition in_random.Random.__init__method in
_random.Random.__init__
- gh-149801: Add IANA registered names and aliases with leading zeros before
number (like IBM00858, CP00858, IBM01140, CP01140) for corresponding
codecs.
gh-149801: Add IANA registered names and aliases with leading zeros before
- gh-149701: Fix bad return code from Lib/venv/bin/activate if hashing is
disabled
gh-149701: Fix bad return code from Lib/venv/bin/activate if hashing is
- gh-112821: In the REPL, autocompletion might run arbitrary code in the
getter of a descriptor. If that getter raised an exception, autocompletion
would fail to present any options for the entire object.  Autocompletion
now works as expected for these objects.
gh-112821: In the REPL, autocompletion might run arbitrary code in the
- gh-149489: FixElementTreeserialization to HTML. The
content of elements âxmpâ, âiframeâ, ânoembedâ, ânoframesâ, and
âplaintextâ is no longer escaped. The âplaintextâ element no longer have
the closing tag.
gh-149489: FixElementTreeserialization to HTML. The
ElementTree
- gh-149231: Intomllib, the number of parts in TOML keys is now
limited.
gh-149231: Intomllib, the number of parts in TOML keys is now
tomllib
- gh-149046:io: Fixio.StringIOserialization: no longer
callstr(obj)onstrsubclasses. Patch by Thomas Kowalski.
gh-149046:io: Fixio.StringIOserialization: no longer
io.StringIO
str(obj)
str
- gh-148954: Fix XML injection vulnerability inxmlrpc.client.dumps()where themethodnamewas not being escaped before interpolation into
the XML body.
gh-148954: Fix XML injection vulnerability inxmlrpc.client.dumps()where themethodnamewas not being escaped before interpolation into
xmlrpc.client.dumps()
methodname
- gh-148441:xml.parsers.expat: prevent a crash inCharacterDataHandler()when the
character data size exceeds the parserâsbuffersize.
gh-148441:xml.parsers.expat: prevent a crash inCharacterDataHandler()when the
CharacterDataHandler()
buffersize
- gh-146452: Fix segfault inpicklewhen pickling a dictionary
concurrently mutated by another thread in the free-threaded build.
gh-146452: Fix segfault inpicklewhen pickling a dictionary
pickle
- gh-142831: Fix a crash in thejsonmodule where a use-after-free
could occur if the object being encoded is modified during serialization.
gh-142831: Fix a crash in thejsonmodule where a use-after-free
- gh-90949: AddSetBillionLaughsAttackProtectionActivationThreshold()andSetBillionLaughsAttackProtectionMaximumAmplification()toxmlparserobjects to tune protections
againstbillion laughsattacks. Patch by
BÃ©nÃ©dikt Tran.
gh-90949: AddSetBillionLaughsAttackProtectionActivationThreshold()andSetBillionLaughsAttackProtectionMaximumAmplification()toxmlparserobjects to tune protections
SetBillionLaughsAttackProtectionActivationThreshold()
SetBillionLaughsAttackProtectionMaximumAmplification()
- gh-134261: zip: On reproducible builds, ZipFile uses UTC instead of the
local time when writing file datetimes to avoid underflows.
gh-134261: zip: On reproducible builds, ZipFile uses UTC instead of the
- gh-128110: Fix bug in the parsing ofemailaddress headers that
could result in extraneous spaces in the decoded text when using a modern
email policy. Space between pairs of adjacentRFC 2047encoded-words is
now ignored, per section 6.2 (and consistent with existing parsing of
unstructured headers likeSubject).
gh-128110: Fix bug in the parsing ofemailaddress headers that
- gh-107398: Fixtarfilestream mode exception when process the file
with the gzip extra field.
gh-107398: Fixtarfilestream mode exception when process the file
tarfile
- gh-123853: Update the table of Windows language code identifiers (LCIDs)
used bylocale.getdefaultlocale()on Windows to protocol version
16.0 (2024-04-23).
gh-123853: Update the table of Windows language code identifiers (LCIDs)
locale.getdefaultlocale()
- gh-91099:imaplib.IMAP4.login()now raises exceptions withstrinstead ofbytes. Patch by Florian Best.
gh-91099:imaplib.IMAP4.login()now raises exceptions withstrinstead ofbytes. Patch by Florian Best.
imaplib.IMAP4.login()
bytes

### DocumentationÂ¶

- gh-150319: Generic builtin and standard library types now document the
meaning of their type parameters.
gh-150319: Generic builtin and standard library types now document the
- gh-109503: Fix documentation forshutil.move()on usage ofos.rename()since nonatomic move might be used even if the files are
on the same filesystem. Patch by Fang Li
gh-109503: Fix documentation forshutil.move()on usage ofos.rename()since nonatomic move might be used even if the files are
os.rename()

### TestsÂ¶

- gh-151130: Add more tests forPyWeakref_*C API.
gh-151130: Add more tests forPyWeakref_*C API.
PyWeakref_*
- gh-149776: Fix test_socket on Linux kernel 7.1 and newer: skip UDP Lite
tests if itâs not supported. Patch by Victor Stinner.
gh-149776: Fix test_socket on Linux kernel 7.1 and newer: skip UDP Lite

### BuildÂ¶

- gh-148294: Corrected the use ofAC_PATH_TOOLinconfigure.acto
allow a C++ compiler to be found onPATH.
gh-148294: Corrected the use ofAC_PATH_TOOLinconfigure.acto
AC_PATH_TOOL
configure.ac
PATH

### WindowsÂ¶

- gh-151159: Updated bundled version of OpenSSL to 3.5.7.
gh-151159: Updated bundled version of OpenSSL to 3.5.7.

### macOSÂ¶

- gh-151159: Update macOS installer to use OpenSSL 3.5.7.
gh-151159: Update macOS installer to use OpenSSL 3.5.7.
- gh-150644: When system logging is enabled (withconfig.use_system_logger, messages are now tagged as public. This
allows the macOS 26 system logger to view messages without special
configuration.
gh-150644: When system logging is enabled (withconfig.use_system_logger, messages are now tagged as public. This
config.use_system_logger
- gh-115119: Update macOS installer to use libmpdecimal 4.0.1.
gh-115119: Update macOS installer to use libmpdecimal 4.0.1.

### IDLEÂ¶

- bpo-6699: Warn the user if a file will be overwritten when saving.
bpo-6699: Warn the user if a file will be overwritten when saving.

### C APIÂ¶

- gh-150907: Fixdynamic_annotations.hheader file when built with C++
and Valgrind: addextern"C++"scopefor the C++ template. Patch by
Victor Stinner.
gh-150907: Fixdynamic_annotations.hheader file when built with C++
dynamic_annotations.h
extern"C++"scope
- gh-145235: MadePyDict_AddWatcher(),PyDict_ClearWatcher(),PyDict_Watch(), andPyDict_Unwatch()thread-safe on thefree threadedbuild.
gh-145235: MadePyDict_AddWatcher(),PyDict_ClearWatcher(),PyDict_Watch(), andPyDict_Unwatch()thread-safe on thefree threadedbuild.
PyDict_AddWatcher()
PyDict_ClearWatcher()
PyDict_Watch()
PyDict_Unwatch()

## Python 3.14.5 finalÂ¶

Release date: 2026-05-10

### SecurityÂ¶

- gh-148178: Hardened_remote_debuggingby validating remote debug
offset tables before using them to size memory reads or interpret remote
layouts.
gh-148178: Hardened_remote_debuggingby validating remote debug
_remote_debugging

### Core and BuiltinsÂ¶

- gh-146270: Fix a sequential consistency bug instructmember.c.
gh-146270: Fix a sequential consistency bug instructmember.c.
structmember.c
- gh-137293: FixSystemErrorwhen searching ELF Files insys.remote_exec().
gh-137293: FixSystemErrorwhen searching ELF Files insys.remote_exec().
sys.remote_exec()

### LibraryÂ¶

- gh-149388: Makeasyncio.windows_utils.PipeHandleclosing
idempotent.
gh-149388: Makeasyncio.windows_utils.PipeHandleclosing
asyncio.windows_utils.PipeHandle
- gh-149377: Update bundled pip to 26.1.1
gh-149377: Update bundled pip to 26.1.1
- gh-138907: SupportRFC 9309inurllib.robotparser.
gh-138907: SupportRFC 9309inurllib.robotparser.
urllib.robotparser
- gh-148615: Fixpdbto accept standard â end of options separator.
Reported by haampie. Patched by Shrey Naithani.
gh-148615: Fixpdbto accept standard â end of options separator.
pdb
- gh-130750: Restore quoting of choices inargparseerror messages
for improved clarity and consistency with documentation.
gh-130750: Restore quoting of choices inargparseerror messages
argparse
- gh-141449: Improve tests and documentation for non-function callables asannotate functions.
gh-141449: Improve tests and documentation for non-function callables asannotate functions.

### TestsÂ¶

- gh-149425: Increase time delta intest.test_zipfile.test_core.OtherTests.test_write_without_source_date_epoch
gh-149425: Increase time delta intest.test_zipfile.test_core.OtherTests.test_write_without_source_date_epoch
test.test_zipfile.test_core.OtherTests.test_write_without_source_date_epoch
- gh-145736: Fix test_tkinter test_configure_values test case backport miss
for Tk 9.
gh-145736: Fix test_tkinter test_configure_values test case backport miss

### macOSÂ¶

- gh-142295: For Python macOS framework builds, update Info.plist files to
be more compliant with current Apple guidelines. Original patch
contributed by Martinus Verburg.
gh-142295: For Python macOS framework builds, update Info.plist files to
- gh-124111: Update macOS installer to use Tcl/Tk 9.0.3.
gh-124111: Update macOS installer to use Tcl/Tk 9.0.3.

## Python 3.14.5 release candidate 1Â¶

Release date: 2026-05-04

### SecurityÂ¶

- gh-149254: Update Android and iOS installer to use OpenSSL 3.0.20.
gh-149254: Update Android and iOS installer to use OpenSSL 3.0.20.
- gh-149017: Update bundledlibexpatto
version 2.8.0.
gh-149017: Update bundledlibexpatto
- gh-90309: Base64-encode values when embedding cookies to JavaScript using
thehttp.cookies.BaseCookie.js_output()method to avoid injection
and escaping.
gh-90309: Base64-encode values when embedding cookies to JavaScript using
http.cookies.BaseCookie.js_output()
- gh-148808: Added buffer boundary check when usingnbytesparameter
withasyncio.AbstractEventLoop.sock_recvfrom_into(). Only relevant
for Windows and theasyncio.ProactorEventLoop.
gh-148808: Added buffer boundary check when usingnbytesparameter
nbytes
asyncio.AbstractEventLoop.sock_recvfrom_into()
asyncio.ProactorEventLoop
- gh-148395: Fix a dangling input pointer inlzma.LZMADecompressor,bz2.BZ2Decompressor, and internalzlib._ZlibDecompressorwhen memory allocation fails withMemoryError, which could let a subsequentdecompress()call
read or write through a stale pointer to the already-released caller
buffer.
gh-148395: Fix a dangling input pointer inlzma.LZMADecompressor,bz2.BZ2Decompressor, and internalzlib._ZlibDecompressorwhen memory allocation fails withMemoryError, which could let a subsequentdecompress()call
lzma.LZMADecompressor
zlib._ZlibDecompressor
decompress()
- gh-148169: A bypass inwebbrowserallowed URLs prefixed with%actionto pass the dash-prefix safety check.
gh-148169: A bypass inwebbrowserallowed URLs prefixed with%actionto pass the dash-prefix safety check.
webbrowser
%action
- gh-146581: Fix vulnerability inshutil.unpack_archive()for ZIP
files on Windows which allowed to write files outside of the destination
tree if the patch in the archive contains a Windows drive prefix. Now such
invalid paths will be skipped. Files containing â..â in the name (like
âfoo..barâ) are no longer skipped.
gh-146581: Fix vulnerability inshutil.unpack_archive()for ZIP
shutil.unpack_archive()
- gh-146333: Fix quadratic backtracking inconfigparser.RawConfigParseroption parsing regexes (OPTCREandOPTCRE_NV). A crafted configuration line with many whitespace
characters could cause excessive CPU usage.
gh-146333: Fix quadratic backtracking inconfigparser.RawConfigParseroption parsing regexes (OPTCREandOPTCRE_NV). A crafted configuration line with many whitespace
configparser.RawConfigParser
OPTCRE
OPTCRE_NV
- gh-146211: Reject CR/LF characters in tunnel request headers for the
HTTPConnection.set_tunnel() method.
gh-146211: Reject CR/LF characters in tunnel request headers for the

### Core and BuiltinsÂ¶

- gh-149122: Fix a crash in optimized calls toall(),any(),tuple(),list(), andset()with an async generator
expression argument (for example,tuple(awaitxforxiny)). These
calls now correctly raiseTypeErrorinstead of crashing.
gh-149122: Fix a crash in optimized calls toall(),any(),tuple(),list(), andset()with an async generator
all()
any()
tuple()
list()
set()
tuple(awaitxforxiny)
- gh-113956: Fix a data race insys.intern()in the free-threaded
build when interning a string owned by another thread. An interned copy
owned by the current thread is used instead when it is not safe to
immortalize the original.
gh-113956: Fix a data race insys.intern()in the free-threaded
sys.intern()
- gh-148820: Fix a race in_PyRawMutexon the free-threaded build
where aPy_PARK_INTRreturn from_PySemaphore_Waitcould let the
waiter destroy its semaphore before the unlocking threadâs_PySemaphore_Wakeupcompleted, causing a fatalReleaseSemaphoreerror.
gh-148820: Fix a race in_PyRawMutexon the free-threaded build
_PyRawMutex
Py_PARK_INTR
_PySemaphore_Wait
_PySemaphore_Wakeup
ReleaseSemaphore
- gh-148653: Forbidmarshallingrecursive code objects andsliceobjects which cannot be correctly unmarshalled.
gh-148653: Forbidmarshallingrecursive code objects andsliceobjects which cannot be correctly unmarshalled.
marshalling
slice
- gh-142516: Forward-port the generational cycle garbage collector to the
default 3.14 build, replacing the incremental collector while leaving the
free-threaded collector unchanged.
gh-142516: Forward-port the generational cycle garbage collector to the
- gh-148390: Fix an undefined behavior inmemoryviewwhen using the
native boolean format (?) incast(). Previously, on
some common platforms, callingmemoryview(b).cast("?").tolist()incorrectly returned[False]instead of[True]for any even byteb. Patch by BÃ©nÃ©dikt Tran.
gh-148390: Fix an undefined behavior inmemoryviewwhen using the
cast()
memoryview(b).cast("?").tolist()
[False]
[True]
- gh-148418: Fix a possible reference leak in a corruptedTYPE_CODEmarshal stream.
gh-148418: Fix a possible reference leak in a corruptedTYPE_CODEmarshal stream.
TYPE_CODE
- gh-148393: Fix data races betweenPyDict_Watch()/PyDict_Unwatch()and concurrent dict mutation in thefree-threaded build.
gh-148393: Fix data races betweenPyDict_Watch()/PyDict_Unwatch()and concurrent dict mutation in thefree-threaded build.
- gh-148284: Fix high stack consumption in Pythonâs interpreter loop on
Clang 22 by setting function limits for inlining when building with
computed gotos.
gh-148284: Fix high stack consumption in Pythonâs interpreter loop on
- gh-148037: Remove critical section fromPyCode_Addr2Line()in
gh-148037: Remove critical section fromPyCode_Addr2Line()in
PyCode_Addr2Line()
- gh-148222: Fix vectorcall support intypes.GenericAliaswhen the
underlying type does not support the vectorcall protocol. Fix possible
leaks intypes.GenericAliasandtypes.UnionTypein case
of memory error.
gh-148222: Fix vectorcall support intypes.GenericAliaswhen the
types.GenericAlias
types.UnionType
- gh-148208: Fix recursion depth leak inPyObject_Print()
gh-148208: Fix recursion depth leak inPyObject_Print()
PyObject_Print()
- gh-137814: Fix the__qualname__attribute of__annotate__functions on functions.
gh-137814: Fix the__qualname__attribute of__annotate__functions on functions.
__qualname__
__annotate__
- gh-147998: Fixed a memory leak in interpreter helper calls so cleanup
works when an operation falls across interpreter boundaries. Patch by
Maurycy PawÅowski-WieroÅski.
gh-147998: Fixed a memory leak in interpreter helper calls so cleanup
- gh-146455: Fix O(NÂ²) compile-time regression in constant folding after it
was moved from AST to CFG optimizer.
gh-146455: Fix O(NÂ²) compile-time regression in constant folding after it

### LibraryÂ¶

- gh-149221: Catch rare math domain error forrandom.binomialvariate().
gh-149221: Catch rare math domain error forrandom.binomialvariate().
random.binomialvariate()
- gh-149117: Fixrunpy.run_module()andrunpy.run_path()to set
thenameattribute on theImportErrorthey
raise.
gh-149117: Fixrunpy.run_module()andrunpy.run_path()to set
runpy.run_module()
runpy.run_path()
name
ImportError
- gh-149148:ensurepip: Upgrade bundled pip to 26.1. This version
fixes theCVE 2026-3219vulnerability. Patch by Victor Stinner.
gh-149148:ensurepip: Upgrade bundled pip to 26.1. This version
ensurepip
- gh-148093: Fix an out-of-bounds read of one byte inbinascii.a2b_uu(). Raisebinascii.Error, instead of reading
past the buffer end.
gh-148093: Fix an out-of-bounds read of one byte inbinascii.a2b_uu(). Raisebinascii.Error, instead of reading
binascii.a2b_uu()
binascii.Error
- gh-148914: Fix memoization of in-bandPickleBufferin the
Python implementation ofpickle. Previously, identicalPickleBuffers did not preserve identity, and empty writablePickleBuffermemoized an empty bytearray object in place ofb'', so the following references tob''were unpickled as an empty
bytearray object.
gh-148914: Fix memoization of in-bandPickleBufferin the
PickleBuffer
b''
- gh-148947: Fix crash in@dataclasses.dataclasswithslots=Truethat occurred when a function found within the class had an empty__class__cell.
gh-148947: Fix crash in@dataclasses.dataclasswithslots=Truethat occurred when a function found within the class had an empty__class__cell.
@dataclasses.dataclass
slots=True
- gh-148680:ForwardRefobjects that contain internal names to represent
known objects now show thetype_reprof the known object rather than
the internal__annotationlib_name_x__name when evaluated as strings.
gh-148680:ForwardRefobjects that contain internal names to represent
ForwardRef
type_repr
__annotationlib_name_x__
- gh-148801:xml.etree.ElementTree: Fix a crash inElement.__deepcopy__on deeply nested trees.
gh-148801:xml.etree.ElementTree: Fix a crash inElement.__deepcopy__on deeply nested trees.
Element.__deepcopy__
- gh-148735:xml.etree.ElementTree: Fix a use-after-free inElement.findtextwhen the
element tree is mutated concurrently during the search.
gh-148735:xml.etree.ElementTree: Fix a use-after-free inElement.findtextwhen the
Element.findtext
- gh-148740: Fix usage foruuidcommand-line interface to support a
custom namespace be provided for uuid3 and uuid5.
gh-148740: Fix usage foruuidcommand-line interface to support a
uuid
- gh-148651: Fix reference leak incompression.zstd.ZstdDecompressorwhen an invalid option key is
passed.
gh-148651: Fix reference leak incompression.zstd.ZstdDecompressorwhen an invalid option key is
compression.zstd.ZstdDecompressor
- gh-146553: Fix infinite loop intyping.get_type_hints()when__wrapped__forms a cycle. Patch by Shamil Abdulaev.
gh-146553: Fix infinite loop intyping.get_type_hints()when__wrapped__forms a cycle. Patch by Shamil Abdulaev.
typing.get_type_hints()
__wrapped__
- gh-148508: An intermittent timing error when running SSL tests on iOS has
been resolved.
gh-148508: An intermittent timing error when running SSL tests on iOS has
- gh-148518: If an email containing an address header that ended in an open
double quote was parsed with a non-compat32policy, accessing theusernameattribute of the mailbox accessed through that header object
would result in anIndexError. It now correctly returns an empty
string as the result.
gh-148518: If an email containing an address header that ended in an open
compat32
username
- gh-148464: Add missing__ctype_le/be__attributes forc_float_complexandc_double_complex.
Patch by Sergey B Kirpichev.
gh-148464: Add missing__ctype_le/be__attributes forc_float_complexandc_double_complex.
__ctype_le/be__
c_float_complex
c_double_complex
- gh-148370:configparser: prevent quadratic behavior when aParsingErroris raised after a parser fails to parse
multiple lines. Patch by BÃ©nÃ©dikt Tran.
gh-148370:configparser: prevent quadratic behavior when aParsingErroris raised after a parser fails to parse
configparser
ParsingError
- gh-148254: Use singular âsecâ instead of âsecsâ intimeitverbose
output for consistency with other time units.
gh-148254: Use singular âsecâ instead of âsecsâ intimeitverbose
timeit
- gh-148192:email.generator.Generator._make_boundarycould fail to
detect a duplicate boundary string if linesep was not n. It now correctly
detects boundary strings when linesep is rn as well.
gh-148192:email.generator.Generator._make_boundarycould fail to
email.generator.Generator._make_boundary
- gh-146313: Fix a deadlock inmultiprocessingâs resource tracker
where the parent process could hang indefinitely inos.waitpid()during interpreter shutdown if a child created viaos.fork()still
held the resource trackerâs pipe open.
gh-146313: Fix a deadlock inmultiprocessingâs resource tracker
multiprocessing
os.waitpid()
- gh-145831: Fixemail.quoprimime.decode()leaving a stray\rwheneol='\r\n'by stripping the fulleolstring instead of one
character.
gh-145831: Fixemail.quoprimime.decode()leaving a stray\rwheneol='\r\n'by stripping the fulleolstring instead of one
email.quoprimime.decode()
eol='\r\n'
- gh-145105: Fix crash incsvreader when iterating with a re-entrant
iterator that callsnext()on the same reader from within__next__.
gh-145105: Fix crash incsvreader when iterating with a re-entrant
csv
next()
__next__
- gh-105936: Attempting to mutate non-field attributes ofdataclasseswith bothfrozenandslotsbeingTruenow raisesFrozenInstanceErrorinstead ofTypeError.
Their non-dataclass subclasses can now freely mutate non-field attributes,
and the original non-slotted class can be garbage collected.
gh-105936: Attempting to mutate non-field attributes ofdataclasseswith bothfrozenandslotsbeingTruenow raisesFrozenInstanceErrorinstead ofTypeError.
dataclasses
FrozenInstanceError
- gh-140287: TheasyncioREPL now handles exceptions when executingPYTHONSTARTUPscripts. Patch by Bartosz SÅawecki.
gh-140287: TheasyncioREPL now handles exceptions when executingPYTHONSTARTUPscripts. Patch by Bartosz SÅawecki.
PYTHONSTARTUP
- gh-132631: Fix âI/O operation on closed fileâ when parsing JSON Lines file
withJSONCLI.
gh-132631: Fix âI/O operation on closed fileâ when parsing JSON Lines file
JSONCLI
- gh-70039: Fixed bug wheresmtplib.SMTP.starttls()could fail ifsmtplib.SMTP.connect()is called explicitly rather than implicitly.
gh-70039: Fixed bug wheresmtplib.SMTP.starttls()could fail ifsmtplib.SMTP.connect()is called explicitly rather than implicitly.
smtplib.SMTP.starttls()
smtplib.SMTP.connect()
- gh-83281:email: improve handling trailing garbage in address lists
to avoid throwing AttributeError in certain edge cases
gh-83281:email: improve handling trailing garbage in address lists

### DocumentationÂ¶

- gh-148663: Document thatcalendar.IllegalMonthErroris a subclass
of bothValueErrorandIndexErrorsince Python 3.12.
gh-148663: Document thatcalendar.IllegalMonthErroris a subclass
calendar.IllegalMonthError
ValueError
- gh-146646: Document thatglob.glob(),glob.iglob(),pathlib.Path.glob(), andpathlib.Path.rglob()silently
suppressOSErrorexceptions raised from scanning the filesystem.
gh-146646: Document thatglob.glob(),glob.iglob(),pathlib.Path.glob(), andpathlib.Path.rglob()silently
glob.glob()
glob.iglob()
pathlib.Path.glob()
pathlib.Path.rglob()

### BuildÂ¶

- gh-149351: Avoid possible broken macOS framework install names when
DESTDIR is specified during builds.
gh-149351: Avoid possible broken macOS framework install names when
- gh-146475: Block Apple Clang from being used to build the JIT as it ships
without required LLVM tools.
gh-146475: Block Apple Clang from being used to build the JIT as it ships
- gh-148535: No longer use thegcc-fprofile-update=atomicflag on i686.
The flag has been added to fix a random GCC internal error on PGO build
(gh-145801) caused by corruption of profile data (.gcda files). The
problem is that it makes the PGO build way slower (up to 47x slower) on
i686. Since the GCC internal error was not seen on i686 so far, donât use-fprofile-update=atomicon i686 anymore. Patch by Victor Stinner.
gh-148535: No longer use thegcc-fprofile-update=atomicflag on i686.
gcc-fprofile-update=atomic
-fprofile-update=atomic
- gh-146264: Fix static module builds on non-WASI targets by linking HACL
dependencies as static libraries whenMODULE_BUILDTYPE=static,
preventing duplicate_Py_LibHacl_*symbol errors at link time.
gh-146264: Fix static module builds on non-WASI targets by linking HACL
MODULE_BUILDTYPE=static
_Py_LibHacl_*

### WindowsÂ¶

- gh-149254: Updated bundled version of OpenSSL to 3.0.20.
gh-149254: Updated bundled version of OpenSSL to 3.0.20.
- gh-146458: Fix incorrect REPL height and width tracking on console window
resize on Windows.
gh-146458: Fix incorrect REPL height and width tracking on console window

### macOSÂ¶

- gh-149254: Update macOS installer to use OpenSSL 3.0.20.
gh-149254: Update macOS installer to use OpenSSL 3.0.20.

## Python 3.14.4 finalÂ¶

Release date: 2026-04-07

### SecurityÂ¶

- gh-145986:xml.parsers.expat: Fixed a crash caused by unbounded C
recursion when converting deeply nested XML content models withElementDeclHandler(). This addressesCVE 2026-4224.
gh-145986:xml.parsers.expat: Fixed a crash caused by unbounded C
ElementDeclHandler()
- gh-145599: Reject control characters inhttp.cookies.Morselupdate()andjs_output(). This addressesCVE 2026-3644.
gh-145599: Reject control characters inhttp.cookies.Morselupdate()andjs_output(). This addressesCVE 2026-3644.
http.cookies.Morsel
update()
js_output()
- gh-145506: FixesCVE 2026-2297by ensuring thatSourcelessFileLoaderusesio.open_code()when opening.pycfiles.
gh-145506: FixesCVE 2026-2297by ensuring thatSourcelessFileLoaderusesio.open_code()when opening.pycfiles.
SourcelessFileLoader
io.open_code()
.pyc
- gh-144370: Disallow usage of control characters in status inwsgiref.handlersto prevent HTTP header injections. Patch by
Benedikt Johannes.
gh-144370: Disallow usage of control characters in status inwsgiref.handlersto prevent HTTP header injections. Patch by
wsgiref.handlers
- gh-143930: Reject leading dashes in URLs passed towebbrowser.open().
gh-143930: Reject leading dashes in URLs passed towebbrowser.open().
webbrowser.open()

### Core and BuiltinsÂ¶

- gh-148157: Fix an unlikely crash when parsing an invalid type comments for
function parameters. Found by OSS Fuzz in#492782951.
gh-148157: Fix an unlikely crash when parsing an invalid type comments for
- gh-148144: Initialize_PyInterpreterFrame.visitedwhen copying
interpreter frames so incremental GC does not read an uninitialized byte
from generator and frame-object copies.
gh-148144: Initialize_PyInterpreterFrame.visitedwhen copying
_PyInterpreterFrame.visited
- gh-146615: Fix a crash in__get__()forMETH_METHODdescriptors when an invalid (non-type) object is
passed as the second argument. Patch by Steven Sun.
gh-146615: Fix a crash in__get__()forMETH_METHODdescriptors when an invalid (non-type) object is
__get__()
- gh-146308: Fixed several error handling issues in the_remote_debuggingmodule, including safer validation of remoteintobjects, clearer asyncio task chain failures, and cache cleanup
fixes that avoid leaking or double-freeing metadata on allocation failure.
Patch by Pablo Galindo.
gh-146308: Fixed several error handling issues in the_remote_debuggingmodule, including safer validation of remoteintobjects, clearer asyncio task chain failures, and cache cleanup
int
- gh-146128: Fix a bug which could cause constant values to be partially
corrupted in AArch64 JIT code. This issue is theoretical, and hasnât
actually been observed in unmodified Python interpreters.
gh-146128: Fix a bug which could cause constant values to be partially
- gh-146250: Fixed a memory leak inSyntaxErrorwhen re-initializing
it.
gh-146250: Fixed a memory leak inSyntaxErrorwhen re-initializing
SyntaxError
- gh-146245: Fixed reference leaks insocketwhen audit hooks raise
exceptions insocket.getaddrinfo()andsocket.sendto().
gh-146245: Fixed reference leaks insocketwhen audit hooks raise
socket.getaddrinfo()
socket.sendto()
- gh-146196: Fix potential Undefined Behavior inPyUnicodeWriter_WriteASCII()by adding a zero-length check. Patch
by Shamil Abdulaev.
gh-146196: Fix potential Undefined Behavior inPyUnicodeWriter_WriteASCII()by adding a zero-length check. Patch
PyUnicodeWriter_WriteASCII()
- gh-146227: Fix wrong type in_Py_atomic_load_uint16in the C11 atomics
backend (pyatomic_std.h), which used a 32-bit atomic load instead of
16-bit. Found by Mohammed Zuhaib.
gh-146227: Fix wrong type in_Py_atomic_load_uint16in the C11 atomics
_Py_atomic_load_uint16
pyatomic_std.h
- gh-146056: Fixrepr()for lists and tuples containingNULLs.
gh-146056: Fixrepr()for lists and tuples containingNULLs.
repr()
- gh-146092: Handle properly memory allocation failures on str and float
opcodes. Patch by Victor Stinner.
gh-146092: Handle properly memory allocation failures on str and float
- gh-146041: Fix free-threading scaling bottleneck insys.intern()andPyObject_SetAttr()by avoiding the interpreter-wide lock when the
string is already interned and immortalized.
gh-146041: Fix free-threading scaling bottleneck insys.intern()andPyObject_SetAttr()by avoiding the interpreter-wide lock when the
PyObject_SetAttr()
- gh-145990:python--help-envsections are now sorted by environment
variable name.
gh-145990:python--help-envsections are now sorted by environment
python--help-env
- gh-145990:python--help-xoptionsis now sorted by-Xoption name.
gh-145990:python--help-xoptionsis now sorted by-Xoption name.
python--help-xoptions
- gh-145376: Fix GC tracking instructseq.__replace__().
gh-145376: Fix GC tracking instructseq.__replace__().
structseq.__replace__()
- gh-145792: Fix out-of-bounds access when invoking faulthandler on a
CPython build compiled without support for VLAs.
gh-145792: Fix out-of-bounds access when invoking faulthandler on a
- gh-142183: Avoid a pathological case where repeated calls at a specific
stack depth could be significantly slower.
gh-142183: Avoid a pathological case where repeated calls at a specific
- gh-145779: Improve scaling ofclassmethod()andstaticmethod()calls in the free-threaded build by avoiding the descriptor__get__call.
gh-145779: Improve scaling ofclassmethod()andstaticmethod()calls in the free-threaded build by avoiding the descriptor__get__call.
classmethod()
staticmethod()
__get__
- gh-145783: Fix an unlikely crash in the parser when certain errors were
erroneously not propagated. Found by OSS Fuzz in#491369109.
gh-145783: Fix an unlikely crash in the parser when certain errors were
- gh-145685: Improve scaling of type attribute lookups in thefree-threaded buildby avoiding contention on the internal type
lock.
gh-145685: Improve scaling of type attribute lookups in thefree-threaded buildby avoiding contention on the internal type
- gh-145701: FixSystemErrorwhen__classdict__or__conditional_annotations__is in a class-scope inlined comprehension.
Found by OSS Fuzz in#491105000.
gh-145701: FixSystemErrorwhen__classdict__or__conditional_annotations__is in a class-scope inlined comprehension.
- gh-145713: Makebytearray.resize()thread-safe in the free-threaded
build by using a critical section and calling the lock-held variant of the
resize function.
gh-145713: Makebytearray.resize()thread-safe in the free-threaded
bytearray.resize()
- gh-145615: Fixed a memory leak in thefree-threaded buildwhere
mimalloc pages could become permanently unreclaimable until the owning
thread exited.
gh-145615: Fixed a memory leak in thefree-threaded buildwhere
- gh-145566: In the free threading build, skip the stop-the-world pause when
reassigning__class__on a newly created object.
gh-145566: In the free threading build, skip the stop-the-world pause when
- gh-145335: Fix a crash inos.pathconf()when called with-1as
the path argument.
gh-145335: Fix a crash inos.pathconf()when called with-1as
os.pathconf()
- gh-145036: In free-threaded build, fix race condition when calling__sizeof__()on alist
gh-145036: In free-threaded build, fix race condition when calling__sizeof__()on alist
__sizeof__()
list
- gh-145376: Fix reference leaks in various unusual error scenarios.
gh-145376: Fix reference leaks in various unusual error scenarios.
- gh-145234: Fixed aSystemErrorin the parser when an encoding cookie
(for example, UTF-7) decodes to carriage returns (\r). Newlines are
now normalized after decoding in the string tokenizer.Patch by Pablo Galindo.
gh-145234: Fixed aSystemErrorin the parser when an encoding cookie
now normalized after decoding in the string tokenizer.
- gh-130555: Fix use-after-free indict.clear()when the dictionary
values are embedded in an object and a destructor causes re-entrant
mutation of the dictionary.
gh-130555: Fix use-after-free indict.clear()when the dictionary
dict.clear()
- gh-145187: Fix compiler assertion fail when a type parameter bound
contains an invalid expression in a conditional block.
gh-145187: Fix compiler assertion fail when a type parameter bound
- gh-145142: Fix a crash in the free-threaded build when the dictionary
argument tostr.maketrans()is concurrently modified.
gh-145142: Fix a crash in the free-threaded build when the dictionary
str.maketrans()
- gh-144872: Fix heap buffer overflow in the parser found by OSS-Fuzz.
gh-144872: Fix heap buffer overflow in the parser found by OSS-Fuzz.
- gh-144766: Fix a crash in fork child process when perf support is enabled.
gh-144766: Fix a crash in fork child process when perf support is enabled.
- gh-144759: Fix undefined behavior in the lexer whenstartandmulti_line_startpointers areNULLin_PyLexer_remember_fstring_buffers()and_PyLexer_restore_fstring_buffers(). TheNULLpointer arithmetic
(NULL-valid_pointer) is now guarded with explicitNULLchecks.
gh-144759: Fix undefined behavior in the lexer whenstartandmulti_line_startpointers areNULLin_PyLexer_remember_fstring_buffers()and_PyLexer_restore_fstring_buffers(). TheNULLpointer arithmetic
start
multi_line_start
_PyLexer_remember_fstring_buffers()
_PyLexer_restore_fstring_buffers()
NULL-valid_pointer
- gh-144563: Fix interaction of the Tachyon profiler andctypesand
other modules that load the Python shared library (if present) in an
independent map as this was causing the mechanism that loads the binary
information to be confused. Patch by Pablo Galindo
gh-144563: Fix interaction of the Tachyon profiler andctypesand
ctypes
- gh-144601: Fix crash when importing a module whosePyInitfunction
raises an exception from a subinterpreter.
gh-144601: Fix crash when importing a module whosePyInitfunction
PyInit
- gh-144438: Align the QSBR thread state array to a 64-byte cache line
boundary to avoid false sharing in thefree-threaded build.
gh-144438: Align the QSBR thread state array to a 64-byte cache line
- gh-144513: Fix potential deadlock when using critical sections during
stop-the-world pauses in the free-threaded build.
gh-144513: Fix potential deadlock when using critical sections during
- gh-144446: Fix data races in the free-threaded build when reading frame
object attributes while another thread is executing the frame.
gh-144446: Fix data races in the free-threaded build when reading frame
- gh-143636: Fix a crash when callingSimpleNamespace.__replace__()on non-namespace instances. Patch by BÃ©nÃ©dikt
Tran.
gh-143636: Fix a crash when callingSimpleNamespace.__replace__()on non-namespace instances. Patch by BÃ©nÃ©dikt
SimpleNamespace.__replace__()
- gh-143650: Fix race condition inimportlibwhere a thread could
receive a stale module reference when another threadâs import fails.
gh-143650: Fix race condition inimportlibwhere a thread could
importlib
- gh-141732: Ensure the__repr__()forExceptionGroupandBaseExceptionGroupdoes not change when the exception sequence
that was original passed in to its constructor is subsequently mutated.
gh-141732: Ensure the__repr__()forExceptionGroupandBaseExceptionGroupdoes not change when the exception sequence
__repr__()
ExceptionGroup
BaseExceptionGroup
- gh-140594: Fix an out of bounds read when a single NUL character is read
from the standard input. Patch by Shamil Abdulaev.
gh-140594: Fix an out of bounds read when a single NUL character is read
- gh-91636: While performing garbage collection, clear weakrefs to
unreachable objects that are created during running of finalizers.  If
those weakrefs were are not cleared, they could reveal unreachable
objects.
gh-91636: While performing garbage collection, clear weakrefs to
- gh-130327: Fix erroneous clearing of an objectâs__dict__if overwritten at runtime.
gh-130327: Fix erroneous clearing of an objectâs__dict__if overwritten at runtime.
__dict__
- gh-80667: Literals using the\N{name}escape syntax can now construct
CJK ideographs and Hangul syllables using case-insensitive names.
gh-80667: Literals using the\N{name}escape syntax can now construct
\N{name}

### LibraryÂ¶

- gh-144503: Fix a regression introduced in 3.14.3 and 3.13.12 where themultiprocessingforkserverstart method would fail withBrokenPipeErrorwhen the parent process had a very largesys.argv.  The argv is now passed to the forkserver as separate
command-line arguments rather than being embedded in the-ccommand
string, avoiding the operating systemâs per-argument length limit.
gh-144503: Fix a regression introduced in 3.14.3 and 3.13.12 where themultiprocessingforkserverstart method would fail withBrokenPipeErrorwhen the parent process had a very largesys.argv.  The argv is now passed to the forkserver as separate
forkserver
BrokenPipeError
sys.argv
- gh-146613:itertools: Fix a crash initertools.groupby()when
the grouper iterator is concurrently mutated.
gh-146613:itertools: Fix a crash initertools.groupby()when
itertools
itertools.groupby()
- gh-146080:ssl: fix a crash when an SNI callback tries to use an
SSL object that has already been garbage-collected. Patch by BÃ©nÃ©dikt
gh-146080:ssl: fix a crash when an SNI callback tries to use an
ssl
- gh-146556: Fixannotationlib.get_annotations()hanging indefinitely
when called witheval_str=Trueon a callable that has a circular__wrapped__chain (e.g.f.__wrapped__=f). Cycle detection using
an id-based visited set now stops the traversal and falls back to the
globals found so far, mirroring the approach ofinspect.unwrap().
gh-146556: Fixannotationlib.get_annotations()hanging indefinitely
annotationlib.get_annotations()
eval_str=True
f.__wrapped__=f
inspect.unwrap()
- gh-146090:sqlite3: fix a crash whensqlite3.Connection.create_collation()fails withSQLITE_BUSY. Patch by BÃ©nÃ©dikt Tran.
gh-146090:sqlite3: fix a crash whensqlite3.Connection.create_collation()fails withSQLITE_BUSY. Patch by BÃ©nÃ©dikt Tran.
sqlite3.Connection.create_collation()
- gh-146090:sqlite3: properly raiseMemoryErrorinstead ofSystemErrorwhen a context callback fails to be allocated. Patch by
gh-146090:sqlite3: properly raiseMemoryErrorinstead ofSystemErrorwhen a context callback fails to be allocated. Patch by
- gh-145633: Fixstruct.pack('f',float): usePyFloat_Pack4()to
raiseOverflowError. Patch by Sergey B Kirpichev and Victor
Stinner.
gh-145633: Fixstruct.pack('f',float): usePyFloat_Pack4()to
struct.pack('f',float)
PyFloat_Pack4()
OverflowError
- gh-146310: Theensurepipmodule no longer looks forpip-*.whlwheel packages in the current directory.
gh-146310: Theensurepipmodule no longer looks forpip-*.whlwheel packages in the current directory.
pip-*.whl
- gh-146083: Update bundledlibexpatto
version 2.7.5.
gh-146083: Update bundledlibexpatto
- gh-146076:zoneinfo: fix crashes when deleting_weak_cachefrom
azoneinfo.ZoneInfosubclass.
gh-146076:zoneinfo: fix crashes when deleting_weak_cachefrom
zoneinfo
_weak_cache
zoneinfo.ZoneInfo
- gh-146054: Limit the size ofencodings.search_function()cache.
Found by OSS Fuzz in#493449985.
gh-146054: Limit the size ofencodings.search_function()cache.
encodings.search_function()
- gh-146004: All-Xoptions from the Python command line are now
propagated to child processes spawned bymultiprocessing, not just
a hard-coded subset.  This makes the behavior consistent between default
âspawnâ and âforkserverâ start methods and the old âforkâ start method.
The options that were previously not propagated are:context_aware_warnings,cpu_count,disable-remote-debug,int_max_str_digits,lazy_imports,no_debug_ranges,pathconfig_warnings,perf,perf_jit,presite,pycache_prefix,thread_inherit_context, andwarn_default_encoding.
gh-146004: All-Xoptions from the Python command line are now
context_aware_warnings
cpu_count
disable-remote-debug
int_max_str_digits
lazy_imports
no_debug_ranges
pathconfig_warnings
perf
perf_jit
presite
pycache_prefix
thread_inherit_context
warn_default_encoding
- gh-145883:zoneinfo: Fix heap buffer overflow reads from malformed
TZif data. Found by OSS Fuzz, issues#492245058and#492230068.
gh-145883:zoneinfo: Fix heap buffer overflow reads from malformed
- gh-145754: Request signature during mock autospec withFORWARDREFannotation format. This prevents runtime errors when an annotation uses a
name that is not defined at runtime.
gh-145754: Request signature during mock autospec withFORWARDREFannotation format. This prevents runtime errors when an annotation uses a
- gh-145750: Avoid undefined behaviour from signed integer overflow when
parsing format strings in thestructmodule. Found by OSS Fuzz in#488466741.
gh-145750: Avoid undefined behaviour from signed integer overflow when
struct
- gh-145492: Fix infinite recursion incollections.defaultdict__repr__when adefaultdictcontains itself. Based on analysis by
KowalskiThomas ingh-145492.
gh-145492: Fix infinite recursion incollections.defaultdict__repr__when adefaultdictcontains itself. Based on analysis by
collections.defaultdict
__repr__
defaultdict
- gh-145623: Fix crash instructwhen callingrepr()or__sizeof__()on an uninitializedstruct.Structobject created
viaStruct.__new__()without calling__init__().
gh-145623: Fix crash instructwhen callingrepr()or__sizeof__()on an uninitializedstruct.Structobject created
struct.Struct
Struct.__new__()
__init__()
- gh-145616: Detect Android sysconfig ABI correctly on 32-bit ARM Android on
64-bit ARM kernel
gh-145616: Detect Android sysconfig ABI correctly on 32-bit ARM Android on
- gh-145551: Fix InvalidStateError when cancelling process created byasyncio.create_subprocess_exec()orasyncio.create_subprocess_shell(). Patch by Daan De Meyer.
gh-145551: Fix InvalidStateError when cancelling process created byasyncio.create_subprocess_exec()orasyncio.create_subprocess_shell(). Patch by Daan De Meyer.
asyncio.create_subprocess_exec()
asyncio.create_subprocess_shell()
- gh-145446: Nowfunctoolsis safer in free-threaded build when using
keywords infunctools.partial()
gh-145446: Nowfunctoolsis safer in free-threaded build when using
functools
functools.partial()
- gh-145417:venv: Prevent incorrect preservation of SELinux context
when copying theActivate.ps1script. The script inherited the SELinux
security context of the system template directory, rather than the
destination project directory.
gh-145417:venv: Prevent incorrect preservation of SELinux context
venv
Activate.ps1
- gh-145376: Fix double free and null pointer dereference in unusual error
scenarios inhashlibandhmacmodules.
gh-145376: Fix double free and null pointer dereference in unusual error
hashlib
hmac
- gh-145301:hmac: fix a crash when the initialization of the
underlying C extension module fails.
gh-145301:hmac: fix a crash when the initialization of the
- gh-145301:hashlib: fix a crash when the initialization of the
gh-145301:hashlib: fix a crash when the initialization of the
- gh-145264: Base64 decoder (seebinascii.a2b_base64(),base64.b64decode(), etc) no longer ignores excess data after the
first padded quad in non-strict (default) mode.  Instead, in conformance
withRFC 4648, section 3.3, it now ignores the pad character, â=â, if
it is present before the end of the encoded data.
gh-145264: Base64 decoder (seebinascii.a2b_base64(),base64.b64decode(), etc) no longer ignores excess data after the
binascii.a2b_base64()
base64.b64decode()
- gh-145158: Avoid undefined behaviour from signed integer overflow when
parsing format strings in thestructmodule.
gh-145158: Avoid undefined behaviour from signed integer overflow when
- gh-144984: Fix crash inxml.parsers.expat.xmlparser.ExternalEntityParserCreate()when an
allocation fails. The error paths could dereference NULLhandlersand
double-decrement the parent parserâs reference count.
gh-144984: Fix crash inxml.parsers.expat.xmlparser.ExternalEntityParserCreate()when an
xml.parsers.expat.xmlparser.ExternalEntityParserCreate()
handlers
- gh-88091: Fixunicodedata.decomposition()for Hangul characters.
gh-88091: Fixunicodedata.decomposition()for Hangul characters.
unicodedata.decomposition()
- gh-144986: Fix a memory leak inatexit.register(). Patch by Shamil
Abdulaev.
gh-144986: Fix a memory leak inatexit.register(). Patch by Shamil
atexit.register()
- gh-144777: Fix data races inio.IncrementalNewlineDecoderin thefree-threaded build.
gh-144777: Fix data races inio.IncrementalNewlineDecoderin thefree-threaded build.
io.IncrementalNewlineDecoder
- gh-144809: Makecollections.dequecopy atomic in thefree-threaded build.
gh-144809: Makecollections.dequecopy atomic in thefree-threaded build.
collections.deque
- gh-144835: Added missing explanations for some parameters inglob.glob()andglob.iglob().
gh-144835: Added missing explanations for some parameters inglob.glob()andglob.iglob().
- gh-144833: Fixed a use-after-free insslwhenSSL_new()returns
NULL innewPySSLSocket(). The error was reported via a dangling
pointer after the object had already been freed.
gh-144833: Fixed a use-after-free insslwhenSSL_new()returns
SSL_new()
newPySSLSocket()
- gh-144782: Fixargparse.ArgumentParserto bepickleable.
gh-144782: Fixargparse.ArgumentParserto bepickleable.
argparse.ArgumentParser
pickleable
- gh-144259: Fix inconsistent display of long multiline pasted content in
the REPL.
gh-144259: Fix inconsistent display of long multiline pasted content in
- gh-144156: Fix the folding of headers by theemaillibrary whenRFC 2047encoded words are used.  Now whitespace is correctly preserved
and also correctly added between adjacent encoded words.  The latter
property was broken by the fix forgh-92081, which mostly fixed previous
failures to preserve whitespace.
gh-144156: Fix the folding of headers by theemaillibrary whenRFC 2047encoded words are used.  Now whitespace is correctly preserved
- gh-66305: Fixed a hang on Windows in thetempfilemodule when
trying to create a temporary file or subdirectory in a non-writable
directory.
gh-66305: Fixed a hang on Windows in thetempfilemodule when
tempfile
- gh-140814:multiprocessing.freeze_support()no longer sets the
default start method as a side effect, which previously caused a
subsequentmultiprocessing.set_start_method()call to raiseRuntimeError.
gh-140814:multiprocessing.freeze_support()no longer sets the
multiprocessing.freeze_support()
multiprocessing.set_start_method()
RuntimeError
- gh-144475: Callingrepr()onfunctools.partial()is now safer
when the partial objectâs internal attributes are replaced while the
string representation is being generated.
gh-144475: Callingrepr()onfunctools.partial()is now safer
- gh-144538: Bump the version of pip bundled in ensurepip to version 26.0.1
gh-144538: Bump the version of pip bundled in ensurepip to version 26.0.1
- gh-144494: Fix performance regression inasyncio.all_tasks()onfree-threaded builds. Patch by Kumar Aditya.
gh-144494: Fix performance regression inasyncio.all_tasks()onfree-threaded builds. Patch by Kumar Aditya.
asyncio.all_tasks()
- gh-144316: Fix crash in_remote_debuggingthat causedtest_external_inspectionto intermittently fail. Patch by Taegyun Kim.
gh-144316: Fix crash in_remote_debuggingthat causedtest_external_inspectionto intermittently fail. Patch by Taegyun Kim.
test_external_inspection
- gh-144363: Update bundledlibexpatto
2.7.4
gh-144363: Update bundledlibexpatto
- gh-143637: Fixed a crash in socket.sendmsg() that could occur if ancillary
data is mutated re-entrantly during argument parsing.
gh-143637: Fixed a crash in socket.sendmsg() that could occur if ancillary
- gh-143543: Fix a crash in itertools.groupby that could occur when a
user-defined__eq__()method re-enters the iterator during
key comparison.
gh-143543: Fix a crash in itertools.groupby that could occur when a
__eq__()
- gh-140652: Fix a crash in_interpchannels.list_all()after closing
a channel.
gh-140652: Fix a crash in_interpchannels.list_all()after closing
_interpchannels.list_all()
- gh-143698: Allowschedulerandsetpgrouparguments to be explicitlyNonewhen callingos.posix_spawn()oros.posix_spawnp(). Patch by BÃ©nÃ©dikt Tran.
gh-143698: Allowschedulerandsetpgrouparguments to be explicitlyNonewhen callingos.posix_spawn()oros.posix_spawnp(). Patch by BÃ©nÃ©dikt Tran.
None
os.posix_spawn()
os.posix_spawnp()
- gh-143698: RaiseTypeErrorinstead ofSystemErrorwhen theschedulerinos.posix_spawn()oros.posix_spawnp()is not a
tuple. Patch by BÃ©nÃ©dikt Tran.
gh-143698: RaiseTypeErrorinstead ofSystemErrorwhen theschedulerinos.posix_spawn()oros.posix_spawnp()is not a
- gh-142516:ssl: fix reference leaks inssl.SSLContextobjects. Patch by BÃ©nÃ©dikt Tran.
gh-142516:ssl: fix reference leaks inssl.SSLContextobjects. Patch by BÃ©nÃ©dikt Tran.
ssl.SSLContext
- gh-143304: Fixctypes.CDLLto honor thehandleparameter on
POSIX systems.
gh-143304: Fixctypes.CDLLto honor thehandleparameter on
ctypes.CDLL
handle
- gh-142781:zoneinfo: fix a crash when instantiatingZoneInfoobjects for which the internal class-level
cache is inconsistent.
gh-142781:zoneinfo: fix a crash when instantiatingZoneInfoobjects for which the internal class-level
- gh-142763: Fix a race condition betweenzoneinfo.ZoneInfocreation andzoneinfo.ZoneInfo.clear_cache()that could raiseKeyError.
gh-142763: Fix a race condition betweenzoneinfo.ZoneInfocreation andzoneinfo.ZoneInfo.clear_cache()that could raiseKeyError.
zoneinfo.ZoneInfo.clear_cache()
KeyError
- gh-142787: Fix assertion failure insqlite3blob subscript when
slicing with indices that result in an empty slice.
gh-142787: Fix assertion failure insqlite3blob subscript when
- gh-142352: Fixasyncio.StreamWriter.start_tls()to transfer buffered
data fromStreamReaderto the SSL layer, preventing data
loss when upgrading a connection to TLS mid-stream (e.g., when
implementing PROXY protocol support).
gh-142352: Fixasyncio.StreamWriter.start_tls()to transfer buffered
asyncio.StreamWriter.start_tls()
StreamReader
- gh-141707: Donât changetarfile.TarInfotype fromAREGTYPEtoDIRTYPEwhen parsing GNU long name or link headers.
gh-141707: Donât changetarfile.TarInfotype fromAREGTYPEtoDIRTYPEwhen parsing GNU long name or link headers.
tarfile.TarInfo
AREGTYPE
DIRTYPE
- gh-139933: ImproveAttributeErrorsuggestions for classes with a
custom__dir__()method returning a list of unsortable
values. Patch by BÃ©nÃ©dikt Tran.
gh-139933: ImproveAttributeErrorsuggestions for classes with a
AttributeError
__dir__()
- gh-137335: Get rid of any possibility of a name conflict for named pipes
inmultiprocessingandasyncioon Windows, no matter how
small.
gh-137335: Get rid of any possibility of a name conflict for named pipes
- gh-80667: Support lookup for Tangut Ideographs inunicodedata.
gh-80667: Support lookup for Tangut Ideographs inunicodedata.
- bpo-40243: Fixunicodedata.ucd_3_2_0.numeric()for non-decimal
values.
bpo-40243: Fixunicodedata.ucd_3_2_0.numeric()for non-decimal
unicodedata.ucd_3_2_0.numeric()

### DocumentationÂ¶

- gh-126676: Expandargparsedocumentation fortype=boolwith a
demonstration of the surprising behavior and pointers to common
alternatives.
gh-126676: Expandargparsedocumentation fortype=boolwith a
type=bool
- gh-145649: Fix text wrapping and formatting of-Xoption descriptions
in thepython(1)man page by using proper roff markup.
gh-145649: Fix text wrapping and formatting of-Xoption descriptions
- gh-145450: Document missing publicwave.Wave_writegetter
methods.
gh-145450: Document missing publicwave.Wave_writegetter
wave.Wave_write
- gh-136246: A new âImprove this pageâ link is available in the left-hand
sidebar of the docs, offering links to create GitHub issues, discussion
forum posts, or pull requests.
gh-136246: A new âImprove this pageâ link is available in the left-hand

### TestsÂ¶

- gh-144418: The Android testbedâs emulator RAM has been increased from 2 GB
to 4 GB.
gh-144418: The Android testbedâs emulator RAM has been increased from 2 GB
- gh-146202: Fix a race condition in regrtest: make sure that the temporary
directory is created in the worker process. Previously, temp_cwd() could
fail on Windows if the âbuildâ directory was not created.  Patch by Victor
gh-146202: Fix a race condition in regrtest: make sure that the temporary
- gh-144739: When Python was compiled with system expat older then 2.7.2 but
tests run with newer expat, still skiptest.test_pyexpat.MemoryProtectionTest.
gh-144739: When Python was compiled with system expat older then 2.7.2 but
test.test_pyexpat.MemoryProtectionTest

### BuildÂ¶

- gh-146541: The Android testbed can now be built for 32-bit ARM and x86
targets.
gh-146541: The Android testbed can now be built for 32-bit ARM and x86
- gh-146498: The iOS XCframework build script now ensures libpython isnât
included in installed app content, and is more robust in identifying
standard library binary content that requires processing.
gh-146498: The iOS XCframework build script now ensures libpython isnât
- gh-146450: The Android build script was modified to improve parity with
other platform build scripts.
gh-146450: The Android build script was modified to improve parity with
- gh-146446: The clean target for the Apple/iOS XCframework build script is
now more selective when targeting a single architecture.
gh-146446: The clean target for the Apple/iOS XCframework build script is
- gh-145801: When Python build is optimized with GCC using PGO, use-fprofile-update=atomicoption to use atomic operations when updating
profile information. This option reduces the risk of gcov Data Files
(.gcda) corruption which can cause random GCC crashes. Patch by Victor
gh-145801: When Python build is optimized with GCC using PGO, use-fprofile-update=atomicoption to use atomic operations when updating

### WindowsÂ¶

- gh-145307: Defers loading of thepsapi.dllmodule until it is used byctypes.util.dllist().
gh-145307: Defers loading of thepsapi.dllmodule until it is used byctypes.util.dllist().
psapi.dll
ctypes.util.dllist()
- gh-144551: Updated bundled version of OpenSSL to 3.0.19.
gh-144551: Updated bundled version of OpenSSL to 3.0.19.
- gh-140131: Fix REPL cursor position on Windows when module completion
suggestion line hits console width.
gh-140131: Fix REPL cursor position on Windows when module completion

### macOSÂ¶

- gh-144551: Update macOS installer to use OpenSSL 3.0.19.
gh-144551: Update macOS installer to use OpenSSL 3.0.19.
- gh-137586: Invokeosascriptwith absolute path inwebbrowserandturtledemo.
gh-137586: Invokeosascriptwith absolute path inwebbrowserandturtledemo.
turtledemo

### C APIÂ¶

- gh-146056:PyUnicodeWriter_WriteRepr()now supportsNULLargument.
gh-146056:PyUnicodeWriter_WriteRepr()now supportsNULLargument.
PyUnicodeWriter_WriteRepr()
- gh-145010: Use GCC dialect alternatives for inline assembly inobject.hso that the Python headers compile correctly with-masm=intel.
gh-145010: Use GCC dialect alternatives for inline assembly inobject.hso that the Python headers compile correctly with-masm=intel.
object.h
-masm=intel
- gh-144981: MadePyUnstable_Code_SetExtra(),PyUnstable_Code_GetExtra(), andPyUnstable_Eval_RequestCodeExtraIndex()thread-safe on thefree threadedbuild.
gh-144981: MadePyUnstable_Code_SetExtra(),PyUnstable_Code_GetExtra(), andPyUnstable_Eval_RequestCodeExtraIndex()thread-safe on thefree threadedbuild.
PyUnstable_Code_SetExtra()
PyUnstable_Code_GetExtra()
PyUnstable_Eval_RequestCodeExtraIndex()

## Python 3.14.3 finalÂ¶

Release date: 2026-02-03

### WindowsÂ¶

- gh-128067: Fix a bug in PyREPL on Windows where output without a trailing
newline was overwritten by the next prompt.
gh-128067: Fix a bug in PyREPL on Windows where output without a trailing

### Tools/DemosÂ¶

- gh-142095: Make gdb âpy-btâ command use frame from thread local state when
available. Patch by Sam Gross and Victor Stinner.
gh-142095: Make gdb âpy-btâ command use frame from thread local state when

### TestsÂ¶

- gh-144415: The Android testbed now distinguishes between stdout/stderr
messages which were triggered by a newline, and those triggered by a
manual call toflush. This fixes logging of progress indicators and
similar content.
gh-144415: The Android testbed now distinguishes between stdout/stderr
flush
- gh-143460: Skip tests relying on infinite recusion if stack size is
unlimited.
gh-143460: Skip tests relying on infinite recusion if stack size is
- gh-65784: Add support for parametrized resourcewantobjectsin
regrtests, which allows to run Tkinter tests with the specified value oftkinter.wantobjects, for example-uwantobjects=0.
gh-65784: Add support for parametrized resourcewantobjectsin
wantobjects
tkinter.wantobjects
-uwantobjects=0
- gh-143553: Add support for parametrized resources, such as-uxpickle=2.7.
gh-143553: Add support for parametrized resources, such as-uxpickle=2.7.
-uxpickle=2.7
- gh-142836: Accommodated Solaris intest_pdb.test_script_target_anonymous_pipe.
gh-142836: Accommodated Solaris intest_pdb.test_script_target_anonymous_pipe.
test_pdb.test_script_target_anonymous_pipe
- bpo-31391: Forward-port test_xpickle from Python 2 to Python 3 and add the
resource back to testâs command line.
bpo-31391: Forward-port test_xpickle from Python 2 to Python 3 and add the

### SecurityÂ¶

- gh-144125:BytesGeneratorwill now refuse to
serialize (write) headers that are unsafely folded or delimited; seeverify_generated_headers. (Contributed by Bas
Bloemsaat and Petr Viktorin ingh-121650).
gh-144125:BytesGeneratorwill now refuse to
BytesGenerator
verify_generated_headers
- gh-143935: Fixed a bug in the folding of comments when flattening an email
message using a modern email policy. Comments consisting of a very long
sequence of non-foldable characters could trigger a forced line wrap that
omitted the required leading space on the continuation line, causing the
remainder of the comment to be interpreted as a new header field. This
enabled header injection with carefully crafted inputs.
gh-143935: Fixed a bug in the folding of comments when flattening an email
- gh-143925: Reject control characters indata:URL media types.
gh-143925: Reject control characters indata:URL media types.
data:
- gh-143919: Reject control characters inhttp.cookies.Morselfields and values.
... (缩略) ...

tchStatements

#### Previous topic

3.An Informal Introduction to Python

#### Next topic

5.Data Structures

### This page
### Navigation

- The Python Tutorial»
- 4.More Control Flow Tools
## 5. Data Structures — Python 3.14.6 documentation
来源: https://docs.python.org/3/tutorial/datastructures.html
### Navigation

- 5.Data Structures

# 5.Data StructuresÂ¶

This chapter describes some things youâve learned about already in more detail,
and adds some new things as well.

## 5.1.More on ListsÂ¶

Thelistdata type has some more methods. Here are all
of the methods of list objects:
list.append(value,/)Add an item to the end of the list.  Similar toa[len(a):]=[x].
list.append(value,/)
Add an item to the end of the list.  Similar toa[len(a):]=[x].
a[len(a):]=[x]
list.extend(iterable,/)Extend the list by appending all the items from the iterable.  Similar toa[len(a):]=iterable.
list.extend(iterable,/)
Extend the list by appending all the items from the iterable.  Similar toa[len(a):]=iterable.
a[len(a):]=iterable
list.insert(index,value,/)Insert an item at a given position.  The first argument is the index of the
element before which to insert, soa.insert(0,x)inserts at the front of
the list, anda.insert(len(a),x)is equivalent toa.append(x).
list.insert(index,value,/)
Insert an item at a given position.  The first argument is the index of the
a.insert(0,x)
a.insert(len(a),x)
a.append(x)
list.remove(value,/)Remove the first item from the list whose value is equal tovalue.  It raises aValueErrorif there is no such item.
list.remove(value,/)
Remove the first item from the list whose value is equal tovalue.  It raises aValueErrorif there is no such item.
list.pop(index=-1,/)Remove the item at the given position in the list, and return it.  If no index
is specified,a.pop()removes and returns the last item in the list.
It raises anIndexErrorif the list is empty or the index is
outside the list range.
list.pop(index=-1,/)
Remove the item at the given position in the list, and return it.  If no index
a.pop()
list.clear()Remove all items from the list.  Similar todela[:].
list.clear()
Remove all items from the list.  Similar todela[:].
dela[:]
list.index(value[,start[,stop]])Return zero-based index of the first occurrence ofvaluein the list.
Raises aValueErrorif there is no such item.The optional argumentsstartandendare interpreted as in the slice
notation and are used to limit the search to a particular subsequence of
the list.  The returned index is computed relative to the beginning of the full
sequence rather than thestartargument.
list.index(value[,start[,stop]])
Return zero-based index of the first occurrence ofvaluein the list.
Raises aValueErrorif there is no such item.
The optional argumentsstartandendare interpreted as in the slice
list.count(value,/)Return the number of timesvalueappears in the list.
list.count(value,/)
Return the number of timesvalueappears in the list.
list.sort(*,key=None,reverse=False)Sort the items of the list in place (the arguments can be used for sort
customization, seesorted()for their explanation).
list.sort(*,key=None,reverse=False)
Sort the items of the list in place (the arguments can be used for sort
sorted()
list.reverse()Reverse the elements of the list in place.
list.reverse()
Reverse the elements of the list in place.
list.copy()Return a shallow copy of the list.  Similar toa[:].
list.copy()
Return a shallow copy of the list.  Similar toa[:].
a[:]
An example that uses most of the list methods:
>>>fruits=['orange','apple','pear','banana','kiwi','apple','banana']>>>fruits.count('apple')2>>>fruits.count('tangerine')0>>>fruits.index('banana')3>>>fruits.index('banana',4)# Find next banana starting at position 46>>>fruits.reverse()>>>fruits['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']>>>fruits.append('grape')>>>fruits['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']>>>fruits.sort()>>>fruits['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']>>>fruits.pop()'pear'
You might have noticed that methods likeinsert,removeorsortthat
only modify the list have no return value printed â they return the defaultNone.[1]This is a design principle for all mutable data structures in
Python.
insert
remove
sort
Another thing you might notice is that not all data can be sorted or
compared.  For instance,[None,'hello',10]doesnât sort because
integers canât be compared to strings andNonecanât be compared to
other types.  Also, there are some types that donât have a defined
ordering relation.  For example,3+4j<5+7jisnât a valid
comparison.
[None,'hello',10]
3+4j<5+7j

### 5.1.1.Using Lists as StacksÂ¶

The list methods make it very easy to use a list as a stack, where the last
element added is the first element retrieved (âlast-in, first-outâ).  To add an
item to the top of the stack, useappend().  To retrieve an item from the
top of the stack, usepop()without an explicit index.  For example:
append()
pop()
>>>stack=[3,4,5]>>>stack.append(6)>>>stack.append(7)>>>stack[3, 4, 5, 6, 7]>>>stack.pop()7>>>stack[3, 4, 5, 6]>>>stack.pop()6>>>stack.pop()5>>>stack[3, 4]

### 5.1.2.Using Lists as QueuesÂ¶

It is also possible to use a list as a queue, where the first element added is
the first element retrieved (âfirst-in, first-outâ); however, lists are not
efficient for this purpose.  While appends and pops from the end of list are
fast, doing inserts or pops from the beginning of a list is slow (because all
of the other elements have to be shifted by one).
To implement a queue, usecollections.dequewhich was designed to
have fast appends and pops from both ends.  For example:
>>>fromcollectionsimportdeque>>>queue=deque(["Eric","John","Michael"])>>>queue.append("Terry")# Terry arrives>>>queue.append("Graham")# Graham arrives>>>queue.popleft()# The first to arrive now leaves'Eric'>>>queue.popleft()# The second to arrive now leaves'John'>>>queue# Remaining queue in order of arrivaldeque(['Michael', 'Terry', 'Graham'])

### 5.1.3.List ComprehensionsÂ¶

List comprehensions provide a concise way to create lists.
Common applications are to make new lists where each element is the result of
some operations applied to each member of another sequence or iterable, or to
create a subsequence of those elements that satisfy a certain condition.
For example, assume we want to create a list of squares, like:
>>>squares=[]>>>forxinrange(10):...squares.append(x**2)...>>>squares[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
Note that this creates (or overwrites) a variable namedxthat still exists
after the loop completes.  We can calculate the list of squares without any
side effects using:
squares=list(map(lambdax:x**2,range(10)))
or, equivalently:
squares=[x**2forxinrange(10)]
which is more concise and readable.
A list comprehension consists of brackets containing an expression followed
by aforclause, then zero or morefororifclauses.  The result will be a new list resulting from evaluating the expression
in the context of theforandifclauses which follow it.
For example, this listcomp combines the elements of two lists if they are not
equal:
>>>[(x,y)forxin[1,2,3]foryin[3,1,4]ifx!=y][(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
and itâs equivalent to:
>>>combs=[]>>>forxin[1,2,3]:...foryin[3,1,4]:...ifx!=y:...combs.append((x,y))...>>>combs[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
Note how the order of theforandifstatements is the
same in both these snippets.
If the expression is a tuple (e.g. the(x,y)in the previous example),
it must be parenthesized.
(x,y)
>>>vec=[-4,-2,0,2,4]>>># create a new list with the values doubled>>>[x*2forxinvec][-8, -4, 0, 4, 8]>>># filter the list to exclude negative numbers>>>[xforxinvecifx>=0][0, 2, 4]>>># apply a function to all the elements>>>[abs(x)forxinvec][4, 2, 0, 2, 4]>>># call a method on each element>>>freshfruit=['  banana','  loganberry ','passion fruit  ']>>>[weapon.strip()forweaponinfreshfruit]['banana', 'loganberry', 'passion fruit']>>># create a list of 2-tuples like (number, square)>>>[(x,x**2)forxinrange(6)][(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]>>># the tuple must be parenthesized, otherwise an error is raised>>>[x,x**2forxinrange(6)]File"<stdin>", line1[x,x**2forxinrange(6)]^^^^^^^SyntaxError:did you forget parentheses around the comprehension target?>>># flatten a list using a listcomp with two 'for'>>>vec=[[1,2,3],[4,5,6],[7,8,9]]>>>[numforeleminvecfornuminelem][1, 2, 3, 4, 5, 6, 7, 8, 9]
List comprehensions can contain complex expressions and nested functions:
>>>frommathimportpi>>>[str(round(pi,i))foriinrange(1,6)]['3.1', '3.14', '3.142', '3.1416', '3.14159']

### 5.1.4.Nested List ComprehensionsÂ¶

The initial expression in a list comprehension can be any arbitrary expression,
including another list comprehension.
Consider the following example of a 3x4 matrix implemented as a list of
3 lists of length 4:
>>>matrix=[...[1,2,3,4],...[5,6,7,8],...[9,10,11,12],...]
The following list comprehension will transpose rows and columns:
>>>[[row[i]forrowinmatrix]foriinrange(4)][[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
As we saw in the previous section, the inner list comprehension is evaluated in
the context of theforthat follows it, so this example is
equivalent to:
>>>transposed=[]>>>foriinrange(4):...transposed.append([row[i]forrowinmatrix])...>>>transposed[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
which, in turn, is the same as:
>>>transposed=[]>>>foriinrange(4):...# the following 3 lines implement the nested listcomp...transposed_row=[]...forrowinmatrix:...transposed_row.append(row[i])...transposed.append(transposed_row)...>>>transposed[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
In the real world, you should prefer built-in functions to complex flow statements.
Thezip()function would do a great job for this use case:
zip()
>>>list(zip(*matrix))[(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]
SeeUnpacking Argument Listsfor details on the asterisk in this line.

## 5.2.ThedelstatementÂ¶

There is a way to remove an item from a list given its index instead of its
value: thedelstatement.  This differs from thepop()method
which returns a value.  Thedelstatement can also be used to remove
slices from a list or clear the entire list (which we did earlier by assignment
of an empty list to the slice).  For example:
>>>a=[-1,1,66.25,333,333,1234.5]>>>dela[0]>>>a[1, 66.25, 333, 333, 1234.5]>>>dela[2:4]>>>a[1, 66.25, 1234.5]>>>dela[:]>>>a[]
delcan also be used to delete entire variables:
>>>dela
Referencing the nameahereafter is an error (at least until another value
is assigned to it).  Weâll find other uses fordellater.

## 5.3.Tuples and SequencesÂ¶

We saw that lists and strings have many common properties, such as indexing and
slicing operations.  They are two examples ofsequencedata types (seeSequence Types â list, tuple, range).  Since Python is an evolving language, other sequence data
types may be added.  There is also another standard sequence data type: thetuple.
A tuple consists of a number of values separated by commas, for instance:
>>>t=12345,54321,'hello!'>>>t[0]12345>>>t(12345, 54321, 'hello!')>>># Tuples may be nested:>>>u=t,(1,2,3,4,5)>>>u((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))>>># Tuples are immutable:>>>t[0]=88888Traceback (most recent call last):File"<stdin>", line1, in<module>TypeError:'tuple' object does not support item assignment>>># but they can contain mutable objects:>>>v=([1,2,3],[3,2,1])>>>v([1, 2, 3], [3, 2, 1])
As you see, on output tuples are always enclosed in parentheses, so that nested
tuples are interpreted correctly; they may be input with or without surrounding
parentheses, although often parentheses are necessary anyway (if the tuple is
part of a larger expression).  It is not possible to assign to the individual
items of a tuple, however it is possible to create tuples which contain mutable
objects, such as lists.
Though tuples may seem similar to lists, they are often used in different
situations and for different purposes.
Tuples areimmutable, and usually contain a heterogeneous sequence of
elements that are accessed via unpacking (see later in this section) or indexing
(or even by attribute in the case ofnamedtuples).
Lists aremutable, and their elements are usually homogeneous and are
accessed by iterating over the list.
namedtuples
A special problem is the construction of tuples containing 0 or 1 items: the
syntax has some extra quirks to accommodate these.  Empty tuples are constructed
by an empty pair of parentheses; a tuple with one item is constructed by
following a value with a comma (it is not sufficient to enclose a single value
in parentheses). Ugly, but effective.  For example:
>>>empty=()>>>singleton='hello',# <-- note trailing comma>>>len(empty)0>>>len(singleton)1>>>singleton('hello',)
The statementt=12345,54321,'hello!'is an example oftuple packing:
the values12345,54321and'hello!'are packed together in a tuple.
The reverse operation is also possible:
t=12345,54321,'hello!'
12345
54321
'hello!'
>>>x,y,z=t
This is called, appropriately enough,sequence unpackingand works for any
sequence on the right-hand side.  Sequence unpacking requires that there are as
many variables on the left side of the equals sign as there are elements in the
sequence.  Note that multiple assignment is really just a combination of tuple
packing and sequence unpacking.

## 5.4.SetsÂ¶

Python also includes a data type forsets.  A set is
an unordered collection with no duplicate elements.  Basic uses include
membership testing and eliminating duplicate entries.  Set objects also
support mathematical operations like union, intersection, difference, and
symmetric difference.
Curly braces or theset()function can be used to create sets.  Note: to
create an empty set you have to useset(), not{}; the latter creates an
empty dictionary, a data structure that we discuss in the next section.
Because sets are unordered, iterating over them or printing them can
produce the elements in a different order than you expect.
Here is a brief demonstration:
>>>basket={'apple','orange','apple','pear','orange','banana'}>>>print(basket)# show that duplicates have been removed{'orange', 'banana', 'pear', 'apple'}>>>'orange'inbasket# fast membership testingTrue>>>'crabgrass'inbasketFalse>>># Demonstrate set operations on unique letters from two words>>>>>>a=set('abracadabra')>>>b=set('alacazam')>>>a# unique letters in a{'a', 'r', 'b', 'c', 'd'}>>>a-b# letters in a but not in b{'r', 'd', 'b'}>>>a|b# letters in a or b or both{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}>>>a&b# letters in both a and b{'a', 'c'}>>>a^b# letters in a or b but not both{'r', 'd', 'b', 'm', 'z', 'l'}
Similarly tolist comprehensions, set comprehensions
are also supported:
>>>a={xforxin'abracadabra'ifxnotin'abc'}>>>a{'r', 'd'}

## 5.5.DictionariesÂ¶

Another useful data type built into Python is thedictionary(seeMapping Types â dict). Dictionaries are sometimes found in other languages as
âassociative memoriesâ or âassociative arraysâ.  Unlike sequences, which are
indexed by a range of numbers, dictionaries are indexed bykeys, which can be
any immutable type; strings and numbers can always be keys.  Tuples can be used
as keys if they contain only strings, numbers, or tuples; if a tuple contains
any mutable object either directly or indirectly, it cannot be used as a key.
You canât use lists as keys, since lists can be modified in place using index
assignments, slice assignments, or methods likeappend()andextend().
extend()
It is best to think of a dictionary as a set ofkey: valuepairs,
with the requirement that the keys are unique (within one dictionary). A pair of
braces creates an empty dictionary:{}. Placing a comma-separated list of
key:value pairs within the braces adds initial key:value pairs to the
dictionary; this is also the way dictionaries are written on output.
The main operations on a dictionary are storing a value with some key and
extracting the value given the key.  It is also possible to delete a key:value
pair withdel. If you store using a key that is already in use, the old
value associated with that key is forgotten.
Extracting a value for a non-existent key by subscripting (d[key]) raises aKeyError. To avoid getting this error when trying to access a possibly
non-existent key, use theget()method instead, which returnsNone(or a specified default value) if the key is not in the dictionary.
d[key]
get()
Performinglist(d)on a dictionary returns a list of all the keys
used in the dictionary, in insertion order (if you want it sorted, just usesorted(d)instead). To check whether a single key is in the
dictionary, use theinkeyword.
list(d)
sorted(d)
Here is a small example using a dictionary:
>>>tel={'jack':4098,'sape':4139}>>>tel['guido']=4127>>>tel{'jack': 4098, 'sape': 4139, 'guido': 4127}>>>tel['jack']4098>>>tel['irv']Traceback (most recent call last):File"<stdin>", line1, in<module>KeyError:'irv'>>>print(tel.get('irv'))None>>>deltel['sape']>>>tel['irv']=4127>>>tel{'jack': 4098, 'guido': 4127, 'irv': 4127}>>>list(tel)['jack', 'guido', 'irv']>>>sorted(tel)['guido', 'irv', 'jack']>>>'guido'intelTrue>>>'jack'notintelFalse
Thedict()constructor builds dictionaries directly from sequences of
key-value pairs:
dict()
>>>dict([('sape',4139),('guido',4127),('jack',4098)]){'sape': 4139, 'guido': 4127, 'jack': 4098}
In addition, dict comprehensions can be used to create dictionaries from
arbitrary key and value expressions:
>>>{x:x**2forxin(2,4,6)}{2: 4, 4: 16, 6: 36}
When the keys are simple strings, it is sometimes easier to specify pairs using
keyword arguments:
>>>dict(sape=4139,guido=4127,jack=4098){'sape': 4139, 'guido': 4127, 'jack': 4098}

## 5.6.Looping TechniquesÂ¶

When looping through dictionaries, the key and corresponding value can be
retrieved at the same time using theitems()method.
items()
>>>knights={'gallahad':'the pure','robin':'the brave'}>>>fork,vinknights.items():...print(k,v)...gallahad the purerobin the brave
When looping through a sequence, the position index and corresponding value can
be retrieved at the same time using theenumerate()function.
enumerate()
>>>fori,vinenumerate(['tic','tac','toe']):...print(i,v)...0 tic1 tac2 toe
To loop over two or more sequences at the same time, the entries can be paired
with thezip()function.
>>>questions=['name','quest','favorite color']>>>answers=['lancelot','the holy grail','blue']>>>forq,ainzip(questions,answers):...print('What is your{0}?  It is{1}.'.format(q,a))...What is your name?  It is lancelot.What is your quest?  It is the holy grail.What is your favorite color?  It is blue.
To loop over a sequence in reverse, first specify the sequence in a forward
direction and then call thereversed()function.
reversed()
>>>foriinreversed(range(1,10,2)):...print(i)...97531
To loop over a sequence in sorted order, use thesorted()function which
returns a new sorted list while leaving the source unaltered.
>>>basket=['apple','orange','apple','pear','orange','banana']>>>foriinsorted(basket):...print(i)...appleapplebananaorangeorangepear
Usingset()on a sequence eliminates duplicate elements. The use ofsorted()in combination withset()over a sequence is an idiomatic
way to loop over unique elements of the sequence in sorted order.
>>>basket=['apple','orange','apple','pear','orange','banana']>>>forfinsorted(set(basket)):...print(f)...applebananaorangepear
It is sometimes tempting to change a list while you are looping over it;
however, it is often simpler and safer to create a new list instead.
>>>importmath>>>raw_data=[56.2,float('NaN'),51.7,55.3,52.5,float('NaN'),47.8]>>>filtered_data=[]>>>forvalueinraw_data:...ifnotmath.isnan(value):...filtered_data.append(value)...>>>filtered_data[56.2, 51.7, 55.3, 52.5, 47.8]

## 5.7.More on ConditionsÂ¶

The conditions used inwhileandifstatements can contain any
operators, not just comparisons.
while
The comparison operatorsinandnotinare membership tests that
determine whether a value is in (or not in) a container.  The operatorsisandisnotcompare whether two objects are really the same object.  All
comparison operators have the same priority, which is lower than that of all
numerical operators.
notin
isnot
Comparisons can be chained.  For example,a<b==ctests whetherais
less thanband moreoverbequalsc.
a<b==c
Comparisons may be combined using the Boolean operatorsandandor, and
the outcome of a comparison (or of any other Boolean expression) may be negated
withnot.  These have lower priorities than comparison operators; between
them,nothas the highest priority andorthe lowest, so thatAandnotBorCis equivalent to(Aand(notB))orC. As always, parentheses
can be used to express the desired composition.
and
not
AandnotBorC
(Aand(notB))orC
The Boolean operatorsandandorare so-calledshort-circuitoperators: their arguments are evaluated from left to right, and evaluation
stops as soon as the outcome is determined.  For example, ifAandCare
true butBis false,AandBandCdoes not evaluate the expressionC.  When used as a general value and not as a Boolean, the return value of a
short-circuit operator is the last evaluated argument.
AandBandC
It is possible to assign the result of a comparison or other Boolean expression
to a variable.  For example,
>>>string1,string2,string3='','Trondheim','Hammer Dance'>>>non_null=string1orstring2orstring3>>>non_null'Trondheim'
Note that in Python, unlike C, assignment inside expressions must be done
explicitly with thewalrus operator:=.
This avoids a common class of problems encountered in C programs: typing=in an expression when==was intended.

## 5.8.Comparing Sequences and Other TypesÂ¶

Sequence objects typically may be compared to other objects with the same sequence
type. The comparison useslexicographicalordering: first the first two
items are compared, and if they differ this determines the outcome of the
comparison; if they are equal, the next two items are compared, and so on, until
either sequence is exhausted. If two items to be compared are themselves
sequences of the same type, the lexicographical comparison is carried out
recursively.  If all items of two sequences compare equal, the sequences are
considered equal. If one sequence is an initial sub-sequence of the other, the
shorter sequence is the smaller (lesser) one.  Lexicographical ordering for
strings uses the Unicode code point number to order individual characters.
Some examples of comparisons between sequences of the same type:
(1,2,3)<(1,2,4)[1,2,3]<[1,2,4]'ABC'<'C'<'Pascal'<'Python'(1,2,3,4)<(1,2,4)(1,2)<(1,2,-1)(1,2,3)==(1.0,2.0,3.0)(1,2,('aa','ab'))<(1,2,('abc','a'),4)
Note that comparing objects of different types with<or>is legal
provided that the objects have appropriate comparison methods.  For example,
mixed numeric types are compared according to their numeric value, so 0 equals
0.0, etc.  Otherwise, rather than providing an arbitrary ordering, the
interpreter will raise aTypeErrorexception.
Footnotes

### Table of Contents
#### Previous topic

4.More Control Flow Tools

#### Next topic

6.Modules

### This page
### Navigation
## 6. Modules — Python 3.14.6 documentation
来源: https://docs.python.org/3/tutorial/modules.html
### Navigation

- 6.Modules

# 6.ModulesÂ¶

If you quit from the Python interpreter and enter it again, the definitions you
have made (functions and variables) are lost. Therefore, if you want to write a
somewhat longer program, you are better off using a text editor to prepare the
input for the interpreter and running it with that file as input instead.  This
is known as creating ascript.  As your program gets longer, you may want to
split it into several files for easier maintenance.  You may also want to use a
handy function that youâve written in several programs without copying its
definition into each program.
To support this, Python has a way to put definitions in a file and use them in a
script or in an interactive instance of the interpreter. Such a file is called amodule; definitions from a module can beimportedinto other modules or into
themainmodule (the collection of variables that you have access to in a
script executed at the top level and in calculator mode).
A module is a file containing Python definitions and statements.  The file name
is the module name with the suffix.pyappended.  Within a module, the
moduleâs name (as a string) is available as the value of the global variable__name__.  For instance, use your favorite text editor to create a file
calledfibo.pyin the current directory with the following contents:
.py
__name__
fibo.py
# Fibonacci numbers moduledeffib(n):"""Write Fibonacci series up to n."""a,b=0,1whilea<n:print(a,end=' ')a,b=b,a+bprint()deffib2(n):"""Return Fibonacci series up to n."""result=[]a,b=0,1whilea<n:result.append(a)a,b=b,a+breturnresult
Now enter the Python interpreter and import this module with the following
command:
>>>importfibo
This does not add the names of the functions defined infibodirectly to
the currentnamespace(seePython Scopes and Namespacesfor more details);
it only adds the module namefibothere. Using
the module name you can access the functions:
fibo
>>>fibo.fib(1000)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987>>>fibo.fib2(100)[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]>>>fibo.__name__'fibo'
If you intend to use a function often you can assign it to a local name:
>>>fib=fibo.fib>>>fib(500)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

## 6.1.More on ModulesÂ¶

A module can contain executable statements as well as function definitions.
These statements are intended to initialize the module. They are executed only
thefirsttime the module name is encountered in an import statement.[1](They are also run if the file is executed as a script.)
Each module has its own private namespace, which is used as the global namespace
by all functions defined in the module. Thus, the author of a module can
use global variables in the module without worrying about accidental clashes
with a userâs global variables. On the other hand, if you know what you are
doing you can touch a moduleâs global variables with the same notation used to
refer to its functions,modname.itemname.
modname.itemname
Modules can import other modules.  It is customary but not required to place allimportstatements at the beginning of a module (or script, for that
matter).  The imported module names, if placed at the top level of a module
(outside any functions or classes), are added to the moduleâs global namespace.
import
There is a variant of theimportstatement that imports names from a
module directly into the importing moduleâs namespace.  For example:
>>>fromfiboimportfib,fib2>>>fib(500)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
This does not introduce the module name from which the imports are taken in the
local namespace (so in the example,fibois not defined).
There is even a variant to import all names that a module defines:
>>>fromfiboimport*>>>fib(500)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
This imports all names except those beginning with an underscore (_).
In most cases Python programmers do not use this facility since it introduces
an unknown set of names into the interpreter, possibly hiding some things
you have already defined.
Note that in general the practice of importing*from a module or package is
frowned upon, since it often causes poorly readable code. However, it is okay to
use it to save typing in interactive sessions.
If the module name is followed byas, then the name
followingasis bound directly to the imported module.
>>>importfiboasfib>>>fib.fib(500)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
This is effectively importing the module in the same way thatimportfibowill do, with the only difference of it being available asfib.
importfibo
fib
It can also be used when utilisingfromwith similar effects:
from
>>>fromfiboimportfibasfibonacci>>>fibonacci(500)0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
Note
For efficiency reasons, each module is only imported once per interpreter
session.  Therefore, if you change your modules, you must restart the
interpreter â or, if itâs just one module you want to test interactively,
useimportlib.reload(), e.g.importimportlib;importlib.reload(modulename).
importlib.reload()
importimportlib;importlib.reload(modulename)

### 6.1.1.Executing modules as scriptsÂ¶

When you run a Python module with
pythonfibo.py<arguments>
the code in the module will be executed, just as if you imported it, but with
the__name__set to"__main__".  That means that by adding this code at
the end of your module:
"__main__"
if__name__=="__main__":importsysfib(int(sys.argv[1]))
you can make the file usable as a script as well as an importable module,
because the code that parses the command line only runs if the module is
executed as the âmainâ file:
$pythonfibo.py500 1 1 2 3 5 8 13 21 34
If the module is imported, the code is not run:
>>>importfibo>>>
This is often used either to provide a convenient user interface to a module, or
for testing purposes (running the module as a script executes a test suite).

### 6.1.2.The Module Search PathÂ¶

When a module namedspamis imported, the interpreter first searches for
a built-in module with that name. These module names are listed insys.builtin_module_names. If not found, it then searches for a file
namedspam.pyin a list of directories given by the variablesys.path.sys.pathis initialized from these locations:
spam
sys.builtin_module_names
spam.py
sys.path
- The directory containing the input script (or the current directory when no
file is specified).
The directory containing the input script (or the current directory when no
- PYTHONPATH(a list of directory names, with the same syntax as the
shell variablePATH).
PYTHONPATH(a list of directory names, with the same syntax as the
PYTHONPATH
- The installation-dependent default (by convention including asite-packagesdirectory, handled by thesitemodule).
The installation-dependent default (by convention including asite-packagesdirectory, handled by thesitemodule).
site-packages
site
More details are atThe initialization of the sys.path module search path.
On file systems which support symlinks, the directory containing the input
script is calculated after the symlink is followed. In other words the
directory containing the symlink isnotadded to the module search path.
After initialization, Python programs can modifysys.path.  The
directory containing the script being run is placed at the beginning of the
search path, ahead of the standard library path. This means that scripts in that
directory will be loaded instead of modules of the same name in the library
directory. This is an error unless the replacement is intended.  See sectionStandard Modulesfor more information.

### 6.1.3.âCompiledâ Python filesÂ¶

To speed up loading modules, Python caches the compiled version of each module
in the__pycache__directory under the namemodule.version.pyc,
where the version encodes the format of the compiled file; it generally contains
the Python version number.  For example, in CPython release 3.3 the compiled
version of spam.py would be cached as__pycache__/spam.cpython-33.pyc.  This
naming convention allows compiled modules from different releases and different
versions of Python to coexist.
__pycache__
module.version.pyc
__pycache__/spam.cpython-33.pyc
Python checks the modification date of the source against the compiled version
to see if itâs out of date and needs to be recompiled.  This is a completely
automatic process.  Also, the compiled modules are platform-independent, so the
same library can be shared among systems with different architectures.
Python does not check the cache in two circumstances.  First, it always
recompiles and does not store the result for the module thatâs loaded directly
from the command line.  Second, it does not check the cache if there is no
source module.  To support a non-source (compiled only) distribution, the
compiled module must be in the source directory, and there must not be a source
module.
Some tips for experts:
- You can use the-Oor-OOswitches on the Python command
to reduce the size of a compiled module.  The-Oswitch removes assert
statements, the-OOswitch removes both assert statements and __doc__
strings.  Since some programs may rely on having these available, you should
only use this option if you know what youâre doing.  âOptimizedâ modules have
anopt-tag and are usually smaller.  Future releases may
change the effects of optimization.
You can use the-Oor-OOswitches on the Python command
-OO
opt-
- A program doesnât run any faster when it is read from a.pycfile than when it is read from a.pyfile; the only thing thatâs faster
about.pycfiles is the speed with which they are loaded.
A program doesnât run any faster when it is read from a.pycfile than when it is read from a.pyfile; the only thing thatâs faster
- The modulecompileallcan create .pyc files for all modules in a
The modulecompileallcan create .pyc files for all modules in a
compileall
- There is more detail on this process, including a flow chart of the
decisions, inPEP 3147.
There is more detail on this process, including a flow chart of the

## 6.2.Standard ModulesÂ¶

Python comes with a library of standard modules, described in a separate
document, the Python Library Reference (âLibrary Referenceâ hereafter).  Some
modules are built into the interpreter; these provide access to operations that
are not part of the core of the language but are nevertheless built in, either
for efficiency or to provide access to operating system primitives such as
system calls.  The set of such modules is a configuration option which also
depends on the underlying platform.  For example, thewinregmodule is only
provided on Windows systems. One particular module deserves some attention:sys, which is built into every Python interpreter.  The variablessys.ps1andsys.ps2define the strings used as primary and secondary
prompts:
winreg
sys
sys.ps1
sys.ps2
>>>importsys>>>sys.ps1'>>> '>>>sys.ps2'... '>>>sys.ps1='C> 'C> print('Yuck!')Yuck!C>
These two variables are only defined if the interpreter is in interactive mode.
The variablesys.pathis a list of strings that determines the interpreterâs
search path for modules. It is initialized to a default path taken from the
environment variablePYTHONPATH, or from a built-in default ifPYTHONPATHis not set.  You can modify it using standard list
operations:
>>>importsys>>>sys.path.append('/ufs/guido/lib/python')

## 6.3.Thedir()FunctionÂ¶

The built-in functiondir()is used to find out which names a module
defines.  It returns a sorted list of strings:
>>>importfibo,sys>>>dir(fibo)['__name__', 'fib', 'fib2']>>>dir(sys)['__breakpointhook__', '__displayhook__', '__doc__', '__excepthook__','__interactivehook__', '__loader__', '__name__', '__package__', '__spec__','__stderr__', '__stdin__', '__stdout__', '__unraisablehook__','_clear_type_cache', '_current_frames', '_debugmallocstats', '_framework','_getframe', '_git', '_home', '_xoptions', 'abiflags', 'addaudithook','api_version', 'argv', 'audit', 'base_exec_prefix', 'base_prefix','breakpointhook', 'builtin_module_names', 'byteorder', 'call_tracing','callstats', 'copyright', 'displayhook', 'dont_write_bytecode', 'exc_info','excepthook', 'exec_prefix', 'executable', 'exit', 'flags', 'float_info','float_repr_style', 'get_asyncgen_hooks', 'get_coroutine_origin_tracking_depth','getallocatedblocks', 'getdefaultencoding', 'getdlopenflags','getfilesystemencodeerrors', 'getfilesystemencoding', 'getprofile','getrecursionlimit', 'getrefcount', 'getsizeof', 'getswitchinterval','gettrace', 'hash_info', 'hexversion', 'implementation', 'int_info','intern', 'is_finalizing', 'last_traceback', 'last_type', 'last_value','maxsize', 'maxunicode', 'meta_path', 'modules', 'path', 'path_hooks','path_importer_cache', 'platform', 'prefix', 'ps1', 'ps2', 'pycache_prefix','set_asyncgen_hooks', 'set_coroutine_origin_tracking_depth', 'setdlopenflags','setprofile', 'setrecursionlimit', 'setswitchinterval', 'settrace', 'stderr','stdin', 'stdout', 'thread_info', 'unraisablehook', 'version', 'version_info','warnoptions']
Without arguments,dir()lists the names you have defined currently:
>>>a=[1,2,3,4,5]>>>importfibo>>>fib=fibo.fib>>>dir()['__builtins__', '__name__', 'a', 'fib', 'fibo', 'sys']
Note that it lists all types of names: variables, modules, functions, etc.
dir()does not list the names of built-in functions and variables.  If you
want a list of those, they are defined in the standard modulebuiltins:
builtins
>>>importbuiltins>>>dir(builtins)['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException','BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning','ChildProcessError', 'ConnectionAbortedError', 'ConnectionError','ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning','EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False','FileExistsError', 'FileNotFoundError', 'FloatingPointError','FutureWarning', 'GeneratorExit', 'IOError', 'ImportError','ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError','IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError','MemoryError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented','NotImplementedError', 'OSError', 'OverflowError','PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError','ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning','StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError','SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError','UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError','UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning','ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__','__debug__', '__doc__', '__import__', '__name__', '__package__', 'abs','all', 'any', 'ascii', 'bin', 'bool', 'bytearray', 'bytes', 'callable','chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits','delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit','filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr','hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass','iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview','min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property','quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice','sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars','zip']

## 6.4.PackagesÂ¶

Packages are a way of structuring Pythonâs module namespace by using âdotted
module namesâ.  For example, the module nameA.Bdesignates a submodule
namedBin a package namedA.  Just like the use of modules saves the
authors of different modules from having to worry about each otherâs global
variable names, the use of dotted module names saves the authors of multi-module
packages like NumPy or Pillow from having to worry about
each otherâs module names.
A.B
Suppose you want to design a collection of modules (a âpackageâ) for the uniform
handling of sound files and sound data.  There are many different sound file
formats (usually recognized by their extension, for example:.wav,.aiff,.au), so you may need to create and maintain a growing
collection of modules for the conversion between the various file formats.
There are also many different operations you might want to perform on sound data
(such as mixing, adding echo, applying an equalizer function, creating an
artificial stereo effect), so in addition you will be writing a never-ending
stream of modules to perform these operations.  Hereâs a possible structure for
your package (expressed in terms of a hierarchical filesystem):
.wav
.aiff
.au
sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
      effects/                  Subpackage for sound effects
              echo.py
              surround.py
              reverse.py
      filters/                  Subpackage for filters
              equalizer.py
              vocoder.py
              karaoke.py
When importing the package, Python searches through the directories onsys.pathlooking for the package subdirectory.
The__init__.pyfiles are required to make Python treat directories
containing the file as packages (unless using anamespace package, a
relatively advanced feature). This prevents directories with a common name,
such asstring, from unintentionally hiding valid modules that occur later
on the module search path. In the simplest case,__init__.pycan just be
an empty file, but it can also execute initialization code for the package or
set the__all__variable, described later.
string
__all__
Users of the package can import individual modules from the package, for
example:
importsound.effects.echo
This loads the submodulesound.effects.echo.  It must be referenced with
its full name.
sound.effects.echo
sound.effects.echo.echofilter(input,output,delay=0.7,atten=4)
An alternative way of importing the submodule is:
fromsound.effectsimportecho
This also loads the submoduleecho, and makes it available without its
package prefix, so it can be used as follows:
echo
echo.echofilter(input,output,delay=0.7,atten=4)
Yet another variation is to import the desired function or variable directly:
fromsound.effects.echoimportechofilter
Again, this loads the submoduleecho, but this makes its functionechofilter()directly available:
echofilter()
echofilter(input,output,delay=0.7,atten=4)
Note that when usingfrompackageimportitem, the item can be either a
submodule (or subpackage) of the package, or some  other name defined in the
package, like a function, class or variable.  Theimportstatement first
tests whether the item is defined in the package; if not, it assumes it is a
module and attempts to load it.  If it fails to find it, anImportErrorexception is raised.
frompackageimportitem
Contrarily, when using syntax likeimportitem.subitem.subsubitem, each item
except for the last must be a package; the last item can be a module or a
package but canât be a class or function or variable defined in the previous
item.
importitem.subitem.subsubitem

### 6.4.1.Importing * From a PackageÂ¶

Now what happens when the user writesfromsound.effectsimport*?  Ideally,
one would hope that this somehow goes out to the filesystem, finds which
submodules are present in the package, and imports them all.  This could take a
long time and importing sub-modules might have unwanted side-effects that should
only happen when the sub-module is explicitly imported.
fromsound.effectsimport*
The only solution is for the package author to provide an explicit index of the
package.  Theimportstatement uses the following convention: if a packageâs__init__.pycode defines a list named__all__, it is taken to be the
list of module names that should be imported whenfrompackageimport*is
encountered.  It is up to the package author to keep this list up-to-date when a
new version of the package is released.  Package authors may also decide not to
support it, if they donât see a use for importing * from their package.  For
example, the filesound/effects/__init__.pycould contain the following
code:
frompackageimport*
sound/effects/__init__.py
__all__=["echo","surround","reverse"]
This would mean thatfromsound.effectsimport*would import the three
named submodules of thesound.effectspackage.
sound.effects
Be aware that submodules might become shadowed by locally defined names. For
example, if you added areversefunction to thesound/effects/__init__.pyfile, thefromsound.effectsimport*would only import the two submodulesechoandsurround, butnotthereversesubmodule, because it is shadowed by the locally definedreversefunction:
reverse
surround
__all__=["echo",# refers to the 'echo.py' file"surround",# refers to the 'surround.py' file"reverse",# !!! refers to the 'reverse' function now !!!]defreverse(msg:str):# <-- this name shadows the 'reverse.py' submodulereturnmsg[::-1]#     in the case of a 'from sound.effects import *'
If__all__is not defined, the statementfromsound.effectsimport*doesnotimport all submodules from the packagesound.effectsinto the
current namespace; it only ensures that the packagesound.effectshas
been imported (possibly running any initialization code in__init__.py)
and then imports whatever names are defined in the package.  This includes any
names defined (and submodules explicitly loaded) by__init__.py.  It
also includes any submodules of the package that were explicitly loaded by
previousimportstatements.  Consider this code:
importsound.effects.echoimportsound.effects.surroundfromsound.effectsimport*
In this example, theechoandsurroundmodules are imported in the
current namespace because they are defined in thesound.effectspackage
when thefrom...importstatement is executed.  (This also works when__all__is defined.)
from...import
Although certain modules are designed to export only names that follow certain
patterns when you useimport*, it is still considered bad practice in
production code.
import*
Remember, there is nothing wrong with usingfrompackageimportspecific_submodule!  In fact, this is the recommended notation unless the
importing module needs to use submodules with the same name from different
packages.
frompackageimportspecific_submodule

### 6.4.2.Intra-package ReferencesÂ¶

When packages are structured into subpackages (as with thesoundpackage
in the example), you can use absolute imports to refer to submodules of siblings
packages.  For example, if the modulesound.filters.vocoderneeds to use
theechomodule in thesound.effectspackage, it can usefromsound.effectsimportecho.
sound
sound.filters.vocoder
You can also write relative imports, with thefrommoduleimportnameform
of import statement.  These imports use leading dots to indicate the current and
parent packages involved in the relative import.  From thesurroundmodule for example, you might use:
frommoduleimportname
from.importechofrom..importformatsfrom..filtersimportequalizer
Note that relative imports are based on the name of the current moduleâs package.
Since the main module does not have a package, modules intended for use
as the main module of a Python application must always use absolute imports.

### 6.4.3.Packages in Multiple DirectoriesÂ¶

Packages support one more special attribute,__path__.  This is
initialized to be asequenceof strings containing the name of the
directory holding the
packageâs__init__.pybefore the code in that file is executed.  This
variable can be modified; doing so affects future searches for modules and
subpackages contained in the package.
__path__
While this feature is not often needed, it can be used to extend the set of
modules found in a package.

### Table of Contents
#### Previous topic
#### Next topic

7.Input and Output

### This page
### Navigation
## 7. Input and Output — Python 3.14.6 documentation
来源: https://docs.python.org/3/tutorial/inputoutput.html
### Navigation

- 7.Input and Output

# 7.Input and OutputÂ¶

There are several ways to present the output of a program; data can be printed
in a human-readable form, or written to a file for future use. This chapter will
discuss some of the possibilities.

## 7.1.Fancier Output FormattingÂ¶

So far weâve encountered two ways of writing values:expression statementsand
theprint()function.  (A third way is using thewrite()method
of file objects; the standard output file can be referenced assys.stdout.
See the Library Reference for more information on this.)
print()
write()
sys.stdout
Often youâll want more control over the formatting of your output than simply
printing space-separated values. There are several ways to format output.
- To useformatted string literals, begin a string
withforFbefore the opening quotation mark or triple quotation mark.
Inside this string, you can write a Python expression between{and}characters that can refer to variables or literal values.>>>year=2016>>>event='Referendum'>>>f'Results of the{year}{event}''Results of the 2016 Referendum'
To useformatted string literals, begin a string
Inside this string, you can write a Python expression between{and}characters that can refer to variables or literal values.
>>>year=2016>>>event='Referendum'>>>f'Results of the{year}{event}''Results of the 2016 Referendum'
- Thestr.format()method of strings requires more manual
effort.  Youâll still use{and}to mark where a variable
will be substituted and can provide detailed formatting directives,
but youâll also need to provide the information to be formatted. In the following code
block there are two examples of how to format variables:>>>yes_votes=42_572_654>>>total_votes=85_705_149>>>percentage=yes_votes/total_votes>>>'{:-9}YES votes{:2.2%}'.format(yes_votes,percentage)' 42572654 YES votes  49.67%'Notice how theyes_votesare padded with spaces and a negative sign only for negative numbers.
The example also printspercentagemultiplied by 100, with 2 decimal
places and followed by a percent sign (seeFormat specification mini-languagefor details).
Thestr.format()method of strings requires more manual
block there are two examples of how to format variables:
str.format()
>>>yes_votes=42_572_654>>>total_votes=85_705_149>>>percentage=yes_votes/total_votes>>>'{:-9}YES votes{:2.2%}'.format(yes_votes,percentage)' 42572654 YES votes  49.67%'
Notice how theyes_votesare padded with spaces and a negative sign only for negative numbers.
yes_votes
percentage
- Finally, you can do all the string handling yourself by using string slicing and
concatenation operations to create any layout you can imagine.  The
string type has some methods that perform useful operations for padding
strings to a given column width.
Finally, you can do all the string handling yourself by using string slicing and
When you donât need fancy output but just want a quick display of some
variables for debugging purposes, you can convert any value to a string with
therepr()orstr()functions.
str()
Thestr()function is meant to return representations of values which are
fairly human-readable, whilerepr()is meant to generate representations
which can be read by the interpreter (or will force aSyntaxErrorif
there is no equivalent syntax).  For objects which donât have a particular
representation for human consumption,str()will return the same value asrepr().  Many values, such as numbers or structures like lists and
dictionaries, have the same representation using either function.  Strings, in
particular, have two distinct representations.
Some examples:
>>>s='Hello, world.'>>>str(s)'Hello, world.'>>>repr(s)"'Hello, world.'">>>str(1/7)'0.14285714285714285'>>>x=10*3.25>>>y=200*200>>>s='The value of x is '+repr(x)+', and y is '+repr(y)+'...'>>>print(s)The value of x is 32.5, and y is 40000...>>># The repr() of a string adds string quotes and backslashes:>>>hello='hello, world\n'>>>hellos=repr(hello)>>>print(hellos)'hello, world\n'>>># The argument to repr() may be any Python object:>>>repr((x,y,('spam','eggs')))"(32.5, 40000, ('spam', 'eggs'))"
Thestringmodule contains support for a simple templating approach
based upon regular expressions, viastring.Template.
This offers yet another way to substitute values into strings,
using placeholders like$xand replacing them with values from a dictionary.
This syntax is easy to use, although it offers much less control for formatting.
string.Template

### 7.1.1.Formatted String LiteralsÂ¶

Formatted string literals(also called f-strings for
short) let you include the value of Python expressions inside a string by
prefixing the string withforFand writing expressions as{expression}.
{expression}
An optional format specifier can follow the expression. This allows greater
control over how the value is formatted. The following example rounds pi to
three places after the decimal:
>>>importmath>>>print(f'The value of pi is approximately{math.pi:.3f}.')The value of pi is approximately 3.142.
Passing an integer after the':'will cause that field to be a minimum
number of characters wide.  This is useful for making columns line up.
>>>table={'Sjoerd':4127,'Jack':4098,'Dcab':7678}>>>forname,phoneintable.items():...print(f'{name:10}==>{phone:10d}')...Sjoerd     ==>       4127Jack       ==>       4098Dcab       ==>       7678
Other modifiers can be used to convert the value before it is formatted.'!a'appliesascii(),'!s'appliesstr(), and'!r'appliesrepr():
'!a'
ascii()
'!s'
'!r'
>>>animals='eels'>>>print(f'My hovercraft is full of{animals}.')My hovercraft is full of eels.>>>print(f'My hovercraft is full of{animals!r}.')My hovercraft is full of 'eels'.
The=specifier can be used to expand an expression to the text of the
expression, an equal sign, then the representation of the evaluated expression:
>>>bugs='roaches'>>>count=13>>>area='living room'>>>print(f'Debugging{bugs=}{count=}{area=}')Debugging bugs='roaches' count=13 area='living room'
Seeself-documenting expressionsfor more information
on the=specifier. For a reference on these format specifications, see
the reference guide for theFormat specification mini-language.

### 7.1.2.The String format() MethodÂ¶

Basic usage of thestr.format()method looks like this:
>>>print('We are the{}who say "{}!"'.format('knights','Ni'))We are the knights who say "Ni!"
The brackets and characters within them (called format fields) are replaced with
the objects passed into thestr.format()method.  A number in the
brackets can be used to refer to the position of the object passed into thestr.format()method.
>>>print('{0}and{1}'.format('spam','eggs'))spam and eggs>>>print('{1}and{0}'.format('spam','eggs'))eggs and spam
If keyword arguments are used in thestr.format()method, their values
are referred to by using the name of the argument.
>>>print('This{food}is{adjective}.'.format(...food='spam',adjective='absolutely horrible'))This spam is absolutely horrible.
Positional and keyword arguments can be arbitrarily combined:
>>>print('The story of{0},{1}, and{other}.'.format('Bill','Manfred',...other='Georg'))The story of Bill, Manfred, and Georg.
If you have a really long format string that you donât want to split up, it
would be nice if you could reference the variables to be formatted by name
instead of by position.  This can be done by simply passing the dict and using
square brackets'[]'to access the keys.
>>>table={'Sjoerd':4127,'Jack':4098,'Dcab':8637678}>>>print('Jack:{0[Jack]:d}; Sjoerd:{0[Sjoerd]:d}; '...'Dcab:{0[Dcab]:d}'.format(table))Jack: 4098; Sjoerd: 4127; Dcab: 8637678
This could also be done by passing thetabledictionary as keyword arguments with the**notation.
table
>>>table={'Sjoerd':4127,'Jack':4098,'Dcab':8637678}>>>print('Jack:{Jack:d}; Sjoerd:{Sjoerd:d}; Dcab:{Dcab:d}'.format(**table))Jack: 4098; Sjoerd: 4127; Dcab: 8637678
This is particularly useful in combination with the built-in functionvars(), which returns a dictionary containing all local variables:
vars()
>>>table={k:str(v)fork,vinvars().items()}>>>message=" ".join([f'{k}: '+'{'+k+'};'forkintable.keys()])>>>print(message.format(**table))__name__: __main__; __doc__: None; __package__: None; __loader__: ...
As an example, the following lines produce a tidily aligned
set of columns giving integers and their squares and cubes:
>>>forxinrange(1,11):...print('{0:2d}{1:3d}{2:4d}'.format(x,x*x,x*x*x))...1   1    12   4    83   9   274  16   645  25  1256  36  2167  49  3438  64  5129  81  72910 100 1000
For a complete overview of string formatting withstr.format(), seeFormat string syntax.

### 7.1.3.Manual String FormattingÂ¶

Hereâs the same table of squares and cubes, formatted manually:
>>>forxinrange(1,11):...print(repr(x).rjust(2),repr(x*x).rjust(3),end=' ')...# Note use of 'end' on previous line...print(repr(x*x*x).rjust(4))...1   1    12   4    83   9   274  16   645  25  1256  36  2167  49  3438  64  5129  81  72910 100 1000
(Note that the one space between each column was added by the
wayprint()works: it always adds spaces between its arguments.)
Thestr.rjust()method of string objects right-justifies a string in a
field of a given width by padding it with spaces on the left. There are
similar methodsstr.ljust()andstr.center(). These methods do
not write anything, they just return a new string. If the input string is too
long, they donât truncate it, but return it unchanged; this will mess up your
column lay-out but thatâs usually better than the alternative, which would be
lying about a value. (If you really want truncation you can always add a
slice operation, as inx.ljust(n)[:n].)
str.rjust()
str.ljust()
str.center()
x.ljust(n)[:n]
There is another method,str.zfill(), which pads a numeric string on the
left with zeros.  It understands about plus and minus signs:
str.zfill()
>>>'12'.zfill(5)'00012'>>>'-3.14'.zfill(7)'-003.14'>>>'3.14159265359'.zfill(5)'3.14159265359'

### 7.1.4.Old string formattingÂ¶

The % operator (modulo) can also be used for string formatting.
Givenformat%values(whereformatis a string),%conversion specifications informatare replaced with
zero or more elements ofvalues.
This operation is commonly known as string
interpolation. For example:
format%values
>>>importmath>>>print('The value of pi is approximately%5.3f.'%math.pi)The value of pi is approximately 3.142.
More information can be found in theprintf-style String Formattingsection.

## 7.2.Reading and Writing FilesÂ¶

open()returns afile object, and is most commonly used with
two positional arguments and one keyword argument:open(filename,mode,encoding=None)
open()
open(filename,mode,encoding=None)
>>>f=open('workfile','w',encoding="utf-8")
The first argument is a string containing the filename.  The second argument is
another string containing a few characters describing the way in which the file
will be used.modecan be'r'when the file will only be read,'w'for only writing (an existing file with the same name will be erased), and'a'opens the file for appending; any data written to the file is
automatically added to the end.'r+'opens the file for both reading and
writing. Themodeargument is optional;'r'will be assumed if itâs
omitted.
'r'
'w'
'a'
'r+'
Normally, files are opened intext mode, that means, you read and write
strings from and to the file, which are encoded in a specificencoding.
Ifencodingis not specified, the default is platform dependent
(seeopen()).
Because UTF-8 is the modern de-facto standard,encoding="utf-8"is
recommended unless you know that you need to use a different encoding.
Appending a'b'to the mode opens the file inbinary mode.
Binary mode data is read and written asbytesobjects.
You can not specifyencodingwhen opening file in binary mode.
encoding="utf-8"
'b'
In text mode, the default when reading is to convert platform-specific line
endings (\non Unix,\r\non Windows) to just\n.  When writing in
text mode, the default is to convert occurrences of\nback to
platform-specific line endings.  This behind-the-scenes modification
to file data is fine for text files, but will corrupt binary data like that inJPEGorEXEfiles.  Be very careful to use binary mode when
reading and writing such files.
\r\n
JPEG
EXE
It is good practice to use thewithkeyword when dealing
with file objects.  The advantage is that the file is properly closed
after its suite finishes, even if an exception is raised at some
point.  Usingwithis also much shorter than writing
equivalenttry-finallyblocks:
with
try
finally
>>>withopen('workfile',encoding="utf-8")asf:...read_data=f.read()>>># We can check that the file has been automatically closed.>>>f.closedTrue
If youâre not using thewithkeyword, then you should callf.close()to close the file and immediately free up any system
resources used by it.
f.close()
Warning
Callingf.write()without using thewithkeyword or callingf.close()mightresult in the arguments
off.write()not being completely written to the disk, even if the
program exits successfully.
f.write()
After a file object is closed, either by awithstatement
or by callingf.close(), attempts to use the file object will
automatically fail.
>>>f.close()>>>f.read()Traceback (most recent call last):File"<stdin>", line1, in<module>ValueError:I/O operation on closed file.

### 7.2.1.Methods of File ObjectsÂ¶

The rest of the examples in this section will assume that a file object calledfhas already been created.
To read a fileâs contents, callf.read(size), which reads some quantity of
data and returns it as a string (in text mode) or bytes object (in binary mode).sizeis an optional numeric argument.  Whensizeis omitted or negative, the
entire contents of the file will be read and returned; itâs your problem if the
file is twice as large as your machineâs memory. Otherwise, at mostsizecharacters (in text mode) orsizebytes (in binary mode) are read and returned.
If the end of the file has been reached,f.read()will return an empty
string ('').
f.read(size)
f.read()
>>>f.read()'This is the entire file.\n'>>>f.read()''
f.readline()reads a single line from the file; a newline character (\n)
is left at the end of the string, and is only omitted on the last line of the
file if the file doesnât end in a newline.  This makes the return value
unambiguous; iff.readline()returns an empty string, the end of the file
has been reached, while a blank line is represented by'\n', a string
containing only a single newline.
f.readline()
'\n'
>>>f.readline()'This is the first line of the file.\n'>>>f.readline()'Second line of the file\n'>>>f.readline()''
For reading lines from a file, you can loop over the file object. This is memory
efficient, fast, and leads to simple code:
>>>forlineinf:...print(line,end='')...This is the first line of the file.Second line of the file
If you want to read all the lines of a file in a list you can also uselist(f)orf.readlines().
list(f)
f.readlines()
f.write(string)writes the contents ofstringto the file, returning
the number of characters written.
f.write(string)
>>>f.write('This is a test\n')15
Other types of objects need to be converted â either to a string (in text mode)
or a bytes object (in binary mode) â before writing them:
>>>value=('the answer',42)>>>s=str(value)# convert the tuple to string>>>f.write(s)18
f.tell()returns an integer giving the file objectâs current position in the file
represented as number of bytes from the beginning of the file when in binary mode and
an opaque number when in text mode.
f.tell()
To change the file objectâs position, usef.seek(offset,whence).  The position is computed
from addingoffsetto a reference point; the reference point is selected by
thewhenceargument.  Awhencevalue of 0 measures from the beginning
of the file, 1 uses the current file position, and 2 uses the end of the file as
the reference point.whencecan be omitted and defaults to 0, using the
beginning of the file as the reference point.
f.seek(offset,whence)
>>>f=open('workfile','rb+')>>>f.write(b'0123456789abcdef')16>>>f.seek(5)# Go to the 6th byte in the file5>>>f.read(1)b'5'>>>f.seek(-3,2)# Go to the 3rd byte before the end13>>>f.read(1)b'd'
In text files (those opened without abin the mode string), only seeks
relative to the beginning of the file are allowed (the exception being seeking
to the very file end withseek(0,2)) and the only validoffsetvalues are
those returned from thef.tell(), or zero. Any otheroffsetvalue produces
undefined behaviour.
seek(0,2)
File objects have some additional methods, such asisatty()andtruncate()which are less frequently used; consult the Library
Reference for a complete guide to file objects.
isatty()
truncate()

### 7.2.2.Saving structured data withjsonÂ¶

Strings can easily be written to and read from a file.  Numbers take a bit more
effort, since theread()method only returns strings, which will have to
be passed to a function likeint(), which takes a string like'123'and returns its numeric value 123.  When you want to save more complex data
types like nested lists and dictionaries, parsing and serializing by hand
becomes complicated.
read()
int()
'123'
Rather than having users constantly writing and debugging code to save
complicated data types to files, Python allows you to use the popular data
interchange format calledJSON (JavaScript Object Notation).  The standard module calledjsoncan take Python
data hierarchies, and convert them to string representations; this process is
calledserializing.  Reconstructing the data from the string representation
is calleddeserializing.  Between serializing and deserializing, the
string representing the object may have been stored in a file or data, or
sent over a network connection to some distant machine.
The JSON format is commonly used by modern applications to allow for data
exchange.  Many programmers are already familiar with it, which makes
it a good choice for interoperability.
If you have an objectx, you can view its JSON string representation with a
simple line of code:
>>>importjson>>>x=[1,'simple','list']>>>json.dumps(x)'[1, "simple", "list"]'
Another variant of thedumps()function, calleddump(),
simply serializes the object to atext file.  So iffis atext fileobject opened for writing, we can do this:
dumps()
dump()
json.dump(x,f)
To decode the object again, iffis abinary fileortext fileobject which has been opened for reading:
x=json.load(f)
JSON files must be encoded in UTF-8. Useencoding="utf-8"when opening
JSON file as atext filefor both of reading and writing.
This simple serialization technique can handle lists and dictionaries, but
serializing arbitrary class instances in JSON requires a bit of extra effort.
The reference for thejsonmodule contains an explanation of this.
See also
pickle- the pickle module
Contrary toJSON,pickleis a protocol which allows
the serialization of arbitrarily complex Python objects.  As such, it is
specific to Python and cannot be used to communicate with applications
written in other languages.  It is also insecure by default:
deserializing pickle data coming from an untrusted source can execute
arbitrary code, if the data was crafted by a skilled attacker.

### Table of Contents
#### Previous topic
#### Next topic

8.Errors and Exceptions

### This page
### Navigation
## 8. Errors and Exceptions — Python 3.14.6 documentation
来源: https://docs.python.org/3/tutorial/errors.html
### Navigation

- 8.Errors and Exceptions

# 8.Errors and ExceptionsÂ¶

Until now error messages havenât been more than mentioned, but if you have tried
out the examples you have probably seen some.  There are (at least) two
distinguishable kinds of errors:syntax errorsandexceptions.

## 8.1.Syntax ErrorsÂ¶

Syntax errors, also known as parsing errors, are perhaps the most common kind of
complaint you get while you are still learning Python:
>>>whileTrueprint('Hello world')File"<stdin>", line1whileTrueprint('Hello world')^^^^^SyntaxError:invalid syntax
The parser repeats the offending line and displays little arrows pointing
at the place where the error was detected.  Note that this is not always the
place that needs to be fixed.  In the example, the error is detected at the
functionprint(), since a colon (':') is missing just before it.
The file name (<stdin>in our example) and line number are printed so you
know where to look in case the input came from a file.
<stdin>

## 8.2.ExceptionsÂ¶

Even if a statement or expression is syntactically correct, it may cause an
error when an attempt is made to execute it. Errors detected during execution
are calledexceptionsand are not unconditionally fatal: you will soon learn
how to handle them in Python programs.  Most exceptions are not handled by
programs, however, and result in error messages as shown here:
>>>10*(1/0)Traceback (most recent call last):File"<stdin>", line1, in<module>10*(1/0)~^~ZeroDivisionError:division by zero>>>4+spam*3Traceback (most recent call last):File"<stdin>", line1, in<module>4+spam*3^^^^NameError:name 'spam' is not defined>>>'2'+2Traceback (most recent call last):File"<stdin>", line1, in<module>'2'+2~~~~^~~TypeError:can only concatenate str (not "int") to str
The last line of the error message indicates what happened. Exceptions come in
different types, and the type is printed as part of the message: the types in
the example areZeroDivisionError,NameErrorandTypeError.
The string printed as the exception type is the name of the built-in exception
that occurred.  This is true for all built-in exceptions, but need not be true
for user-defined exceptions (although it is a useful convention). Standard
exception names are built-in identifiers (not reserved keywords).
ZeroDivisionError
NameError
The rest of the line provides detail based on the type of exception and what
caused it.
The preceding part of the error message shows the context where the exception
occurred, in the form of a stack traceback. In general it contains a stack
traceback listing source lines; however, it will not display lines read from
standard input.
Built-in Exceptionslists the built-in exceptions and their meanings.

## 8.3.Handling ExceptionsÂ¶

It is possible to write programs that handle selected exceptions. Look at the
following example, which asks the user for input until a valid integer has been
entered, but allows the user to interrupt the program (usingControl-Cor
whatever the operating system supports); note that a user-generated interruption
is signalled by raising theKeyboardInterruptexception.
KeyboardInterrupt
>>>whileTrue:...try:...x=int(input("Please enter a number: "))...break...exceptValueError:...print("Oops!  That was no valid number.  Try again...")...
Thetrystatement works as follows.
- First, thetry clause(the statement(s) between thetryandexceptkeywords) is executed.
First, thetry clause(the statement(s) between thetryandexceptkeywords) is executed.
except
- If no exception occurs, theexcept clauseis skipped and execution of thetrystatement is finished.
If no exception occurs, theexcept clauseis skipped and execution of thetrystatement is finished.
- If an exception occurs during execution of thetryclause, the rest of the
clause is skipped.  Then, if its type matches the exception named after theexceptkeyword, theexcept clauseis executed, and then execution
continues after the try/except block.
If an exception occurs during execution of thetryclause, the rest of the
- If an exception occurs which does not match the exception named in theexcept
clause, it is passed on to outertrystatements; if no handler is
found, it is anunhandled exceptionand execution stops with an error message.
If an exception occurs which does not match the exception named in theexcept
Atrystatement may have more than oneexcept clause, to specify
handlers for different exceptions.  At most one handler will be executed.
Handlers only handle exceptions that occur in the correspondingtry clause,
not in other handlers of the sametrystatement.  Anexcept clausemay name multiple exceptions, for example:
...exceptRuntimeError,TypeError,NameError:...pass
A class in anexceptclause matches exceptions which are instances of the
class itself or one of its derived classes (but not the other way around â anexcept clauselisting a derived class does not match instances of its base classes).
For example, the following code will print B, C, D in that order:
classB(Exception):passclassC(B):passclassD(C):passforclsin[B,C,D]:try:raisecls()exceptD:print("D")exceptC:print("C")exceptB:print("B")
Note that if theexcept clauseswere reversed (withexceptBfirst), it
would have printed B, B, B â the first matchingexcept clauseis triggered.
exceptB
When an exception occurs, it may have associated values, also known as the
exceptionâsarguments. The presence and types of the arguments depend on the
exception type.
Theexcept clausemay specify a variable after the exception name.  The
variable is bound to the exception instance which typically has anargsattribute that stores the arguments. For convenience, builtin exception
types define__str__()to print all the arguments without explicitly
accessing.args.
args
__str__()
.args
>>>try:...raiseException('spam','eggs')...exceptExceptionasinst:...print(type(inst))# the exception type...print(inst.args)# arguments stored in .args...print(inst)# __str__ allows args to be printed directly,...# but may be overridden in exception subclasses...x,y=inst.args# unpack args...print('x =',x)...print('y =',y)...<class 'Exception'>('spam', 'eggs')('spam', 'eggs')x = spamy = eggs
The exceptionâs__str__()output is printed as the last part (âdetailâ)
of the message for unhandled exceptions.
BaseExceptionis the common base class of all exceptions. One of its
subclasses,Exception, is the base class of all the non-fatal exceptions.
Exceptions which are not subclasses ofExceptionare not typically
handled, because they are used to indicate that the program should terminate.
They includeSystemExitwhich is raised bysys.exit()andKeyboardInterruptwhich is raised when a user wishes to interrupt
the program.
BaseException
Exception
SystemExit
sys.exit()
Exceptioncan be used as a wildcard that catches (almost) everything.
However, it is good practice to be as specific as possible with the types
of exceptions that we intend to handle, and to allow any unexpected
exceptions to propagate on.
The most common pattern for handlingExceptionis to print or log
the exception and then re-raise it (allowing a caller to handle the
exception as well):
importsystry:f=open('myfile.txt')s=f.readline()i=int(s.strip())exceptOSErroraserr:print("OS error:",err)exceptValueError:print("Could not convert data to an integer.")exceptExceptionaserr:print(f"Unexpected{err=},{type(err)=}")raise
Thetryâ¦exceptstatement has an optionalelse
clause, which, when present, must follow allexcept clauses.  It is useful
for code that must be executed if thetry clausedoes not raise an exception.
For example:
forarginsys.argv[1:]:try:f=open(arg,'r')exceptOSError:print('cannot open',arg)else:print(arg,'has',len(f.readlines()),'lines')f.close()
The use of theelseclause is better than adding additional code to
thetryclause because it avoids accidentally catching an exception
that wasnât raised by the code being protected by thetryâ¦exceptstatement.
Exception handlers do not handle only exceptions that occur immediately in thetry clause, but also those that occur inside functions that are called (even
indirectly) in thetry clause. For example:
>>>defthis_fails():...x=1/0...>>>try:...this_fails()...exceptZeroDivisionErroraserr:...print('Handling run-time error:',err)...Handling run-time error: division by zero

## 8.4.Raising ExceptionsÂ¶

Theraisestatement allows the programmer to force a specified
exception to occur. For example:
raise
>>>raiseNameError('HiThere')Traceback (most recent call last):File"<stdin>", line1, in<module>raiseNameError('HiThere')NameError:HiThere
The sole argument toraiseindicates the exception to be raised.
This must be either an exception instance or an exception class (a class that
derives fromBaseException, such asExceptionor one of its
subclasses).  If an exception class is passed, it will be implicitly
instantiated by calling its constructor with no arguments:
raiseValueError# shorthand for 'raise ValueError()'
If you need to determine whether an exception was raised but donât intend to
handle it, a simpler form of theraisestatement allows you to
re-raise the exception:
>>>try:...raiseNameError('HiThere')...exceptNameError:...print('An exception flew by!')...raise...An exception flew by!Traceback (most recent call last):File"<stdin>", line2, in<module>raiseNameError('HiThere')NameError:HiThere

## 8.5.Exception ChainingÂ¶

If an unhandled exception occurs inside anexceptsection, it will
have the exception being handled attached to it and included in the error
message:
>>>try:...open("database.sqlite")...exceptOSError:...raiseRuntimeError("unable to handle error")...Traceback (most recent call last):File"<stdin>", line2, in<module>open("database.sqlite")~~~~^^^^^^^^^^^^^^^^^^^FileNotFoundError:[Errno 2] No such file or directory: 'database.sqlite'During handling of the above exception, another exception occurred:Traceback (most recent call last):File"<stdin>", line4, in<module>raiseRuntimeError("unable to handle error")RuntimeError:unable to handle error
To indicate that an exception is a direct consequence of another, theraisestatement allows an optionalfromclause:
# exc must be exception instance or None.raiseRuntimeErrorfromexc
This can be useful when you are transforming exceptions. For example:
>>>deffunc():...raiseConnectionError...>>>try:...func()...exceptConnectionErrorasexc:...raiseRuntimeError('Failed to open database')fromexc...Traceback (most recent call last):File"<stdin>", line2, in<module>func()~~~~^^File"<stdin>", line2, infuncConnectionErrorThe above exception was the direct cause of the following exception:Traceback (most recent call last):File"<stdin>", line4, in<module>raiseRuntimeError('Failed to open database')fromexcRuntimeError:Failed to open database
It also allows disabling automatic exception chaining using thefromNoneidiom:
fromNone
>>>try:...open('database.sqlite')...exceptOSError:...raiseRuntimeErrorfromNone...Traceback (most recent call last):File"<stdin>", line4, in<module>raiseRuntimeErrorfromNoneRuntimeError
For more information about chaining mechanics, seeBuilt-in Exceptions.

## 8.6.User-defined ExceptionsÂ¶

Programs may name their own exceptions by creating a new exception class (seeClassesfor more about Python classes).  Exceptions should typically
be derived from theExceptionclass, either directly or indirectly.
Exception classes can be defined which do anything any other class can do, but
are usually kept simple, often only offering a number of attributes that allow
information about the error to be extracted by handlers for the exception.
Most exceptions are defined with names that end in âErrorâ, similar to the
naming of the standard exceptions.
Many standard modules define their own exceptions to report errors that may
occur in functions they define.

## 8.7.Defining Clean-up ActionsÂ¶

Thetrystatement has another optional clause which is intended to
define clean-up actions that must be executed under all circumstances.  For
>>>try:...raiseKeyboardInterrupt...finally:...print('Goodbye, world!')...Goodbye, world!Traceback (most recent call last):File"<stdin>", line2, in<module>raiseKeyboardInterruptKeyboardInterrupt
If afinallyclause is present, thefinallyclause will execute as the last task before thetrystatement completes. Thefinallyclause runs whether or
not thetrystatement produces an exception. The following
points discuss more complex cases when an exception occurs:
- If an exception occurs during execution of thetryclause, the exception may be handled by anexceptclause. If the exception is not handled by anexceptclause, the exception is re-raised after thefinallyclause has been executed.
If an exception occurs during execution of thetryclause, the exception may be handled by anexceptclause. If the exception is not handled by anexceptclause, the exception is re-raised after thefinallyclause has been executed.
- An exception could occur during execution of anexceptorelseclause. Again, the exception is re-raised after
thefinallyclause has been executed.
An exception could occur during execution of anexceptorelseclause. Again, the exception is re-raised after
- If thefinallyclause executes abreak,continueorreturnstatement, exceptions are not
re-raised. This can be confusing and is therefore discouraged. From
version 3.14 the compiler emits aSyntaxWarningfor it
(seePEP 765).
If thefinallyclause executes abreak,continueorreturnstatement, exceptions are not
return
SyntaxWarning
- If thetrystatement reaches abreak,continueorreturnstatement, thefinallyclause will execute just prior to thebreak,continueorreturnstatementâs execution.
If thetrystatement reaches abreak,continueorreturnstatement, thefinallyclause will execute just prior to thebreak,continueorreturnstatementâs execution.
- If afinallyclause includes areturnstatement, the returned value will be the one from thefinallyclauseâsreturnstatement, not the
value from thetryclauseâsreturnstatement. This can be confusing and is therefore discouraged. From
If afinallyclause includes areturnstatement, the returned value will be the one from thefinallyclauseâsreturnstatement, not the
>>>defbool_return():...try:...returnTrue...finally:...returnFalse...>>>bool_return()False
A more complicated example:
>>>defdivide(x,y):...try:...result=x/y...exceptZeroDivisionError:...print("division by zero!")...else:...print("result is",result)...finally:...print("executing finally clause")...>>>divide(2,1)result is 2.0executing finally clause>>>divide(2,0)division by zero!executing finally clause>>>divide("2","1")executing finally clauseTraceback (most recent call last):File"<stdin>", line1, in<module>divide("2","1")~~~~~~^^^^^^^^^^File"<stdin>", line3, individeresult=x/y~~^~~TypeError:unsupported operand type(s) for /: 'str' and 'str'
As you can see, thefinallyclause is executed in any event.  TheTypeErrorraised by dividing two strings is not handled by theexceptclause and therefore re-raised after thefinallyclause has been executed.
In real world applications, thefinallyclause is useful for
releasing external resources (such as files or network connections), regardless
of whether the use of the resource was successful.

## 8.8.Predefined Clean-up ActionsÂ¶

Some objects define standard clean-up actions to be undertaken when the object
is no longer needed, regardless of whether or not the operation using the object
succeeded or failed. Look at the following example, which tries to open a file
and print its contents to the screen.
forlineinopen("myfile.txt"):print(line,end="")
The problem with this code is that it leaves the file open for an indeterminate
amount of time after this part of the code has finished executing.
This is not an issue in simple scripts, but can be a problem for larger
applications. Thewithstatement allows objects like files to be
used in a way that ensures they are always cleaned up promptly and correctly.
withopen("myfile.txt")asf:forlineinf:print(line,end="")
After the statement is executed, the filefis always closed, even if a
problem was encountered while processing the lines. Objects which, like files,
provide predefined clean-up actions will indicate this in their documentation.

## 8.9.Raising and Handling Multiple Unrelated ExceptionsÂ¶

There are situations where it is necessary to report several exceptions that
have occurred. This is often the case in concurrency frameworks, when several
tasks may have failed in parallel, but there are also other use cases where
it is desirable to continue execution and collect multiple errors rather than
raise the first exception.
The builtinExceptionGroupwraps a list of exception instances so
that they can be raised together. It is an exception itself, so it can be
caught like any other exception.
>>>deff():...excs=[OSError('error 1'),SystemError('error 2')]...raiseExceptionGroup('there were problems',excs)...>>>f()+ Exception Group Traceback (most recent call last):|   File "<stdin>", line 1, in <module>|     f()|     ~^^|   File "<stdin>", line 3, in f|     raise ExceptionGroup('there were problems', excs)| ExceptionGroup: there were problems (2 sub-exceptions)+-+---------------- 1 ----------------| OSError: error 1+---------------- 2 ----------------| SystemError: error 2+------------------------------------>>>try:...f()...exceptExceptionase:...print(f'caught{type(e)}:{e}')...caught <class 'ExceptionGroup'>: there were problems (2 sub-exceptions)>>>
By usingexcept*instead ofexcept, we can selectively
handle only the exceptions in the group that match a certain
type. In the following example, which shows a nested exception
group, eachexcept*clause extracts from the group exceptions
of a certain type while letting all other exceptions propagate to
other clauses and eventually to be reraised.
except*
>>>deff():...raiseExceptionGroup(..."group1",...[...OSError(1),...SystemError(2),...ExceptionGroup(..."group2",...[...OSError(3),...RecursionError(4)...]...)...]...)...>>>try:...f()...except*OSErrorase:...print("There were OSErrors")...except*SystemErrorase:...print("There were SystemErrors")...There were OSErrorsThere were SystemErrors+ Exception Group Traceback (most recent call last):|   File "<stdin>", line 2, in <module>|     f()|     ~^^|   File "<stdin>", line 2, in f|     raise ExceptionGroup(|     ...<12 lines>...|     )| ExceptionGroup: group1 (1 sub-exception)+-+---------------- 1 ----------------| ExceptionGroup: group2 (1 sub-exception)+-+---------------- 1 ----------------| RecursionError: 4+------------------------------------>>>
Note that the exceptions nested in an exception group must be instances,
not types. This is because in practice the exceptions would typically
be ones that have already been raised and caught by the program, along
the following pattern:
>>>excs=[]...fortestintests:...try:...test.run()...exceptExceptionase:...excs.append(e)...>>>ifexcs:...raiseExceptionGroup("Test Failures",excs)...

## 8.10.Enriching Exceptions with NotesÂ¶

When an exception is created in order to be raised, it is usually initialized
with information that describes the error that has occurred. There are cases
where it is useful to add information after the exception was caught. For this
purpose, exceptions have a methodadd_note(note)that accepts a string and
adds it to the exceptionâs notes list. The standard traceback rendering
includes all notes, in the order they were added, after the exception.
add_note(note)
>>>try:...raiseTypeError('bad type')...exceptExceptionase:...e.add_note('Add some information')...e.add_note('Add some more information')...raise...Traceback (most recent call last):File"<stdin>", line2, in<module>raiseTypeError('bad type')TypeError:bad typeAdd some informationAdd some more information>>>
For example, when collecting exceptions into an exception group, we may want
to add context information for the individual errors. In the following each
exception in the group has a note indicating when this error has occurred.
>>>deff():...raiseOSError('operation failed')...>>>excs=[]>>>foriinrange(3):...try:...f()...exceptExceptionase:...e.add_note(f'Happened in Iteration{i+1}')...excs.append(e)...>>>raiseExceptionGroup('We have some problems',excs)+ Exception Group Traceback (most recent call last):|   File "<stdin>", line 1, in <module>|     raise ExceptionGroup('We have some problems', excs)| ExceptionGroup: We have some problems (3 sub-exceptions)+-+---------------- 1 ----------------| Traceback (most recent call last):|   File "<stdin>", line 3, in <module>|     f()|     ~^^|   File "<stdin>", line 2, in f|     raise OSError('operation failed')| OSError: operation failed| Happened in Iteration 1+---------------- 2 ----------------| Traceback (most recent call last):|   File "<stdin>", line 3, in <module>|     f()|     ~^^|   File "<stdin>", line 2, in f|     raise OSError('operation failed')| OSError: operation failed| Happened in Iteration 2+---------------- 3 ----------------| Traceback (most recent call last):|   File "<stdin>", line 3, in <module>|     f()|     ~^^|   File "<stdin>", line 2, in f|     raise OSError('operation failed')| OSError: operation failed| Happened in Iteration 3+------------------------------------>>>

### Table of Contents
#### Previous topic
#### Next topic

9.Classes

### This page
### Navigation
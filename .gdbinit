#
# ~/.gdbinit: The GNU Debugger startup configuration file
#

set listsize 10
set history save on

set print vtbl on
set print array on
set print union on
set print object on
set print pretty on
set print demangle on
set demangle-style gnu-v3
set print array-indexes on
set print static-members on
set print inferior-events on
set print sevenbit-strings off

set step-mode on
set detach-on-fork off
set multiple-symbols ask
set breakpoint pending on
set follow-fork-mode child
set python print-stack full
set disassembly-flavor intel

"Enable syntax highlighting
syntax on

"Mouse can be used in all modes
set mouse=a

"Show line numbers
set number

"Show matching brackets when text indicator is over them
set showmatch

"Read again files which were changed outside of Vim
set autoread

"Ignore case when searching
set ignorecase

"Highlight search results
set hlsearch

"Match search pattern while typing
set incsearch

"Copy indent from current line when starting a new line
set autoindent

" An indent is automatically inserted:
"- After a line ending in '{'.
"- After a line starting with a keyword from this list: if, else, while, do, for, switch
"- Before a line starting with '}' (only with the 'O' command).
set smartindent

"No tabs in the source file
"All tab characters are 4 space characters
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4

"Keep these files in a fixed directory
set undodir=/tmp//
set backupdir=/tmp//
set directory=/tmp//

"Display tabs and trailing spaces as ·
set list listchars=tab:\>·,trail:·

"Use Unix as the standard file format
set fileformats=unix,dos,mac

"Set UTF-8 as standard encoding
set encoding=utf8
set fileencoding=utf-8
set fileencodings=utf-8

"Remove all trailing whitespaces before saving
autocmd BufWritePre * :%s/\s\+$//e

"Detect the type of file
filetype plugin on

"Automatically enable the TAB
autocmd FileType make set noexpandtab

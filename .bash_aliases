#!/bin/bash

#
# ~/.bash_aliases
#

# use the predefined math routines
alias bc="bc -l"

# interactively ask for confirmation 
# before removing anything
alias rm="rm -i"

# file system navigation
alias ..="cd .."
alias ...="cd ../.."

# show number lines on cat output
alias cat="cat -n"

# Continue getting a partially
# downloaded file.
alias wget="wget -c"

# tell Emacs not to create
# a graphical frame.
alias emacs="emacs -nw"

# colorize outputs
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias diff='colordiff'

# show wide area network
# internet protocol address
alias wanip='dig +short myip.opendns.com @resolver1.opendns.com'

# easily create screencast
alias screencast='ffmpeg -f x11grab -r 30 -s 1920x1080 -i :0.0 -vcodec libx264 -threads 0 ~/Videos/Video.mkv'

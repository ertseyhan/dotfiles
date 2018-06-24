#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi

PATH="$PATH:$(ruby -e 'print Gem.user_dir')/bin:$HOME/.local/bin"

# aliases
if [ -f ~/.bash_aliases ]; then
  source ~/.bash_aliases
fi

# defaults
if [ -f ~/.bash_defaults ]; then
  source ~/.bash_defaults
fi

# exports
if [ -f ~/.bash_exports ]; then
  source ~/.bash_exports
fi

PS1="\[\033[38;0;32m\]\u\[$(tput sgr0)\]\[\033[38;5;15m\]@\h:\[$(tput sgr0)\]\[\033[38;5;6m\][\w]:\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]"

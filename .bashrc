#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias screencast='ffmpeg -f x11grab -r 30 -s 1920x1080 -i :0.0 -vcodec libx264 -threads 0 ~/Videos/Video.mkv'

export PS1="\[\033[38;0;32m\]\u\[$(tput sgr0)\]\[\033[38;5;15m\]@\h:\[$(tput sgr0)\]\[\033[38;5;6m\][\w]:\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]"
export QT_QPA_PLATFORMTHEME="qt5ct"

[ -e "/etc/DIR_COLORS" ] && DIR_COLORS="/etc/DIR_COLORS"
[ -e "$HOME/.dircolors" ] && DIR_COLORS="$HOME/.dircolors"
[ -e "$DIR_COLORS" ] || DIR_COLORS=""
eval "`dircolors -b $DIR_COLORS`"

PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"

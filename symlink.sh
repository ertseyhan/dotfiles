dotfiles=$HOME/Projects/dotfiles

# compton
ln -s $dotfiles/compton/compton.conf $HOME/.config/.compton.conf

# redshift
ln -s $dotfles/redshift/redshift.conf $HOME/.config/.redshift.conf

# gtk
ln -s $dotfiles/gtk/gtk-3.0 $HOME/.config/gtk-3.0/settings.ini

# bspwm
ln -s $dotfiles/bspwm/bspwmrc $HOME/.config/bspwm/bspwmrc

# sxhkd
ln -s $dotfiles/sxhkd/sxhkdrc $HOME/.confix/sxhkd/sxhkdrc

# scripts
ln -s $dotfiles/scripts $HOME/.bin

# fonts
ln -s $dotfiles/fonts $HOME/.fonts

# git
ln -s $dotfiles/git/gitconfig $HOME/.gitconfig

# htop
ln -s $dotfiles/htop $HOME/.config/htop

# nano
ln -s $dotfiles/nano/nano $HOME/.nano
ln -s $dotfiles/nano/nanorc $HOME/.nanorc

# pyradio
sudo ln -s $dotfiles/pyradio/stations.csv /usr/lib/python3.5/site-packages/pyradio/stations.csv

# zathura
ln -s $dotfiles/zathura $HOME/.config/zathura

# termite
ln -s $dotfiles/termite/config $HOME/.config/termite/config
ln -s $dotfiles/termite/dircolors $HOME/.dircolors

# xorg
ln -s $dotfiles/xorg/xinitrc $HOME/.xinitrc
ln -s $dotfiles/xorg/bashrc $HOME/.bashrc
ln -s $dotfiles/xorg/Xresources $HOME/.Xresources
ln -s $dotfiles/xorg/Xdefaults $HOME/.Xdefaults
ln -s $dotfiles/xorg/profile $HOME/.profile

# yabar
ln -s $dotfiles/yabar/yabar.conf $HOME/.config/yabar/yabar.conf

# zsh
ln -s $dotfiles/zsh/zshrc $HOME/.zshrc
ln -s $dotfiles/zsh/themes $HOME/.zsh/themes
ln -s $dotfiles/zsh/aliases $HOME/.zsh/zsh_aliases

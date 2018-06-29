;;; init.el --- Initialization file for GNU Emacs
;;; Commentary:
 ;; Essential initialization file to work with GNU Emacs for me

;;; Code:

(package-initialize)
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)

;; smex
(require 'smex)
(smex-initialize)
(global-set-key (kbd "M-x") 'smex)
(global-set-key (kbd "M-X") 'smex-major-mode-commands)
(global-set-key (kbd "C-c C-c M-x") 'execute-extended-command)

;; Prevent accidentally suspending frame
(global-unset-key (kbd "C-z"))

;; ido-mode
(require 'ido)
(ido-mode t)
(setq ido-everywhere t)
(setq ido-enable-flex-matching t)

;; gui related modes
(menu-bar-mode 0)
(tool-bar-mode 0)
(show-paren-mode 1)
(scroll-bar-mode 0)
(line-number-mode 1)
(column-number-mode 1)

;; replace welcome screen with empty buffer
(setq inhibit-startup-screen t)
(setq initial-scratch-message nil)

;; show trailing whitespaces
(setq show-trailing-whitespace t)

;; use y/n as default answer format
(fset 'yes-or-no-p 'y-or-n-p)

;; dump backup files into one specific folder
(setq backup-directory-alist '(("." . "~/.emacs_saves")))

;; Maximize GNU Emacs frame on start-up
(add-to-list 'default-frame-alist '(fullscreen . maximized))

;; color and font related settings
(set-background-color "black")
(set-foreground-color "white")
(set-frame-font "DejaVu Sans Mono-12")

(custom-set-variables
 '(package-selected-packages
   (quote
    (smex))))
(custom-set-faces)

(provide 'init)
;;; init.el ends here

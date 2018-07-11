# my-vscode-vue

Initial draft setup to create a VSCode extension

## Features

- [x] Snippet for vue files (vbase)
- [x] Snippet for typescript files (log)
- [x] Explorer context menu (right mouse click) (New Vue Component)
- [x] Command Pallet Command Cmd+Shift+P (New Vue Component)

## To debug

Start a debug session

    menu - view - debug
    menu - debug - Start Debugging (or press F5)

A second VSCode is opened with the extension loaded. Then you can run it.

By placing a breakpoint in the src/extensions.js (or other related file) file your can debug it.

To enable the debug launch feature see: `.vscode/launch.json` file

## What can your extend

Almost anything :)

- Code snippets (easy)
- Commands (in command pallet and custom menu's)
- Themes
- Grammer
- Views (explorer, scm, custom, ...)
- ...

#### Snippets

There are already many snippets extensions available:

- https://github.com/sdras/vue-vscode-snippets/tree/master/snippets
- https://github.com/hollowtree/vscode-vue-snippets

This can be a base to creating your own

A custom snippet can also be create per user

    Select Preferences: Open User Snippets

See: https://code.visualstudio.com/docs/editor/userdefinedsnippets

## How to extending Visual Studio Code

It all start by defining a package.json with some special entries:

- name
- displayName
- description
- icon
- main (the entry file of the extension)
- contributes  (the main config of all customizations)
    - snippets: specified snippes files
    - command: specified command that you can execute with the command pallet.
    - menu: specified menu extensions in various places

General info
https://code.visualstudio.com/docs/extensions/overview

Contribution Points:
https://code.visualstudio.com/docs/extensionAPI/extension-points

Contribution Points - Menu's
https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesmenus

## How to install extensions

#### By using the marketplace

https://code.visualstudio.com/docs/editor/extension-gallery

> This is only available for public extensions.

You have to publish your extension to Microsoft.
https://code.visualstudio.com/docs/extensions/publish-extension

#### By installing it locally on your system

To get your extension running in all instances of VS Code, you need to copy it to a folder
under your local extensions folder:

    %USERPROFILE%\.vscode\extensions\myExtention







import{j as e}from"./index-D40ahXwJ.js";const t={date:"25-November-2025",title:"A Beginner’s Guide to Dotfiles: Managing and Version-Controlling Your Ubuntu Configuration",description:"A beginner-friendly guide on what dotfiles are, why they matter, and how to safely version-control custom configurations in Ubuntu using a dotfiles folder, custom config files, and a setup.sh script."};function i(s){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"A Beginner’s Guide to Dotfiles: Managing and Version-Controlling Your Ubuntu Configuration"}),`
`,e.jsx(n.p,{children:`Dotfiles are configuration files for programs. They define everything from your shell prompt and aliases to your editor preferences, keyboard shortcuts, themes, and command-line behaviors.
They will play an important role in your career as a software developer.`}),`
`,e.jsx(n.p,{children:`Dotfiles are named in a way such that each file and directory starts with a dot (.).
On Unix-based systems, dotfiles are hidden by the operating system by default.`}),`
`,e.jsx(n.h2,{children:"Some examples of dotfiles"}),`
`,e.jsx(n.p,{children:"Some examples of dotfiles are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:".vimrc"})," (configurations of vim)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:".bashrc"})," and ",e.jsx(n.em,{children:".profile"})," (contain scripts that load each time you start a new terminal session and configure the shell)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:".gitconfig"})," (configuration file in Git, primarily used to store global settings for a user)"]}),`
`]}),`
`,e.jsx(n.p,{children:"etc."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"If the hidden files are not shown in the home directory, you can press Ctrl + H to display hidden files in Ubuntu."}),`
`]}),`
`,e.jsx(n.h2,{children:"Creating our version-controlled custom dotfiles"}),`
`,e.jsx(n.p,{children:"Most guides about dotfiles tell you to replace your existing .bashrc with a symlink and put the file under version control, so that all your custom settings stay synced across machines. The problem is that when you set up a brand-new system—for example, a fresh Ubuntu installation—your custom .bashrc will completely overwrite the default one that comes with the system. This can remove useful defaults or cause unexpected issues."}),`
`,e.jsx(n.p,{children:"To avoid this, we’ll take a safer approach: instead of replacing the system’s .bashrc, we’ll create our own custom file and use a small shell script to make the existing .bashrc source our custom file. This way, you keep all the good defaults while still applying your personalized settings."}),`
`,e.jsxs(n.p,{children:["Create a folder called ",e.jsx(n.code,{children:"dotfiles"})," in your home directory:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`mkdir dotfiles
cd dotfiles
`})}),`
`,e.jsx(n.h3,{children:".bashrc_custom"}),`
`,e.jsxs(n.p,{children:["Create our custom ",e.jsx(n.code,{children:".bashrc_custom"})," file in the dotfiles folder."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`touch .bashrc_custom
`})}),`
`,e.jsx(n.p,{children:`Open the file with your preferred editor.
Now you can add your custom configs or aliases in this custom bashrc file.
For example, we will add some code to display the branch name in the terminal if it's a Git-initialized directory.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/ (\\1)/'
}

# Only modify PS1 if it's already set
if [ -n "$PS1" ]; then
    PS1="\${PS1}\\[\\033[01;33m\\]\\$(parse_git_branch)\\[\\033[00m\\]"
fi
`})}),`
`,e.jsx(n.h3,{children:".profile_custom"}),`
`,e.jsxs(n.p,{children:["Let’s do the same for ",e.jsx(n.code,{children:".profile"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`touch .profile_custom
`})}),`
`,e.jsx(n.p,{children:`Open the file and add your configs.
For example, we will set vim as the default editor:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`export EDITOR=vim
`})}),`
`,e.jsx(n.h3,{children:".gitconfig"}),`
`,e.jsx(n.p,{children:"We will also create our own custom Git config."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`touch .gitconfig
`})}),`
`,e.jsx(n.p,{children:"Add your custom config details. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`[user]
  name = user_name
  email = user_email
[alias]
  p = pull
  a = add .
  l = log --oneline
  cm = commit -m
`})}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.code,{children:".gitconfig"}),`, we’re not adding anything to the default file.
Since the home `,e.jsx(n.code,{children:".gitconfig"})," may be empty when Git is installed for the first time, we will create a symlink for Git config."]}),`
`,e.jsx(n.h3,{children:"setup.sh file"}),`
`,e.jsxs(n.p,{children:[`This is the most important step. Until now, we have only created the files.
`,e.jsx(n.strong,{children:"We haven't sourced anything yet or created any symlinks."}),`
We will handle all of that using our custom `,e.jsx(n.code,{children:"setup.sh"})," script."]}),`
`,e.jsxs(n.p,{children:["Create a file called ",e.jsx(n.code,{children:"setup.sh"})," and make it executable."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`touch setup.sh
chmod +x setup.sh
`})}),`
`,e.jsx(n.p,{children:"Add the below bash script to the file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`#!/bin/bash

echo "Setting up dotfiles..."

echo "Setting up custom bashrc and profile..."

# Setup custom bashrc
# If the existing .bashrc doesn't contain our custom bashrc line, then we will add it.
if ! grep -q "source ~/dotfiles/.bashrc_custom" ~/.bashrc; then
    echo "" >> ~/.bashrc
    echo "# Source custom configurations" >> ~/.bashrc
    echo "if [ -f ~/dotfiles/.bashrc_custom ]; then" >> ~/.bashrc
    echo "    source ~/dotfiles/.bashrc_custom" >> ~/.bashrc
    echo "fi" >> ~/.bashrc
    echo "✓ Added custom config to .bashrc"
else
    # If it's already there, we don't need to add it.
    echo "✓ Custom config already in .bashrc"
fi

# Setup custom profile
# Same logic as .bashrc_custom
if ! grep -q "~/dotfiles/.profile_custom" ~/.profile; then
    echo "" >> ~/.profile
    echo "# Source custom profile" >> ~/.profile
    echo "if [ -f ~/dotfiles/.profile_custom ]; then" >> ~/.profile
    echo "    . ~/dotfiles/.profile_custom" >> ~/.profile
    echo "fi" >> ~/.profile
    echo "✓ Added custom config to .profile"
else
    echo "✓ Custom config already in .profile"
fi

source ~/.bashrc
source ~/.profile

echo "Setting up git config..."
# Here we will create a symlink for .gitconfig
ln -sf ~/dotfiles/.gitconfig ~/.gitconfig
echo "Finished setting up git config."

echo "Reload the terminal..."
`})}),`
`,e.jsx(n.p,{children:"After the script is run using:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`./setup.sh
`})}),`
`,e.jsxs(n.p,{children:["you will see your custom code added to ",e.jsx(n.code,{children:".bashrc"})," and ",e.jsx(n.code,{children:".profile"})," in your home directory."]}),`
`,e.jsx(n.h4,{children:".bashrc"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Source custom configurations
if [ -f ~/dotfiles/.bashrc_custom ]; then
    source ~/dotfiles/.bashrc_custom
fi
`})}),`
`,e.jsxs(n.p,{children:["We are checking if the ",e.jsx(n.code,{children:".bashrc_custom"})," file exists, and if yes, we are sourcing it so that the configs in our custom file become available."]}),`
`,e.jsx(n.h4,{children:".profile"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Source custom profile
if [ -f ~/dotfiles/.profile_custom ]; then
    . ~/dotfiles/.profile_custom
fi
`})}),`
`,e.jsx(n.p,{children:"After this is done, we can initialize Git in the repository and push it to your remote server."}),`
`,e.jsxs(n.p,{children:["Whenever we need our custom configuration on different systems or a new system, we just need to clone the dotfiles repo and run ",e.jsx(n.code,{children:"setup.sh"}),"."]}),`
`,e.jsx(n.p,{children:"You can always add more custom configs or configs of other programs and push them to the repo."}),`
`,e.jsx(n.p,{children:"Feel free to connect with me to add any suggestions or to point out any mistakes."}),`
`,e.jsx(n.p,{children:"Have a good day!"})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{r as default,t as metaData};

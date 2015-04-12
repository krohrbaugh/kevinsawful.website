---
layout: post
title: "Sync WoW Plugins and Settings for Free"
date: 2015-04-03
tags: gaming world-of-warcraft dropbox
---

I have an on-again, off-again relationship with [World of Warcraft][wow], often
returning to play through new expansions and then wandering off after a few
months.

Like many WoW players, I use a lot of add-ons, all but replacing the default UI.
I tend to play on my main gaming PC, as well as my Mac laptop (often from my
couch). Keeping add-ons up-to-date across both machines is a hassle, which is
why [Curse][curse] offers a [subscription service][curse-premium] for syncing
them. Unfortunately, I'm too cheap to pay for it.

Instead, I use [Dropbox][db]'s desktop client to accomplish the same thing for
free. Here's how to do it (using [Terminal on Mac][terminal] or [admin-mode
Command Prompt ][cmd-prompt] on PC):

1. Setup Dropbox to sync a local folder ([sign up for a free account][db-
signup]) 2. On your primary computer, which has your up-to-date add-ons and
settings, move your settings and add-ons folders to a `World of Warcraft` folder
inside your synced Dropbox folder

    ```bash
    #
    # Mac
    #
    mkdir -p ~/Dropbox/World\ of\ Warcraft/WTF
    cd /Applications/World\ of\ Warcraft
    mv WTF/Account ~/Dropbox/World\ of\ Warcraft/WTF/Account
    mv Interface ~/Dropbox/World\ of\ Warcraft/Interface
    ```

    ```batch
    ::
    :: PC
    ::
    cmd /x
    mkdir "%HOMEDRIVE%%HOMEPATH%\Dropbox\World of Warcraft\WTF"
    %SYSTEMDRIVE%
    cd "%PROGRAMFILES(X86)%\World of Warcraft"
    robocopy WTF\Account "%HOMEDRIVE%%HOMEPATH%\Dropbox\World of Warcraft\WTF\Account" /move /s
    robocopy Interface "%HOMEDRIVE%%HOMEPATH%\Dropbox\World of Warcraft\Interface" /move /s
    ```

3. Create a [symbolic link][symlink] from your WoW folder to the Dropbox folder

    ```bash
    #
    # Mac
    #
    cd ~/Dropbox/World\ of\ Warcraft
    ln -s WTF/Account /Applications/World\ of\ Warcraft/WTF/Account
    ln -s Interface /Applications/World\ of\ Warcraft/Interface
    ```

    ```batch
    ::
    :: PC
    ::
    %SYSTEMDRIVE%
    cd "%PROGRAMFILES(X86)%/World of Warcraft"
    mklink /D WTF/Account "%HOMEDRIVE%%HOMEPATH%\Dropbox\World of Warcraft\WTF\Account"
    mklink /D Interface "%HOMEDRIVE%%HOMEPATH%\Dropbox\World of Warcraft\Interface"
    ```

At this point, you've moved your WoW settings and add-ons to your Dropbox
folder, so that it can begin syncing the data to the cloud. You've also created
[symbolic links][symlink] so that WoW still believes those directories are where it
expects them to be.

All that's left is making similar links from Dropbox to the WoW application
directory on your secondary machine. This is done by installing Dropbox on that
machine, allowing it to sync your files, and then creating links as outlined in
step 3 above.

Note that many settings (stored in `WTF/Account`) are display-resolution
dependent, so you may not want to actually link your _entire_ settings directory.

[cmd-prompt]: https://technet.microsoft.com/en-us/library/cc947813%28v=ws.10%29.aspx
[curse]: http://www.curse.com/
[curse-premium]: http://www.curse.com/premium/plan
[db]: https://www.dropbox.com/
[db-signup]: https://db.tt/6ItdqmTl
[symlink]: http://en.wikipedia.org/wiki/Symbolic_link
[terminal]: http://www.wikihow.com/Get-to-the-Command-Line-on-a-Mac
[wow]: http://www.worldofwarcraft.com/

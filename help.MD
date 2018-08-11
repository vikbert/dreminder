# Dreminder [![Build Status](https://travis-ci.org/hovancik/stretchly.svg?branch=master)](https://travis-ci.org/hovancik/stretchly) [![Build status](https://ci.appveyor.com/api/projects/status/d3eq9bs1kcysulb1?svg=true)](https://ci.appveyor.com/project/hovancik/stretchly) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![bitHound Overall Score](https://www.bithound.io/github/hovancik/stretchly/badges/score.svg)](https://www.bithound.io/github/hovancik/stretchly) [![bitHound Dependencies](https://www.bithound.io/github/hovancik/stretchly/badges/dependencies.svg)](https://www.bithound.io/github/hovancik/stretchly/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/hovancik/stretchly/badges/devDependencies.svg)](https://www.bithound.io/github/hovancik/stretchly/master/dependencies/npm) [![bitHound Code](https://www.bithound.io/github/hovancik/stretchly/badges/code.svg)](https://www.bithound.io/github/hovancik/stretchly) [![codecov](https://codecov.io/gh/hovancik/stretchly/branch/master/graph/badge.svg)](https://codecov.io/gh/hovancik/stretchly) [![Join the chat at https://gitter.im/stretchly/Lobby](https://badges.gitter.im/stretchly/Lobby.svg)](https://gitter.im/stretchly/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


*dreminder* is cross-platform [electron](http://electron.atom.io/) app that reminds you to take breaks when working with computer.

By default, it runs in your tray and shows reminder window every 10 minutes, that is open for 20 seconds, containing idea for microbreak.

Every 30 minutes, it shows window containing idea for longer 5 minute break.

<img src="https://raw.githubusercontent.com/hovancik/stretchly/master/stretchly-break.png" height="340">

User gets notified 30 seconds before breaks to be able to prepare to pause the work.

<img src="https://raw.githubusercontent.com/hovancik/stretchly/master/stretchly-notification.png" height="90">

You can finish break or microbreak early, by clicking the link at the bottom
or by using `Ctrl/Cmd + x` keyboard shortcut (when not in strict mode).

Microbreaks and breaks can be customized:
- you can set duration and interval of break
- you can enable/disable breaks
- you can enable/disable strict mode (breaks can't be finished early)

<img src="https://raw.githubusercontent.com/hovancik/stretchly/master/stretchly-settings-website-1.png" height="340">

- you can choose from different color schemes
- you can pick a sound to be played at the end of the break

<img src="https://raw.githubusercontent.com/hovancik/stretchly/master/stretchly-settings-website-2.png" height="340">

- you can set break window to be fullscreen
- you can disable showing of break ideas
- you can disable showing of break and microbreak notifications
- you can disable monitoring of system idle time for natural breaks (when user leaves and after return idle time is greater then break duration, *stretchly* will reset breaks)
- you can disable showing breaks on all of your monitors
- you can choose language for interface

<img src="https://raw.githubusercontent.com/hovancik/stretchly/master/stretchly-settings-website-3.png" height="340">

All settings can be reset to defaults.

#### Editing break/microbreak ideas
In config file, change `useIdeasFromSettings: false,` to `useIdeasFromSettings: true,` and edit
`breakIdeas` and `microbreakIdeas`.

#### Editing break/microbreak notification interval
In config file, change `breakNotificationInterval: 30000,` to whatever value you want. 30000 is 30 seconds. Same goes for microbreak.

#### New version notification
In config file, set `notifyNewVersion: false,` to disable showing of new version's notification.

## Install [![Github All Releases](https://img.shields.io/github/downloads/hovancik/stretchly/total.svg)](https://github.com/hovancik/stretchly/releases/latest)

Latest installers for macOS, Windows, Linux and FreeBSD can be found [here](https://github.com/hovancik/stretchly/releases).

On macOS you can install it by running `brew update && brew cask install stretchly`

You can create installer by running `npm run pack` or `npm run dist` after `npm install`.

## Running from source

To run app you will need [nodejs](https://nodejs.org/). Clone the repo, run `npm install` and then simply do `npm start` to start *stretchly*.

It should run on any electron supported platform. Tested on OS X, Windows and Ubuntu Linux.


### Humans and Tools
 - https://github.com/typefoo/node-icns
 - https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
 - http://web.stanford.edu/dept/EHS/prod/general/ergo/microbreaks.html
 - https://www.spineuniverse.com/wellness/ergonomics/workstation-ergonomics-take-break
 - http://www.lifehack.org/articles/productivity/21-counter-intuitive-break-ideas-to-boost-your-productivity-at-work.html
 - http://www.latofonts.com/lato-free-fonts/
 - http://www.huffingtonpost.com/2012/07/24/sitting-at-work-why-its-dangerous-alternatives_n_1695618.html
 - http://www.unm.edu/~lkravitz/Article%20folder/sittingUNM.html

#### Sounds credits
Sounds used in this application are listed [here](http://freesound.org/people/hovancik/bookmarks/category/58865/).
- `crystal glass` by [mlteenie](http://freesound.org/people/mlteenie/), available under the [Attribution License](http://creativecommons.org/licenses/by/3.0/).
- `wind chime` by [GnoteSoundz](http://freesound.org/people/GnoteSoundz/), available under the [Creative Commons 0 License](http://creativecommons.org/publicdomain/zero/1.0/).
- `tic toc` by [magundah14](http://freesound.org/people/magundah14/), available under the [Creative Commons 0 License](http://creativecommons.org/publicdomain/zero/1.0/).
- `silence` by [parcodeisuoni](http://freesound.org/people/parcodeisuoni/), available under the [Attribution License](http://creativecommons.org/licenses/by/3.0/).

## License
See LICENSE file.

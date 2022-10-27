---
id: basics
title: The Basics
sidebar_position: 1
---

Now we can finally cover all the cool bits and pieces of TempleOS.

## Upon Booting

Once fully inside, you'll be asked if you'd like to take the tour; thankfully, Terry was kind enough to teach people how to use his system. For the purpose of this guide, I'll be ignoring the guide and exploring things my own way - although, don't take that as an excuse to not explore the vastness of the tour, going so much as guiding you through everything.

Floating over on the right of your screen is a super helpful tool called "AutoComplete"; which - you guessed it - is a program that autocompletes what you're typing system-wide. Autocomplete can be enabled with <kbd>Alt</kbd> + <kbd>A</kbd> and disabled with <kbd>Shift</kbd>+<kbd>Alt</kbd> + <kbd>A</kbd>. From the start, we'll be greeted with two command windows or "terminals".

The entirety of TempleOS - disregarding a portion of assembly code - is written in a C variant created by Terry A. Davis titled **HolyC** with its own appropriately named HolyC compiler. What might be surprising about TempleOS is that the "shell" environment goes directly to the compiler, thus being completely different from something like Linux using BASH which is a standalone program used for executing programs, instead TempleOS resembles something like how the Python interpreter has its own Read-eval-print loop which feeds directly to the interpreter (although with HolyC it is way faster). Pairing one of the powerful languages with a direct user input might seem crazy, but it's ridiculously overpowered! We will be diving deeper into commands and the inner workings in the next chapter.

<img src="/screenshots/firstboot.png" width="70%"/>

## The UI

### Menu

From a first glimpse, TempleOS may appear very convoluted, but once you get an understanding of each component, you start to unravel its beauty. In the above image, you can see the UI for TempleOS, yours should appear the same – if not, similar – take a look at the very top, and try to make sense of it. From the left, we have our date in the format; Day MM/DD HH:MM:SS. After that, we have the current screen FPS, the maximum that this can be is 30 (without making adjustments), followed by the amount of memory in hexadecimal, then the CPU usage. In the image above, there are four 1's – or rather four slots – which represents the amount of cores allocated to the machine, the 1's themselves representing the percentage used of that core. Finally, on the very left, TempleOS displays the last key(s) pressed.

### Windows

On every boot, TempleOS will open up 2 windows, both happening to be **Terminals**. In the middle of the border, surrounding the window, displays the name of the application followed by its process ID. By grabbing the top border and moving your mouse, you can reposition this window! Or, if you wish, resize them with the other borders. At the top of the window you'll find a `[X]` button, press this to close the window. What's also really cool about these windows is that they are scrollable; once enough text is filled on the screen, you will be able to scroll, of course with the mouse wheel but also by dragging that little yellow square on the border.

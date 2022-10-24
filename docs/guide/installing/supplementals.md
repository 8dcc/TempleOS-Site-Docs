---
id: supplementals
title: 🧩 Supplementals
---

# Supplementals
On some of Terry's - or other YouTubers' - videos on TempleOS, you'll notice that they have different programs than you. This is due to supplemental files; instead of packaging all of TempleOS's features into the one ISO, terry chose to split them into separate packages which can be loaded.These additions aren't necessary and are exactly that; additions. This guide will detail the installation of supplementals on most TempleOS installs. It is recommended, that if you do this, you should do it just after installing TempleOS.

Regardless of your chosen method, the supplementals can be downloaded from the TempleOS Simplified Archive, you'll need to grab supplemental files one through to three, located <a href="https://archive.templeos.me/archive/TempleOS/">here</a>.

## Mounting

### QEMU
Once you've installed TempleOS on a QEMU hard drive, and unmounted the CD Image, finally, make sure TempleOS is running, and you will be good to go. To start with, press the keys <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>2</kbd> to open a new QEMU console window (think of this like a TTY session on Linux), now it is time for some commands.

1. Mount the first supplemental file to the CD.
```
eject ide1-cd0
change ide1-cd0 /home/xzntrc/VMs/TOS_Supplemental1.ISO.C
```
If QEMU can't find `ide1-cd0` then insure it equals the correct drive visible via running `info block`.

### VMWare
After directly booting into your VM, navigate to the top bar in VMWare and navigate to VM then Settings (or simply <kbd>Ctrl</kbd>+<kbd>D</kbd>). Once in the settings, press on the add button, select "CD/DVD Drive", then for the connection set it as ISO and select the first supplemental. Finish by saving.
## Back in TempleOS
After mounting the first supplemental in your chosen virtual machine software, you can now move back to TempleOS and open a terminal. From here you'll need to enter the commands:
```holyc
DskChg('T');
CopyTree("T:/", "C:/Home/Sup1");
```
This changes your [CWD](https://www.computerhope.com/jargon/c/currentd.htm) to drive 'T'; this is one of TempleOS's mount points, specifically this is where CDs are mounted. Upon switching directories, it copies each file in the root of 'T' to the location 'C:/Home/Sup1'. However, this is only doing this for the first supplemental, realistically though, the other two only contain Hymns and is up to you if you wish to install them.

You'll now be able to run programs from the supplementals by including them.
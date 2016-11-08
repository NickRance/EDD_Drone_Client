#!/data/data/com.termux/files/usr/bin/bash

telnet 192.168.1.1;
killall udhcpd;
iwconfig ath0 mode managed essid "ardrone";
ifconfig ath0 192.168.43.107 netmask 255.255.255.0 up;
#!/data/data/com.termux/files/usr/bin/bash

echo "Environment Check"

command -v python || true
command -v node || true
command -v git || true

uname -a

df -h

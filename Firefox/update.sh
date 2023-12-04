#!/bin/bash

### Variables ###

### Colors ###
RED='\033[0;31m'
GREEN='\033[0;32m'
MAGENTA='\033[0;35m'
NC='\033[0m' #No Color

### Temp Folder ###
Temp="/home/$USER/RuttuFoxTemp"

### Files ###
RuttuFox="https://raw.githubusercontent.com/Ruttuvaari/Linux/main/Firefox/user-overrides.js"
Directory="/home/$USER/.mozilla/firefox"

# Shutting down Firefox
echo -e "Status: ${GREEN}Shutting down Firefox${NC}"
pkill -f firefox

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
ArkenFox="https://github.com/arkenfox/user.js.git"
RuttuFox="https://raw.githubusercontent.com/Ruttuvaari/Linux/main/Firefox/user-overrides.js"
Dependencies="firefox git libva-mesa-driver libva-utils ffmpeg nvtop"

# Shutting down Firefox
echo -e "Status: ${GREEN}Shutting down Firefox${NC}"
pkill -f firefox

# Install dependencies
echo -e "Status: ${GREEN}Install dependencies${NC}"
sudo pacman -S $Dependencies --needed

# Creating a new Firefox profile
echo -e "${RED}Give a name for the new firefox profile${NC}"
read Profile_Name
echo -e "Status: ${GREEN}Creating a new profile $Profile_Name${NC}"
firefox -CreateProfile "$Profile_Name /home/$USER/.mozilla/firefox/$Profile_Name"

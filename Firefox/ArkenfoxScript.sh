#!/bin/bash

# Variables

# Colors used for printing
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;35m'
NC='\033[0m' # No Color

Temp="/home/$USER/FirefoxTemp"

echo -e "${ORANGE}
                ##################################################################################################
                ### This script creates a new Firefox profile and moves the Arkenfox files to the profile folder.        ###
                ### The script also updates the user.js file with Ruttuvaari's user-overrides.                         ###
                ### Version 1.0 - Ruttuvaari                                                                          ###
                ##################################################################################################${NC}"

echo -e "Status: ${GREEN}Shutting down firefox${NC}"
pkill -f firefox

echo -e "Status: ${GREEN}Install dependencies${NC}"
sudo pacman -S firefox git libva-mesa-driver libva-utils ffmpeg nvtop --needed

echo -e "${RED}Give a name to FireFox profile${NC}"
read Profile_Name

echo -e "Status: ${GREEN}Creating profile${NC}"
firefox -CreateProfile "$Profile_Name /home/$USER/.mozilla/firefox/$Profile_Name"

Profile="/home/$USER/.mozilla/firefox/$Profile_Name"

echo -e "Status: ${GREEN}Starting new profile${NC}"
echo -e "Status: ${RED}DO NOT SHUT DOWN FIREFOX MANUALLY${NC}"
firefox -new-instance -P $Profile_Name &
sleep 5
pkill -f firefox

echo -e "Status: ${GREEN}Creating Temp folder${NC}"
mkdir $Temp

echo -e "Status: ${GREEN}Cloning Arkenfox${NC}"
git clone -q https://github.com/arkenfox/user.js.git $Temp

echo -e "Status: ${GREEN}Moving files${NC}"
mv $Temp/{*.js,*.sh} $Profile

echo -e "Status: ${GREEN}Cloning Ruttuvaari's user-overrides.js${NC}"
wget -q https://raw.githubusercontent.com/Ruttuvaari/Linux/main/Firefox/user-overrides.js -P $Profile

echo -e "Status: ${GREEN}Removing temp files${NC}"
rm -rf $Temp

cd $Profile

echo -e "Status: ${GREEN}Running Arkenfox scripts${NC}"
bash updater.sh
bash prefsCleaner.sh

echo -e "Status: ${GREEN}Starting Firefox${NC}"
firefox -new-instance -P $Profile_Name &

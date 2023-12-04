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
File="user-overrides.js"

# Shutting down Firefox
echo -e "Status: ${GREEN}Shutting down Firefox${NC}"
pkill -f firefox

# Looking for profiles to update
cd $Directory
readarray -t data < <(find * -name "$File" -printf "%h\n")

# Select the profile to update
select Profile_Folder in "${data[@]}"; do
if [ "$REPLY" -ge 1 ] && [ "$REPLY" -le ${#data[@]} ];
  then
    echo -e "${GREEN}You have selected a profile${NC} ${RED}$Profile_Folder${NC}"
    break;
  else
    echo -e "${RED}Wrong selection:${NC}${GREEN} Select any number from 1-${#data[@]}${NC}"
  fi
done

### Profile ###
Profile_Path="$Directory/$Profile_Folder"
Profile_Name="${Profile_Folder#*.}"

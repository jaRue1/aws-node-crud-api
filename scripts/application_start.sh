#!/bin/bash

#give permission for everything in the aws-node-crud-api directory
sudo chmod -R 777 /home/ec2-user/aws-node-crud-api

#navigate into our working directory where we have all our github files
cd /home/ec2-user/aws-node-crud-api

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
nvm use --delete-prefix v18.10.0 --silent
nvm --version
nvm ls-remote
nvm install 12
nvm use 12
node -v
npm install

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null & 
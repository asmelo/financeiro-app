#!/bin/bash
cd /home/ec2-user/projetos/financeiro-app
npm install
sudo npm run build
sudo rm -r /usr/share/nginx/html/*
sudo cp -r /home/ec2-user/projetos/financeiro-app/dist/* /usr/share/nginx/html
#!/bin/bash
cd ..
sudo npm run build
sudo rm -r /usr/share/nginx/html/*
sudo cp /home/ec2-user/projetos/financeiro-app/dist/* /usr/share/nginx/html
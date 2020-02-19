#!/bin/bash
sudo systemctl stop nginx
sleep 10
sudo systemctl start nginx

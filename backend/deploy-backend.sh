#!/bin/bash
set -x

echo 'Logging in to Heroku...'
heroku auth:token

echo 'Logging in to Heroku Container Registry...'
heroku container:login

echo 'Building Docker image...'
sudo docker build -t registry.heroku.com/ascent-travel/web .

echo 'Pushing Docker image to Heroku...'
sudo docker push registry.heroku.com/ascent-travel/web

echo 'Releasing the Docker image...'
heroku container:release web --app ascent-travel

echo 'Deployment completed.'
set +x

SIT725 Practical 9 

Commands to be run after Docker Desktop is installed:

docker build -t sparktr/practical9 .

docker run -d -p 4065:8080 sparktr/practical9

Then go to http://localhost:4065/ in web browser

This docker runs the website project I've been making during the course of this unit. You should see a pink webpage with a cat.
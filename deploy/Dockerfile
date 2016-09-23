FROM node:6.2.1

RUN apt-get update && apt-get install -y apache2

RUN npm install webpack -g

WORKDIR /var/www/html

CMD npm install && /etc/init.d/apache2 start && webpack --color --watch
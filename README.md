# Webpack Test
I used this small code to try webpack.

## How to try it?
You have to have a working docker and docker-compose on your computer.

1. Clone the repository
```$ git clone git@github.com:peti2001/webpack_test.git```

2. Go the de deploy directory
```$ cd webpack_test/deploy```

3. Build the docker image
```$ docker-compose build```

4. Start the container
```$ docker-compose up```
It will install all the necessary node.js packages, start Apache2 and start webpack in watch mode. So if you change anything in the `www/src` folder it will regenerate all the files automatically. 

5. Check it in the browser
Open [http://localhost:5000](http://localhost:5000) in your browser.

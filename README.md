# SANDBOX

Sandbox is a creative sandbox where users can pull in image and word inspiration, arranging them as they see fit. 

## Usage
to play around with the app go to 

~OR~

clone this repo and run the following commands (make sure postgresql is installed and running)

```bash
bundle install
rails db:create db:migrate

npm install --prefix client
```
once setup, run

```bash
rails s
npm start --prefix client
```

this will start the backend puma server listening on port 3000 and the react development server running on port 4000.

## Contributors
This project was made by Whiting ([github](https://github.com/wtennis)) and Benjamin ([github](https://github.com/benjaminolmsted))
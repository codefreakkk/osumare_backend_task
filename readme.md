This project is developed using express and typescript and MongoDB as a Database


Features:-  1) User creation
            2) Create, delete, update the todos


To setup the project, Firstly clone the project
```shell
git clone https://github.com/codefreakkk/osumare_backend_task
```

Then cd into that folder
```shell
cd [folder_name]
```

Then you have to run the following command:
```shell
npm install .
```

The above command will install the dependencies.

Now you have to setup a .env file into the src/config directory. You can cd into config, by typing the following command
```shell
cd config
```

You can create a .env file using touch command
```shell
touch .env
```

Now refer the .env file, and fill the fields according to that
```shell
PORT=3000
MONGO_URI=mongodb+srv://harshsaid31:harshsaid31@cluster0.zpx0udp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=thisissecret
```

Now check package.json file and add this script
```shell
"scripts": {
    "dev": "nodemon src/server.ts",
    "start": "node dist/src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
},
```

Now If you want to run the server in Development mode, you have to run the following command.
```shell
npm run dev
```

OR

If you want to run the server in Production mode, you have to run the following command.
```shell
npm run start
```

API DOCUMENTATION
1) Register User:- http://localhost:3000/api/v1/register
cURL:-
```shell
curl --location --request POST 'http://localhost:3000/api/v1/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test user",
    "email": "myaccount@gmail.com",
    "password": "Password@123",
    "address": {
        "street": "Test street",
        "city": "Test city",
        "postalCode": "1212",
        "country": "India"
    }
}'
```

2) Login User:- http://localhost:3000/api/v1/login
cURL:-
```shell
curl --location --request POST 'http://localhost:3000/api/v1/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"myaccount@gmail.com",
    "password": "Password@123"
}'
```

3) Get all todos:- http://localhost:3000/api/v1/tasks
cURL:-
```shell
curl --location --request GET 'http://localhost:3000/api/v1/tasks' \
--header 'Bearer your_token'
```

4) Get todo by id:- http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7
cURL:-
```shell
curl --location --request GET 'http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7' \
--header 'Bearer your_token'
```

5) Create a todo:- http://localhost:3000/api/v1/tasks
cURL:-
```shell
curl --location --request POST 'http://localhost:3000/api/v1/tasks' \
--header 'Bearer your_token' \
--data-raw '{
    "title": "Complete node js",
    "description": "This is a test description"
}'
```

6) Update a todo:- http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7
cURL:-
```shell
curl --location --request PUT 'http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7' \
--header 'Bearer your_token' \
--data-raw '{
    "title": "Updated title",
    "description": "Updated desciption"
}'
```

7) Delete a todo:- http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7
cURL:-
```shell
curl --location --request DELETE 'http://localhost:3000/api/v1/tasks/665232eb734184cf4a491ff7'\
--header 'Bearer you_token'
```

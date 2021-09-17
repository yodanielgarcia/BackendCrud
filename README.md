# Backend

Api's documentation

###### Persons

authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTY2MjQ4MTYwfQ.X5xYZpssydFjt3ZPsN41Q-RENfbtYBbqjPK0GW3mqQQ
auth: ADMIN

1. read <br>
   endpoint: /api/v1/readPerson/ <br>
   type: Get <br>
   Description: this endpoin get all persons in the database <br>
   body: <br>
   headers: auth, authorization <br>
2. read specific <br>
   endpoint: /api/v1/readPerson/:id <br>
   type: Get <br>
   Description: this endpoin get one person in the database <br>
   body: <br>
   headers: auth, authorization <br>
3. Create <br>
   endpoint: /api/v1/createPerson/ <br>
   type: POST <br>
   Description: create person in the tables person<br>
   body: user = {
   "nombre":,
   "apellido": ,
   "direccion": ,
   "telefono":,
   "edad": ,
   "fechaContrato": ,
   "fechaSalida":
   } <br>
   headers: auth, authorization <br>

#### About

#### DB Design
<img width="1440" alt="Screenshot 2024-10-16 at 3 20 50 PM" src="https://github.com/user-attachments/assets/77abb975-1a74-4741-b60f-280b584736f7">


### Project Screenshots
<img width="1385" alt="Screenshot 2024-10-16 at 3 42 00 PM" src="https://github.com/user-attachments/assets/e0552b7e-41f7-401b-af24-e1e538917984">
<img width="1428" alt="Screenshot 2024-10-16 at 3 42 46 PM" src="https://github.com/user-attachments/assets/a1176a32-dfb3-40f9-8ee2-5dc5adfd6c66">
<img width="1421" alt="Screenshot 2024-10-16 at 3 42 55 PM" src="https://github.com/user-attachments/assets/c5b2c4f3-4be8-46d1-9741-fce57fd1cb84">
<img width="1421" alt="Screenshot 2024-10-16 at 3 45 36 PM" src="https://github.com/user-attachments/assets/cf7f81c0-aaf6-43cb-919b-4a272ad25a23">



##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby [3.3.0]()
- Rails [7.2.1]()

##### 1. Check out the repository

```bash
git clone git@github.com:sanketbodke/roxiler-assignment.git
```

##### 2. Setup database.yml file

Set your postgres username and password

##### 3. Create and setup the database

Run the following commands to create and setup the database.

```ruby
rails db:create && rails db:migrate
```

##### 5. Start the Rails server

You can start the rails server using the command given below.

```ruby
forman start Procfile.dev
```


```
rails db:drop
rails db:create
rails db:migrate
rails db:seed
```

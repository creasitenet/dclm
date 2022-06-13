## Short introduction

This small application fetch Le monde feed and display La Une items.

Backend is using [Laravel PHP Framework](https://laravel.com/) 9.0

Frontend is using [React](https://fr.reactjs.org/)

## Install the project locally

1. **Clone project** :

     ```shell
     git clone repository
     ```

2. **Run composer** in project root folder:
    ```shell
    composer install
    ```

3. **Run npm install** in project root folder:
    ```shell
    npm install
    ```

4. **Run npm dev** in project root folder to compile assets using Laravel mix:
    ```shell
    npm run dev
    ```
   or
    ```shell
    npm run watch
    ```

5. **Run Laravel built in server** in project root folder:
    ```shell
    php artisan serve
    ```

6. **Enjoy**

   Navigate to http://localhost:8000

## TODO

Backend :

- Refactor LeMondeFeedService class for better genericity and maintenability (split fetch and data formatting for example)
- Improve api route (add a parameter) / controller and Services class to be able to switch between others available Le monde feed categories
- Add validation check on fetched data
- Add unit tests
- Add others services to add possibility to fetch others feeds or api

Frontend :

- Add more style 
- Add a header, a footer and a menu
- Add a loader to wait while fetching data on Home page
- Find a way to get a smoother transition between pages
- Add possibility to switch between different feed categories on Home page
- Add a pagination or a autoloader on Homepage
- Add an external link to the source item on item detail page

...

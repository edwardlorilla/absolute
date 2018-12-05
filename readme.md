# Absolute

This is an open source

## Installation

### Prerequisites

* To run this project, you must have PHP 7 installed.
 

### Step 1

Begin by cloning this repository to your machine, and installing all Composer & NPM dependencies.

```bash
git@github.com:edwardlorilla/absolute.git
cd absolute && composer install && npm install
cd council && composer install
php artisan key:generate
mv .env.example .env

```

### Step 2.

Next, create a new database and reference its name and username/password within the project's `.env` file. In the example below, we've named the database, "absolute"

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=absolute
DB_USERNAME=root
DB_PASSWORD=
```

### Step 3.

Once finished, clear your server cache, and you're all set to go!

```
php artisan cache:clear
php artisan migrate:fresh --seed
php artisan serve
```
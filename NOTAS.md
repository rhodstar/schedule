# Aprendiendo Laravel

Crear archivo sqlite

```shell
touch database/database.sqlite
```

Remeber to install `php-sqlite`

Then uncomment `;extension=pdo_sqlite.so`

This extension is on `/etc/php/php.ini`

```shell
php artisan migrate
```

```shell
php artisan make:controller MateriasController --resource
```

```shell
php artisan make:model Materia -m # -m creates the migration
```

Open a php console

```shell
php artisan tinker
```

Reset all changes (Drop table)

```shell
php artisan migrate:reset
# or
php artisan migrate:fresh
php artisan migrate:fresh --seed
```

How to do seeders

```shell
php artisan make:seeder [NombreSeeder]
```

## Making a search engine

```php

```


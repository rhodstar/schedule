# Aprendiendo Laravel

You rather use 

```shell
php artisan server --host 0.0.0.0
```

So that you can see your site in external devices around your network

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

## Lo que se supone que es básico

Para imprimir en lugar de utilizar `echo` podemos hacer lo sigueinte

```shell
<?= e($user) ?>
```

```shell
php artisan view:clear # limpia el cache de las vistas 
```

I change name app and get this error

```shell
Fatal error: Uncaught ReflectionException: Class App\Console\Kernel does not exist in /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php:790
Stack trace:
#0 /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php(790): ReflectionClass->__construct('App\\Console\\Ker...')
#1 /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php(667): Illuminate\Container\Container->build('App\\Console\\Ker...')
#2 /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php(265): Illuminate\Container\Container->resolve('App\\Console\\Ker...', Array, false)
#3 /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php(787): Illuminate\Container\Container->Illuminate\Container\{closure}(Object(Illuminate\Foundation\Application), Array)
#4 /Users/administrador/Documents/horario-fi/vendor/laravel/fr in /Users/administrador/Documents/horario-fi/vendor/laravel/framework/src/Illuminate/Container/Container.php on line 790
```

The solution is 

```shell
composer dump-autoload
```


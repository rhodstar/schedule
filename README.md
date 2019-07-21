# Horario FI

***proyecto en fase de desarrollo***

```shell
julio, 2019
HTML 5 | js | css3 | bootstrap v4.1 | laravel 5.8 | php7.3 | laravel/installer2.1
```
Está página web fue creada con la finalidad de crear un horario lo más rápido posible ya que las vacantes para los grupos siempre se suelen acabar lo que hace que se tenga que reacomodar algunas de nuestras materias.

![Primeras impresiones](img/s2.png)

## Uso para desarrolladores

El sitio web, al estar escrito en *laravel* simplemente requiere, obviamente, tener instalado laravel, npm y composer. Después de eso para ejecutar el proyecto basta con

```shell
composer install
```

Y por si las dudas

```shell
composer update --no-scripts
```

```shell
npm install
```

```shell
npm run dev
```

```shell
php artisan serve
```

Finalmente, no hay que olvidar generar el archivo `.env` apropiado, puede empezar reutilizando el que viene el proyecto (`.env.example`).

##  Contribuciones

La guía para contribuir al proyecto se encuentre [aquí](CONTRIBUTING.md)

## Licencia

Este proyecto esta licenciado bajo Apache v2.0, para más información le la licencia entra [aquí](LICENSE)

## Futuras implementaciones

* Agregar un módulo para que los usuarios puedan agregar sus materias con sus repectivas claves y respectivos datos.

* Agregar un módulo dónde el usuario pueda agregar en formato JSON los datos de sus materias.

* Agregar un módulo para que en el mismo sistema se pueda buscar a los profesores y breves opiniones acerca de èl.
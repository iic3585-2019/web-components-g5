# Tarea 5: Web components

## Integrantes

- Francisco Olivares
- Gabriel Valenzuela

## Instrucciones para correr el código

1. Instalar dependencias
```
    npm install
```
2. Servir el código con el comando
```
    npm run start
```

3. Dirigase a la url `http://localhost:8080/` y podrá ver los componentes c:!

## El problema

Implementar componentes web mediante la clase `HTMLElement`. En particular se pedian 2 componentes sencillos

1. **Elemento de retail:** este componente debiese ser una 'caja' capaz de mostrar un producto a vender en una página de retail (ej: Falabella). Se instancia de la siguiente manera
    ```html
    <retail-item 
    url="https://www.google.com" 
    product_name='Televisor 44"' 
    old_price="699000"
    new_price="499000" ,
    image_url="https://totalmarcas.com/2885-home_default/televisor-samsung-43-pulgadas-full-hd-flat-smart-tv-j5290a-series-5.jpg" />

    ```
    El elemento al ser clickeado re-direcciona a la url entregada como parámetro

2. **Barra de rating:** este componente debiese indicar mediante algún ícono (ej: estrellas) el rating que tiene algo. Este componente se instancia de la siguiente manera
    ```html
    <stars-bar max_value="6" selected_value="2" />
    ```
    El elemento al ser clickeado cambia el rating.


Finalmente se pedía un componente más avanzado (RELLENAR AQUÍ CON COSAS DEL COMPONENTE AVANZADO)

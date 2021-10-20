# NOTAS

14-Oct-21 : El main cotiene los desafíos del 1 hasta el 11 

## DESAFÍO CLASE 12 : RAMA [ des-c12 : Aplicando SASS Operaciones ]

    * La barra NAV se pasa a SASS [ _nav.scss ]
    * Se agrega un mixin para los degradados [ _mixins.scss ]
    * Se agrega una condicional IF en el mixin de los degradados.
    * Se agrega un archivo SASS [ _generales.scss ] en donde coloco algunas clases que se utilizan en todo el proyecto
    * Se pasa el HERO a SASS y se agrega un @extend
    * Se realizan algunas correcciones en el código por errores ocasionados por la intregración de SASS

## DESAFÍO CLASE 12 - COMPLEMENTARIO : RAMA [ des-c12-com : Aplicando SASS Operaciones ]

    * Se pasa la clase de los botones al SASS de los estilos generales [ _generales.scss ] en donde también se utiliza el mixin creado en el desafío anterior.
    * Se hace un mayor uso del @extend
    * Los estilos de la sección de VIDEO se convierten a SASS
    * Los estilos de la sección de RESERVACIONES (parallax) se pasan a SASS
    * Los estilos de la sección de los CHEFS se convierten a SASS
    * Se agrega un 2o MIXIN para aplicar FLEXBOX a las cajas el cual tiene 5 condicionales IF. [ _mixin.scss :  mixFlex ]
        *   El mixin mixFlex por el momento solo lo he aplicado en los archivos [ _secCalidad.scss y _secReservaciones.scss ] con éxito.


# TERCERA ENTREGA : RAMA [ des-c12-com : Aplicando SASS Operaciones ] 

    * Se agrega la sección de las reseñas a SASS
    * Se crea un nuevo MIXIN : mixFiltro() para aplicar filtros a los background con diferentes valores, se puede ver aplicado en el archivo [ _generales.scss ]
    * Se agrega el FOOTER a SASS
    * Se agrega un nuevo MIXIN : mixMQ, especial para agregar todos los MediaQueries necesarios, con 1 solo mixin puedo poner un media querie para cualquier tamaño.
    * Se reestructura la carpeta SCSS y se divide en carpetas, para poder separar los diferentes archivos de SASS en su respectiva categoría
    * Se comienza a aplicar los media queries por medio del nuevo mixin, pero aun no queda completo.
    * Prácticamente ya se convirtió todo el CSS a SASS, aún queda un poco de código pero son media queries.


## DESAFÍO CLASE 13 - SEO : RAMA [ des-c13 : Aplicando SEO ]

    * Se ordena el HEAD en base a las buenas prácticas, básandome en un artuculo que compartieron en el grupo de SLACK
    * Se agrega la descripción, palabras clave, autor, copyright en cada archivo HTML
    * Las palabras clave se pusieron en base al HTML 
    * Se agrega código para que al compartir el link aparezca formateado con titulo, imagen y descripción, algo así como cuando compartes un link de Facebook
    * Se PROCESAN todas las imagenes en la página TINYPNG para bajar su tamaño


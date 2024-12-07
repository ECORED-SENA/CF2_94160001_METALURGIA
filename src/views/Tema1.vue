<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a metales y aleaciones no ferrosos
    .row
      .col-lg-8(data-aos="fade-right")
        p Pocos metales se utilizan en estado puro, como es el caso del cobre en los circuitos conductores eléctricos. Actualmente, la mayoría de los metales no ferrosos empleados en ingeniería son aleaciones, combinaciones de metales similares y, en ocasiones, de elementos no metálicos que mejoran las propiedades mecánicas y metalúrgicas en comparación con los metales puros.
        .row.justify-content-center
          .col-md-8.col-lg-auto.px-0.ms-lg-3
            figure
              img(src='@/assets/curso/tema1/img1.png', alt='', style='width: 435px').m-auto
          .col-md-8.col-lg.bg-c5
            .row.align-items-center.h-100
              .col-12
                .p-4.h-100
                  p.mb-0 Cada metal posee #[b propiedades mecánicas y metalúrgicas] específicas que, al combinarse, resultan valiosas para aplicaciones en ingeniería. No obstante, su uso está condicionado por la relación entre costo y propiedades, así como por la competitividad económica.
      .col-lg-4.mb-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style='width: 300px').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Metales puros
    .row.justify-content-center.mb-4
      .col-md-8.col-lg.order-2.order-lg-1.bg-c2(data-aos="fade-right")
        .row.align-items-center.h-100
          .col-12
            .p-4.h-100
              p.mb-0 Se consideran puros aquellos metales que se emplean sin ser aleados, con concentraciones iguales o superiores al 99.0 %, como el cobre electrolítico.
      .col-md-8.col-lg-auto.order-1.order-lg-2.px-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 430px').m-auto
    p.mb-5(data-aos="fade-down") El beneficio es el proceso de separación de la mena y la ganga, que se divide en las siguientes etapas:
    .row.bg-c6
      .col-12
        .p-5
          .tarjeta.tarjeta--gris(data-aos="fade-left")
            .p-4
              LineaTiempoC.color-acento-contenido(text-small)
                .row.justify-content-center.align-items-center(titulo="Etapa 1")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Lavado]
                    p.mb-0 Elimina el lodo y el material orgánico presentes en algunos minerales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center(titulo="Etapa 2")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Trituración]
                    p.mb-0 Reduce el tamaño de los trozos de roca provenientes de la mina.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center(titulo="Etapa 3")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Molienda]
                    p.mb-0 Disminuye aún más el tamaño de las partículas dejadas por la trituración.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center(titulo="Etapa 4")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Homogenización]
                    p.mb-0 Mezcla los productos de la molienda para compensar variaciones de granulometría y composición química.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center(titulo="Etapa 5")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Clasificación]
                    p.mb-0 Separa la mezcla en fracciones según su tamaño.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center(titulo="Etapa 6")
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Concentración]
                    p.mb-0 Separa el mineral o metal útil de la ganga, aprovechando propiedades físicas o químicas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img10.png', alt='', style='width: 500px').m-auto
    .row.bg-c7
      .col-12
        .p-5
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img12.png', alt='', style='width: 350px').m-auto
            .col-lg-8(data-aos="fade-left")
              p Algunos métodos de concentración incluyen:
              SlyderF(columnas="col-md-6")
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 130px').m-auto
                    .row.justify-content-center.mb-3
                      .col-auto
                        .p-2.bg-c8
                          p.mb-0 #[b Gravimétrica]
                    p.text-center.mb-0 Basada en la diferencia de densidades.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 130px').m-auto
                    .row.justify-content-center.mb-3
                      .col-auto
                        .p-2.bg-c8
                          p.mb-0 #[b Flotación]
                    p.text-center.mb-0 Emplea procesos físico-químicos con reactivos.
                .tarjeta.bg-white
                  .p-4
                    figure.mb-3
                      img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 130px').m-auto
                    .row.justify-content-center.mb-3
                      .col-auto
                        .p-2.bg-c8
                          p.mb-0 #[b Magnética]
                    p.text-center.mb-0 Utiliza campos magnéticos para separar minerales.
          p(data-aos="fade-up") La separación del metal del mineral se realiza a través de reacciones metalúrgicas, que pueden ser a gran escala industrial. Los procesos industrializados comprenden:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-right")
      .p-3.p-md-4(titulo="Hidrometalurgia")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img13.png', alt='', style='width: 500px').m-auto
          .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
            p #[b Hidrometalurgia]
            p.mb-0 Disolución de metales para su recuperación.
      .p-3.p-md-4(titulo="Pirometalurgia")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img14.png', alt='', style='width: 500px').m-auto
          .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
            p #[b Pirometalurgia]
            p.mb-0 Uso de calor para extraer metales.
      .p-3.p-md-4(titulo="Biometalurgia")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img15.png', alt='', style='width: 500px').m-auto
          .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
            p #[b Biometalurgia]
            p.mb-0 Utilización de bacterias para la extracción de metales.
      .p-3.p-md-4(titulo="Electrometalurgia")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img16.png', alt='', style='width: 500px').m-auto
          .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
            p #[b Electrometalurgia]
            p.mb-0 Extracción y refinación mediante corriente eléctrica.
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 Usos
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Los metales no ferrosos utilizados en ingeniería, que se emplean en estados de alta pureza, incluyen el cobre, aluminio, oro, plata, plomo y zinc. Todos ellos se obtienen mediante los procesos mencionados anteriormente y, generalmente, se utilizan en la microelectrónica o como insumos para la producción de aleaciones. Esto se debe a que, en estado puro, los metales son quebradizos y tienden a formar compuestos con el oxígeno, lo que provoca su degradación.
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center
          .col-md-7.col-lg-auto.px-0.pe-lg-0
            figure
              img(src='@/assets/curso/tema1/img17.png', alt='', style='width: 380px').m-auto
          .col-md-7.col-lg.bg-c10
            .p-3
              figure.mb-3
                img(src='@/assets/curso/tema1/img6.svg', alt='', style='width: 130px')
              p.mb-0 Algunos metales no ferrosos se emplean en su estado puro, como el cobre, que se utiliza como conductor eléctrico y electrónico; el plomo, empleado en circuitos para la generación de electricidad o como aislante y contenedor de radiaciones; y el zinc, que se utiliza como recubrimiento de metales ferrosos.
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 Aleaciones no ferrosas
    p(data-aos="fade-up") En general, los metales no ferrosos son blandos y presentan baja resistencia mecánica. Para mejorar sus propiedades mecánicas y metalúrgicas, se combinan con otros metales, formando aleaciones. Estas aleaciones, según su peso específico o densidad, se pueden clasificar de la siguiente manera:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img18.png', alt='', style='width: 400px').m-auto
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Clasificación de metales no férricos por densidad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo
                th Características
                th Ejemplo de metal no férrico
            tbody
              tr
                td.text-center Pesados
                td Su densidad es igual o mayor de 5 kg/dm³.
                td Estaño, cobre, cinc, plomo, cromo, níquel, wolframio y cobalto.
              tr
                td.text-center Ligeros
                td Su densidad está comprendida entre 2 y 5 kg/dm³.
                td Aluminio y titanio.
              tr
                td.text-center Ultraligeros
                td Su densidad es menor de 2 kg/dm³.
                td Magnesio y berilio.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 Aleaciones ultraligeras
    .row.justify-content-center.mb-5
      .col-md-8.col-lg.order-2.order-lg-1.bg-c2(data-aos="fade-right")
        .row.align-items-center.h-100
          .col-12
            .p-4.h-100
              p.mb-0 Las aleaciones ultraligeras son combinaciones de metales caracterizadas por una densidad menor a 2 kg/dm³, lo que las hace ideales para aplicaciones que requieren reducir el peso sin comprometer la resistencia. Estos materiales, como las aleaciones de magnesio y berilio, son ampliamente utilizados en la industria aeroespacial y automotriz, donde la disminución del peso contribuye a mejorar la eficiencia energética y el rendimiento.
      .col-md-8.col-lg-auto.order-1.order-lg-2.px-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img19.png', alt='', style='width: 430px').m-auto
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 El magnesio
    p(data-aos="fade-right") El magnesio se obtiene principalmente por dos métodos electrolíticos:
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-4
          .col-md-6.mb-4.mb-md-0
            .p-4.bg-c11
              figure.mb-3
                img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 190px')
              p #[b Electrólisis del cloruro de magnesio anhidro fundido]
              p.mb-0 Se añade cloruro sódico para aumentar la conductividad eléctrica y disminuir el punto de fusión.
          .col-md-6
            .p-4.bg-c11
              figure.mb-3
                img(src='@/assets/curso/tema1/img8.svg', alt='', style='width: 190px')
              p #[b Electrólisis de una mezcla de óxido de magnesio y fluoruro de magnesio fundido.]
        .row
          .col-12
            .p-3.bg-c12
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img9.svg', alt='', style='width: 140px')
                .col
                  p #[b Reducción de óxido]
                  p.mb-0 Se calienta el carbonato de magnesio para obtener óxido, que luego se reduce con carbón en ausencia de oxígeno a una temperatura superior al punto de ebullición del magnesio. Esto permite condensar los vapores y enfriarlos en polvo mediante una corriente de hidrógeno.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img20.png', alt='', style='width: 345px').m-auto
    p.mb-0(data-aos="fade-down") Las aleaciones de magnesio destacan por su gran resistencia a la tensión y ligereza, siendo ideales para aplicaciones donde el peso es un factor crucial.
    .row.bg-c13
      .col-12
        .p-5
          .row.mb-4
            .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
              .p-4.bg-c14
                figure.mb-3
                  img(src='@/assets/curso/tema1/img23.png', alt='', style='width: 250px')
                p #[b Estas aleaciones se emplean en:]
                p.mb-0 Construcciones metálicas ligeras, industria aeronáutica, chasis de instrumentos ópticos, esquíes, cortacéspedes, aparatos ortopédicos, mobiliario de exteriores, émbolos y pistones.
            .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
              .p-4.bg-c14
                figure.mb-3
                  img(src='@/assets/curso/tema1/img22.png', alt='', style='width: 250px')
                p #[b El magnesio en polvo se utiliza en:]
                p.mb-0 Flashes fotográficos, bombas incendiarias y bengalas de señalización.
          p(data-aos="fade-up") En la industria metalúrgica y siderúrgica, el magnesio sirve como desgasificador de metales, con aplicaciones en la elaboración de vidrios, la industria cerámica y el tratamiento de aguas.
          p.mb-4(data-aos="fade-up") El magnesio forma compuestos divalentes, entre los cuales se encuentran:
          .row.align-items-center
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 2.] Compuestos divalentes
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th Compuesto
                      th Función
                  tbody.bg-white
                    tr
                      td.text-center Carbonato de magnesio (MgCO₃)
                      td Utilizado como material aislante y refractario.
                    tr
                      td.text-center Cloruro de magnesio (MgCl₂•6H₂O)
                      td Empleado en el tratamiento de algodón y tejidos de lana, la fabricación de papel, y en cementos y cerámicas.
                    tr
                      td.text-center Citrato de magnesio (Mg₃(C₆H₅O₇)₂•4H₂O)
                      td Utilizado en medicina y en la preparación de bebidas efervescentes.
                    tr
                      td.text-center Citrato de magnesio (Mg₃(C₆H₅O₇)₂•4H₂O)
                      td Usado en el refinado del azúcar.
                    tr
                      td.text-center Sulfato de magnesio (MgSO₄•7H₂O) y óxido de magnesio (MgO)
                      td Conocido como magnesia, empleado como material refractario, aislante del calor, en cosméticos, aditivo en la fabricación de papel y como laxante antiácido leve.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img24.png', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 El berilio
    p.mb-4(data-aos="fade-right") El berilio se obtiene a través de varios procesos:
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img25.png', alt='', style='width: 380px').m-auto
      .col-lg-8(data-aos="fade-left")
        .p-4.bg-c14
          .row.mb-3
            .col-12
              .p-4.bg-c15
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img10.svg', alt='', style='width: 120px').m-auto
                  .col
                    p.mb-0 #[b Tratamiento del mineral berilo pulverizado con ácido sulfúrico concentrado.] Esto produce una solución de sulfato de berilio y sulfato de aluminio. El aluminio se elimina mediante precipitación con sulfato amónico, seguido de filtración y cristalización del sulfato de berilio.
          .row.mb-3
            .col-12
              .p-4.bg-c15
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img11.svg', alt='', style='width: 120px').m-auto
                  .col
                    p.mb-0 #[b Producción de óxido de berilio.] Al calentar el sulfato de berilio a aproximadamente 1.400 ºC, se obtiene óxido de berilio, el cual sirve como base para la preparación de otros compuestos del elemento.
          .row
            .col-12
              .p-4.bg-c15
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', alt='', style='width: 120px').m-auto
                  .col
                    p.mb-0 #[b Obtención del berilio metálico.] Se puede realizar mediante la electrólisis del cloruro de berilio (o fluoruro) fundido, o por la reducción de su cloruro o hidróxido con sodio (Na) o magnesio (Mg).
    p.mb-4(data-aos="fade-right") El berilio tiene diversos usos industriales gracias a sus propiedades:
    .row.bg-c6
      .col-12
        .p-5
          .tarjeta.tarjeta--gris(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-md-5.mb-4.mb-md-0
                    p #[b Aleaciones]
                    p.mb-0 Es valorado por su dureza, alta resistencia al calor y a la corrosión. Se emplea en la industria aeronáutica y aeroespacial debido a su ligereza, rigidez y estabilidad dimensional.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img26.png', alt='', style='width: 400px').m-auto
                .row.align-items-center.justify-content-center
                  .col-md-5.mb-4.mb-md-0
                    p #[b Fabricación de componentes electrónicos]
                    p.mb-0 Su capacidad de conducción lo hace ideal para sistemas de multiplexado.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img27.png', alt='', style='width: 400px').m-auto
                .row.align-items-center.justify-content-center
                  .col-md-5.mb-4.mb-md-0
                    p #[b Rayos X]
                    p.mb-0 Por su alta permeabilidad a los rayos X, se utiliza en la fabricación de discos, pantallas y ventanas de radiación para equipos de rayos X.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img28.png', alt='', style='width: 400px').m-auto
                .row.align-items-center.justify-content-center
                  .col-md-5.mb-4.mb-md-0
                    p #[b Uso en plantas nucleares]
                    p.mb-0 Actúa como moderador de neutrones, además de tener aplicaciones en rayos láser, televisores e instrumentos oceanográficos.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img29.png', alt='', style='width: 400px').m-auto
                .row.align-items-center.justify-content-center
                  .col-md-5.mb-4.mb-md-0
                    p #[b Óxido de berilio (BeO)]
                    p.mb-0 Se utiliza en la fabricación de piezas cerámicas especiales para uso industrial.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img30.png', alt='', style='width: 400px').m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-botones
      h2 1.3 Aleaciones ligeras
    .row.justify-content-center.mb-5
      .col-md-8.col-lg.order-2.order-lg-1.bg-c2(data-aos="fade-right")
        .row.align-items-center.h-100
          .col-12
            .p-4.h-100
              p.mb-0 Las aleaciones ligeras son combinaciones de metales cuya densidad se encuentra entre 2 y 5 kg/dm³. Estas aleaciones, como las de aluminio y titanio, destacan por su equilibrio entre ligereza y resistencia, lo que las hace esenciales en la fabricación de componentes en la industria aeronáutica, automotriz y de maquinaria. Su uso contribuye a reducir el peso de las estructuras, lo que mejora la eficiencia y el rendimiento sin sacrificar la durabilidad.
      .col-md-8.col-lg-auto.order-1.order-lg-2.px-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img31.png', alt='', style='width: 430px').m-auto
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 El aluminio
    p(data-aos="fade-right") A continuación, se presenta una descripción de los diferentes usos y aplicaciones del aluminio y sus compuestos en diversos sectores industriales, destacando sus propiedades y beneficios en cada uno de ellos:
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img32.png', alt='', style='width: 480px').m-auto
      .col-lg-7(data-aos="fade-left")
        .p-4.bg-c16
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='', style='width: 240px').m-auto
            .col-md
              p.text-white #[b Pódcast]
              p.text-white Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-primario(
                texto="Aluminio"
                :audio="require('@/assets/componentes/audios/aluminio.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    Separador
    #t_1_4
    .titulo-segundo.color-acento-botones
      h2 1.4 Aleaciones pesadas
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-auto.px-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img33.png', alt='', style='width: 430px').m-auto
      .col-md-8.col-lg.bg-c2(data-aos="fade-left")
        .row.align-items-center.h-100
          .col-12
            .p-4.h-100
              p.mb-0 Las aleaciones pesadas son combinaciones de metales con una densidad igual o superior a 5 kg/dm³. Ejemplos comunes incluyen aleaciones de cobre, plomo, níquel y estaño. Estas aleaciones se utilizan en aplicaciones donde se requiere alta resistencia y durabilidad, como en la fabricación de herramientas, maquinaria pesada y componentes eléctricos. Su densidad y resistencia les permiten soportar altas cargas y condiciones extremas, lo que las hace adecuadas para entornos industriales exigentes.
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 Estaño
    p.mb-4(data-aos="fade-right") El proceso de obtención del estaño comienza con su trituración y lavado para eliminar impurezas, seguido de una tostación para oxidar los sulfuros de hierro y cobre. Luego, se realiza un segundo lavado para eliminar los restos de sulfato de cobre producidos durante la tostación, y se reduce con carbón a 1200 ºC en un horno eléctrico o de reverbero, siguiendo la reacción:
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-down")
        .row.justify-content-center
          .col-md-7.col-lg.bg-c17
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.fs-4.text-center.mb-0 #[b SnO₂ + 2C = Sn + 2CO.]
          .col-md-7.col-lg-auto.ps-lg-0.px-0
            figure
              img(src='@/assets/curso/tema1/img34.png', alt='', style='width: 390px').m-auto
    p.mb-4(data-aos="fade-right") El estaño se refina por electrólisis o mediante una segunda fusión a temperatura moderada para separar las impurezas que no se funden. El estaño se caracteriza por su versatilidad y se utiliza en diversos procesos industriales, destacando su papel en los siguientes ámbitos:
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones.p-4(titulo="Recubrimiento<br>protector")
            p #[b Recubrimiento protector]
            p.mb-0 Se utiliza para cubrir metales como cobre e hierro, siendo fundamental en la fabricación de latas de conserva, aunque su uso en alimentos ácidos es limitado por su susceptibilidad a la corrosión.
          .tarjeta.color-acento-botones.p-4(titulo="Industria del vidrio")
            p #[b Industria del vidrio]
            p.mb-0 Empleado para disminuir la fragilidad del vidrio.
          .tarjeta.color-acento-botones.p-4(titulo="Estañado de hilos<br>conductores")
            p #[b Estañado de hilos conductores]
            p.mb-0 Se emplea para mejorar la conductividad en hilos metálicos.
          .tarjeta.color-acento-botones.p-4(titulo="Fabricación de<br>semiconductores")
            p #[b Fabricación de semiconductores]
            p.mb-0 Aleado con niobio, el estaño se usa en la industria de semiconductores.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img35.png', alt='', style='width: 350px').m-auto
    p.mb-4(data-aos="fade-up") Las aleaciones de estaño son:
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-md-7.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c18
          figure.mb-3
            img(src='@/assets/curso/tema1/img14.svg', alt='', style='width: 170px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-text
                p.mb-0 #[b Bronce]
          p.text-center.mb-0 Aleación de estaño y cobre, conocida por su durabilidad.
      .col-md-7.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c18
          figure.mb-3
            img(src='@/assets/curso/tema1/img15.svg', alt='', style='width: 170px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-text
                p.mb-0 #[b Metal de tipografía]
          p.text-center.mb-0 Compuesto por estaño, plomo y antimonio.
      .col-md-7.col-lg-4
        .p-4.bg-c18
          figure.mb-3
            img(src='@/assets/curso/tema1/img16.svg', alt='', style='width: 170px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-text
                p.mb-0 #[b Aleaciones con titanio]
          p.text-center.mb-0 Utilizadas en la industria aeroespacial por su resistencia.
    p.mb-5(data-aos="fade-right") Además, el estaño también es un ingrediente en ciertos insecticidas, lo que demuestra su amplia gama de aplicaciones industriales.
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 45px')
          .col
            h3.mb-0 Cobre
    p.mb-4(data-aos="fade-right") El proceso de obtención del cobre varía según la composición del mineral. Los minerales con cobre nativo se trituran, lavan y funden para obtener barras. Si la mena es de óxido o carbonato de cobre, se tritura y trata con ácido sulfúrico diluido para producir sulfato de cobre, que se extrae por electrólisis o por desplazamiento utilizando hierro:
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-up")
        .row
          .col-lg-auto.bg-c17
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.text-center.mb-0.fs-4 #[b CuSO₄ + Fe = Cu + FeSO₄]
          .col-lg.bg-c5
            .p-4
              p.mb-0 La reducción de óxidos y carbonatos de cobre se realiza con carbón cuando la mena tiene una alta concentración de cobre. En el caso de los sulfuros, que contienen entre un 1 % y un 12 % de cobre, estos se muelen y concentran mediante flotación. Luego, los concentrados se reducen en un horno, obteniendo cobre metálico crudo conocido como “blíster”, con aproximadamente un 98 % de pureza. Este cobre se purifica por electrólisis, alcanzando una pureza superior al 99,9 %.
    p.mb-0(data-aos="fade-right") Los usos del cobre son:
    .row.bg-c19
      .col-12
        .p-5
          .row.justify-content-center.mb-4
            .col-lg-11
              .p-4.bg-c20
                .row(data-aos="fade-down")
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img37.png', alt='', style='width: 400px').m-auto
                  .col-lg
                    .row.mb-3
                      .col-12
                        .p-3.bg-c15
                          p.mb-0 #[b Fabricación de cables:] Gracias a su alta ductilidad, el cobre se utiliza para fabricar cables de diversos diámetros, desde 0,025 mm en adelante.
                    .row
                      .col-12
                        .p-3.bg-c15
                          p #[b Resistencia a la tensión:] Los cables de cobre tienen una resistencia a la tensión de aproximadamente 4200 kg/cm², lo que los hace ideales para:
                          ul.lista-ul.mb-0
                            li.d-flex
                              i.fas.fa-check-circle
                              |
                              p.mb-0 Líneas eléctricas de alta tensión y de telegrafía.
                            li.d-flex
                              i.fas.fa-check-circle
                              |
                              p.mb-0 Instalaciones eléctricas de interiores, cordones de lámparas y maquinaria eléctrica como generadores y motores.
                            li.d-flex
                              i.fas.fa-check-circle
                              |
                              p.mb-0 Dispositivos de señalización y equipos de comunicación.
          p.mb-4(data-aos="fade-right") Otros usos del cobre son:
          .row.justify-content-center.mb-4(data-aos="fade-left")
            .col-md-7.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema1/img17.svg', alt='', style='width: 170px').m-auto
                p.text-center.mb-0 El cobre ha sido empleado históricamente para acuñar monedas y fabricar utensilios de cocina, cubas y objetos decorativos. Durante mucho tiempo, también se utilizó para proteger el fondo de los buques de madera.
            .col-md-7.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema1/img18.svg', alt='', style='width: 170px').m-auto
                p.text-center.mb-0 El cobre puede depositarse electrolíticamente sobre otros metales, siendo usado especialmente en la fabricación de planchas tipográficas para impresión.
            .col-md-7.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema1/img19.svg', alt='', style='width: 170px').m-auto
                p.text-center.mb-0 Ciertas soluciones de cobre permiten disolver la celulosa, lo que facilita su uso en la fabricación de rayón.
            .col-md-7.col-lg-3
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema1/img20.svg', alt='', style='width: 170px').m-auto
                p.text-center.mb-0 También se utiliza en la producción de pigmentos, insecticidas y fungicidas, aunque estos usos han sido en gran parte sustituidos por productos químicos orgánicos y sintéticos.
          p.mb-0(data-aos="fade-right") El cobre es un material versátil, empleado tanto en aplicaciones modernas como tradicionales, destacándose por sus propiedades de conductividad y resistencia.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

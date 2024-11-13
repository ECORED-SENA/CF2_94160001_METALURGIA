<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.mb-4
            .col-lg-8(data-aos="fade-right")
              p La clasificación de los metales se divide en dos grandes grupos. El primero corresponde a los metales ferrosos, que contienen hierro y suelen ser aceros y fundiciones. El segundo grupo incluye los metales y aleaciones no ferrosas, donde la presencia de hierro es inferior al 5 %.
              .row.justify-content-center
                .col-md-8.col-lg-auto.px-0.ms-lg-3
                  figure
                    img(src='@/assets/curso/intro/img3.png', alt='', style='width: 420px').m-auto
                .col-md-8.col-lg.bg-c2
                  .row.align-items-center.h-100
                    .col-12
                      .p-4.h-100
                        p.mb-0 El #[b uso de aleaciones no ferrosas] ha cobrado importancia en la vida contemporánea, reemplazando al #[b acero] en aplicaciones específicas debido a sus características #[b mecánicas y metalúrgicas], como su bajo peso específico o densidad, resistencia a la oxidación, maquinabilidad, facilidad para formar aleaciones y, en algunos casos, su capacidad para ser extruidas.
            .col-lg-4.mb-4.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style='width: 400px').m-auto
          .row.justify-content-center.mb-4
            .col-lg-10
              .p-4.bg-c3(data-aos="fade-down")
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/intro/img1.svg', alt='', style='width: 60px').m-auto
                  .col
                    p.mb-0 Los metales no ferrosos tienden a formar óxidos en condiciones ambientales y a ser frágiles, por lo cual se desarrollan aleaciones. Un ejemplo es el oro, que se mezcla con pequeñas cantidades de cobre para formar oro de 24 y 18 quilates. De manera similar, la plata se alea con cobre para obtener la plata ley 900, entre otros casos.
          .row.justify-content-center.mb-4
            .col-md-8.col-lg.order-2.order-lg-1.bg-c4(data-aos="fade-right")
              .row.align-items-center.h-100
                .col-12
                  .p-4.h-100
                    p.mb-0 En el ámbito industrial, las aleaciones de aluminio, según su contenido de elementos aleantes, pueden emplearse en la fabricación de diversos productos, desde botellas de agua hasta fuselajes de aviones, así como en el chasis de automóviles y la ornamentación de puertas y ventanas.
            .col-md-8.col-lg-auto.order-1.order-lg-2.px-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img4.png', alt='', style='width: 420px').m-auto
          .row.justify-content-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.svg', alt='', style='width: 80px').m-auto
            .col(data-aos="fade-left")
              p.mb-0 En la sociedad actual, marcada por la interconectividad y el uso de dispositivos inteligentes como los celulares, a menudo se reflexiona sobre la capacidad de almacenamiento o la velocidad del procesador, pero se pasan por alto dos aspectos fundamentales: el material del que están hechos, generalmente metales no ferrosos, y cómo se reciclan o su impacto ambiental.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

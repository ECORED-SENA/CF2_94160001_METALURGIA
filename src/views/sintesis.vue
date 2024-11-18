<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El síntesis presenta la clasificación y características de los metales y aleaciones no ferrosas. Se distinguen los metales puros, como cobre, aluminio y plata, y las aleaciones, que se dividen en ultraligeras (magnesio, berilio), ligeras (aluminio, titanio) y pesadas (estaño, cobre). En la obtención, se destacan procesos como hidrometalurgia, pirometalurgia, biometalurgia y electrometalurgia, con beneficios que incluyen la mejora de propiedades mecánicas y la resistencia a la corrosión. Se aborda el reciclaje y la minería urbana para la reducción del impacto ambiental y la reutilización de materiales electrónicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

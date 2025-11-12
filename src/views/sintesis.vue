<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/sintesis01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          p El componente formativo 
            b Principios de la cadena de suministro sostenible 
            | permitirá comprender los productos y servicios verdes y su importancia en el desarrollo responsable. Conocer los procesos de producción sostenible como base para minimizar impactos ambientales en la fabricación. Estudiar la cadena de suministro verde, sus elementos clave y cómo gestionarla de forma eficiente. También contiene los procesos de la cadena de suministro sostenible y su aplicación práctica en diferentes niveles. Analizar la cadena de valor sostenible como herramienta estratégica para generar beneficios económicos, sociales y ambientales. Identificará los sistemas <em>push</em> y <em>pull</em> y su relación con la sostenibilidad. Finalmente, reflexionará sobre las prioridades competitivas que permiten a las empresas destacarse en el mercado con responsabilidad y compromiso ambiental.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Diseño del plan de la cadena de suministro sostenible, ofrece una aproximación integral a los conocimientos fundamentales sobre la integración de la sostenibilidad en los procesos logísticos y la planificación estratégica de la cadena de suministro. Este módulo analiza detalladamente la formulación de objetivos sostenibles con enfoque ambiental, social y económico, resaltando su relevancia en la creación de valor responsable y competitivo. Asimismo, se desglosan las estrategias de ecodiseño, logística inversa y digitalización, junto con la definición de indicadores, recursos y cronogramas, permitiendo estructurar planes sostenibles coherentes con los objetivos de desarrollo sostenible y las competencias laborales del sector productivo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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

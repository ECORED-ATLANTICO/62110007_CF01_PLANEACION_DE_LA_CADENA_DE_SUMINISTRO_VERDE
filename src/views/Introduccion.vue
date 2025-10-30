<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/intro/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p El componente formativo “Principios de la cadena de suministro sostenible” ofrece al aprendiz herramientas técnicas y prácticas para abordar la gestión eficiente de los flujos de materiales, información y recursos en entornos productivos sostenibles. A partir del conocimiento de los productos y procesos verdes, se fortalecen las competencias para planear, diseñar e integrar cadenas de suministro basadas en criterios ambientales, sociales y económicos que impulsen la competitividad empresarial.
          .cajon.bg-color-primario-p10.p-4
            p.mb-0 Este componente también enfatiza en la comprensión de modelos de integración sostenible, la aplicación de sistemas push y pull, y la identificación de prioridades competitivas con un enfoque en la optimización de recursos y la innovación. Además, promueve la toma de decisiones responsables y el compromiso con la sostenibilidad en cada eslabón de la cadena. Así, se contribuye a la formación de profesionales capaces de liderar procesos productivos sostenibles y de alto impacto en el sector logístico.

    // Video
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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

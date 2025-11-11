<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Prioridades competitivas


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema7/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 Las prioridades competitivas sostenibles son criterios estratégicos que permiten a las empresas destacarse en el mercado respetando el medio ambiente, la equidad social y la rentabilidad económica.

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_1 7.1 Costo

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-secundario-s20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el enfoque de prioridades competitivas sostenibles, el costo se entiende como la optimización eficiente de recursos y procesos, buscando generar valor económico mientras se minimiza el impacto ambiental. Esto incluye la eficiencia en el consumo de energía, la utilización de materias primas responsables o recicladas, y la planificación de procesos ecoeficientes que reduzcan desperdicios, permitiendo que la empresa mantenga su rentabilidad y competitividad de manera sostenible.
    
    separador

    .bg-full-width.bg01
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_7_2 7.2 Tiempo

      //- Col3 y Col9
      .container.mb-3
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-3.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema7/img03.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            p La prioridad competitiva de tiempo busca optimizar la eficiencia de los procesos de manera sostenible. Al reducir los plazos de producción, entrega o respuesta, se disminuye el consumo de recursos energéticos y materiales, así como las emisiones de gases contaminantes. Medir y gestionar el tiempo en cada etapa de la cadena de suministro permite identificar oportunidades de mejora, agilizar procesos y coordinar mejor a los diferentes actores, garantizando que los productos o servicios lleguen al cliente de manera rápida, confiable y con un menor impacto ambiental.


      separador

    
      //- Col9 y Col3
      .container.mb-3
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
            //- titulo
            .titulo-segundo.color-acento-contenido(data-aos="fade-right").mb-3
              h2#t_7_3 7.3 calidad
            p.mb-0 La calidad sostenible integra el cumplimiento de estándares de desempeño con criterios ambientales y de salud. Esto incluye el uso de materiales no tóxicos, biodegradables, certificados orgánicos o de comercio justo, y la implementación de procesos que minimicen impactos ecológicos. La gestión de calidad sostenible asegura que los productos o servicios no solo sean funcionales, sino también responsables con el medio ambiente y la sociedad.
            
            separador

            //- titulo
            .titulo-segundo.color-acento-contenido(data-aos="fade-right").mb-3
              h2#t_7_4 7.4 Flexibilidad
            p.mb-0 La flexibilidad como prioridad competitiva permite a las empresas adaptarse rápidamente a cambios regulatorios, necesidades del mercado o innovaciones tecnológicas, siempre con un enfoque de sostenibilidad. Esto implica la capacidad de ajustar procesos, materiales o estrategias sin comprometer la eficiencia ni el compromiso ambiental. Ser flexible es esencial para mantenerse competitivo en entornos dinámicos y conscientes del impacto ecológico.
          
          .col-8.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto.order-1.order-lg-2
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema7/img04.png', alt='Imagen Decorativa')


    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_5 7.5 Innovación

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-terciario-t20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La innovación en la cadena de suministro sostenible consiste en generar soluciones creativas para productos, procesos o modelos de negocio que reduzcan el impacto ambiental y promuevan la economía circular. Invertir en tecnologías limpias, energías renovables y diseño ecoeficiente permite diferenciar a la empresa y fortalecer ventajas competitivas difíciles de replicar, favoreciendo tanto al negocio como al entorno.
    
    .row
      .col-12.col-lg-10.mx-auto
        .crd.crd--avatarHorizontal.tarjeta
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema5/img09.png", alt="alt")
            .col
              h4.mb-0.py-4 En conjunto, las prioridades competitivas sostenibles permiten a las empresas integrar eficiencia, calidad, adaptabilidad e innovación, creando valor económico y ambiental de manera simultánea. Al gestionar de forma equilibrada el costo, tiempo, calidad, flexibilidad e innovación, las organizaciones pueden posicionarse de manera diferenciada en el mercado, responder a las expectativas de clientes conscientes y contribuir al desarrollo sostenible, garantizando que su desempeño sea rentable, responsable y resiliente frente a los desafíos futuros. 





</template>

<script>
export default {
  name: 'Tema7',
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

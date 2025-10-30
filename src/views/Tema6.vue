<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Sistemas de <em>push and pull</em>

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-secundario-s20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas push y pull sostenibles integran prácticas responsables en la planificación, producción y distribución, considerando criterios ambientales, sociales y económicos. Su enfoque está alineado con la economía circular y la reducción de la huella ambiental.

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_1 6.1 Concepto

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        .tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema6/img02.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 En la gestión moderna de la cadena de suministro verde, los sistemas push y pull se adaptan para integrar criterios de sostenibilidad. Ambos enfoques buscan equilibrar la eficiencia operativa con el uso responsable de recursos, promoviendo la reducción de desperdicios, la optimización energética y la producción responsable según las necesidades del mercado.

    .row(data-aos="fade-left").justify-content-center.tarjeta-doble
      .col-12.col-lg-5
         .tarjeta.p-4.h-100.bg-color-terciario-t20.mb-4.mb-lg-0
              .row.justify-content-center.mb-3
                .col-6.col-lg-5
                  img(src='@/assets/curso/temas/tema6/img03.png' alt='Imagen Decorativa').w-auto.mx-auto.mb-2
              .text-center
                h3.py-1 Sistema <em>push</em> sostenible
                p Produce anticipadamente bajo proyecciones de demanda, pero emplea materiales reciclables, tecnologías limpias y prácticas ecoeficientes. Minimiza los residuos mediante una planificación responsable de la producción.
        
      .col-12.col-lg-5
         .tarjeta.p-4.h-100.bg-color-primario-p20
              .row.justify-content-center.mb-3
                .col-6.col-lg-5
                  img(src='@/assets/curso/temas/tema6/img04.png' alt='Imagen Decorativa').w-auto.mx-auto.mb-2
              .text-center
                h3.py-1 Sistema <em>pull</em> sostenible
                p Reacciona a la demanda real, evitando la sobreproducción. Favorece la fabricación bajo pedido utilizando insumos sostenibles, reduciendo inventarios innecesarios y el consumo de recursos.
        

    
    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_2 6.2 Diferencias

    //- Col1 y Col11
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-8.col-md-8.col-lg-1.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/img05.svg', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-11.mb-4.mb-lg-0
          p.mb-0 Los sistemas <em>push</em> y <em>pull</em> en logística se diferencian en cómo se planifica y responde a la demanda. En un enfoque sostenible, estas diferencias también consideran el impacto ambiental y la eficiencia en el uso de recursos.

    //- Tabla
    .row
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4
          h5 Tabla 1. 
          span Tipos de funciones de los almacenes
        .tabla-a.color-secundario
          table
            caption 
              b Fuente: 
              | adaptada de UNEP, 2020 y SENA, 2023.
            thead
              tr
                th Aspecto
                th Descripción 
                th Ejemplo
            tbody
              tr
                td Enfoque
                td Producir según estimación, pero con prácticas verdes.
                td Producir solo bajo demanda, reduciendo uso innecesario de recursos.
              tr
                td Consumo energético
                td Controlado mediante eficiencia energética.
                td Bajo, ya que solo se activa cuando hay necesidad.

              tr
                td Gestión de residuos
                td Planeada y controlada desde el diseño.
                td Mínima, al evitar sobreproducción.

              tr
                td Riesgo ambiental
                td Medio, controlado con gestión preventiva.
                td Bajo, gracias a la producción optimizada.
              tr
                td Ciclo de vida del producto
                td Analizado desde el diseño (ecodiseño).
                td Controlado y adaptado según la necesidad.


      separador

      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_2 4.2 Niveles

      p.mb-4 Ambos modelos pueden usarse en empresas verdes según su contexto operativo y mercado objetivo.

      .row.justify-content-center.mb-5
          .col-xl-4.col-lg-4.col-12.mb-4.mb-xl-0.col-md-8
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema6/img06.png", alt="Imagen decorativa")
              .crd_hover_txt--body
                p.text-bold.mb-3.text-center <em>Push</em> sostenible
                p Push  sostenible	Recomendado para agricultura ecológica a gran escala, ya que permite anticipar la demanda aplicando prácticas responsables y materiales ecoeficientes, minimizando pérdidas y optimizando recursos.

          .col-xl-4.col-lg-4.col-12.mb-4.mb-xl-0.col-md-8
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema6/img07.png", alt="Imagen decorativa")
              .crd_hover_txt--body
                p.text-bold.mb-3.text-center <em>Pull</em> sostenible
                p Adecuado para moda lenta (slow fashion) y producción artesanal comunitaria, porque la fabricación se ajusta a la demanda real o por encargo, evitando sobreproducción, reduciendo residuos y fomentando comercio justo y consumo responsable.

          .col-xl-4.col-lg-4.col-12.mb-4.mb-xl-0.col-md-8
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema6/img08.png", alt="Imagen decorativa")
              .crd_hover_txt--body
                p.text-bold.mb-3.text-center <em>Push + Pull</em> sostenible
                p <em>Push + Pull</em> sostenible	Indicado para empresas de cosmética natural, combinando inventario básico ecoamigable con pedidos personalizados, lo que permite equilibrar disponibilidad de productos con reducción de desperdicios y uso eficiente de insumos naturales.

</template>

<script>
export default {
  name: 'Tema6',
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

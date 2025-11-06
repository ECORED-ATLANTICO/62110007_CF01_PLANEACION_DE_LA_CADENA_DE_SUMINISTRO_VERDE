<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Productos y servicios verdes
 
    //- Col3 y Col9
    .container.mb-3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9
          p Los productos y servicios verdes protegen el medio ambiente, fomentan la economía circular y promueven un consumo más responsable. Contribuyen a mitigar el cambio climático y a conservar los recursos naturales. Además, fortalecen la imagen empresarial y responden a las demandas de consumidores cada vez más conscientes.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Concepto

    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center.bg-color-secundario-s10.p-4(data-aos="fade-left").icono-inferior
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          p Los productos y servicios verdes son aquellos diseñados, producidos, comercializados y utilizados con el fin de minimizar su impacto ambiental a lo largo de todo su ciclo de vida. Estos productos no solo buscan reducir la contaminación y el consumo de recursos no renovables, sino que también promueven la eficiencia energética, el uso de materiales reciclados o biodegradables, y la reducción de emisiones contaminantes. 
            .bloque-texto-b.color-terciario.w-92
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA, 2022), un producto verde es aquel que “usa menos recursos naturales, produce menos residuos y tiene una menor huella ambiental durante su vida útil”.
                i.fas.fa-quote-right
    
    // Cajon
    .cajon.bg-color-terciario-t5.p-4
      p.mb-0 Asimismo, los servicios verdes implican la prestación de actividades económicas que priorizan prácticas sostenibles, como el turismo ecológico, la consultoría ambiental o la generación de energía renovable, contribuyendo al desarrollo sostenible de la sociedad y el entorno (Porter & Kramer, 2011).

    separador

    .bg-full-width.bg01
      .row
        .col-12.col-lg-10.mx-auto

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_2 1.2 Tipos

          //- Col1 y Col9
          .container.mb-5
            .row.align-items-center(data-aos="fade-left").justify-content-center
              .col-8.col-lg-1.mb-4.mb-lg-0
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img18.svg', alt='imagen decorativa')
              .col-12.col-md-12.col-lg-11.mb-4.mb-lg-0
                p.mb-0 Los productos y servicios verdes se pueden clasificar en diferentes tipos, según su función o propósito ambiental. Esta clasificación ayuda a entender cómo cada uno aporta al cuidado del medio ambiente, ya sea reduciendo el impacto, optimizando recursos o promoviendo el uso responsable de materiales.

          //- Acordion A
          TabsA.color-acento-botones.mb-5
          
            .tarjeta.bg-color-terciario-t5.p-4(titulo="Ecológicos")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Ecológicos  
                  p Aquellos que cumplen criterios de reducción de impacto ambiental en todo su ciclo de vida, desde la extracción de materias primas hasta su disposición final. 
                  p 
                    b Ejemplos: 
                    | cosméticos naturales certificados, ropa de algodón orgánico, detergentes ecológicos y pinturas libres de plomo.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen decorativa')
            
            .tarjeta.bg-color-terciario-t5.p-4(titulo="Biodegradables")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Biodegradables  
                  p Productos que se descomponen naturalmete sin afectar los ecosistemas, reduciendo la contaminación y la acumulación de residuos. 
                  p 
                    b Ejemplos: 
                    | cubiertos de almidón de maíz, bolsas de papel, empaques hechos de cáscara de plátano y platos de hoja de palma.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img04.svg', alt='Imagen decorativa')
            
            .tarjeta.bg-color-terciario-t5.p-4(titulo="Reciclables")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Reciclables  
                  p Elaborados con materiales que pueden ser reutilizados o transformados en nuevos productos, promoviendo la economía circular. 
                  p 
                    b Ejemplos: 
                    | botellas PET, latas de aluminio, papel periódico, empaques de cartón corrugado, entre otros.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img05.svg', alt='Imagen decorativa')
            
            .tarjeta.bg-color-terciario-t5.p-4(titulo="Reutilizables")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Reutilizables  
                  p Diseñados para ser usados múltiples veces, minimizando la generación de residuos y el consumo de materias primas. 
                  p 
                    b Ejemplos: 
                    | botellas de acero inoxidable, bolsas ecológicas de tela, pañales de tela y vajillas durables.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen decorativa')
            
            .tarjeta.bg-color-terciario-t5.p-4(titulo="Energía eficiente")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Energía eficiente  
                  p Equipos o productos que reducen el consumo energético respecto a sus equivalentes convencionales, favoreciendo el ahorro y la sostenibilidad. 
                  p 
                    b Ejemplos: 
                    | neveras con tecnología inverter, bombillos LED, televisores clase A y calentadores solares.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2 
                  figure
                    img(src='@/assets/curso/temas/tema1/img07.svg', alt='Imagen decorativa')

            .tarjeta.bg-color-terciario-t5.p-4(titulo="Servicios sostenibles")
              .row.align-items-center.h-100
                .col-12.col-xl-8.order-2.order-lg-1
                  h4.mb-4 Servicios sostenibles
                  p Actividades que priorizan el uso racional de los recursos naturales y la reducción de la huella ambiental, impulsando el bienestar social. 
                  p 
                    b Ejemplos: 
                    |  transporte eléctrico, agricultura ecológica, educación ambiental y auditorías de eficiencia energética.
                .col-6.col-xl-4.mb-4.mx-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img08.svg', alt='Imagen decorativa')


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_3 1.3 Características


    //- Col3 y Col9
    .container
      p Los productos y servicios verdes comparten una serie de características que los distinguen en el mercado. Estas son:
        
      .row.align-items-center(data-aos="fade-left")
          
        .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          //- Acordion
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Reducción del impacto ambiental").justify-content-center.align-items-center
                p.mb-0  Consideran todo el ciclo de vida del producto, desde la extracción de materias primas hasta su disposición final, minimizando emisiones, residuos y uso de recursos no renovables.
            .row(titulo="Bajo consumo energético").justify-content-center.align-items-center
                p.mb-0  Optimizan el uso de energía en los procesos de producción, transporte y utilización, promoviendo la eficiencia energética y la reducción de la huella de carbono.
            .row(titulo="Sustentabilidad").justify-content-center.align-items-center
                p.mb-0  Se desarrollan bajo criterios de responsabilidad ambiental, social y económica, garantizando el equilibrio entre producción, bienestar y conservación del entorno.
            .row(titulo="Innovación").justify-content-center.align-items-center
                p.mb-0  Incorporan tecnologías limpias, materiales alternativos o prácticas mejoradas de producción que aumentan la eficiencia y reducen el impacto ambiental.
            .row(titulo="Certificaciones ecológicas").justify-content-center.align-items-center
                p.mb-0  Cuentan con sellos o avales reconocidos que garantizan su cumplimiento con normas y estándares sostenibles.
            .row(titulo="Seguridad para la salud").justify-content-center.align-items-center
                p.mb-0  Son productos libres de sustancias tóxicas, alérgenas o nocivas, priorizando la protección de la salud humana y la calidad ambiental.
      
    separador


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_4 1.4 Especificaciones técnicas

    //- Col Imagen y Texto
    .bloque-texto-g.bg-color-terciario-t20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las especificaciones técnicas de los productos y servicios verdes se enfocan en asegurar el cumplimiento de estándares ambientales, normativas vigentes y criterios de sostenibilidad. Estas especificaciones incluyen:

    .bg-full-width.bg01
        //- Col8 (Slider) y Col4
        .container(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-8.mb-4.mb-lg-0
              .custom-slider
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema1/img12.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Materiales usados
                      p Se prioriza el uso de materias primas renovables, recicladas o de bajo impacto ambiental.
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema1/img13.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Ciclo de vida
                      p Análisis del ciclo de vida (ACV) para evaluar y reducir los impactos negativos en cada etapa.
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema1/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Rendimiento ambiental
                      p Indicadores de eficiencia energética, consumo de agua, generación de residuos y emisiones.
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema1/img15.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Normas técnicas
                      p Cumplimiento de normas de gestión ambiental y reglamentos nacionales sobre etiquetado ambiental.
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema1/img16.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Embalaje sostenible
                      p Uso de empaques reciclables o biodegradable.

            .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa')

                

        //- Col3 y Col9
        .container.mb-5
          .row.align-items-center(data-aos="fade-left")
            .col-12.col-md-12.col-lg-3.order-2.order-lg-1
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
              //- Cajon
              .cajon.bg-color-secundario-s10.p-4
                p.mb-0 
                  b Ejemplo: 
                  | un refrigerador con sello Energy Star puede ahorrar hasta un 15 % de energía respecto a modelos convencionales, lo que no solo reduce la factura eléctrica sino también la huella de carbono.

      
   


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

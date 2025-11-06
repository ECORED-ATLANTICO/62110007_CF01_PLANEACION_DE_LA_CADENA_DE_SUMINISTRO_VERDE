<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cadena de valor sostenible


    //- Col3 y Col9
    .container.mb-3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9
          p La cadena de valor sostenible permite que las organizaciones identifiquen cómo crear y mantener ventajas competitivas alineadas con los principios del desarrollo sostenible. Este enfoque busca integrar el valor económico, ambiental y social en cada actividad de la empresa, desde el diseño del producto hasta la postventa, incluyendo el impacto en sus grupos de interés.
    
    separador


    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_1 5.1 Concepto

    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center.bg-color-secundario-s10.p-4(data-aos="fade-left").icono-inferior
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img02.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          p La cadena de valor sostenible es un modelo estratégico que analiza todas las actividades que realiza una empresa para agregar valor a sus productos o servicios, incorporando principios de sostenibilidad en cada etapa. A diferencia de la cadena de valor tradicional, esta considera no solo la eficiencia y rentabilidad, sino también los impactos sociales y ambientales.
            .bloque-texto-b.color-terciario.w-92
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Una cadena de valor sostenible busca maximizar el valor generado a largo plazo para todos los actores involucrados, incluyendo la sociedad y el medio ambiente. (Porter & Kramer, 2011). 
                i.fas.fa-quote-right

    //- Cajon
    .cajon.bg-color-terciario-t5.p-4.mb-4
      p.mb-0 Se trata de una herramienta esencial para garantizar la competitividad responsable y la diferenciación en mercados nacionales e internacionales cada vez más exigentes.


    separador

    .bg-full-width.bg01
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_5_2 5.2 Tipos de empresa

      p.mb-5 La adopción de cadenas de valor sostenibles varía según el tipo y tamaño de empresa, sus recursos disponibles y su sector económico. A continuación, se describen los principales tipos:
      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img03.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
            //- Linea de tiempo
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Microempresa")
                p.mb-0 Bajo nivel de formalización y recursos limitados, operan en mercados locales. Implementan prácticas sostenibles básicas como reutilización de materiales, compras locales y empaques reciclables que reducen su impacto ambiental.

              .row(numero="2" titulo="Pequeña empresa")
                p.mb-0 Posee una estructura simple y opera en entornos regionales con recursos técnicos moderados. Empieza a incorporar eficiencia energética, separación de residuos y alianzas con proveedores sostenibles para fortalecer su gestión ambiental.

              .row(numero="3" titulo="Mediana empresa")
                p.mb-0 Cuenta con procesos más formales y capacidad de innovación. Integra certificaciones ambientales, sistemas de logística inversa, energías renovables y programas de responsabilidad social para optimizar su cadena de valor sostenible.

              .row(numero="4" titulo="Gran empresa")
                p.mb-0 Dispone de alta capacidad técnica y opera en mercados amplios con sofisticación operativa. Aplica estándares internacionales, auditorías ambientales y tecnologías limpias, alineando sus operaciones con los Objetivos de Desarrollo Sostenible.

              .row(numero="5" titulo="Empresas verdes")
                p.mb-0 Nacen con un propósito ambiental o social como eje central. Su modelo de negocio se basa en economía circular, innovación ecológica, productos ecoetiquetados y medición continua del impacto para garantizar sostenibilidad integral.


    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_3 5.3 Cadena de valor


    //- Col3 y Col9
    .container.mb-3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img04.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          .bloque-texto-b.color-terciario.w-92
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 El análisis de la cadena de valor sostenible permite comprender cómo una empresa genera valor en cada etapa de sus operaciones, integrando criterios ambientales, sociales y económicos. Esta perspectiva propone una transformación tanto en las actividades primarias como en las de apoyo, buscando minimizar impactos negativos y maximizar beneficios integrales para el entorno y los grupos de interés (Porter & Kramer, 2011; López & Muñoz, 2021). 
                i.fas.fa-quote-right

    p.mb-4 A continuación, se presentan las principales actividades de la cadena de valor y su relación con la sostenibilidad:

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-lg-6
         .tarjeta.p-4.h-100.bg-color-terciario-t20.mb-4.mb-lg-0
              .row.justify-content-center.mb-3
                .col-6.col-lg-5
                  img(src='@/assets/curso/temas/tema5/img05.png' alt='Imagen Decorativa').w-auto.mx-auto.mb-2
              .text-center
                h3.py-1 Actividades primarias
                p Incluyen procesos logísticos, productivos y comerciales que generan valor directo al producto, integrando eficiencia energética, transporte verde, empaques sostenibles y estrategias posventa que prolongan la vida útil y reducen impactos ambientales.
        
      .col-12.col-lg-6
         .tarjeta.p-4.h-100.bg-color-primario-p20
              .row.justify-content-center.mb-3
                .col-6.col-lg-5
                  img(src='@/assets/curso/temas/tema5/img06.png' alt='Imagen Decorativa').w-auto.mx-auto.mb-2
              .text-center
                h3.py-1 Actividades de apoyo
                p Comprenden infraestructura sostenible, gestión del talento humano, desarrollo tecnológico y abastecimiento responsable, orientados a fortalecer la sostenibilidad organizacional y apoyar la implementación de prácticas verdes en toda la cadena de valor.
        

      separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_4 5.4 Modelos de cadena de valor

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema5/img07.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 Existen diversos modelos de cadena de valor sostenible que permiten a las organizaciones integrar la sostenibilidad en sus operaciones de manera estratégica y estructurada. Estos modelos ofrecen marcos conceptuales y metodológicos que ayudan a incorporar criterios sociales, ambientales y éticos en cada eslabón de la cadena, promoviendo no solo el cumplimiento normativo, sino también la generación de valor compartido, innovación y competitividad responsable. A continuación, se describen algunos de los modelos más relevantes:
    
    
    .bg-full-width.bg01
      //- Col3 y Col9
      .container.mb-3
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            //- Acordion
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              div(titulo="Modelo de Porter revisado")
                  p Basado en la cadena de valor tradicional de Michael Porter, este modelo integra el enfoque de valor compartido. Busca beneficios económicos junto con impactos positivos en lo social y ambiental, convirtiendo la sostenibilidad en ventaja competitiva mediante reputación, reducción de riesgos y nuevas oportunidades de mercado.
              div(titulo="Modelo de economía circular")
                  p Promueve el cierre de ciclos productivos, reutilizando residuos como insumos para nuevas etapas. Incluye prácticas de reciclaje, reparación, remanufactura y rediseño, transformando la lógica lineal producir - usar - desechar en un sistema eficiente, regenerativo y menos dependiente de recursos naturales.
              div(titulo="Modelo del triple resultado (<em>Triple Bottom Line</em> - TBL)")
                  p Evaluación integral del desempeño empresarial considerando tres dimensiones: económica (ganancias), social (personas) y ambiental (planeta). Permite medir sostenibilidad de manera equilibrada, entendiendo que el éxito empresarial no se define solo por los resultados financieros, sino también por el impacto positivo en la sociedad y el entorno.
              div(titulo="Modelo <em>cradle to cradle</em> (de la cuna a la cuna)")
                  p Enfoque de diseño regenerativo inspirado en la naturaleza, donde no hay residuos, solo nutrientes que se reintegran al sistema. Promueve materiales biodegradables o reciclables, uso de energías renovables, eficiencia en agua y químicos, y procesos industriales responsables con el medioambiente, eliminando el concepto de desperdicio.
            
          .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img08.png', alt='Imagen Decorativa')
    

    .row
      .col-12.col-lg-10.mx-auto
        .crd.crd--avatarHorizontal.tarjeta
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img09.png", alt="alt")
            .col
              h3.mb-0 Estos modelos no son excluyentes entre sí y, en muchos casos, pueden ser combinados de manera estratégica dependiendo del tipo de organización, su tamaño, sector y objetivos sostenibles.















</template>

<script>
export default {
  name: 'Tema5',
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

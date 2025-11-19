<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cadena de suministro verde

    //- Col3 y Col9
    .container.mb-3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9
          p La cadena de suministro verde permite integrar prácticas que reducen el impacto ambiental y mejoran la eficiencia. Este enfoque es clave para alcanzar metas ambientales y sociales sin sacrificar la competitividad. 

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 3.1 Concepto

 
    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center.bg-color-secundario-s5.p-4(data-aos="fade-left").icono-inferior
        .col-12.col-md-8.col-lg-3.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9
          .bloque-texto-b.color-terciario.w-92.mb-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 La cadena de suministro verde es un enfoque integral que incorpora criterios ambientales en todas las fases de la cadena de suministro, desde el diseño del producto hasta la gestión del ciclo de vida del mismo, pasando por la adquisición, producción, almacenamiento, transporte y distribución (Srivastava, 2007). 
              i.fas.fa-quote-right
          p Busca minimizar la huella ecológica, optimizar el uso de recursos naturales y garantizar el cumplimiento de normativas ambientales sin comprometer la rentabilidad de la empresa.

    // Cajon
    .cajon.bg-color-terciario-t5.p-4
      p.mb-0 
        b Ejemplo: 
        | una empresa textil implementa una cadena de suministro verde al utilizar algodón orgánico certificado, reducir el consumo de agua en los procesos de teñido y gestionar eficientemente los residuos textiles.


    separador 

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Gestión
    
    .bg-full-width.bg01
      //- banner con tarjeta
      .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-left")
        .col-lg-12.mb-2
          div.tarjeta-horz.mb-3
            img(src='@/assets/curso/temas/tema3/img28.png', alt='Imagen decorativa')
            div.texto-tarjeta.bg-white
                p.mb-0 La gestión de la cadena de suministro verde se centra en coordinar y optimizar las actividades logísticas incorporando criterios ambientales, sociales y económicos que permitan reducir impactos negativos y fortalecer la eficiencia. Este enfoque integra prácticas responsables en cada etapa del flujo de materiales e información, asegurando el cumplimiento normativo, la trazabilidad y la mejora continua del desempeño sostenible.
    
    
      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-lg-10.mb-4.mb-lg-0.justify-content-center.mx-auto
            .tarjeta.p-4.bg02
              .tarjeta--blanca.p-4
                SlyderA(tipo="b")
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img29.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Planificación sostenible
                        p Define objetivos, metas e indicadores ambientales, sociales y económicos para orientar la toma de decisiones.

                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img30.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Selección de proveedores responsables
                        p Evalúa prácticas ambientales, certificaciones y desempeño social para garantizar abastecimiento sostenible.
      
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img31.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Optimización de procesos productivos
                        p Incorpora tecnologías limpias, eficiencia energética y reducción de residuos en la producción.
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img32.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Gestión de inventarios verdes
                        p Prioriza el uso eficiente de recursos, evita sobreproducción y reduce pérdidas asociadas a productos no utilizados.
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img33.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Transporte y distribución sostenible
                        p Implementa rutas optimizadas, vehículos de bajas emisiones y empaques responsables.
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img34.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Economía circular
                        p Promueve reutilización, reciclaje y recuperación de materiales para cerrar ciclos y disminuir residuos.

    
      separador

    .bg-full-width.bg01
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_3 3.3 Tipos de eslabones

      p.mb-5 Los eslabones en una cadena de suministro verde representan las distintas etapas de la cadena logística donde se pueden aplicar prácticas sostenibles. Cada una de estas etapas tiene su propia lógica, operaciones y oportunidades de mejora ambiental.

      //- Col8 (Slider) y Col4
      .container(data-aos="fade-right")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left").mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen Decorativa')

            .col-12.col-lg-8.mb-4.mb-lg-0
              .custom-slider
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img04.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Abastecimiento verde
                      p Se enfoca en adquirir materias primas de fuentes sostenibles, con certificaciones ambientales y bajo impacto ecológico. 
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img05.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Producción sostenible
                      p Aplica tecnologías limpias, reduce residuos y optimiza procesos industriales. 
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img06.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Almacenamiento verde
                      p Minimiza el consumo energético, controla emisiones y emplea tecnologías limpias en refrigeración y logística interna. 
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img07.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Distribución ecológica
                      p Implementa medios de transporte más limpios, rutas optimizadas y centros logísticos cercanos al consumidor. 
                  .tarjeta.shadow.p-4.bg-white.bg-white
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img08.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                    .text-center
                      H5.bg-color-secundario.py-1 Posconsumo
                      p Gestiona el producto tras su uso mediante reciclaje, reuso, compostaje o devolución. 

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_4 3.4 Actores

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 Para que una cadena de suministro verde funcione de manera efectiva, es fundamental el compromiso de todos los actores involucrados. Cada uno desempeña un rol específico en la incorporación de prácticas sostenibles, desde la producción hasta el consumo. Esta articulación permite reducir los impactos negativos en el ambiente, mejorar la eficiencia de los procesos y generar valor compartido. La colaboración y la responsabilidad de cada actor hacen posible la transición hacia modelos logísticos más sostenibles y resilientes.


    .row.mb-5
      .col-12.col-lg-10.mx-auto

        //- Acordion
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Proveedores")
              p Suministran insumos ecológicos y certificados, priorizando materiales locales y sostenibles para reducir transporte y emisiones.
          div(titulo="Fabricantes")
              p Aplican procesos limpios y eficientes, usando tecnologías de bajo consumo y controlando residuos industriales.
          div(titulo="Transportistas")
              p Reducen la huella de carbono mediante rutas optimizadas, vehículos eléctricos o uso de biocombustibles.
          div(titulo="Distribuidores y minoristas")
              p Promueven la venta responsable con productos a granel, sin empaques plásticos y espacios ecoeficientes.
          div(titulo="Consumidores")
              p Optan por productos reciclables o reutilizables y participan en programas de reciclaje o devolución.
          div(titulo="Gobierno y entes reguladores")
              p Regulan e incentivan prácticas sostenibles mediante leyes, certificaciones y auditorías ambientales.
          div(titulo="ONG y certificadoras")
              p Evalúan, capacitan y certifican a las empresas en gestión ambiental y responsabilidad ecológica.
          
    separador

    .bg-full-width.bg01
      //-titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_5 3.5 Categorías

      //- Col9 (Slider) y Col3
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen Decorativa')
        .col-12.col-xl-8.mb-4.mb-lg-0
          p Las categorías de la cadena de suministro verde reflejan el grado de compromiso ambiental de una empresa. A mayor integración, más sostenibles y estratégicas son sus acciones.
          TabsA.color-terciario
            .tarjeta.p-3.px-4(titulo="Reactiva").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen Decorativa')
              p actúa por obligación legal, cumpliendo normativas ambientales solo cuando es exigido por las autoridades.
            .tarjeta.p-3.px-4(titulo="Proactiva").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen Decorativa')
              p Adopta la sostenibilidad como estrategia voluntaria para mejorar su imagen y competitividad en el mercado.
            .tarjeta.p-3.px-4(titulo="Colaborativa").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen Decorativa')
              p Promueve alianzas con proveedores y socios para gestionar conjuntamente los recursos y reducir impactos ambientales.
            .tarjeta.p-3.px-4(titulo="Circular").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen Decorativa')
              p Cierra el ciclo productivo mediante el reuso, reciclaje y rediseño de materiales dentro de la economía circular.

    separador

    .bg-full-width.bg01
      //-titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_6 3.6 Criterios

      p.mb-5 Estos criterios orientan las decisiones dentro de la cadena de suministro verde, asegurando que cada proceso contribuya positivamente al ambiente.


      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-3.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            .tarjeta.p-4.bg02
              .tarjeta--blanca.p-4
                SlyderA(tipo="b")
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Reducción de emisiones
                        p Busca minimizar los gases de efecto invernadero mediante prácticas como el uso de transporte eléctrico o de bajas emisiones, apoyándose en herramientas como el GHG Protocol para medir la huella de carbono.

                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Eficiencia energética
                        p Prioriza la optimización del consumo eléctrico en procesos productivos, aplicando sensores, temporizadores y auditorías energéticas que permiten identificar áreas de mejora.
                  
                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Gestión de residuos
                        p Promueve la separación, reciclaje y compostaje de los residuos generados, en cumplimiento con los lineamientos de la norma ISO 14001 sobre gestión ambiental.

                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Transporte limpio
                        p Impulsa el uso de medios y rutas sostenibles, como el transporte multimodal o eléctrico, apoyándose en herramientas de ruteo dinámico y <em>software</em> GIS para reducir el impacto ambiental.


                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Innovación en materiales
                        p Fomenta la sustitución de materias primas por opciones renovables, biodegradables o recicladas, mediante el uso del Análisis del Ciclo de Vida (ACV) para evaluar su impacto.

                  .tarjeta
                    .row.align-items-center
                      .col-12.col-md-8.col-lg-4.mx-auto
                        figure
                          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen Decorativa')
                      .col-12.col-lg-8
                        h5.mb-4 Cumplimiento normativo
                        p Garantiza que todos los procesos se ajusten a la legislación ambiental vigente, apoyándose en instrumentos como la Declaración Ambiental del Producto (DAP) para demostrar transparencia y conformidad.

    separador 

    .bg-full-width.bg01
      //-titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_7 3.7 Costos

      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img22.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            p Aunque inicialmente pueden parecer elevados, los costos vinculados a una cadena de suministro verde son inversiones estratégicas. Estos gastos se equilibran con beneficios como el ahorro a largo plazo, el fortalecimiento de la imagen corporativa y el cumplimiento normativo. Comprender los tipos de costos permite tomar decisiones más informadas y sostenibles.


      .custom-slider
        SlyderF(columnas="col-lg-4 col-xl-4")
          .tarjeta.shadow.p-4.bg-white
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src='@/assets/curso/temas/tema3/img23.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
            .text-center
              H5.bg-color-secundario.py-1 Inversión inicial
              p Inversión en tecnologías o rediseño de procesos sostenibles; puede optimizarse con incentivos gubernamentales.
          .tarjeta.shadow.p-4.bg-white
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src='@/assets/curso/temas/tema3/img24.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
            .text-center
              H5.bg-color-secundario.py-1 Costos operativos
              p Gastos diarios en energía, transporte y materiales; se reducen con automatización y energías limpias.
          .tarjeta.shadow.p-4.bg-white
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src='@/assets/curso/temas/tema3/img25.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
            .text-center
              H5.bg-color-secundario.py-1 Costos de cumplimiento
              p Gastos por auditorías y licencias ambientales; anticiparse a las normas evita sanciones.

          .tarjeta.shadow.p-4.bg-white
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src='@/assets/curso/temas/tema3/img26.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
            .text-center
              H5.bg-color-secundario.py-1 Costos ocultos
              p Pérdidas por daños ambientales o reputacionales; se previenen con gestión de riesgos y sostenibilidad.
          .tarjeta.shadow.p-4.bg-white
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src='@/assets/curso/temas/tema3/img27.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
            .text-center
              H5.bg-color-secundario.py-1 Costos de oportunidad
              p Beneficios perdidos por no aplicar prácticas verdes; invertir en sostenibilidad genera ventajas competitivas.
                  

</template>

<script>
export default {
  name: 'Tema3',
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

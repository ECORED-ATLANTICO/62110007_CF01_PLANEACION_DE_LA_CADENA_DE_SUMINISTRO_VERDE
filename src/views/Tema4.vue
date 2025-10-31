<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesos de la cadena de suministro

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 La cadena de suministro sostenible busca alinear las operaciones logísticas con principios éticos, ambientales y sociales, reduciendo impactos negativos y promoviendo relaciones responsables, condiciones laborales justas y uso eficiente de los recursos.
    
    .bg-full-width.bg01
      separador

      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_1 4.1 Concepto

      //- Col1 y Col11
      .container.mb-3
        .row.align-items-center(data-aos="fade-left")
          .col-8.col-lg-1.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-11.mb-4.mb-lg-0
            p Los procesos sostenibles en la cadena de suministro son actividades estructuradas que integran prácticas responsables en cada eslabón logístico. Buscan minimizar el impacto ambiental, promover la equidad social y asegurar la viabilidad económica de la empresa. Estos procesos deben tener objetivos definidos, planificación estratégica, indicadores de evaluación y una orientación hacia la mejora continua.
      //- Cajon
      .cajon.bg-color-terciario-t5.p-4.mb-4
        p.mb-0 
          b Ejemplo: 
          | una empresa textil implementa una cadena de suministro verde al utilizar algodón orgánico certificado, reducir el consumo de agua en los procesos de teñido y gestionar eficientemente los residuos textiles.

      separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_2 4.2 Niveles

    .row.justify-content-center.mb-5
        .col-xl-4.col-lg-4.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img03.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Estratégico
              p Define la visión sostenible a largo plazo y selecciona proveedores responsables. 
              p 
                b Ejemplo: 
                | alianzas con proveedores certificados ISO 14001.


        .col-xl-4.col-lg-4.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img04.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Táctico
              p Planifica recursos y métodos sostenibles en transporte y empaque. 
              p 
                b Ejemplo: 
                | uso de vehículos eléctricos en entregas urbanas.

        
        .col-xl-4.col-lg-64col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img05.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Operativo
              p Ejecuta acciones diarias de sostenibilidad como reciclaje o ahorro de agua. 
              p 
                b Ejemplo: 
                | clasificación de residuos en operaciones.


    separador

    .bg-full-width.bg01
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_3 4.3 Actividades

      p.mb-5 La sostenibilidad en la cadena de suministro se analiza desde distintos niveles de decisión:

      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img06.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
            //- Linea de tiempo
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Abastecimiento responsable")
                p.mb-0 Se eligen proveedores que cumplen con estándares éticos, sociales y ambientales, como aquellos agricultores certificados en buenas prácticas agrícolas que garantizan trazabilidad y sostenibilidad.

              .row(numero="2" titulo="Producción limpia")
                p.mb-0 Se implementan tecnologías y procesos que reducen los residuos, las emisiones y el consumo energético, utilizando maquinaria eficiente que optimiza los recursos durante la fabricación.
              
              .row(numero="3" titulo="Distribución verde")
                p.mb-0 Se optimizan rutas logísticas y se emplean medios de transporte de baja o cero emisiones, como bicicletas eléctricas o vehículos híbridos, para disminuir la huella de carbono.

              .row(numero="4" titulo="Gestión de residuos")
                p.mb-0 Se aplican políticas de reciclaje, compostaje y disposición adecuada, estableciendo alianzas con empresas recicladoras para recuperar materiales y minimizar el impacto ambiental.

              .row(numero="5" titulo="Posventa sostenible")
                p.mb-0 Se promueven acciones que prolongan el ciclo de vida de los productos, incluyendo la recolección de envases reutilizables, servicios de reparación y programas de retorno.

    separador

    .bg-full-width.bg01
     
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_4 4.4 Fases

      //- Col Imagen y Texto
      .bloque-texto-g.bg-color-primario-p20.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Implementar procesos sostenibles requiere una estructura secuencial que permita evaluar, actuar y mejorar constantemente:

      .row.mb-5
        .col-12.col-lg-10.mx-auto
          .tarjeta.p-4.bg02
                .tarjeta--blanca.p-4
                  SlyderA(tipo="b")
                    .tarjeta
                      .row.align-items-center.mx-auto.justify-content-center
                        .col-12.col-lg-2.col-md-6
                          figure
                            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img13.png', alt='Imagen Decorativa')
                        .col-12.col-lg-8
                          h5.mb-4 Diagnóstico 
                          p Se identifica el estado actual de la cadena y los impactos más críticos mediante evaluaciones como auditorías energéticas o ambientales para conocer las áreas de mejora.

                    .tarjeta
                      .row.align-items-center.mx-auto.justify-content-center
                        .col-12.col-lg-2.col-md-6
                          figure
                            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img14.png', alt='Imagen Decorativa')
                        .col-12.col-lg-8
                          h5.mb-4 Diseño del plan
                          p Se establecen estrategias sostenibles con metas claras, recursos definidos e indicadores de seguimiento, por ejemplo, reducir un porcentaje específico de emisiones en un periodo determinado.
                    
                    .tarjeta
                      .row.align-items-center.mx-auto.justify-content-center
                        .col-12.col-lg-2.col-md-6
                          figure
                            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img15.png', alt='Imagen Decorativa')
                        .col-12.col-lg-8
                          h5.mb-4 Monitoreo
                          p Se realiza un control periódico de los avances y del cumplimiento de los objetivos establecidos, como el seguimiento mensual de consumos energéticos o de recursos.

                    .tarjeta
                      .row.align-items-center.mx-auto.justify-content-center
                        .col-12.col-lg-2.col-md-6
                          figure
                            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen Decorativa')
                        .col-12.col-lg-8
                          h5.mb-4 Ejecución
                          p Se ponen en marcha las acciones planeadas, incluyendo la formación del personal y la implementación de tecnologías limpias que impulsen la sostenibilidad operativa.

                    .tarjeta
                      .row.align-items-center.mx-auto.justify-content-center
                        .col-12.col-lg-2.col-md-6
                          figure
                            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen Decorativa')
                        .col-12.col-lg-8
                          h5.mb-4 Mejora continua
                          p Se analizan los resultados obtenidos y se formulan ajustes o nuevas acciones que optimicen los procesos, como rediseñar empaques tras evaluar su impacto ambiental.


    separador

    .bg-full-width.bg01
      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_5 4.5 Clasificación

      //- Col9 (Slider) y Col3
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen Decorativa')
        .col-12.col-xl-8.mb-4.mb-lg-0
          p 
            b vLos procesos sostenibles se pueden organizar según distintos criterios para facilitar su análisis y gestión:
          TabsA.color-terciario
            .tarjeta.p-3.px-4(titulo="Por tipo de sostenibilidad").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema4/img09.png', alt='Imagen Decorativa')
              p Se agrupan según el enfoque principal del impacto: ambiental, que reduce emisiones y consumo; social, que promueve inclusión y condiciones laborales justas; y económica, que impulsa la eficiencia y la rentabilidad responsable.
            .tarjeta.p-3.px-4(titulo="Por función logística").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema4/img10.png', alt='Imagen Decorativa')
              p Se relacionan con las etapas del proceso: abastecimiento, producción, almacenamiento, transporte, distribución y servicio posventa, asegurando sostenibilidad en toda la cadena.
            .tarjeta.p-3.px-4(titulo="Por origen de la iniciativa").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen Decorativa')
              p Se clasifican según su impulso: internas, cuando surgen de la empresa, o externas, cuando provienen de regulaciones, clientes o demandas del mercado global.
            .tarjeta.p-3.px-4(titulo="Por tipo de tecnología").bg-color-terciario-t5
              img.mb-4(src='@/assets/curso/temas/tema4/img12.png', alt='Imagen Decorativa')
              p Se diferencian por el nivel de avance tecnológico: tradicional, digital, automatizada e inteligente, integrando herramientas como sensores IoT para monitorear condiciones en tiempo real.
      
      separador

      //- titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_6 4.6 Caracterización

      //- Col3 y Col9
      .container.mb-4
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-3.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img18.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            p Caracterizar los procesos sostenibles permite examinar de forma detallada cómo se integran las prácticas responsables en cada etapa de la cadena de suministro. Este análisis facilita la toma de decisiones alineadas con los objetivos ambientales, sociales y económicos de la organización. A continuación, se presentan las principales etapas y ejemplos de acciones sostenibles aplicables en cada una:

      .container.mb-5
        .row(data-aos="fade-left")
          .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
              .tarjeta.shadow.p-4.bg-white.h-100
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema4/img19.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                .text-center
                  H5.bg-color-secundario.py-1 Por tipo de sostenibilidad
                  p Enfoca la gestión en tres dimensiones: ambiental (reducción de impactos), social (condiciones justas) y económica (eficiencia responsable).
          .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
              .tarjeta.shadow.p-4.bg-white.h-100
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema4/img20.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                .text-center
                  H5.bg-color-secundario.py-1 Por función logistica
                  p Se relacionan con las etapas del proceso: abastecimiento, producción, almacenamiento, transporte, distribución y servicio posventa, asegurando sostenibilidad en toda la cadena.
          .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
              .tarjeta.shadow.p-4.bg-white.h-100
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema4/img21.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                .text-center
                  H5.bg-color-secundario.py-1 Por origen de la iniciativa
                  p Se clasifican según su impulso: internas, cuando surgen de la empresa, o externas, cuando provienen de regulaciones, clientes o demandas del mercado global.
          .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
              .tarjeta.shadow.p-4.bg-white.h-100
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema4/img22.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                .text-center
                  H5.bg-color-secundario.py-1 Por tipo de tecnología
                  p Se diferencian por el nivel de avance tecnológico: tradicional, digital, automatizada e inteligente, integrando herramientas como sensores IoT para monitorear condiciones en tiempo real.
          
        
        
</template>

<script>
export default {
  name: 'Tema4',
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

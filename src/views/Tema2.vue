<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos de producción sostenible

    //- Col Imagen y Texto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Adoptar procesos de producción sostenible implica transformar la manera en que se producen bienes y servicios, priorizando la eficiencia, la innovación y el respeto por el entorno. Este enfoque promueve la utilización responsable de los recursos naturales, la reducción de emisiones y residuos, y la mejora continua en las operaciones industriales. Al integrar prácticas sostenibles en cada fase productiva, las organizaciones fortalecen su competitividad, garantizan el cumplimiento normativo y contribuyen activamente al desarrollo económico y ambiental de manera equilibrada.

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Concepto

    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9
          p Los procesos de producción sostenible son aquellos que se planifican y ejecutan considerando el equilibrio entre crecimiento económico, cuidado ambiental y responsabilidad social.`
            .bloque-texto-b.color-terciario
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según la Organización de las Naciones Unidas para el Desarrollo Industrial (ONUDI, 2020), estos procesos implican el uso eficiente de los recursos, la reducción de residuos y emisiones contaminantes, y la mejora continua del desempeño ambiental sin comprometer la rentabilidad empresarial.
                i.fas.fa-quote-right
    
    //- Figura
    .mb-5(data-aos="zoom-in-down")
        .titulo-sexto.mb-4
          h5 Figura 1. 
            span Beneficios del diseño ecológico
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img03.svg', alt='---').mx-auto.d-none.d-md-block
          img(src='@/assets/curso/temas/tema2/img03m.svg', alt='---').mx-auto.d-block.d-md-none.px-5

        figcaption 
          b Fuente: 
          | SENA, 2025.



    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_2 2.2 Tipos

    p.mb-5 Los procesos de producción sostenible abarcan diversas modalidades según el objetivo ambiental que persiguen y las prácticas que implementan. Esta clasificación permite entender mejor cómo cada tipo contribuye al uso responsable de recursos y a la reducción del impacto ecológico.


    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          .tarjeta.p-4.bg02
            .tarjeta--blanca.p-4
              SlyderA(tipo="b")
                .tarjeta
                  .row.align-items-center
                    .col-12.col-md-8.col-lg-3.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img05.svg', alt='Imagen Decorativa')
                    .col-12.col-lg-9
                      h5.mb-4 Producción más limpia
                      p Minimiza residuos y uso de energía desde el diseño del proceso. 
                      p 
                        b Ejemplo: 
                        | una fábrica de calzado que optimiza el corte de materiales para evitar desperdicios.

                .tarjeta
                  .row.align-items-center
                    .col-12.col-md-8.col-lg-3.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen Decorativa')
                    .col-12.col-lg-9
                      h5.mb-4 Producción circular
                      p Reutiliza subproductos y residuos en otros procesos o productos. 
                      p 
                        b Ejemplo: 
                        | una empresa textil que usa retazos de tela para fabricar accesorios.
          
                .tarjeta
                  .row.align-items-center
                    .col-12.col-md-8.col-lg-3.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img07.svg', alt='Imagen Decorativa')
                    .col-12.col-lg-9
                      h5.mb-4 Producción basada en energías renovables
                      p Utiliza fuentes de energía como solar, eólica o biomasa en sus operaciones. 
                      p 
                        b Ejemplo: 
                        | una planta que opera con paneles solares para alimentar su maquinaria.

                .tarjeta
                  .row.align-items-center
                    .col-12.col-md-8.col-lg-3.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen Decorativa')
                    .col-12.col-lg-9
                      h5.mb-4 Producción ecoficiente
                      p Busca la máxima productividad con el mínimo impacto ambiental. 
                      p 
                        b Ejemplo: 
                        | una embotelladora que reduce el consumo de agua por litro producido.

                .tarjeta
                  .row.align-items-center
                    .col-12.col-md-8.col-lg-3.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img09.svg', alt='Imagen Decorativa')
                    .col-12.col-lg-9
                      h5.mb-4 Producción colaborativa
                      p Involucra a los grupos de interés en la mejora ambiental y social del proceso productivo. 
                      p 
                        b Ejemplo: 
                        | una empresa agrícola que trabaja con comunidades locales en prácticas agroecológicas.

    separador

    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_3 2.3 Fases

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema2/img10.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
              p.mb-0 La producción sostenible no solo depende de tecnologías limpias, sino también de una planificación estratégica en cada etapa del proceso. Cada fase busca reducir impactos ambientales sin sacrificar la eficiencia ni la calidad. A continuación, se describen las fases clave que conforman este enfoque integral:


    //- Col3 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          //- Linea de tiempo
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Diseño sostenible")
              p.mb-0 Planifica el producto y el proceso con un enfoque ambiental desde su origen. 
              p 
                b Ejemplo: 
                | un electrodoméstico diseñado para ser fácil de desmontar y reciclar.

            .row(numero="2" titulo="Selección de materiales")
              p.mb-0 Prioriza materias primas recicladas, renovables o de origen local para minimizar impactos ambientales. 
                b Ejemplo: 
                | uso de cartón reciclado en empaques.
            .row(numero="3" titulo="Producción limpia")
              p.mb-0 Reduce el consumo de agua, energía y el uso de sustancias tóxicas en los procesos industriales. 
              p 
                b Ejemplo: 
                | uso de tintas vegetales en impresión.
            .row(numero="4" titulo="Gestión de residuos")
              p.mb-0 Promueve prácticas de reciclaje, compostaje o disposición final responsable. . 
              p 
                b Ejemplo: 
                | clasificación y compostaje de residuos orgánicos en restaurantes.
            .row(numero="5" titulo="Distribución eficiente")
              p.mb-0 Optimiza rutas logísticas y empaques para disminuir emisiones y costos de transporte. 
              p 
                b Ejemplo: 
                | agrupar pedidos y utilizar empaques más ligeros.
            .row(numero="6" titulo="Mejora continua")
              p.mb-0 Evalúa el desempeño ambiental de los procesos y aplica acciones correctivas para su optimización. 
                b Ejemplo: 
                | auditorías anuales de sostenibilidad y ajustes en procesos.

    //- Col10
    .row
      .col-12.col-lg-10.mx-auto
        ImagenInfografica.d-none.d-lg-block.img-infografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')
              figcaption 
                b Fuente. 
                | Adaptado de Jobber & Lancaster, 2019.

          .tarjeta.color-acento-botones.p-2.px-3(x="27.9%" y="27%" numero="01")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 01
              .col-10
                p.mb-0 
                 b Diseño sostenible: 
                 | reduce impacto desde el inicio.
          .tarjeta.color-acento-botones.p-2.px-3(x="21.65%" y="50.2%" numero="02")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 02
              .col-10
                p.mb-0 
                 b Selección de materiales: 
                 | reduce impacto desde el inicio.
          .tarjeta.color-acento-botones.p-2.px-3(x="39%" y="77.2%" numero="03")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 03
              .col-10
                p.mb-0 
                 b Producción limpia: 
                 | menos agua, energía y químicos.

          .tarjeta.color-acento-botones.p-2.px-3(x="77.7%" y="82.2%" numero="04")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 04
              .col-10
                p.mb-0 
                 b Gestión de residuos: 
                 | promueve reciclaje responsable.
          .tarjeta.color-acento-botones.p-2.px-3(x="83.2%" y="50%" numero="05")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 05
              .col-10
                p.mb-0 
                 b Distribución eficiente: 
                 | rutas y empaques eficientes.
          .tarjeta.color-acento-botones.p-2.px-3(x="47.3%" y="57.8%" numero="06")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 06
              .col-10
                p.mb-0 
                 b Mejora continua: 
                 | revisión y ajuste constante.
          
        //- Version movil de la figura
        figure.d-block.d-lg-none
          img(src='@/assets/curso/temas/tema2/img12m.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')

      
    separador


    //- titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right") 
      h2#t_2_4 2.4 Herramientas de diseño
    
    p.mb-5 Para lograr una producción verdaderamente sostenible, es clave apoyarse en herramientas que faciliten la toma de decisiones responsables. Estas permiten evaluar impactos, optimizar recursos y mejorar continuamente. A continuación, se presentan algunas de las más empleadas en el entorno productivo:

    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen Decorativa')

          .col-12.col-lg-8.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.shadow.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1 Análisis del ciclo de vida (ACV)
                    p Evalúa el impacto ambiental de un producto durante todo su ciclo. 
                .tarjeta.shadow.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img15.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1 Ecodiseño
                    p Incorpora criterios ecológicos desde el diseño. 
                .tarjeta.shadow.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img16.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1 Producción más limpia
                    p Previene impactos ambientales. 
                .tarjeta.shadow.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img17.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1 Indicadores ambientales
                    p Mide consumo de recursos, emisiones y residuos. 
                .tarjeta.shadow.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img16.png' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
                  .text-center
                    H5.bg-color-secundario.py-1 Normas ISO 14000
                    p Establece estándares de gestión ambiental. 

    separador


    //-titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_5 2.5 Criterios de aplicación

    //- Col9 (Slider) y Col3
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img19.png', alt='Imagen Decorativa')
      .col-12.col-xl-8.mb-4.mb-lg-0
        p Para que un proceso de producción sea realmente sostenible, es importante tener en cuenta varios aspectos que aseguren su buen funcionamiento. Estos criterios ayudan a que el proceso sea rentable, fácil de aplicar, aceptado por las personas, cumpla con las normas y pueda ser controlado en cada paso. A continuación, se presentan los principales puntos a considerar:
        TabsA.color-terciario
          .tarjeta.p-3.px-4(titulo="Viabilidad económica").bg-color-terciario-t5
            img.mb-4(src='@/assets/curso/temas/tema2/img20.png', alt='Imagen Decorativa')
            p El proceso debe ser rentable y eficiente. 
            p 
              b Ejemplo: 
              | reducción del consumo de energía eléctrica sin afectar la productividad.

          .tarjeta.p-3.px-4(titulo="Compatibilidad tecnológica").bg-color-terciario-t5
            img.mb-4(src='@/assets/curso/temas/tema2/img21.png', alt='Imagen Decorativa')
            p Debe integrarse con los sistemas existentes. 
            p 
              b Ejemplo: 
              |  implementación de sensores en una línea de producción ya automatizada.
          
          .tarjeta.p-3.px-4(titulo="Aceptación social	").bg-color-terciario-t5
            img.mb-4(src='@/assets/curso/temas/tema2/img22.png', alt='Imagen Decorativa')
            p Debe ser comprendido y aceptado por empleados, comunidad y consumidores.  
            p 
              b Ejemplo: 
              | programas de capacitación ambiental para los trabajadores.

          .tarjeta.p-3.px-4(titulo="Cumplimiento normativo").bg-color-terciario-t5
            img.mb-4(src='@/assets/curso/temas/tema2/img23.png', alt='Imagen Decorativa')
            p Debe seguir las leyes ambientales locales e internacionales. 
            p 
              b Ejemplo: 
              | cumplir con las regulaciones sobre vertimiento de aguas residuales.
          
          .tarjeta.p-3.px-4(titulo="Transparencia y trazabilidad").bg-color-terciario-t5
            img.mb-4(src='@/assets/curso/temas/tema2/img24.png', alt='Imagen Decorativa')
            p Se deben documentar todas las etapas del proceso productivo. 
            p 
              b Ejemplo: 
              | registro digital del origen de materias primas y procesos utilizados.

    //- Cajon
    .cajon.bg-color-secundario-s10.p-4
      p.mb-0 
        b Ejemplo global: 
        | una empresa de cosméticos implementa producción circular al recolectar envases usados de sus clientes y reutilizarlos tras un proceso de limpieza y control de calidad.
    
</template>

<script>
export default {
  name: 'Tema2',
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

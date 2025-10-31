export default {
  global: {
    Name: 'Principios de la cadena de suministro sostenible',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la cadena de suministro sostenible. Explora los productos, procesos y modelos de integración verde aplicados a la producción responsable. Permite al aprendiz definir estrategias sostenibles alineadas con la normativa y los principios de valor agregado en las operaciones logísticas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Productos y servicios verdes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Caracteristicas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Especificaciones técnicas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesos de producción sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fases',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de diseño',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Criterios de aplicación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cadena de suministro verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de eslabones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Actores',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Categorías',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Criterios',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Costos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procesos de la cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Niveles',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Actividades',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Fases',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Clasificación',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Caracterización',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cadena de valor sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de empresa',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Cadena de valor',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Modelos de cadena de valor',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Sistemas de <em>push</em> y <em>pull</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diferencias',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Aplicabilidad',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Prioridades competitivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Diferencias',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicabilidad',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Flexibilidad',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Innovación',
            hash: 't_7_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos y servicios verdes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020, septiembre 15). <em>Negocios verdes</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AYRX9Ofq5xk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Productos y servicios verdes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, marzo 10). <em>Productos y negocios sostenibles </em>[Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=P37n6kTYaZ0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Cadena de suministro sostenible',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, junio 5).<em> Introducción planear cadena de suministros</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HyBD-xmqO3o',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento responsable',
      significado:
        'Proceso de adquirir insumos considerando criterios sociales, ambientales y éticos.',
    },
    {
      termino: 'Actividades sostenibles',
      significado:
        'Acciones que reducen impactos negativos y promueven eficiencia ambiental, social y económica.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de procesos desde el origen hasta la entrega del producto al cliente final.',
    },
    {
      termino: 'Cadena de suministro sostenible',
      significado:
        'Gestión de procesos logísticos con prácticas que reducen el impacto ambiental y mejoran la responsabilidad social.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Actividades que agregan valor a un producto desde su diseño hasta el servicio posventa.',
    },
    {
      termino: 'Certificación ambiental',
      significado:
        'Reconocimiento oficial que valida el cumplimiento de estándares sostenibles en productos o procesos.',
    },
    {
      termino: 'Cliente verde',
      significado:
        'Consumidor que prefiere productos y servicios respetuosos con el ambiente y la sociedad.',
    },
    {
      termino: 'Diseño ecológico',
      significado:
        'Desarrollo de productos considerando su impacto ambiental desde el inicio hasta el final de su ciclo de vida.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'Uso óptimo de la energía para reducir consumo, costos y emisiones contaminantes.',
    },
    {
      termino: 'Logística verde',
      significado:
        'Organización del transporte, almacenamiento y distribución con bajo impacto ambiental.',
    },
    {
      termino: 'Modelo de economía circular',
      significado:
        'Estrategia que busca reutilizar recursos, evitando el desperdicio y reduciendo el uso de materias primas nuevas.',
    },
    {
      termino: 'Producción limpia',
      significado:
        'Procesos productivos que minimizan residuos, emisiones y uso de recursos sin afectar la calidad.',
    },
    {
      termino: 'Producto verde',
      significado:
        'Bien diseñado para tener bajo impacto ambiental durante todo su ciclo de vida.',
    },
    {
      termino: 'Prioridades competitivas',
      significado:
        'Factores clave como costo, calidad, tiempo e innovación que mejoran el posicionamiento de una empresa.',
    },
    {
      termino: 'Servicios sostenibles',
      significado:
        'Actividades económicas que respetan el ambiente y contribuyen al desarrollo social.',
    },
    {
      termino: 'Sistema pull',
      significado:
        'Producción y distribución que responde a la demanda real, evitando excesos y residuos.',
    },
    {
      termino: 'Sistema push',
      significado:
        'Producción basada en estimaciones de demanda, organizada anticipadamente.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Equilibrio entre crecimiento económico, cuidado ambiental y bienestar social a largo plazo.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el recorrido de un producto desde su origen hasta su destino final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ávila Gómez, D. C. (2014). <em>Cadena de abastecimiento sostenible: marco teórico y beneficios.</em> Universidad Militar Nueva Granada.',
      link:
        'https://repository.umng.edu.co/bitstream/handle/10654/11661/Diana%20Carolina%20Avila%20Gomez%202014.pdf?sequence=1',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2013). <em>Administración de la cadena de suministro: Estrategia, planeación y operación</em> (5ª ed.). Pearson Educación.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). <em>Anexo 2: Tendencias de mercado de los negocios verdes del Plan Nacional de Negocios Verdes 2022–2030.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/11/Anexo2-Tendencias-de-mercado-de-NV-del-PNNV-2022-2030.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2023). <em>Catálogo de negocios verdes 2023.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2023/12/CATALOGO-NEGOCIOS-VERDES-2023-4.pdf',
    },
    {
      referencia:
        'Rodríguez-Guevara, E. G., García-Bonilla, D. A., & Pineda-Ospina, D. L. (2024).<em> Prácticas de gestión sostenible en las cadenas de suministro. Universidad del Valle.</em>',
      link:
        'https://www.researchgate.net/publication/378836283_Practicas_de_gestion_sostenible_en_las_cadenas_de_suministro',
    },
    {
      referencia:
        'Srivastava, S. K. (2007).<em> Gestión de la cadena de suministro verde: integración del pensamiento ambiental. En La gestión de la cadena de suministro sostenible: análisis de integración.</em> Universidad Complutense de Madrid.',
      link:
        'https://docta.ucm.es/bitstreams/551ec71b-a4cd-4a4b-8a2f-0fff4fb1ece8/download',
    },
    {
      referencia:
        'Torres-Salazar, M., Rivas-Torres, A., & Martínez-Aguilar, E. (2016). <em>Talento verde y cadenas de suministro verdes: ¿existe una relación significativa? Revista Nova Scientia,</em> 8(1), 421–454.',
      link: 'https://www.redalyc.org/pdf/2033/203345704021.pdf',
    },
    {
      referencia:
        'Ulloa, J. C. (2023).<em> Revisión de literatura sobre gestión de cadenas de suministro sostenible. </em>Universidad del Rosario.',
      link:
        'https://revistas.urosario.edu.co/index.php/empresa/article/download/12734/11586/57840',
    },
    {
      referencia:
        'WWF Sustainable Consumption Platform. (2022).<em> Guía de abastecimiento sostenible.</em> WWF SCP.',
      link:
        'https://www.wwf-scp.org/wp-content/uploads/2022/09/Guia-de-abastecimiento-sostenible_B14S_C5_web.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez ',
          cargo: 'Guionista línea de producción.  ',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

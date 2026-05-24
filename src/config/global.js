export default {
  global: {
    Name: 'Comunicación en marcas',
    Description:
      'El componente desarrolla fundamentos estratégicos de publicidad digital, contenidos, planificación de marketing, comunidades virtuales y audiencias en el sistema moda, permitiendo al aprendiz diseñar acciones digitales coherentes, segmentadas y orientadas a resultados en entornos competitivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
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
        titulo: 'Publicidad digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Técnicas', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Tipologías', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Ventajas', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Estrategias', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Medios virtuales', hash: 't_1_6' },
          { numero: '1.7', titulo: 'Tendencias', hash: 't_1_7' },
          { numero: '1.8', titulo: 'Calendario', hash: 't_1_8' },
          { numero: '1.9', titulo: 'Terminología', hash: 't_1_9' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Tipos', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Características', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Etiquetas', hash: 't_2_4' },
          { numero: '2.5', titulo: 'Parrilla', hash: 't_2_5' },
          { numero: '2.6', titulo: 'Calendarios', hash: 't_2_6' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de marketing',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Características', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Fases', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Objetivos', hash: 't_3_4' },
          { numero: '3.5', titulo: 'Metas', hash: 't_3_5' },
          { numero: '3.6', titulo: 'Público', hash: 't_3_6' },
          { numero: '3.7', titulo: 'Pauta publicitaria', hash: 't_3_7' },
          { numero: '3.8', titulo: 'SEO', hash: 't_3_8' },
          { numero: '3.9', titulo: 'SEM', hash: 't_3_9' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comunidades virtuales',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Características', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Tipos', hash: 't_4_3' },
          { numero: '4.4', titulo: 'Estrategias', hash: 't_4_4' },
          { numero: '4.5', titulo: 'Creación', hash: 't_4_5' },
          { numero: '4.6', titulo: 'Configuración', hash: 't_4_6' },
          { numero: '4.7', titulo: 'Roles', hash: 't_4_7' },
          { numero: '4.8', titulo: 'Estructura', hash: 't_4_8' },
          { numero: '4.9', titulo: 'Contenido', hash: 't_4_9' },
          { numero: '4.10', titulo: 'Identificación', hash: 't_4_10' },
          { numero: '4.11', titulo: 'Descripción', hash: 't_4_11' },
          { numero: '4.12', titulo: 'Comportamiento', hash: 't_4_12' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Audiencias',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Definición', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Clasificación', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Tipología', hash: 't_5_3' },
          { numero: '5.4', titulo: 'Características', hash: 't_5_4' },
          { numero: '5.5', titulo: 'Segmentación', hash: 't_5_5' },
          { numero: '5.6', titulo: 'Medición', hash: 't_5_6' },
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'Grupo de usuarios expuestos a contenidos digitales de una marca.',
    },
    {
      termino: 'Calendario de contenidos',
      significado: 'Herramienta que organiza fechas y tipos de publicaciones.',
    },
    {
      termino: 'Comunidad virtual',
      significado: 'Grupo digital que interactúa alrededor de una marca.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Pieza informativa o promocional distribuida en medios digitales.',
    },
    {
      termino: '<em>Engagement</em>',
      significado: 'Nivel de interacción del público con el contenido.',
    },
    {
      termino: 'Publicidad digital',
      significado: 'Promoción de productos mediante medios digitales pagados.',
    },
    {
      termino: 'SEO',
      significado: 'Optimización para mejorar visibilidad en buscadores.',
    },
    {
      termino: 'SEM',
      significado: 'Publicidad pagada en motores de búsqueda.',
    },
    {
      termino: 'Segmentación',
      significado: 'División del mercado en grupos homogéneos.',
    },
    {
      termino: '<em>Target</em>',
      significado: 'Público objetivo priorizado por la marca.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: Análisis, definición y tipos</em>. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21).',
      link: 'https://doi.org/10.24137/raeic.11.21.19',
    },
    {
      referencia:
        'Beltrán Mora, M. N., Parrales Carvajal, V. M., & Ledesma Álvarez, G. D. (2019). <em>El Buyer Persona como factor clave entre las tendencias en gestión empresarial</em>. Revista Científica Mundo de la Investigación y el Conocimiento, 3(3), 659–681.',
      link: 'http://recimundo.com/index.php/es/article/view/615',
    },
    {
      referencia:
        'Fernández Valiñas, R. (2009). <em>Segmentación de mercados</em>. McGraw-Hill Interamericana.',
      link:
        'https://www.uteg.edu.ec/biblioteca-libros/wp-content/uploads/2023/09/Segmentacion-de-mercados_compressed.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de Nicaragua. (2022). <em>Segmentación de mercado</em>. Repositorio UNAN.',
      link: 'https://repositorio.unan.edu.ni/id/eprint/17362/1/17362.pdf',
    },
    {
      referencia:
        'Universidad San Marcos. (2020). <em>Segmentación de mercados</em>.',
      link:
        'https://repositorio.usam.ac.cr/xmlui/bitstream/handle/11506/1048/LEC%20MER%200006%202020.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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

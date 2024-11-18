export default {
  global: {
    componenteFormativo: 'Metales y aleaciones no ferrosos',
    descripcionCurso:
      'El componente formativo aborda los metales y aleaciones no ferrosas, su clasificación y procesos de obtención. Describe metales puros como el cobre y las aleaciones ultraligeras, ligeras y pesadas, resaltando sus aplicaciones en la industria aeronáutica, electrónica y construcción. También menciona la importancia del reciclaje y la minería urbana para mitigar el impacto ambiental y maximizar el aprovechamiento de estos recursos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Introducción a metales y aleaciones no ferrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metales puros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aleaciones ultraligeras',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aleaciones ligeras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aleaciones pesadas',
            hash: 't_1_4',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Introducción a metales y aleaciones no ferrosos',
      referencia:
        'El Industriense. (2021). Aleaciones | ¿Qué son? ¿En qué objetos se encuentran?.  [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=r2d2xiKICBU&ab_channel=ElIndustriense',
    },
    {
      tema: 'Metales puros',
      referencia:
        'Fabricando. (2022). COMO se HACE el ORO en la TIERRA | Como se EXTRAE el ORO de las MINAS. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CatEXzcy3Uk&ab_channel=Fabricando',
    },
    {
      tema: 'Aleaciones ultraligeras',
      referencia:
        'INITUBE. (2024). Aleaciones de aluminio: ¿cuáles son las más usadas?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7g2lGRzMQ-M&ab_channel=INITUBE',
    },
    {
      tema: 'Aleaciones ligeras',
      referencia:
        'Ehm. (2018). Aleaciones Ligeras - Aluminio. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IUa4eSAXWjM&ab_channel=Ehm ',
    },
    {
      tema: 'Aleaciones pesadas',
      referencia:
        'Nordberg G. (2024). METALES: PROPIEDADES QUÍMICAS Y TOXICIDAD.',
      tipo: 'Documento página 1-20',
      link:
        'https://www.insst.es/documents/94886/162520/Cap%C3%ADtulo+63.+Metales+propiedades+qu%C3%ADmicas+y+toxicidad',
    },
  ],
  glosario: [
    {
      termino: 'Aleaciones ultraligeras',
      significado:
        'combinaciones de metales con baja densidad, como el magnesio, usadas para aplicaciones ligeras.',
    },
    {
      termino: 'Biometalurgia',
      significado:
        'extracción de metales utilizando microorganismos para procesar minerales.',
    },
    {
      termino: 'Densidad',
      significado:
        'magnitud que relaciona la masa de un material con su volumen.',
    },
    {
      termino: 'Electrometalurgia',
      significado:
        'proceso que utiliza corriente eléctrica para extraer y refinar metales.',
    },
    {
      termino: 'Ganga',
      significado:
        'material no valioso que se separa de la mena durante el proceso de beneficio de minerales.',
    },
    {
      termino: 'Hidrometalurgia',
      significado:
        'proceso de extracción de metales mediante la disolución en soluciones acuosas.',
    },
    {
      termino: 'Inclusiones',
      significado: 'compuestos no metálicos presentes en aleaciones sólidas.',
    },
    {
      termino: 'Mena',
      significado:
        'mineral que contiene suficiente cantidad de un metal para ser extraído de manera rentable.',
    },
    {
      termino: 'Minerales no ferrosos',
      significado:
        'metales y aleaciones que contienen menos de un 5% de hierro en su composición.',
    },
    {
      termino: 'Pirometalurgia',
      significado:
        'obtención de metales a través de procesos que involucran altas temperaturas.',
    },
  ],
  referencias: [
    {
      referencia:
        'AAskeland, D. (2004). <i>Ciencia e Ingeniería de los Materiales</i>. Thomson.',
      link: '',
    },
    {
      referencia:
        'Servicio Geológico Mexicano. (2014). <i>Beneficio y transformación de minerales</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  la clasificación, obtención, características y aplicaciones de los metales y aleaciones no ferrosas, basados en el contenido del documento proporcionado.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica común de los metales no ferrosos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resistencia a la oxidación.', esCorrecta: true },
            { id: 'b', texto: 'Bajo peso específico.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Alta concentración de hierro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta resistencia magnética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes metales es considerado un metal puro utilizado en ingeniería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Zinc.', esCorrecta: false },
            { id: 'b', texto: 'Cobre.', esCorrecta: true },
            { id: 'c', texto: 'Titanio.', esCorrecta: false },
            { id: 'd', texto: 'Berilio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué proceso de extracción de metales utiliza bacterias para obtener el metal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Biometalurgia.', esCorrecta: true },
            { id: 'b', texto: 'Pirometalurgia.', esCorrecta: false },
            { id: 'c', texto: 'Electrometalurgia.', esCorrecta: false },
            { id: 'd', texto: 'Hidrometalurgia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de las siguientes es una aleación ultraligera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acero inoxidable.', esCorrecta: false },
            { id: 'b', texto: 'Magnesio.', esCorrecta: true },
            { id: 'c', texto: 'Bronce.', esCorrecta: false },
            { id: 'd', texto: 'Estaño.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Para qué se utiliza principalmente el aluminio en la industria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fabricación de joyas.', esCorrecta: false },
            { id: 'b', texto: 'Producción de imanes.', esCorrecta: false },
            { id: 'c', texto: 'Construcción de aeronaves.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Recubrimiento de circuitos electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de aleación se usa cuando se requiere alta resistencia al calor y ligereza?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aleación de titanio.', esCorrecta: true },
            { id: 'b', texto: 'Bronce.', esCorrecta: false },
            { id: 'c', texto: 'Latón.', esCorrecta: false },
            { id: 'd', texto: 'Aleación de cobre-plomo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el método principal para obtener cobre de alta pureza?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Electrólisis.', esCorrecta: true },
            { id: 'b', texto: 'Reducción con carbón.', esCorrecta: false },
            { id: 'c', texto: 'Flotación.', esCorrecta: false },
            { id: 'd', texto: 'Concentración magnética.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elemento se utiliza para mejorar la dureza del oro en las aleaciones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cobre.', esCorrecta: true },
            { id: 'b', texto: 'Zinc.', esCorrecta: false },
            { id: 'c', texto: 'Aluminio.', esCorrecta: false },
            { id: 'd', texto: 'Plomo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La pirometalurgia utiliza calor para la extracción de metales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las aleaciones pesadas son aquellas que tienen un bajo peso específico.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

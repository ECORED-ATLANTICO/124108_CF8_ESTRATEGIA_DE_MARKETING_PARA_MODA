<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos digitales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de conceptos clave de comunicación de marcas en el sistema moda.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes conceptos define mejor la publicidad digital en el sistema moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estrategia utilizada únicamente para ventas presenciales en almacenes físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proceso manual de distribución de productos textiles sin uso tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conjunto de acciones promocionales desarrolladas mediante medios y plataformas digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Actividad administrativa relacionada exclusivamente con inventarios empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal función de un calendario de contenidos dentro del <em>marketing digital</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar y programar estratégicamente las publicaciones digitales de una marca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar únicamente campañas de televisión para empresas de moda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar exclusivamente procesos contables relacionados con publicidad física.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Administrar inventarios textiles sin relación con redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica diferencia principalmente al <em>marketing</em> de contenidos en entornos digitales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza exclusivamente publicidad impresa tradicional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Genera contenido de valor para atraer y fidelizar audiencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se enfoca únicamente en ventas telefónicas directas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina la necesidad de interacción con consumidores digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es uno de los principales beneficios del <em>SEO</em> en <em>marketing digital</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la velocidad de carga de los sitios web empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la visibilidad orgánica de una marca en buscadores digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar completamente el uso de redes sociales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las estrategias de segmentación de audiencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la finalidad principal de las etiquetas o <em>hashtags</em> en redes sociales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la dificultad para encontrar contenidos digitales relacionados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la clasificación y descubrimiento de publicaciones digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el contenido visual de las publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de interacción con las comunidades virtuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal función de una parrilla de contenidos digital?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar completamente el calendario de contenidos empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar estratégicamente los tipos y frecuencia de publicaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Diseñar exclusivamente campañas de pauta tradicional impresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar únicamente inventarios físicos de productos textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento es esencial dentro de un plan de <em>marketing digital</em>?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definición clara de objetivos y metas estratégicas medibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminación total del análisis de audiencias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Uso exclusivo de publicidad tradicional en medios físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustitución completa de las redes sociales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la principal diferencia entre <em>SEO</em> y <em>SEM</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El <em>SEM</em> elimina completamente el uso de buscadores digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ambos conceptos corresponden exclusivamente a diseño gráfico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El <em>SEO</em> utiliza posicionamiento orgánico y el <em>SEM</em> publicidad pagada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El <em>SEO</em> se utiliza únicamente para ventas físicas presenciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué caracteriza principalmente a una comunidad virtual en entornos digitales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interacción constante entre usuarios alrededor de intereses comunes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ausencia de comunicación entre consumidores y marcas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dependencia exclusiva de publicidad tradicional impresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación de las plataformas digitales como medio de interacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una función importante del <em>community manager</em> en redes sociales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar únicamente procesos financieros de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente las estrategias de <em>marketing</em> empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de publicaciones en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestionar la interacción y comunicación con la comunidad digital.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué propósito tiene la segmentación de audiencias en <em>marketing digital</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la necesidad de estudiar el comportamiento del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar la dificultad para identificar consumidores potenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la analítica de datos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dividir el mercado para dirigir estrategias más precisas y efectivas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica principal de las audiencias digitales actuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Carecen totalmente de acceso a contenidos en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizan exclusivamente medios físicos para relacionarse con las marcas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interactúan constantemente mediante múltiples plataformas y dispositivos digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitan cualquier interacción con plataformas de comercio electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el objetivo principal de las estrategias <em>inbound marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Atraer consumidores mediante contenido útil y relevante para la audiencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Interrumpir constantemente al usuario con publicidad invasiva no segmentada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar completamente la comunicación digital de las marcas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituyir las redes sociales por procesos administrativos internos empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué característica poseen los contenidos educativos en redes sociales empresariales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se utilizan exclusivamente en medios físicos tradicionales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se enfocan únicamente en descuentos y promociones comerciales agresivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminan completamente la participación de las audiencias digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aportan información útil relacionada con intereses y necesidades del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Por qué es importante medir las audiencias en entornos digitales empresariales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque elimina completamente la necesidad de planificar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite optimizar estrategias y mejorar resultados comerciales digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque sustituye totalmente las decisiones estratégicas empresariales tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque impide analizar el comportamiento de los consumidores digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué elemento fortalece principalmente el posicionamiento digital de una marca?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La coherencia visual y comunicativa en todos los canales digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La ausencia de interacción con consumidores y comunidades virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El uso exclusivo de estrategias publicitarias tradicionales impresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La eliminación de contenidos visuales en redes sociales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la función principal de un <em>call to action</em> (<em>CTA</em>) digital?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Motivar al usuario para realizar una acción específica en línea.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente las estrategias de segmentación de audiencias digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de contenidos promocionales en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituyir las campañas publicitarias en plataformas digitales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica distingue a las comunidades virtuales exitosas en <em>marketing digital</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ausencia de contenidos interactivos y dinámicas de participación digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La participación constante de los miembros de la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El uso exclusivo de canales de comunicación físicos tradicionales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La eliminación de estrategias de fidelización y construcción de relaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una ventaja importante del <em>marketing digital</em> aplicado al sistema moda?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituye todos los procesos de análisis y medición de resultados empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elimina completamente la necesidad de interacción con consumidores finales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reduce totalmente la importancia de la identidad visual de marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite segmentar audiencias y personalizar estrategias comerciales digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué propósito tienen las reglas de comportamiento dentro de comunidades virtuales empresariales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar interacciones respetuosas y organizadas entre los participantes digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Limitar completamente la participación y expresión de los usuarios digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyir las estrategias de comunicación desarrolladas por las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de moderación dentro de las plataformas virtuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

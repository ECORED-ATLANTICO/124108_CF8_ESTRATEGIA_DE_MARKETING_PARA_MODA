<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contenidos digitales
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-4.mb-3
                figure
                  img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
              .col-lg-8
                .bg-color-18.p-4.p-lg-5
                  p.mb-0 En el sistema moda, el contenido digital no es un complemento de la publicidad, es el eje central de la comunicación estratégica. Las marcas de moda no solo venden prendas; venden identidad, estilo de vida, aspiración y pertenencia, en este contexto, el contenido digital se convierte en el puente entre la propuesta de valor y la audiencia.
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema2/3.svg").mx-auto
              .col-lg
                p.mb-0 A diferencia de otros sectores productivos, la moda depende fuertemente de lo visual, lo emocional y lo narrativo, las decisiones de compra no se fundamentan exclusivamente en la funcionalidad del producto, sino en la conexión simbólica que genera, por ello, el diseño, planificación y ejecución de contenidos digitales debe responder a una estrategia clara alineada con el posicionamiento de marca.

        .bg-color-2.tarjeta.p-4
          p.mb-0 Este capítulo analiza el concepto, los tipos y las características del contenido digital aplicados específicamente al sistema moda, reconociendo su impacto en el <em>engagement</em>, la fidelización y el desempeño comercial.
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto
        
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El contenido digital se define como la información creada y distribuida a través de medios digitales con el propósito de informar, persuadir, entretener o generar interacción con una audiencia específica, en el sistema moda, el contenido digital incluye fotografías editoriales, <em>reels</em> de pasarela, tutoriales de combinación de prendas, historias detrás de la marca, lanzamientos de colección y experiencias de usuario. No se trata solo de mostrar productos, sino de construir un relato coherente que conecte emocionalmente con el consumidor.
    
    .row.justify-content-center.align-items-center
      .col-lg-7
        .bg-color-7.tarjeta.p-4
          p.mb-0.text-center Un contenido bien estructurado debe responder a tres preguntas fundamentales:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-18.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
            .col-lg-5
              .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/6.png' alt='')
                .tarjeta.tarjeta--azul.h-100
                  .p-3
                    p.mb-0 ¿Qué comunica la marca?
              .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/7.png' alt='')
                .tarjeta.tarjeta--azul.h-100
                  .p-3
                    p.mb-0 ¿A quién se dirige?
              .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/8.png' alt='')
                .tarjeta.tarjeta--azul.h-100
                  .p-3
                    p.mb-0 ¿Qué acción espera generar?
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bg-color-3.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/3.svg").mx-auto
            .col-lg
              p.mb-0 En moda, el contenido exitoso equilibra estética, narrativa y estrategia comercial, una publicación visualmente atractiva sin intención estratégica difícilmente generará resultados sostenibles.
                
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Los tipos de contenido digital en el sistema moda pueden clasificarse según su formato, intención comunicativa y nivel de interacción, cada tipo cumple una función estratégica distinta dentro del embudo de marketing. Entre los principales tipos se encuentran:
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/10.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido informativo
              p.mb-0 Publicaciones educativas y explicativas que aportan valor al público. Incluye guías sobre cómo combinar prendas, consejos de estilo, cuidado de la ropa, tendencias de temporada y recomendaciones para elegir prendas según la ocasión o tipo de cuerpo. Su objetivo es posicionar la marca como referente en moda y generar confianza.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/11.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido promocional
              p.mb-0 Piezas enfocadas en impulsar la venta directa. Incluye ofertas especiales, descuentos, lanzamientos de nuevas colecciones, promociones por tiempo limitado, beneficios exclusivos y llamados claros a la acción para incentivar la compra inmediata.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/12.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido experiencial
              p.mb-0 Muestra la experiencia real de los clientes con la marca. Incluye testimonios, reseñas, fotos o videos de clientes, <em>unboxings</em> y demostraciones de uso. Su propósito es generar credibilidad, prueba social y confianza en los productos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/13.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido aspiracional
              p.mb-0 Presenta la marca en un contexto inspirador y emocional. Incluye editoriales de moda, sesiones fotográficas profesionales, <em>lifestyle</em>, looks completos y escenarios que reflejan el estilo de vida con el que el público desea identificarse.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/14.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido interactivo
              p.mb-0 Diseñado para fomentar la participación de la audiencia. Incluye encuestas, preguntas, <em>quizzes</em>, votaciones, retos y dinámicas en historias o publicaciones. Ayuda a aumentar el <em>engagement</em> y conocer mejor las preferencias del público.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema2/15.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Contenido en vivo (<em>live</em>)
              p.mb-0 Transmisiones en tiempo real para fortalecer la conexión con la comunidad. Incluye lanzamientos de colecciones, desfiles, entrevistas con diseñadores, demostraciones de productos y sesiones de preguntas y respuestas con la audiencia.
    
    .bg-color-9.p-4.mb-5.tarjeta
      p.mb-0 En el sistema moda, la combinación equilibrada de estos tipos evita que la marca se perciba exclusivamente comercial, el consumidor actual valora autenticidad y valor agregado antes de decidir una compra.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/16.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  Si todo el contenido es promoción, la audiencia se cansa, si todo es inspiración, no vende, el equilibrio es disciplina estratégica.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Características
    
    img(src="@/assets/curso/tema2/17.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las características del contenido digital en el sistema moda determinan su capacidad de generar impacto, conexión y resultados comerciales, no basta con publicar imágenes atractivas; el contenido debe cumplir criterios estratégicos que aseguren coherencia y efectividad. Entre las principales características se encuentran:
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Coherencia visual")
            p.ms-5 La moda es altamente estética, el contenido debe mantener una línea gráfica consistente en colores, tipografía, encuadres y estilo fotográfico. La coherencia fortalece el reconocimiento de marca y transmite profesionalismo.
          div(titulo="Calidad técnica")
            p.ms-5 Incluye resolución adecuada, iluminación correcta, edición profesional y buena composición. En moda, la percepción de calidad visual influye directamente en la percepción del producto.
          div(titulo="Autenticidad")
            p.ms-5 El consumidor actual valora la transparencia, mostrar procesos reales, equipos de trabajo y testimonios genuinos aumenta la credibilidad.
          div(titulo="Relevancia")
            p.ms-5 El contenido debe responder a intereses reales del público objetivo: tendencias, consejos de estilo, sostenibilidad o identidad cultural.
          div(titulo="Orientación estratégica")
            p.ms-5 Cada pieza debe tener un propósito: atraer, educar, convertir o fidelizar, publicar sin intención es desperdiciar recursos.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/19.png").mx-auto
        .col-lg.order-lg-1
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Raíz Textil Co. Decidió unificar su paleta de colores, mejorar la iluminación en sus fotografías y estructurar cada publicación con un llamado a la acción claro. En cuatro meses, su tasa de interacción aumentó 41 % y logró mayor recordación de marca.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/21.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué característica debería priorizar una marca emergente con presupuesto limitado?
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Etiquetas
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.mb-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-right") Las etiquetas, comúnmente conocidas como hashtags, son palabras o frases precedidas por el símbolo numeral (#) que permiten clasificar y agrupar contenidos dentro de plataformas digitales.
            .bg-color-2.p-4.tarjeta
              p.mb-0 Las etiquetas cumplen funciones estratégicas:

        .row.justify-content-center.mb-5
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/23.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Aumentar visibilidad
                p.mb-0 Permiten que usuarios interesados en una temática específica encuentren el contenido.
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/24.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Segmentar audiencias
                p.mb-0 Facilitan llegar a nichos concretos (ejemplo: #ModaSostenible, #StreetwearLatam).
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/25.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Posicionar marca
                p.mb-0 Crear etiquetas propias fortalece identidad y comunidad (ejemplo: #EstiloAndesStudio).
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/26.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Participar en tendencias
                p.mb-0 Integrarse a conversaciones globales amplía alcance.

        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 Sin embargo, el uso excesivo o irrelevante de etiquetas puede afectar la percepción profesional. La selección debe ser estratégica, alineada con el público objetivo y coherente con el mensaje de la publicación.
        
        .bg-color-1.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/19.png").mx-auto
            .col-lg
              p.mb-0 <b>Ejemplo aplicado</b>. La empresa Bruma Atelier redujo el uso de hashtags genéricos (#fashion, #style) y comenzó a utilizar etiquetas más específicas (#ModaConscienteColombia, #DiseñoArtesanalBogotá). Como resultado, mejoró la calidad de sus seguidores y aumentó las consultas comerciales.
    
    .row
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/27.png' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>Genérica</b>: Alto alcance.
              p.mb-0 <b>Ejemplo</b>: #Fashion.
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/28.png' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>De nicho</b>: Segmentación específica.
              p.mb-0 <b>Ejemplo</b>: #ModaSostenible.
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/29.png' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>De marca</b>: Identidad propia
              p.mb-0 <b>Ejemplo</b>: #BrumaAtelier.
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/30.png' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>Geográfica</b>: Localización
              p.mb-0 <b>Ejemplo</b>: #ModaBogotá.
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Parrilla
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") La parrilla de contenidos es la estructura organizada que define qué tipo de contenido se publica, en qué formato y con qué frecuencia, funciona como un mapa estratégico que equilibra objetivos comerciales y construcción de marca.
        p En el sistema moda, la parrilla evita dos errores comunes:
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/01.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Publicar únicamente promociones.
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/02.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Publicar contenido atractivo sin intención estratégica.
        
        .bg-color-2.p-4.tarjeta
          p.mb-0 Una parrilla bien diseñada distribuye los tipos de contenido (informativo, promocional, aspiracional, experiencial e interactivo) de manera equilibrada, garantizando coherencia con el posicionamiento de la marca.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        p Los componentes de una parrilla de contenidos son:

        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/32.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Tipo de contenido")
                h4 Tipo de contenido
                p.mb-0 Clasifica la pieza según la función estratégica que cumple dentro del plan de comunicación. Puede ser inspiracional (motiva y conecta emocionalmente), educativo (enseña o informa), promocional (impulsa ventas o destaca ofertas), interactivo (fomenta participación), de entretenimiento (genera diversión y recordación) o enfocado en valores de marca (comunica propósito, cultura y diferenciadores). 
              .tarjeta.color-acento-botones--borde.p-4(titulo="Formato")
                h4 Formato
                p.mb-0 Define la forma en que se presentará el contenido en el canal digital. Puede tratarse de un post estático, carrusel, reel, video corto, historia, artículo de blog, podcast, infografía, transmisión en vivo o newsletter. La elección del formato dependerá del objetivo, la plataforma y las preferencias del público objetivo.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Tema o mensaje central")
                h4 Tema o mensaje central
                p.mb-0 Resume la idea principal que se desea transmitir en la pieza. Debe ser claro, relevante y coherente con la estrategia de la marca. Ejemplos: “Moda sostenible”, “Nueva colección otoño”, “Consejos de estilo ejecutivo”, “Beneficios de comprar local” o “Historias de clientes satisfechos”. 
              .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivo de comunicación")
                h4 Objetivo de comunicación
                p.mb-0 Establece la meta específica que se busca alcanzar con el contenido. Puede orientarse a generar interacción, aumentar ventas, educar a la audiencia, reforzar la identidad de marca, atraer tráfico al sitio web, captar leads, fidelizar clientes o posicionar un producto o servicio. 
              .tarjeta.color-acento-botones--borde.p-4(titulo="Llamado a la acción (CTA)")
                h4 Llamado a la acción (CTA)
                p.mb-0 Es la instrucción concreta que guía al usuario hacia la acción deseada. Debe ser breve, directo y persuasivo. Ejemplos: “Compra ahora”, “Descubre la colección”, “Comenta tu favorito”, “Escríbenos por WhatsApp”, “Descarga la guía gratuita” o “Visita nuestro sitio web”

        p.mb-5 Veamos dos ejemplos aplicados al sistema moda, para darle significancia a cada componente:       

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Parrilla de contenidos –Johanna Ortiz (ejemplo semanal)
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Tipo de contenido
                    th.bg-color-7 Formato
                    th.bg-color-7 Tema
                    th.bg-color-7 Objetivo
                    th.bg-color-7 CTA
                tbody
                  tr.bg-color-white
                    td Inspiracional
                    td Post con foto
                    td Feminidad y poder
                    td Conectar emocionalmente
                    td “Descubre más en nuestra web”.
                  tr.bg-color-8
                    td Educativo
                    td <em>Reel</em>
                    td Técnicas artesanales
                    td Mostrar <em>expertise</em>
                    td “Mira la colección completa”.
                  tr.bg-color-white
                    td Producto
                    td Carrusel
                    td <em>Resort collection</em>
                    td Promocionar colección
                    td “Compra ahora”.
                  tr.bg-color-8
                    td <em>Lifestyle</em>
                    td Artículo
                    td Moda tropical
                    td Asociar estilo con experiencias
                    td “Lee más en nuestro blog”.
                  tr.bg-color-white
                    td Interacción
                    td Encuesta
                    td Estampados
                    td Fomentar comunidad
                    td “Vota tu favorito”.
                  tr.bg-color-8
                    td Entretenimiento
                    td <em>Video backstage</em>
                    td <em>Fashion week</em> París
                    td Generar <em>engagement</em>
                    td “Suscríbete al canal”.
                  tr.bg-color-white
                    td Valores de marca
                    td Post
                    td Sostenibilidad
                    td Reforzar identidad
                    td “Conoce nuestro compromiso”.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Parrilla de Contenidos – Arturo Calle (ejemplo semanal)
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de contenido
                th.bg-color-7 Formato
                th.bg-color-7 Tema
                th.bg-color-7 Objetivo
                th.bg-color-7 CTA
            tbody
              tr.bg-color-white
                td Inspiracional
                td Post
                td Estilo masculino
                td Posicionar marca
                td “Explora nuestros looks”.
              tr.bg-color-8
                td Educativo
                td <em>Reel</em>
                td <em>Tips</em> de oficina
                td Aportar valor práctico
                td “Descubre más en tienda”.
              tr.bg-color-white
                td Producto
                td Carrusel
                td Camisas <em>four fit</em>
                td Promocionar colección
                td “Compra en línea”.
              tr.bg-color-8
                td <em>Lifestyle</em>
                td Artículo
                td <em>Look</em> ejecutivo vs casual
                td Mostrar versatilidad
                td “Lee más en nuestro blog”.
              tr.bg-color-white
                td Interacción
                td Pregunta
                td <em>Blazer</em> azul o gris
                td Generar conversación
                td “Responde en <em>Stories</em>”.
              tr.bg-color-8
                td Entretenimiento
                td Video
                td Campaña: <em>behind the scenes</em>
                td Humanizar marca
                td “Suscríbete al canal”.
              tr.bg-color-white
                td Valores de marca
                td Post
                td Responsabilidad social
                td Reforzar identidad
                td “Conoce nuestros programas”.
    
    p.mb-5 Conclusiones:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-down")
        .bg-color-24.h-100
          figure
            img(src="@/assets/curso/tema2/33.png")
          div.text-center.p-3.p-lg-4
            h5 Johanna Ortiz
            p.mb-0 Comunica exclusividad, artesanía y lujo contemporáneo. Su parrilla de contenidos debe destacar el storytelling aspiracional, los procesos de diseño, la inspiración detrás de cada colección y su compromiso con la sostenibilidad y la moda de autor. 
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-up")
        .bg-color-24.h-100
          figure
            img(src="@/assets/curso/tema2/34.png")
          div.text-center.p-3.p-lg-4
            h5 Arturo Calle 
            p.mb-0 Combina accesibilidad, practicidad y cercanía. Su parrilla de contenidos se enfoca en consejos de estilo, promociones, lanzamientos de colección, valores corporativos y mensajes orientados a la familia, el trabajo y la responsabilidad social.
    
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 Ambas marcas equilibran contenido aspiracional, educativo y comercial, adaptado a las características y expectativas de sus públicos objetivo. Esta combinación les permite inspirar, informar y promover sus productos de manera estratégica, fortaleciendo el posicionamiento de marca y generando conexión, confianza y conversión en sus audiencias.
        
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/16.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  La parrilla no limita la creatividad; la ordena. En moda, improvisar constantemente debilita el posicionamiento.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/21.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué riesgo enfrenta una marca que publica sin una parrilla estructurada?
    
    separador
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.6 Calendarios de contenido
        
        p El calendario de contenido es la herramienta operativa que traduce la parrilla en fechas concretas de publicación y responsables, mientras la parrilla define la estrategia, el calendario define la ejecución.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/36.png", data-aos="zoom-in")
          .col-lg-6
            p En el sistema moda, el calendario debe considerar:
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                |  Temporadas (primavera-verano, otoño-invierno).
              li.mb-3.d-flex
                i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                |  Lanzamientos de colección.
              li.mb-3.d-flex
                i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                |  Fechas comerciales (<em>black friday</em>, día de la Madre, eventos locales).
              li.mb-3.d-flex
                i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                |  Tendencias emergentes.
              li.mb-3.d-flex
                i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                |  Frecuencia óptima de publicación.
            .bg-color-9.tarjeta.p-4
              p.mb-0 Un calendario permite anticiparse a campañas, coordinar equipos de fotografía, diseño y pauta, y evitar improvisaciones de última hora.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/37.png").mx-auto
        .col-lg.order-lg-1
          p.mb-0 La gestión de contenido se optimiza mediante herramientas digitales que permiten organizar publicaciones, analizar datos y mejorar la productividad en la creación de estrategias digitales, su dominio implica destinar tiempo para su aprendizaje y la práctica suficiente para aprovechar al máximo su potencia, a continuación, referenciaremos algunas de estas herramientas, las cuales se invita a conocer y profundizar en ellas para su adecuado uso.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/39.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.tarjeta.p-4
          p.mb-0 La planificación de contenido requiere herramientas que permitan organizar ideas, programar publicaciones, diseñar piezas gráficas y medir resultados. Estas plataformas optimizan el trabajo del <em>community manager</em> y facilitan la ejecución de estrategias de comunicación más eficientes.
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema2/40.png', alt='Texto que describa la imagen')
          .bg-color-10.p-2.mb-3
            h3.mb-0.text-center Trello
          p.text-center Ideal para la planificación visual de contenidos mediante tableros interactivos.
          p.text-center Sitio de la herramienta:
          .row.justify-content-center
            .col-auto 
              a.boton.color-acento-botones(href="https://trello.com/es " target="_blank")
                span Ir al enlace
                i.fas.fa-link
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema2/41.png', alt='Texto que describa la imagen')
          .bg-color-10.p-2.mb-3
            h3.mb-0.text-center Google calendar
          p.text-center Facilita la programación y coordinación de publicaciones en distintos medios.
          p.text-center Sitio de la herramienta:
          .row.justify-content-center
            .col-auto 
              a.boton.color-acento-botones(href="https://calendar.google.com/calendar/u/0/r?pli=1" target="_blank")
                span Ir al enlace
                i.fas.fa-link
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema2/42.png', alt='Texto que describa la imagen')
          .bg-color-10.p-2.mb-3
            h3.mb-0.text-center Notion
          p.text-center Permite organizar mapas de contenido y estructurar información para equipos.
          p.text-center Sitio de la herramienta:
          .row.justify-content-center
            .col-auto 
              a.boton.color-acento-botones(href="https://www.notion.com/es" target="_blank")
                span Ir al enlace
                i.fas.fa-link
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema2/43.png', alt='Texto que describa la imagen')
          .bg-color-10.p-2.mb-3
            h3.mb-0.text-center HubSpot
          p.text-center Software avanzado de gestión de contenido y automatización de marketing.
          p.text-center Sitio de la herramienta:
          .row.justify-content-center
            .col-auto 
              a.boton.color-acento-botones(href="https://www.hubspot.es/" target="_blank")
                span Ir al enlace
                i.fas.fa-link

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/16.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  Sin planificación, el contenido se vuelve reactivo, en el Sistema Moda, la planificación anticipada es una ventaja competitiva.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/44.png").mx-auto
            .col-lg
              p.mb-0 <b>Cita de reflexión</b>.  
              p.mb-0 “La creatividad sin valores puede impresionar, pero la integridad convierte el impacto en legado.”

    
      


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

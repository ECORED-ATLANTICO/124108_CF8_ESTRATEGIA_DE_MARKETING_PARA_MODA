<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunidades virtuales

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text En el sistema moda, la competencia ya no se limita al diseño, precio o calidad del producto; se centra en la capacidad de construir relaciones significativas con los consumidores. Las comunidades virtuales se han convertido en activos estratégicos que permiten transformar seguidores en embajadores de marca. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-8
            p A diferencia de una audiencia pasiva, una comunidad participa, interactúa y se identifica con los valores de la marca, esta dinámica fortalece la fidelización y genera posicionamiento sostenible. Por ello, comprender su funcionamiento es esencial para cualquier estrategia digital.
            .cajon.color-acento-contenido.bg-color-2.px-5.py-4
              p.mb-0 Las marcas de moda que construyen comunidades sólidas logran mayor retención de clientes y menor dependencia de la pauta publicitaria, esto ocurre porque la comunidad genera conversación orgánica y recomendación boca a boca digital, además, la pertenencia a una comunidad incrementa la conexión emocional con la marca. En un sector donde la identidad y el estilo son determinantes, este vínculo emocional se traduce en lealtad comercial, así, la comunidad deja de ser un canal y se convierte en una ventaja competitiva.

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") Una comunidad virtual es un grupo de personas que interactúan en entornos digitales alrededor de intereses, valores o propósitos compartidos, en el contexto del <em>marketing</em> digital, las comunidades se construyen en plataformas como redes sociales, foros o grupos especializados. En el sistema moda, la comunidad surge cuando los consumidores no solo compran, sino que se identifican con el estilo, narrativa y filosofía de la marca, esta identificación genera interacción constante y sentido de pertenencia, por tanto, la comunidad trasciende la transacción comercial.
        
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 En el sistema moda, la construcción de comunidad requiere consistencia narrativa, autenticidad y liderazgo digital, una marca que promueve sostenibilidad debe interactuar coherentemente con valores ambientales, la falta de coherencia debilita la confianza y fragmenta la comunidad, por ello, el concepto de comunidad virtual implica gestión estratégica permanente, no solo acumulación de seguidores, el resultado esperado es fidelización, recomendación y posicionamiento sólido.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Características
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las comunidades virtuales en el sistema moda poseen características específicas que las diferencian de una simple base de seguidores.
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema4/5.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Interacción bidireccional constante
              p.mb-0 Una comunidad no solo recibe información, sino que responde, opina y participa activamente, esta interacción genera diálogo y retroalimentación, lo que fortalece la relación entre marca y consumidor, sin participación, la comunidad pierde dinamismo y se convierte en audiencia pasiva, por ello, la interacción sostenida es el indicador principal de vitalidad comunitaria.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema4/6.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Coherencia identitaria
              p.mb-0 Las comunidades de moda se construyen en torno a valores compartidos como sostenibilidad, lujo o cultura urbana. Una identidad coherente fortalece el sentido de pertenencia, genera confianza y convierte a los miembros en defensores de la marca. Cuando la comunicación es inconsistente, la comunidad se debilita. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema4/7.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Confianza relacional  
              p.mb-0 En moda, la transparencia fortalece la comunidad. Compartir procesos, responder críticas y reconocer errores genera confianza, recomendación y recompra. Sin ella, la interacción disminuye y la comunidad se debilita. Por eso, su sostenibilidad depende de un liderazgo ético y una comunicación responsable.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
            .col-lg
              p.mb-0 <b>Ejemplo aplicado</b>.  La marca Andes Craft Wear fortaleció su comunidad digital al abrir espacios de diálogo sobre procesos artesanales y precios justos. Al responder preguntas y mostrar transparencia en su cadena de producción, logró aumentar la participación en comentarios en 48 % y consolidar clientes recurrentes.
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 Sin interacción y coherencia, no hay comunidad; solo seguidores dispersos.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Tipos
    
    img(src="@/assets/curso/tema4/10.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las comunidades virtuales en el sistema moda pueden clasificarse según su estructura y propósito estratégico, esta clasificación permite comprender su funcionamiento y seleccionar el modelo más adecuado para cada marca. 
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
          div(titulo="Primera tipología")
            p.ms-5 Corresponde a las comunidades abiertas, accesibles a cualquier usuario interesado, se caracterizan por alta visibilidad y facilidad de crecimiento, aunque menor control sobre la interacción, son útiles para marcas que buscan posicionamiento amplio y reconocimiento masivo.
          div(titulo="Segunda tipología")
            p.ms-5 La segunda tipología incluye las comunidades cerradas o privadas, donde el acceso requiere aprobación o pertenencia previa (clientes frecuentes, miembros premium), sus características principales son exclusividad, mayor cohesión y alto nivel de compromiso. En el sistema moda, este modelo es frecuente en marcas de lujo o sostenibles que desean fortalecer identidad selectiva, la exclusividad incrementa el sentido de pertenencia y eleva la percepción de valor.
          div(titulo="Tercera tipología")
            p.ms-5 La tercera tipología corresponde a las comunidades híbridas, que combinan espacios abiertos y privados, este modelo permite captar nuevos seguidores en entornos abiertos y trasladar a los miembros más comprometidos a espacios exclusivos, su característica distintiva es la segmentación progresiva de usuarios según nivel de interacción. En el sistema moda, esta estrategia facilita crecimiento y fidelización simultáneamente, elegir el tipo adecuado depende del posicionamiento y objetivos estratégicos de la marca.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
        .col-lg.order-lg-1
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Raíz Urbana implementó estas cinco fases antes del lanzamiento de su colección cápsula. Gracias a la fase de diagnóstico identificó que su audiencia principal estaba en Instagram y no en Facebook, lo que permitió optimizar presupuesto y aumentar la tasa de conversión en 22 %.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/13.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué tipo de comunidad sería más coherente para una marca de lujo emergente?
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        separador
        
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.4 Estrategias
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
          .col-lg-8
            p Las estrategias para el desarrollo de comunidades virtuales en el sistema moda constituyen el conjunto de acciones planificadas que buscan atraer, vincular y fidelizar a los miembros alrededor de la marca, no se trata únicamente de publicar contenido, sino de diseñar experiencias digitales que estimulen la participación, cuando la estrategia es clara, la comunidad evoluciona de espectadores a embajadores. 
            .cajon.color-acento-contenido.bg-color-2.px-5.py-4
              p.mb-0 En cambio, la ausencia de planificación genera grupos inactivos y dispersos, por ello, la estrategia comunitaria debe integrarse al plan de <em>marketing</em> digital.
        
        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              span Estrategias de fortalecimiento comunitario en moda
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Estrategia
                    th.bg-color-7 Característica
                    th.bg-color-7 Impacto
                    th.bg-color-7 Ejemplo aplicado al sistema moda
                tbody
                  tr.bg-color-white
                    td Participación activa
                    td Uso de formatos interactivos que invitan a la audiencia a opinar y actuar en tiempo real: encuestas en <em>stories</em>, cajas de preguntas, retos UGC, votaciones de producto y dinámicas gamificadas que reducen la pasividad del usuario
                    td <em>Engagement</em>: incrementa la interacción, el tiempo de permanencia y la afinidad con la marca, mejorando señales algorítmicas en redes sociales
                    td Una marca de <em>streetwear</em> publica en <em>stories</em> dos diseños de <em>hoodie</em> y lanza una encuesta: “¿Cuál sale primero?”. Los seguidores votan y luego se anuncia el ganador, generando expectativa y conversación.
                  tr.bg-color-8
                    td Exclusividad
                    td Creación de experiencias diferenciadas para segmentos específicos: acceso anticipado, colecciones limitadas, membresías VIP, contenido privado o beneficios por pertenencia a comunidad. Refuerza la percepción de valor y pertenencia
                    td Fidelización: aumenta la recompra, la lealtad y el valor de vida del cliente (CLV), además de elevar el posicionamiento <em>premium</em> de la marca
                    td Una marca de moda femenina envía por <em>newsletter</em> acceso anticipado a su nueva colección solo para clientas frecuentes, permitiéndoles comprar 48 horas antes del lanzamiento público.
                  tr.bg-color-white
                    td Co-creación
                    td Involucramiento directo del cliente en decisiones de diseño, <em>naming</em>, colores o campañas. Incluye votaciones, convocatorias de diseño, colaboraciones con la comunidad y dinámicas de <em>feedback</em> estructurado
                    td Compromiso emocional: fortalece el sentido de pertenencia, la defensa de marca y la viralidad orgánica al hacer sentir al cliente parte del proceso
                    td Una marca de <em>denim</em> invita a su comunidad a elegir el lavado del próximo <em>jean</em> mediante votación y luego etiqueta en redes a la comunidad como “co-creadora” del producto final.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/15.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el sistema moda, la selección estratégica debe alinearse con el posicionamiento de marca, una marca de lujo prioriza exclusividad; una marca urbana puede privilegiar co-creación, además, la estrategia debe sostenerse en el tiempo para evitar comunidades efímeras, la consistencia en la interacción y el valor ofrecido determina la sostenibilidad del ecosistema comunitario.

        .bg-color-1.tarjeta.px-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 <b>Ejemplo aplicado</b>. La marca Origen Denim Co. lanzó una estrategia de co-creación invitando a su comunidad a votar por el diseño de una nueva chaqueta. La participación superó las expectativas y el producto final se agotó en la primera semana. La estrategia fortaleció la pertenencia y aumentó la interacción en un 52 %.
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-down") 
            .bg-color-1.p-3.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.png").mx-auto
                .col-lg
                  p.mb-0 <b>Clave estratégica</b>.  
                  p.mb-0 Las comunidades se construyen conversando con la audiencia, no hablándole únicamente.
    
    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Creación
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema4/16.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El proceso de creación de comunidades virtuales en el sistema moda sigue una secuencia metodológica que permite pasar de la intención estratégica a la consolidación del grupo. Este proceso inicia con la definición del propósito comunitario, continúa con la selección de la plataforma y culmina con la activación y dinamización de la comunidad, cuando se omiten etapas, la comunidad tiende a fragmentarse o perder relevancia, por ello, la creación debe abordarse de manera estructurada.
          
        p.mb-5 Proceso de creación de comunidades virtuales 
        
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
          .col-lg-8
            .row.mb-5.justify-content-center
              .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
                .tarjeta--boton.bg-color-15.h-100.p-2
                  .row.justify-content-center.mb-3
                    .col-8
                      figure
                        img(src='@/assets/curso/tema4/18.png', alt='Texto que describa la imagen')
                  h3.mb-4.text-center Definición del propósito
                  p.text-center Establece el valor que la comunidad ofrecerá a sus miembros (aprendizaje, beneficios, pertenencia).
              .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
                .tarjeta--boton.bg-color-15.h-100.p-2
                  .row.justify-content-center.mb-3
                    .col-8
                      figure
                        img(src='@/assets/curso/tema4/19.png', alt='Texto que describa la imagen')
                  h3.mb-4.text-center Configuración del espacio digital
                  p.text-center Donde se establecen normas, identidad visual y mecanismos de acceso.
              .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
                .tarjeta--boton.bg-color-15.h-100.p-2
                  .row.justify-content-center.mb-3
                    .col-8
                      figure
                        img(src='@/assets/curso/tema4/20.png', alt='Texto que describa la imagen')
                  h3.mb-4.text-center Activación
                  p.text-center Implica atraer miembros mediante contenido y beneficios iniciales. 
              .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
                .tarjeta--boton.bg-color-15.h-100.p-2
                  .row.justify-content-center.mb-3
                    .col-8
                      figure
                        img(src='@/assets/curso/tema4/21.png', alt='Texto que describa la imagen')
                  h3.mb-4.text-center Dinamización
                  p.text-center Busca mantener la participación mediante interacción continua

        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 En el sistema moda, el éxito del proceso depende de la coherencia entre el propósito comunitario y la identidad de marca, una comunidad creada solo para vender pierde credibilidad, en cambio, cuando ofrece valor real —como acceso anticipado, conocimiento de tendencias o interacción directa— se fortalece el compromiso, la creación de comunidad debe entenderse como inversión relacional de largo plazo.

        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
          .col-lg-6
            .row.align-items-center.bg-color-1.px-4.tarjeta
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema4/13.png").mx-auto
              .col-lg
                h5 Pregunta de aplicación
                p.mb-0 ¿Cuál fase del proceso consideras más crítica para evitar comunidades inactivas?
    
    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Configuración
    
    p.mb-5 Las técnicas de configuración corresponden a los procedimientos técnicos y administrativos que permiten estructurar adecuadamente la comunidad virtual. En el sistema moda, una configuración deficiente puede generar desorden comunicativo, pérdida de control reputacional o baja participación, por ello, esta etapa debe abordarse con criterios estratégicos y operativos claros, ya que la configuración establece las bases de funcionamiento del ecosistema comunitario.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/23.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Entre las principales técnicas se encuentran la definición de normas de convivencia, la segmentación de permisos de usuario, la automatización de bienvenida y la moderación activa. Las normas establecen comportamiento esperado; la segmentación controla niveles de acceso; la automatización facilita la integración de nuevos miembros; la moderación mantiene la calidad de la interacción. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema4/24.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-2.px-5.py-4
              p.mb-0 En el sistema moda, la configuración debe reflejar la identidad de marca, una comunidad de lujo requerirá mayor control de acceso; una comunidad urbana puede permitir mayor apertura conversacional. Además, la moderación constante evita crisis reputacionales. La técnica no reemplaza la estrategia, pero la hace operativamente viable, una comunidad bien configurada facilita la escalabilidad y protege la reputación digital.
        
        separador
        
        #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.7 Roles
        
        img(src="@/assets/curso/tema4/25.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text En las comunidades virtuales, los roles definen las funciones y responsabilidades de los participantes dentro del ecosistema digital, la claridad en los roles permite organizar la interacción, evitar desorden comunicativo y fortalecer la gobernanza comunitaria, sin esta definición, la comunidad tiende a la dispersión y pérdida de control reputacional, por ello, la asignación de roles constituye una decisión estratégica y no solo operativa, ya que cada rol aporta valor diferenciado al crecimiento del colectivo.
    
    p.mb-5 Los principales roles pueden clasificarse en administrador, moderador, miembro activo y embajador de marca. 
  
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Roles en las comunidades virtuales 
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/26.png", alt="la figura muestra los roles en las comunidades virtuales.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/26-1.png", alt="la figura muestra los roles en las comunidades virtuales.")
        figcaption Fuente: SENA, 2026
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema4/27.png", data-aos="zoom-in")
      .col-lg-8
        p Cada rol posee características específicas: el administrador requiere visión estratégica; el moderador, criterio y diplomacia; el miembro activo, participación constante; el embajador, alto nivel de afinidad con la marca, esta clasificación facilita la gestión ordenada. 
        .cajon.color-acento-contenido.bg-color-2.px-5.py-4
          p.mb-0 En el sistema moda, la correcta articulación de roles fortalece la sostenibilidad comunitaria. Por ejemplo, identificar embajadores permite amplificar mensajes sin aumentar inversión publicitaria. Asimismo, la moderación oportuna previene crisis reputacionales. La gestión de roles debe revisarse periódicamente para adaptarse al crecimiento de la comunidad, una comunidad madura evoluciona en su estructura de participación.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
        .col-lg.order-lg-1
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Urbana Colectiva identificó a sus seguidores más participativos y los convirtió en embajadores digitales, otorgándoles acceso anticipado a lanzamientos. Esta estrategia aumentó la recomendación orgánica y elevó el engagement en 37 %.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 Identificar y cultivar embajadores reduce costos de adquisición de clientes.

    separador
    
    #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.8 Estructura
    
    p.mb-5 La estructura de una comunidad virtual corresponde a la organización interna que define cómo fluyen la información, la interacción y la toma de decisiones, una estructura clara permite escalar la comunidad sin perder coherencia ni control, cuando la estructura es difusa, la participación se vuelve caótica y la experiencia del usuario se deteriora, por ello, la arquitectura comunitaria debe diseñarse desde el inicio con visión de crecimiento.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/28.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Centralizada
            p.mb-0 Concentra las decisiones en el administrador, lo que garantiza mayor control, coherencia estratégica y rapidez en la toma de decisiones. Es ideal para comunidades en etapas iniciales o cuando se requiere una dirección clara y uniforme.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/29.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Descentralizada
            p.mb-0 Distribuye el liderazgo entre varios miembros, fomentando la autonomía, la colaboración y el dinamismo. Favorece la innovación y el sentido de pertenencia, aunque requiere altos niveles de confianza y coordinación.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/30.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Híbrida
            p.mb-0 Combina el control estratégico de un núcleo administrador con la participación activa de líderes y miembros. Equilibra gobernanza, flexibilidad y compromiso comunitario, siendo uno de los modelos más sostenibles y escalables.
    
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 En el sistema moda, las marcas emergentes suelen iniciar con estructuras centralizadas para mantener coherencia de identidad, a medida que la comunidad crece, evolucionan hacia modelos híbridos que permiten mayor participación, esta transición debe ser gradual y planificada. Una estructura bien diseñada facilita escalabilidad, mejora la experiencia del usuario y fortalece la reputación digital.
    
    .bg-color-1.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
        .col-lg
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Raíz Street Lab comenzó con estructura centralizada durante su fase inicial. Al superar los 20.000 miembros, migró a un modelo híbrido incorporando moderadores regionales. Esto permitió mantener control y aumentar la participación en un 44 %.
    
    separador
    
    #t_4_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.9 Contenido
    
    .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El tipo de contenido en comunidades virtuales del sistema moda debe responder al objetivo de fortalecer la participación y el sentido de pertenencia, a diferencia del contenido masivo de redes abiertas, el contenido comunitario prioriza la cercanía, la exclusividad y la interacción. Cuando el contenido se percibe genérico, la comunidad pierde motivación, por ello, la curaduría de contenidos debe diseñarse con enfoque relacional.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/33.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-5.mb-3
            figure
              img(src="@/assets/curso/tema4/32.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-2.p-4
              p.mb-0 Los principales tipos de contenido comunitario incluyen contenido exclusivo, contenido participativo y contenido de valor especializado. El contenido exclusivo ofrece beneficios diferenciados; el participativo promueve interacción directa; el especializado aporta conocimiento relevante. Cada tipo posee características específicas: la exclusividad refuerza pertenencia; la participación aumenta <em>engagement</em>; el valor especializado posiciona autoridad, la combinación equilibrada fortalece la vitalidad comunitaria.
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/34.svg").mx-auto
          .col-lg
            p.mb-0 En el sistema moda, el contenido más efectivo suele ser el detrás de cámaras, preventas exclusivas y consultas de co-creación. Estos formatos humanizan la marca y fortalecen la conexión emocional. La planificación del contenido comunitario debe alinearse con la identidad de marca y el perfil del público. Una comunidad bien nutrida se convierte en motor de recomendación orgánica.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
        .col-lg
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Terracota Collective implementó contenido exclusivo para su comunidad VIP, incluyendo acceso anticipado a colecciones y sesiones en vivo con diseñadores. Esta estrategia incrementó la recompra en un 33 % y fortaleció la lealtad de sus clientes más activos.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 El contenido comunitario debe hacer sentir al miembro “adentro”, no como espectador externo.

    separador
    
    #t_4_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.10 Identificación
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema4/35.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text La identificación de una comunidad virtual corresponde al conjunto de elementos que permiten reconocerla y diferenciarla dentro del ecosistema digital. En el sistema moda, la identificación cumple una función estratégica porque refuerza el sentido de pertenencia y facilita la recordación de marca, cuando la comunidad posee nombre, estética y narrativa coherentes, sus miembros se sienten parte de un colectivo definido, en cambio, una comunidad sin identidad clara tiende a diluirse, por ello, la identificación debe diseñarse con intención estratégica.

        p.mb-5 Los componentes de identificación incluyen nombre de la comunidad, identidad visual, propuesta de valor y símbolos de pertenencia. 

        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 10.
              span Elementos de identificación comunitaria
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Elemento
                    th.bg-color-7 Función
                    th.bg-color-7 Impacto
                    th.bg-color-7 Ejemplo aplicado al sistema moda
                tbody
                  tr.bg-color-white
                    td Nombre
                    td Identificar y diferenciar la marca en la mente del consumidor mediante una denominación memorable, pronunciable y coherente con el posicionamiento. Debe facilitar la búsqueda digital y la asociación inmediata con la categoría o estilo de la marca
                    td Recordación: mejora el <em>recall</em> de marca, facilita el voz a voz y aumenta la probabilidad de ser buscada directamente en redes o en Google. Un nombre fuerte reduce costos de adquisición a largo plazo
                    td Una marca de moda urbana llamada “Barrio Fit” logra que los jóvenes la recuerden fácilmente y la busquen por nombre en Instagram cuando piensan en ropa <em>street</em> local.
                  tr.bg-color-8
                    td Identidad visual
                    td Construir un sistema visual consistente (logo, tipografías, paleta de color, estilo fotográfico y dirección de arte) que permita reconocer la marca de forma inmediata en cualquier punto de contacto digital o físico
                    td Profesionalismo: eleva la percepción de calidad, genera confianza inicial y mejora la coherencia de marca, lo que impacta positivamente en conversión y posicionamiento <em>premium</em>
                    td Una marca de moda femenina mantiene en su <em>feed</em> de Instagram una paleta neutra, tipografía elegante y fotografías minimalistas, logrando que cualquier publicación sea reconocible sin ver el logo.
                  tr.bg-color-white
                    td Propuesta de valor
                    td Definir con claridad el beneficio diferencial que la marca ofrece frente a la competencia, conectando atributos funcionales y emocionales. Debe responder: qué ofrece, para quién y por qué es diferente
                    td Atracción: incrementa la relevancia percibida, mejora la tasa de clic y conversión, y facilita que el cliente entienda rápidamente por qué elegir la marca
                    td Una marca sostenible comunica: “Moda deportiva hecha con telas recicladas para mujeres que entrenan con propósito”, atrayendo a consumidoras conscientes del impacto ambiental.
                  tr.bg-color-8
                    td Símbolos de pertenencia
                    td Incorporar elementos que refuercen la identidad de comunidad: <em>hashtags</em> de marca, nombres para la tribu, etiquetas visibles, empaques distintivos o rituales de marca que generen sentido de grupo
                    td Fidelización: fortalece el vínculo emocional, promueve la recompra y estimula el contenido generado por usuarios al hacer que el cliente se sienta parte de algo
                    td Una marca de <em>streetwear</em> llama a sus clientes #TribuUrbana, incluye <em>stickers</em> en cada compra y motiva a subir fotos usando el <em>hashtag</em> para aparecer en el <em>feed</em> oficial.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/36.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") En el sistema moda, la identificación debe alinearse con el posicionamiento de la marca, una comunidad de lujo requiere estética sobria y exclusiva; una comunidad urbana puede usar códigos visuales más disruptivos. La gestión estratégica de la identificación facilita la cohesión interna y mejora la percepción externa, una comunidad bien identificada se convierte en activo reputacional.
        .bg-color-1.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/8.png").mx-auto
            .col-lg
              p.mb-0 <b>Ejemplo aplicado</b>. La marca Ébano Society creó una comunidad privada con identidad visual minimalista, nombre exclusivo y beneficios diferenciados, esta identificación reforzó la percepción premium y elevó la tasa de permanencia de miembros en 41 %.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 El contenido comunitario debe hacer sentir al miembro “adentro”, no como espectador externo.

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/13.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué elemento de identificación sería más crítico al lanzar una comunidad desde cero?
    
    separador
    
    #t_4_11.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.11 Descripción

    p.mb-5 La descripción de la comunidad virtual es el mensaje introductorio que comunica su propósito, beneficios y normas básicas a los potenciales miembros, esta sección cumple una función persuasiva y orientadora, ya que establece expectativas desde el primer contacto, una descripción ambigua genera confusión; una descripción clara atrae al público adecuado, de allí que su redacción debe ser estratégica y coherente con la identidad de marca.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/37.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Una descripción efectiva incluye propósito de la comunidad, perfil del público, beneficios de pertenencia y lineamientos básicos de interacción, estas características permiten filtrar miembros no alineados y fortalecer la cohesión interna, además, la claridad reduce conflictos y mejora la experiencia del usuario. La descripción debe ser breve, directa y emocionalmente conectiva.
    
    .bg-color-1.tarjeta.px-4.p-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/38.png").mx-auto
        .col-lg
          h5 Claves estratégicas.
      
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  En el sistema moda, la descripción también actúa como herramienta de posicionamiento. 
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  Comunidades que comunican valores como sostenibilidad, exclusividad o creatividad atraen públicos específicos. 
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  La actualización periódica de la descripción garantiza vigencia estratégica. 
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  •	Una comunidad bien presentada desde su descripción mejora la tasa de ingreso y la calidad de los miembros.
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-10.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema4/39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Marca de moda disruptiva: NEÓN TRIBU
                  p.mb-0 Lo invitamos a descargar el siguiente documento y profundiza en el tema de descripción de la comunidad virtual.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/NeonTribu.pdf')" target="_blank" type="application/pdf")
                    span Descargar pdf
                    i.fas.fa-file-download
    
    separador
    
    #t_4_12.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.12 Comportamiento
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/40.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las reglas de comportamiento en la web constituyen el marco normativo que regula la interacción dentro de la comunidad virtual. En el sistema moda, donde la reputación y la percepción de marca son sensibles, estas reglas protegen la convivencia y la credibilidad, sin normas claras, la comunidad puede derivar en conflictos, spam o deterioro del ambiente digital, por ello, la definición de reglas debe realizarse desde la fase inicial de configuración.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/42.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema4/41.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4
                  p.mb-0 Las reglas suelen incluir normas de respeto, prohibición de contenido inapropiado, lineamientos de publicación y políticas de moderación: el respeto protege la convivencia, la prohibición de spam mantiene la calidad, los lineamientos ordenan la comunicación y la moderación garantiza cumplimiento. Estas características permiten mantener un entorno seguro y alineado con los valores de la marca.
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema4/34.svg").mx-auto
              .col-lg
                p.mb-0 En el sistema moda, las reglas deben comunicarse de forma visible y aplicarse con coherencia, la aplicación inconsistente debilita la autoridad de la comunidad, además, las normas deben actualizarse según el crecimiento del grupo, una comunidad bien regulada fortalece la confianza y protege la reputación digital de la marca.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .row.align-items-center.bg-color-1.px-4.tarjeta
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema4/13.png").mx-auto
              .col-lg
                h5 Pregunta de aplicación
                p.mb-0 ¿Qué riesgo reputacional enfrenta una comunidad sin normas de comportamiento visibles?

        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="fade-up")
            .tarjeta.color-primario.bg-color-16.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-auto
                  img(src="@/assets/curso/tema4/44.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Cómo posicionar tu marca creando una comunidad en redes sociales
                      p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, corresponde a un video donde se explica cómo posicionar una marca creando una comunidad digital usando las redes sociales.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=TVtRHg4Ey48 " target="_blank")
                        span Ir al video
                        i.fas.fa-link

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/45.png").mx-auto
            .col-lg
              p.mb-0 <b>Cita de reflexión</b>.  
              p.mb-0 “La verdadera influencia no se construye con seguidores, sino con coherencia entre lo que se dice y lo que se hace.” 

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

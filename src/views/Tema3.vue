<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de marketing digital
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el sistema moda, la creatividad sin planificación se convierte en improvisación. El plan de marketing digital es el instrumento estratégico que organiza objetivos, recursos, acciones y métricas para garantizar que la presencia digital de una marca genere resultados sostenibles.
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4
                  p.mb-0 A diferencia de acciones aisladas en redes sociales, el plan articula análisis de mercado, definición de público objetivo, posicionamiento, propuesta de valor, tácticas de contenido, pauta publicitaria y medición de resultados. En un entorno altamente competitivo como el de la moda, donde las tendencias cambian rápidamente, contar con un plan estructurado permite anticiparse, adaptarse y optimizar la inversión.
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/4.svg").mx-auto
              .col-lg
                p.mb-0 Este capítulo desarrolla el concepto, características y fases del plan de marketing digital aplicado específicamente al sistema moda, reconociendo su papel estratégico en el posicionamiento y crecimiento comercial.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Concepto
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") El plan de marketing digital es un documento estratégico que define los objetivos que una organización busca alcanzar en los canales digitales y las acciones necesarias para lograrlos. Incluye estrategias, herramientas, cronograma, presupuesto y métricas para atraer clientes, fortalecer la marca y aumentar las ventas de manera medible y organizada.
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema3/6.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Plan de marketing: qué es y cómo hacer uno paso a paso
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video titulado “Plan de marketing: qué es y cómo hacer uno paso a paso”, publicado por InboundCycle - Marketing y ventas inbound, explica de manera clara y estructurada cómo elaborar un plan de marketing desde cero.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YpcxMRGtR0I " target="_blank")
                    span Ir al video
                    i.fas.fa-link
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Características
    
    img(src="@/assets/curso/tema3/7.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Un plan de marketing digital en el sistema moda debe cumplir características específicas que garanticen su aplicabilidad y coherencia estratégica.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
          div(titulo="Claridad")
            p.ms-5 Los objetivos deben formularse de manera concreta, específica y medible, de modo que permitan evaluar su cumplimiento. Ejemplo: aumentar las ventas online en un 20 % durante los próximos seis meses.
          div(titulo="Coherencia")
            p.ms-5 El plan debe estar alineado con la identidad, los valores y el posicionamiento de la marca, asegurando que todas las acciones transmitan un mensaje consistente.
          div(titulo="Adaptabilidad")
            p.ms-5 Dado que el sector moda cambia constantemente, el plan debe ser flexible para ajustarse a nuevas tendencias, comportamientos del consumidor y condiciones del mercado.
          div(titulo="Enfoque de datos")
            p.ms-5 Las decisiones estratégicas deben fundamentarse en métricas y análisis reales, como tráfico, conversiones, <em>engagement</em> y retorno de la inversión (ROI).
          div(titulo="Orientación de resultados")
            p.ms-5 Cada acción debe responder a un objetivo comercial o estratégico, contribuyendo al crecimiento de la marca, la captación de clientes o el aumento de ventas.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema3/10.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué riesgo asume una marca que toma decisiones digitales solo por intuición?
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Fases
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El plan de marketing digital se desarrolla en fases estructuradas que permiten pasar del análisis inicial a la ejecución y optimización continua de las estrategias. Cada etapa cumple una función específica y facilita la toma de decisiones orientadas al logro de los objetivos comerciales y de posicionamiento de la marca.
    
    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-3.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema3/01.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-2.p-2 Diagnostico
                p.text-center Se evalúa la situación actual de la empresa, el mercado, la competencia y el comportamiento del público objetivo.
              .bg-color-3.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema3/02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-2.p-2  Definición de objetivos
                p.text-center Se establecen metas claras y medibles, alineadas con los objetivos comerciales de la organización.
              .bg-color-3.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema3/03.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-2.p-2  Diseño de estrategias
                p.text-center Se determinan las acciones y tácticas que permitirán alcanzar los objetivos planteados.
              .bg-color-3.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema3/04.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-2.p-2  Implementación
                p.text-center Se ponen en marcha las campañas y actividades definidas en el plan.
              .bg-color-3.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema3/05.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-2.p-2  Medición y optimización.
                p.text-center Se realizan ajustes con base en los datos obtenidos para maximizar la efectividad de la estrategia.
          .col-md-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/12.png', alt='Descripción de la imagen')
    
    .bg-color-1.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/13.png").mx-auto
        .col-lg
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Raíz Urbana implementó estas cinco fases antes del lanzamiento de su colección cápsula. Gracias a la fase de diagnóstico identificó que su audiencia principal estaba en Instagram y no en Facebook, lo que permitió optimizar presupuesto y aumentar la tasa de conversión en 22 %.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Objetivos
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/14.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Los objetivos en marketing digital son la base estratégica que guía todas las acciones de una marca. En el sistema moda, permiten convertir las metas comerciales en acciones claras y medibles. Cuando una empresa define objetivos concretos, sus campañas tienen dirección, coherencia y un mejor aprovechamiento de los recursos.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
          .col-lg-8
            p Además, los objetivos ayudan a que las áreas creativa, comercial y financiera trabajen hacia una misma meta, fortaleciendo la organización y aumentando la rentabilidad de la empresa.
            .cajon.color-acento-contenido.bg-color-2.px-5.py-4
              p.mb-0 Dentro de una estrategia digital, los objetivos pueden enfocarse en diferentes necesidades de la marca, dependiendo de lo que se quiera lograr en el mercado. Cada tipo de objetivo cumple una función específica y permite medir resultados de manera más precisa.
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/16.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Objetivos de posicionamiento
              p.mb-0 Buscan aumentar el reconocimiento y la visibilidad de la marca frente al público objetivo. Generalmente, se evalúan mediante indicadores como alcance, impresiones y presencia digital. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/17.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Objetivos de conversión
              p.mb-0 Se enfocan en lograr acciones concretas por parte de los usuarios, como ventas, registros, compras o solicitudes de información. Se miden a través de conversiones, clics y resultados comerciales. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/18.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Objetivos de fidelización 
              p.mb-0 Pretenden fortalecer la relación con los clientes actuales, incentivando la recompra y la interacción constante con la marca. Sus resultados se analizan mediante engagement, recurrencia y nivel de satisfacción. 
    
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 Para que un objetivo sea realmente útil dentro de un plan de marketing digital, debe estar bien estructurado y facilitar el seguimiento de los resultados. Por ello, se recomienda aplicar el criterio SMART, el cual permite formular objetivos claros y alcanzables. Un objetivo debe ser:
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-27.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/19.svg', alt='Texto que describa la imagen')
          p.text-center <b>Específico</b>: definir claramente qué se quiere lograr. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/20.svg', alt='Texto que describa la imagen')
          p.text-center <b>Medible</b>: permitir evaluar resultados mediante indicadores. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-28.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/21.svg', alt='Texto que describa la imagen')
          p.text-center <b>Alcanzable</b>: ser posible de cumplir según los recursos disponibles. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-29.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/22.svg', alt='Texto que describa la imagen')
          p.text-center <b>Relevante</b>: aportar valor a la estrategia y a la empresa. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-28.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/23.svg', alt='Texto que describa la imagen')
          p.text-center <b>Temporal</b>: tener un tiempo definido para su cumplimiento. 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-11.mb-3
        .bg-color-25.p-3.mb-5.tarjeta.mb-5
          p.mb-0.text-center <b>Ejemplo</b>: “Incrementar en 25 % las ventas online durante tres meses” es un objetivo más claro y efectivo que simplemente decir “vender más”.

    .bg-color-1.tarjeta.px-4.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/13.png").mx-auto
        .col-lg
          p <b>Ejemplo aplicado</b>. La marca de moda sostenible Aura Andina estableció tres objetivos para su nueva colección:
      
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  Aumentar 40 % el alcance digital. 
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  Incrementar 20 % las ventas <em>online</em>.
            li.mb-3.d-flex
              i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
              |  Lograr 15 % más recompra de clientes. 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-3
        .bg-color-9.p-3.mb-5.tarjeta.mb-5
          p.mb-0.text-center Gracias a esta planificación, la marca obtuvo resultados medibles y organizó de manera más eficiente sus campañas digitales.
    
    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Metas
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/25.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Mientras los objetivos marcan la dirección general, las metas establecen los resultados cuantificables que permiten evaluar el desempeño. En el sistema moda, las metas traducen la estrategia en cifras concretas que facilitan el seguimiento, si el objetivo es aumentar ventas, la meta define cuánto, en cuánto tiempo y en qué condiciones, esta precisión evita interpretaciones ambiguas y fortalece la cultura de resultados. 
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/26.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  Las metas permiten convertir la intención estratégica en compromiso operativo, la coherencia entre ellas y recursos disponibles garantiza viabilidad y evita frustraciones organizacionales.

    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 Las metas pueden clasificarse según su horizonte temporal en metas de corto, mediano y largo plazo. Esta diferenciación permite equilibrar resultados inmediatos con sostenibilidad empresarial.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Corto plazo")
            h4 Corto plazo
            p.mb-0 Se relaciona con campañas estacionales o acciones inmediatas. Son iniciativas tácticas orientadas a obtener resultados rápidos, como aumentar ventas, generar tráfico o impulsar promociones específicas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Mediano plazo")
            h4 Mediano plazo
            p.mb-0 Comprende periodos trimestrales o semestrales. Busca consolidar resultados, optimizar procesos y fortalecer la relación con la audiencia mediante estrategias planificadas y sostenibles.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Largo plazo")
            h4 Largo plazo
            p.mb-0 Se enfoca en objetivos anuales o de posicionamiento continuo. Incluye acciones estratégicas y estructurales orientadas al crecimiento de la marca, la fidelización de clientes y la construcción de ventajas competitivas.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/28.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text En el sector moda, las metas deben considerar variables como temporada, comportamiento del consumidor y capacidad productiva, una meta desproporcionada puede afectar inventarios o saturar al equipo comercial, por ello, deben establecerse con base en datos históricos y análisis de mercado. 
        
        .bg-color-1.tarjeta.px-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/13.png").mx-auto
            .col-lg
              p.mb-0 <b>Ejemplo aplicado</b>. La empresa Distrito 91 Wear fijó como meta de corto plazo vender 500 unidades durante el lanzamiento de su colección cápsula en un mes. Paralelamente, estableció una meta anual de crecimiento del 30 % en ventas digitales. Esta combinación permitió balancear urgencia comercial y visión estratégica.
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .row.align-items-center.bg-color-1.px-4.tarjeta
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/10.png").mx-auto
              .col-lg
                h5 Pregunta de aplicación
                p.mb-0 ¿Qué información histórica debería revisar una marca antes de definir sus metas anuales?

        separador
        
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.6 Público
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/30.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") El público en el plan de marketing digital representa el grupo específico de personas al que se dirige la estrategia, en el sistema moda, comprender al público es fundamental debido a la alta carga simbólica del consumo, ya que la elección de una prenda no responde únicamente a necesidad funcional, sino a identidad, pertenencia y estilo de vida. Por ello, definir correctamente el público reduce desperdicio publicitario y aumenta la efectividad del mensaje, sin segmentación clara, la comunicación se diluye.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/31.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 El público objetivo representa el conjunto de consumidores con características y necesidades similares, que tienen el potencial de interesarse en un producto o servicio, sus características pueden variar según el sector, la industria y el tipo de negocio, sin embargo, algunos aspectos fundamentales incluyen 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Según Kotler y Keller (2016)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-10.p-2
          p.mb-0 Edad y género.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-10.p-2
          p.mb-0 Nivel socioeconómico.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-2
          p.mb-0 Intereses y hábitos digitales.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-10.p-2
          p.mb-0 Ubicación geográfica.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-2
          p.mb-0 Preferencias de consumo.

    p.mb-5 El público objetivo, está influenciado por diversos factores, entre ellos:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/32.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Factores psicológicos
            p.mb-0 Percepción, motivación, personalidad, actitudes y aprendizaje que influyen en la forma en que el consumidor interpreta la información, evalúa las alternativas y toma decisiones de compra. 
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/33.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Factores sociales
            p.mb-0 Influencia de la familia, grupos de referencia, amigos, cultura, subcultura y entorno social, los cuales moldean las preferencias, necesidades y comportamientos de consumo. 
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/34.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Factores culturales
            p.mb-0 Avances digitales, uso de internet, redes sociales, comercio electrónico y acceso inmediato a información y opiniones, que transforman los hábitos de compra y facilitan decisiones más informadas y rápidas.
    
    p.mb-5 Los patrones de comportamiento, del público objetivo pueden clasificarse en:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/35.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Compra habitual")
            h4 Compra habitual
            p.mb-0 Los consumidores adquieren productos de forma automática y repetitiva, basándose en la costumbre, la confianza en la marca y experiencias previas, sin dedicar tiempo a comparar alternativas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Búsqueda de variedad")
            h4 Búsqueda de variedad
            p.mb-0 El consumidor explora y prueba nuevas marcas o productos, no necesariamente por insatisfacción, sino por curiosidad, deseo de experimentar y necesidad de cambiar su rutina de consumo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Compra impulsiva")
            h4 Compra impulsiva
            p.mb-0 La decisión se toma de manera espontánea y emocional, generalmente motivada por promociones, exhibiciones atractivas, recomendaciones o estímulos del momento, sin una planificación previa.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Compra racional")
            h4 Compra racional
            p.mb-0 El consumidor analiza cuidadosamente características, precios, beneficios, opiniones y alternativas disponibles antes de elegir un producto o servicio, buscando maximizar el valor de su inversión.
    
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 Las necesidades y preferencias del público objetivo son fundamentales en el diseño de estrategias de contenido y segmentación de mercado, ya que determinan qué productos o servicios buscan, cómo los perciben y qué factores influyen en su decisión de compra.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Necesidades y preferencias del público objetivo
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Necesidades
                th.bg-color-7 Preferencias
            tbody
              tr.bg-color-white
                td 
                  p De acuerdo con Kotler y Keller (2016), las necesidades del consumidor representan los deseos o problemas que buscan resolver a través de bienes o servicios. Estas pueden dividirse en:
                  ul.lista-ul--color
                    li.mb-2.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-0 <b>Necesidades funcionales</b>: relacionadas con la utilidad y rendimiento del producto. 
                    li.mb-2.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-0 <b>Necesidades emocionales</b>: vinculadas con la experiencia, satisfacción y vínculo emocional con la marca.
                    li.mb-2.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-0 <b>Necesidades sociales</b>: influidas por la pertenencia a grupos y tendencias culturales. Preferencias del consumidor.

                td  
                  p Las preferencias, por otro lado, representan la inclinación de los consumidores hacia determinados productos, marcas o atributos, dependiendo de su estilo de vida, valores y expectativas. Algunos factores clave incluyen:
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-2 Diseño y estética del producto. 
                    li.mb-3.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-2 Relación calidad-precio.
                    li.mb-3.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-2 Experiencia previa con la marca.
                    li.mb-3.d-flex
                      i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                      p.mb-2 Recomendaciones y reseñas de otros consumidores.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/36.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") En el sistema moda, una segmentación adecuada impacta directamente en la rentabilidad, no es lo mismo dirigir una colección de lujo a estudiantes universitarios que a ejecutivos de alto nivel, la identificación precisa del público permite diseñar mensajes coherentes y elegir medios adecuados, además, fortalece la propuesta de valor y mejora la tasa de conversión.
    
    separador
    
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Pauta publicitaria

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/38.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema3/37.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4
                  p.mb-0 La pauta publicitaria digital consiste en la inversión económica destinada a promocionar contenidos o productos mediante plataformas digitales segmentadas, en el sistema moda, donde la competencia visual es intensa y el alcance orgánico es limitado, la pauta se convierte en un acelerador estratégico de resultados. 
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/4.svg").mx-auto
              .col-lg
                p.mb-0 A diferencia de la publicidad tradicional, la pauta digital permite segmentar con precisión, medir en tiempo real y optimizar continuamente, esta capacidad de control reduce el desperdicio presupuestal y aumenta la probabilidad de conversión, por tanto, la pauta no es un gasto, sino una inversión medible.

        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 La pauta puede clasificarse en pauta de reconocimiento, pauta de tráfico y pauta de conversión. La primera prioriza visibilidad y recordación de marca; la segunda busca llevar usuarios a una página específica; la tercera se enfoca en generar ventas o registros directos, sus características diferenciadas es que la pauta de reconocimiento utiliza formatos visuales impactantes; la de tráfico optimiza clics; la de conversión se basa en eventos medibles como compras. 

        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 8.
              span Tipos de pauta publicitaria en moda
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Tipo de pauta
                    th.bg-color-7 Objetivo principal
                    th.bg-color-7 Indicadores
                    th.bg-color-7 Ejemplo aplicado a moda
                tbody
                  tr.bg-color-white
                    td Reconocimiento
                    td Aumentar visibilidad y recordación de marca, generar <em>awareness</em> en audiencias nuevas
                    td 
                      ul.lista-ul--color
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Alcance. 
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Impresiones.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Incremento en seguidores.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Métricas de notoriedad de marca.
 
                    td Campaña en TikTok mostrando el <em>behind the scenes</em> de una pasarela, con <em>hashtags</em> de tendencia para posicionar la marca.
                  tr.bg-color-8
                    td Tráfico
                    td Dirigir visitas al <em>e-commerce</em> o tienda física, estimular exploración de catálogo
                    td
                      ul.lista-ul--color
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 <em>Clicks</em>.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 CTR.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Sesiones en sitio web.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Tiempo de permanencia.
                    td Anuncios en Facebook Ads que llevan directamente a la sección “Nueva colección otoño” en la tienda <em>online</em>.
                  tr.bg-color-white
                    td Conversión
                    td Generar ventas, maximizar retorno de inversión publicitaria
                    td
                      ul.lista-ul--color
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 ROAS.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Ventas.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Tasa de conversión.
                        li.mb-1.d-flex
                          i.fas.fa-caret-right.fa-xl.mt-2.bg-color-26
                          p.mb-0 Valor promedio de pedido.
                    td Campaña de <em>remarketing</em> en Google Ads mostrando productos vistos previamente, con un cupón de descuento exclusivo para cerrar la compra.

    .cajon.color-acento-contenido.bg-color-2.px-5.py-4.mb-5
      p.mb-0 En el sistema moda, la efectividad de la pauta depende de tres factores: segmentación adecuada, creatividad visual de alto impacto y análisis constante de métricas. Una segmentación incorrecta puede generar alto alcance, pero baja conversión. Por ello, la pauta debe integrarse al plan digital y no ejecutarse de manera aislada. La optimización continua garantiza sostenibilidad financiera y crecimiento escalable.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/26.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  La pauta sin segmentación es como lanzar prendas al aire esperando que alguien las compre.
    
    separador
    
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.8 SEO 
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/39.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El SEO (<em>Search Engine Optimization</em>) es el conjunto de estrategias orientadas a mejorar el posicionamiento orgánico de un sitio web en motores de búsqueda, en el sistema moda, el SEO permite que una marca sea encontrada por consumidores que buscan activamente productos o tendencias específicas. A diferencia de la pauta, el SEO no requiere pago por clic, pero exige planificación técnica y constancia, su impacto es progresivo y sostenible en el tiempo, por ello, constituye un activo estratégico de largo plazo.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema3/40.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Qué es el SEO: guía definitiva para principiantes.
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video publicado en el canal HubSpot Español, nos introduce al concepto de SEO, indicando los tipos y el impacto dentro de marketing digital.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=BicIvYl7kkY " target="_blank")
                    span Ir al video
                    i.fas.fa-link
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/41.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-0(data-aos="fade-right") En el sistema moda, una estrategia SEO adecuada implica investigar palabras clave como “moda sostenible en Colombia” o “ropa urbana masculina premium”, además, la creación de blogs sobre tendencias fortalece autoridad y mejora visibilidad. El SEO no genera resultados inmediatos, pero consolida presencia digital estable, en mercados competitivos, esta ventaja orgánica reduce dependencia de la pauta.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/42.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema3/10.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Por qué el SEO puede ser más rentable a largo plazo que la pauta constante?
    
    separador
    
    #t_3_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.9 SEM 
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/43.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El SEM (<em>Search Engine Marketing</em>), comprende las estrategias de publicidad pagada en motores de búsqueda para posicionar una marca de manera inmediata. 

    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/44.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema3/45.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4.p-3.p-lg-4
                  p.mb-0 En el sistema moda, el SEM permite captar consumidores con alta intención de compra que buscan términos específicos. 
            .row.align-items-center.bg-color-3
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/4.svg").mx-auto
              .col-lg
                p.mb-0 A diferencia del SEO, el SEM ofrece visibilidad inmediata mediante anuncios patrocinados, esta rapidez lo convierte en una herramienta eficaz para lanzamientos y promociones temporales, sin embargo, requiere inversión continua.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-3
        .bg-color-25.p-3.mb-5.tarjeta.mb-5
          h5.mb-0.text-center El SEM se clasifica principalmente en anuncios de búsqueda, anuncios <em>display</em> y Google <em>shopping</em>. 
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/46.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Anuncios de búsqueda
            p.mb-0 Aparecen en Google cuando el usuario introduce palabras clave específicas, mostrando resultados relevantes y patrocinados. 
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/47.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 <em>Display ads</em>
            p.mb-0 Se muestran en sitios asociados, utilizando imágenes, videos o banners llamativos para captar la atención del público objetivo. 
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/48.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Google <em>shopping</em>
            p.mb-0 Presenta productos con imagen y precio, permitiendo comparar opciones, acceder a tiendas y facilitar decisiones rápidas de compra.

    .cajon.color-acento-contenido.bg-color-2.px-5.py-4.mb-5
      p.mb-0 En el sistema moda, el SEM es especialmente útil durante lanzamientos de colección o temporadas comerciales, permite competir por palabras clave estratégicas y dirigir tráfico cualificado al e-commerce, no obstante, debe complementarse con SEO para equilibrar inversión y sostenibilidad, la combinación de ambas estrategias fortalece la presencia digital integral.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/49.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema3/10.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿En qué situación estratégica conviene combinar SEO y SEM simultáneamente?
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/50.png").mx-auto
            .col-lg
              p.mb-0 <b>Cita de reflexión</b>.  
              p.mb-0 “La honestidad con uno mismo es la primera clave para planificar con eficacia; sin integridad, cualquier plan es vulnerable a la improvisación.” 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/51.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.bg-color-15.tarjeta.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/52.png", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente Pódcast:
            
            TarjetaAudio.color-secundario.bg-color-white.mb-3(
              texto="Pendiente por definir el titulo del podcast"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )
    

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

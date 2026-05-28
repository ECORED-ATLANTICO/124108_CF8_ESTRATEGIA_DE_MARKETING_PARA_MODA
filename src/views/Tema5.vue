<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Audiencias
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") En el sistema moda, comprender a quién se dirige la comunicación digital es un factor determinante para la efectividad de cualquier estrategia de marketing. Las audiencias representan el conjunto de personas que interactúan, consumen o pueden llegar a interesarse por la propuesta de valor de una marca, su análisis permite reducir la dispersión de esfuerzos y aumentar la precisión comercial, por ello, el estudio de audiencias se convierte en un proceso estratégico que conecta datos, comportamiento y decisiones empresariales. 
            p.mb-0 Las marcas de moda que investigan y segmentan correctamente sus audiencias logran mensajes más relevantes, mayor eficiencia en la pauta digital y mejores tasas de conversión. 
        
        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 En contraste, la comunicación genérica diluye el impacto y eleva los costos de adquisición de clientes, comprender la audiencia implica analizar variables demográficas, psicográficas y conductuales. Este capítulo desarrolla los fundamentos conceptuales y aplicados necesarios para gestionar audiencias con enfoque estratégico en el entorno digital de la moda.

        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Definición
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
          .col-lg-8
            p La audiencia puede definirse como el conjunto de individuos que reciben, consumen o interactúan con los mensajes de una marca en entornos físicos o digitales, en el sistema moda, la audiencia no es un grupo homogéneo, sino un universo diverso con motivaciones simbólicas, aspiracionales y funcionales, comprender esta diversidad permite diseñar estrategias comunicativas más precisas. Cuando la audiencia se define correctamente, la marca optimiza su inversión y mejora su capacidad de conexión, por ello, la definición de audiencia constituye el punto de partida del marketing digital.
            .cajon.color-acento-contenido.bg-color-2.px-5.py-4
              p.mb-0 En el sistema moda, la definición de audiencia debe considerar variables como estilo de vida, sensibilidad estética y comportamiento de compra digital, no basta con conocer la edad o el género; es necesario comprender motivaciones profundas. Las marcas que dominan este análisis logran posicionamientos más sólidos, en cambio, las que trabajan con audiencias difusas enfrentan baja conversión y mensajes poco efectivos.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Clasificación
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La clasificación de audiencias permite organizar el mercado en grupos con características similares para facilitar la toma de decisiones estratégicas. En el sistema moda, esta clasificación es especialmente relevante debido a la diversidad de estilos, motivaciones y comportamientos de compra. Sin una clasificación adecuada, la comunicación se vuelve genérica y pierde efectividad, por ello, segmentar la audiencia constituye una práctica fundamental del marketing digital.
        
        p.mb-5 Las audiencias pueden clasificarse principalmente en demográficas, psicográficas y conductuales. 

        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
              div(titulo="Demográfica")
                p.ms-5 Datos cuantificables del consumidor: edad, género, nivel de ingresos, ubicación geográfica, nivel educativo y ocupación. Permiten dimensionar el tamaño del mercado y establecer la capacidad de compra del público.
                p.ms-5 <b>Definir mercado base:</b> permite delimitar el segmento primario, estimar demanda potencial, ajustar rangos de precios y seleccionar canales adecuados de distribución y comunicación. Es el primer filtro de viabilidad comercial.
                h5.ms-5 Ejemplo.
                p.ms-5.mb-0 Una marca de moda deportiva identifica como mercado base a mujeres de 20-35 años, ingresos medios, residentes en ciudades principales de Colombia, y define precios accesibles para ese poder adquisitivo.
              div(titulo="Psicográfica")
                p.ms-5 Variables cualitativas relacionadas con la mente y motivaciones del consumidor: valores, creencias, personalidad, intereses, aspiraciones, actitudes frente a la moda y estilo de vida. Permiten entender el “por qué” detrás de la compra.
                p.ms-5 <b>Construir narrativa:</b> orienta el tono de comunicación, el <em>storytelling</em> de marca, la estética visual y el posicionamiento emocional. Facilita conectar con motivaciones profundas y diferenciar la marca más allá del producto.
                h5.ms-5 Ejemplo.
                p.ms-5.mb-0 Una marca de moda sostenible detecta consumidoras con valores eco-conscientes y estilo de vida activo, por lo que construye una narrativa de “moda con propósito” y utiliza mensajes sobre impacto ambiental en sus campañas.
              div(titulo="Conductual")
                p.ms-5 Patrones observables de interacción con la marca y el entorno digital: frecuencia de compra, ticket promedio, momentos de consumo, respuesta a promociones, uso de dispositivos, <em>engagement</em> en redes y recorrido del cliente (<em>customer journey</em>).
                p.ms-5 <b>Optimizar campañas:</b> permite personalizar mensajes, automatizar <em>remarketing</em>, mejorar la segmentación en pauta, ajustar timing de promociones y aumentar la conversión mediante decisiones basadas en datos reales de comportamiento.
                h5.ms-5 Ejemplo.
                p.ms-5.mb-0 Un <em>e-commerce</em> de <em>streetwear</em> detecta que muchos usuarios abandonan el carrito en la noche y activas campañas de <em>remarketing</em> con descuento válido por 24 horas, recuperando ventas perdidas.
        

    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 En el sistema moda, la clasificación psicográfica suele tener alto peso estratégico, ya que el consumo de moda está profundamente ligado a identidad y aspiración. Por ejemplo, dos consumidores de la misma edad pueden tener motivaciones completamente distintas, la correcta clasificación permite diseñar colecciones, campañas y experiencias alineadas con expectativas reales del mercado.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/5.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 La segmentación profunda revela oportunidades invisibles al análisis superficial.
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Tipología
    
    img(src="@/assets/curso/tema5/6.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La tipología de audiencias permite identificar perfiles de consumidores según sus motivaciones predominantes frente al consumo de moda. En el sistema moda, esta tipificación facilita el diseño de propuestas de valor diferenciadas, no todos los consumidores compran por la misma razón: algunos buscan estatus, otros funcionalidad y otros coherencia ética, comprender estas diferencias permite construir estrategias más efectivas y evitar mensajes genéricos.
  
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/7.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Consumidor aspiracional
              p.mb-0 El consumidor aspiracional es aquel que orienta sus decisiones de compra no solo por necesidad, sino por el deseo de proyectar una imagen, estilo de vida o estatus con el que se identifica o al que aspira. El consumidor aspiracional no compra únicamente prendas, sino significados simbólicos asociados a la marca.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/8.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Consumidor funcional
              p.mb-0 El consumidor funcional es aquel que toma decisiones de compra basadas principalmente en la utilidad, practicidad y necesidad del producto, priorizando aspectos como calidad, durabilidad, precio y funcionalidad por encima de elementos simbólicos o emocionales. 
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema5/9.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Consumidor consciente  
              p.mb-0 El consumidor consciente es aquel que toma decisiones de compra de manera informada y responsable, considerando no solo sus necesidades personales, sino también el impacto social, ambiental y ético de los productos que adquiere.
    
    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 Cada perfil presenta características distintivas de comportamiento, sensibilidad al precio y respuesta comunicativa, esta tipología permite ajustar tanto el diseño de producto como la narrativa de marca.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") En el sistema moda, identificar correctamente la tipología predominante mejora la coherencia entre oferta y demanda, una marca sostenible que comunique como marca de lujo aspiracional puede generar disonancia, por ello, la tipología debe guiar decisiones de branding, pricing y contenido digital. El conocimiento profundo del perfil del consumidor fortalece el posicionamiento competitivo.
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema5/11.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué riesgo enfrenta una marca sostenible si comunica principalmente con códigos aspiracionales?

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Características 
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las características de las poblaciones corresponden al conjunto de rasgos cuantitativos y cualitativos que describen a los grupos humanos que conforman el mercado objetivo. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/14.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema5/13.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4
                  p.mb-0 En el sistema moda, analizar estas características permite comprender patrones de consumo, preferencias estéticas y comportamientos digitales, sin este análisis, la segmentación se vuelve superficial y la estrategia pierde precisión, por ello, el estudio poblacional constituye un insumo fundamental para la planificación de marketing.
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema5/23.svg").mx-auto
              .col-lg
                p.mb-0 Entre las características más relevantes se encuentran la estructura demográfica, la capacidad adquisitiva, la ubicación geográfica y los patrones socioculturales. La estructura demográfica identifica composición por edad y género; la capacidad adquisitiva estima poder de compra; la ubicación geográfica permite adaptar oferta logística; los patrones socioculturales revelan valores y estilos de vida. 
    
        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 Cada característica aporta una dimensión analítica distinta que enriquece la comprensión del mercado, en el sistema moda, estas variables influyen directamente en decisiones de diseño, pricing y distribución. Por ejemplo, una población joven urbana puede demandar moda rápida y digitalizada, mientras que un segmento adulto premium puede priorizar calidad y exclusividad. La lectura integrada de las características poblacionales permite anticipar tendencias y reducir incertidumbre comercial.
        
        separador
        
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.5 Segmentación
    
    p.mb-5 La segmentación de audiencias es el proceso mediante el cual el mercado se divide en grupos homogéneos para diseñar estrategias diferenciadas. En el sistema moda, la segmentación permite adaptar colecciones, mensajes y canales a necesidades específicas. Cuando la segmentación es precisa, la marca optimiza recursos y mejora la conversión, en cambio, la comunicación masiva tiende a diluir el impacto, por ello, segmentar no es opcional, sino estratégico.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Características de las técnicas de segmentación 
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/15.svg", alt="la figura muestra las características de las técnicas de segmentación")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/15-1.svg", alt="la figura muestra las características de las técnicas de segmentación")
        figcaption Fuente: SENA, 2026
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/16.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Segmentación por nichos
            p.mb-0 Una marca se enfoca exclusivamente en ropa deportiva para mujeres plus <em>size</em> que practican crossfit, creando prendas técnicas adaptadas a ese nicho.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/17.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Microsegmentación digital
            p.mb-0  Un <em>e-commerce</em> de <em>sneakers</em> muestra anuncios distintos a usuarios que visitaron “tenis running” vs. quienes vieron “tenis urbanos”, ajustando creatividades y ofertas para cada micro grupo.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/18.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Valor del cliente
            p.mb-0 Un ejemplo de segmentación basada en el cliente es, una marca de moda identifica a su 20 % de clientes que generan el 60 % de ventas y les ofrece acceso VIP a preventas y envíos gratis para aumentar su recompra.

    .bg-color-9.p-4.mb-5.tarjeta.mb-5
      p.mb-0 En el sistema moda, la microsegmentación ha cobrado especial relevancia gracias a la analítica digital y al comportamiento omnicanal del consumidor, las marcas que dominan esta práctica logran campañas altamente personalizadas y mejor retorno de inversión. La segmentación debe revisarse periódicamente, ya que las audiencias evolucionan con rapidez en entornos digitales.
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/5.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  
              p.mb-0 Segmentar bien permite hablarle al cliente correcto con el mensaje correcto.
    
    separador
    
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Medición
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.bg-color-5.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La medición de audiencias corresponde al proceso de recopilar, analizar e interpretar datos sobre el comportamiento y tamaño del público en entornos digitales. En el sistema moda, esta medición permite evaluar la efectividad de las estrategias y ajustar decisiones en tiempo real, sin métricas confiables, la gestión digital se basa en suposiciones, por ello, la medición constituye un pilar del marketing basado en datos.
        
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 11.
              span Métricas
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Nombre de la métrica
                    th.bg-color-7 Descripción
                    th.bg-color-7 Ejemplo aplicado al sistema moda
                    th.bg-color-7 Tipo
                tbody
                  tr.bg-color-white
                    td Alcance (<em>Reach</em>)
                    td Número de usuarios únicos que vieron el contenido de la marca. Permite estimar la visibilidad real de colecciones, campañas o lanzamientos en audiencias nuevas
                    td “El lanzamiento de la nueva colección cápsula alcanzó a 1.200 usuarios únicos en Instagram.”
                    td Alcance
                  tr.bg-color-8
                    td <em>Clicks</em> por enlace
                    td Cantidad de clics en enlaces que dirigen a <em>e-commerce</em>, <em>lookbook</em> o <em>landing</em> de colección. Indica interés activo hacia la oferta de la marca
                    td “El link del nuevo <em>drop</em> recibió 150 <em>clicks</em> desde <em>stories</em>.”
                    td Conversión
                  tr.bg-color-white
                    td Compartidos (<em>Shares</em>)
                    td Número de veces que el contenido de la marca es redistribuido por los usuarios. Refleja potencial de viralidad y afinidad con la propuesta estética
                    td “El <em>reel</em> del <em>outfit</em> urbano fue compartido 300 veces por la comunidad.”
                    td <em>Engagement</em>
                  tr.bg-color-8
                    td CPC (Costo por clics)
                    td Costo promedio pagado por cada clic en campañas de pauta digital. Permite evaluar la eficiencia de la inversión publicitaria en moda
                    td “La campaña del Black Fashion Week logró un CPC de $0.20.”
                    td Conversión
                  tr.bg-color-white
                    td Crecimiento de seguidores
                    td Variación neta de seguidores en un periodo. Indica expansión de la comunidad digital y atractivo de la marca
                    td “Durante el lanzamiento de temporada la marca ganó +800 seguidores (600 orgánicos).”
                    td Alcance
                  tr.bg-color-8
                    td Frecuencia de publicación
                    td Promedio de contenidos publicados en un periodo. Permite evaluar la consistencia editorial de la marca en redes de moda
                    td “La marca mantuvo 12 publicaciones semanales entre <em>feed</em> y <em>stories</em>.”
                    td Alcance
                  tr.bg-color-white
                    td Impresiones
                    td Número total de veces que el contenido aparece en pantalla, incluyendo repeticiones. Mide presión publicitaria y exposición de la marca
                    td “El anuncio de la colección primavera generó 5.000 impresiones.”
                    td Alcance
                  tr.bg-color-8
                    td Menciones orgánicas
                    td Cantidad de veces que usuarios hablan de la marca sin pauta. Refleja conversación espontánea y posicionamiento cultural
                    td “La marca recibió 120 menciones orgánicas durante la pasarela digital.”
                    td <em>Engagement</em>
                  tr.bg-color-white
                    td ROI (Retorno de inversión)
                    td Relación entre ingresos generados y la inversión en marketing. Determina la rentabilidad real de campañas de moda
                    td “La campaña de <em>influencers</em> generó $5.000 en ventas con $1.000 invertidos.”
                    td Conversión
                  tr.bg-color-8
                    td Tasa de conversión
                    td Porcentaje de usuarios que realizan la acción objetivo (compra, registro, descarga de <em>lookbook</em>). Mide la eficacia comercial del embudo
                    td “La tienda <em>online</em> logró 5 % de conversión en el lanzamiento de <em>sneakers</em>.”
                    td Conversión
                  tr.bg-color-white
                    td Tasa de <em>engagement</em>
                    td Nivel de interacción (<em>likes</em>, comentarios, compartidos) respecto al alcance. Indica qué tan relevante y atractivo es el contenido de moda
                    td “El carrusel de la nueva colección obtuvo 8 % de <em>engagement</em>.”
                    td <em>Engagement</em>
                  tr.bg-color-8
                    td Tasa de retención (Video)
                    td Porcentaje de espectadores que continúan viendo un video de la marca después de los primeros segundos. Evalúa poder de retención narrativa
                    td “El <em>fashion reel</em> mantuvo 70 % de retención hasta el minuto 5.”
                    td <em>Engagement</em>
                  tr.bg-color-white
                    td Tiempo de visualización
                    td Duración promedio que los usuarios consumen un video o contenido audiovisual de la marca. Señala profundidad de consumo
                    td “El video de <em>backstage</em> se visualizó en promedio 1 minuto de 3.”
                    td <em>Engagement</em>

        .bg-color-9.p-4.mb-5.tarjeta.mb-5
          p.mb-0 En el sistema moda, la interpretación integrada de estos indicadores permite optimizar campañas, ajustar segmentaciones y mejorar la experiencia del cliente, las marcas que monitorean continuamente sus audiencias reaccionan más rápido a cambios del mercado, la medición no es un ejercicio técnico aislado, sino un proceso estratégico permanente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/20.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema5/11.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué interpretación harías si una campaña tiene alto alcance, pero bajo engagement?
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-down") 
        .bg-color-1.p-3.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/22.png").mx-auto
            .col-lg
              p.mb-0 <b>Cita de reflexión</b>.  
              p.mb-0 “Medir sin honestidad produce datos; medir con integridad produce decisiones inteligentes.”  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .row.bg-color-15.tarjeta.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/24.png", data-aos="zoom-in")
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
  name: 'Tema5',
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

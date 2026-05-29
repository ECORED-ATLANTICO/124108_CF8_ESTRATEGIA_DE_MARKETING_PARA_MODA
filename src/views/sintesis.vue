<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p El componente formativo “Comunicación en marcas”, ofrece al aprendiz los fundamentos conceptuales y estratégicos para comprender la publicidad digital, la creación de contenidos y la planificación del <em>marketing</em> en el sistema moda. A través del estudio de técnicas, tipologías y estructuras de planificación, se fortalece la capacidad para diseñar acciones digitales alineadas con objetivos comerciales y comportamientos de audiencia. El componente promueve una visión sistémica del ecosistema digital aplicado al sector moda.
        .bg-color-20.p-4.tarjeta
            p.mb-0 Asimismo, el componente profundiza en la gestión de comunidades virtuales y el análisis de audiencias como base para la personalización estratégica. El aprendiz desarrolla competencias para segmentar, interpretar públicos y estructurar calendarios de contenido coherentes. De esta manera, se consolida una base técnica que permite optimizar la comunicación digital, mejorar la interacción con el consumidor y fortalecer el posicionamiento competitivo de marcas del sistema moda. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="la figura muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Comunicación en marcas”, el cual se organiza en seis unidades. Inicia con Publicidad digital, en donde se aborda su concepto, las técnicas, tipologías, ventajas, estrategias, medios virtuales, tendencias, calendario y culmina con terminología. Seguido encontramos el capítulo de Contenidos digitales, por medio del cual se ve su concepto, los tipos, sus características, las etiquetas, la parrilla y termina con calendarios. El tercer capítulo corresponde a Plan de marketing, donde se aborda su concepto, las características, las fases, los objetivos, las metas, el público, la pauta publicitaria y culmina abordando los temas de SEO y SEM. El capítulo cuatro desarrolla las Comunidades virtuales, en donde se aborda su concepto, características, tipos, estrategias, creación, configuración, roles, estructura, contenido, identificación, descripción, terminando con comportamiento. Se cierra el componente con el capítulo de Audiencias, en donde se aborda su definición, clasificación, tipología, características, segmentación, culminado con medición.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

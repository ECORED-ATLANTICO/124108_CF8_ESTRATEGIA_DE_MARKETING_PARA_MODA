<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8
            p El componente formativo aborda la publicidad digital aplicada al sistema moda, entendida como el conjunto de estrategias, técnicas y medios virtuales orientados a posicionar marcas, fortalecer su identidad y generar conversiones en entornos digitales. En un mercado altamente visual y competitivo, la gestión estratégica de la comunicación online se convierte en un eje determinante para la sostenibilidad empresarial.
        
        .bg-color-1.mb-5.tarjeta.px-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/intro/2.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Este componente se desarrolla mediante un enfoque conceptual y aplicado, integrando fundamentos teóricos, casos empresariales del sector moda y herramientas prácticas. El contenido será abordado desde la planeación estratégica hasta la ejecución y medición, incorporando ejemplos reales, análisis técnico y reflexión ética para fortalecer la toma de decisiones del aprendiz.

</template>

<script>
export default {
  name: 'Introduccion',
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

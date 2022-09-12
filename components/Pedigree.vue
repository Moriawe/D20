<script>
export default {
  data() {
    return {
      tooltipTriggerList: [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      ),
      tooltipList: tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      }),
    }
  },
}
</script>

<template>
  <a
    href="https://www.pawpeds.com/db/?a=p&id=1521144&g=4&p=eur&o=elastic"
    target="_blank"
    data-bs-placement="right"
    title="Stamtavla"
    data-bs-toggle="tooltip"
    ><img class="pedigree" src="/img/pedigree.png"
  /></a>
</template>

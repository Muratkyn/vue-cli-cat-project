<template>
  <div>
    <dialog open>
      <slot></slot>
    </dialog>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  width: 40%;
  position: fixed;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: #d19191;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
}
</style>

<template>
  <transition name="modal-popup">
    <div class="modal-background">
      <div class="modal-container">
        <header class="modal-header">
          <h1>{{popupModal.header}}</h1>
        </header>
        <section class="modal-section">
          {{popupModal.message}}
        </section>
        <footer class="modal-footer">
          <button class="button-close" v-on:click="closePopUpModal">Close</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      popupModal: {
        required: true,
        type: Object
      }
    },
    methods: {
      closePopUpModal: function () {
        this.$emit('closePopUpModal');
      }
    }
  }
</script>

<style>

.modal-background{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 0.3);
  transition: opacity .3s ease;
}
.modal-container {
  border: 2px solid black;
  background-color: white;
  box-shadow: 2px 2px 15px grey;
  min-width: 250px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
}

.modal-popup-enter {
  opacity: 0;
}

.modal-popup-leave-active {
  opacity: 0;
}

.modal-popup-enter .modal-container ,
.modal-popup-leave-active .modal-container{
  transition: 1s;
  /*-webkit-transform: scale(1.2);*/
  /*transform: scale(1.2);*/
  /*transform: translateY(0);*/
}

h1{
  color: red;
}

.modal-header,.modal-section{
  display: flex;
  justify-content: center;
}

.modal-footer{
  display: flex;
  justify-content: flex-end;
}

.modal-section, .modal-footer{
  padding: 15px 15px;
}


</style>



<!--<script>-->
  <!--export default {-->
    <!--name: 'modal',-->
    <!--data: function() {-->
      <!--return {-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--close() {-->
        <!--this.$emit('close');-->
      <!--},-->
    <!--},-->
  <!--};-->

<!--</script>-->
<!--<template>-->
  <!--<transition name="modal-fade">-->
    <!--<div class="modal-backdrop">-->
      <!--<div class="modal"-->
           <!--role="dialog"-->
           <!--aria-labelledby="modalTitle"-->
           <!--aria-describedby="modalDescription"-->
      <!--&gt;-->
        <!--<header-->
          <!--class="modal-header"-->
          <!--id="modalTitle"-->
        <!--&gt;-->
          <!--<slot name="header">-->
            <!--Alert!-->
          <!--</slot>-->
        <!--</header>-->
        <!--<section-->
          <!--class="modal-body"-->
          <!--id="modalDescription"-->
        <!--&gt;-->
          <!--<slot name="body">-->
          <!--</slot>-->
        <!--</section>-->
        <!--<footer class="modal-footer">-->
          <!--<slot name="footer">-->

            <!--<button-->
              <!--type="button"-->
              <!--class="btn-green"-->
              <!--@click="close"-->
              <!--aria-label="Close modal"-->
            <!--&gt;-->
              <!--Close-->
            <!--</button>-->
          <!--</slot>-->
        <!--</footer>-->
      <!--</div>-->
    <!--</div>-->
  <!--</transition>-->
<!--</template>-->
<!--<style>-->
  <!--.modal-backdrop {-->
    <!--position: fixed;-->
    <!--top: 0;-->
    <!--bottom: 0;-->
    <!--left: 0;-->
    <!--right: 0;-->
    <!--background-color: rgba(0, 0, 0, 0.3);-->
    <!--display: flex;-->
    <!--justify-content: center;-->
    <!--align-items: center;-->
  <!--}-->

  <!--.modal {-->
    <!--background: #FFFFFF;-->
    <!--box-shadow: 2px 2px 20px 1px;-->
    <!--overflow-x: auto;-->
    <!--display: flow;-->
    <!--flex-direction: column;-->
    <!--width: 250px;-->
    <!--height: 200px;-->
  <!--}-->

  <!--.modal-header,-->
  <!--.modal-footer {-->
    <!--padding: 15px;-->
    <!--display: flex;-->
  <!--}-->

  <!--.modal-header {-->
    <!--border-bottom: 1px solid #eeeeee;-->
    <!--color: #ae0b06;-->
    <!--justify-content: center;-->
    <!--font-size: x-large;-->
    <!--font-family: 'Times New Roman';-->
  <!--}-->

  <!--.modal-footer {-->
    <!--border-top: 1px solid #eeeeee;-->
    <!--justify-content: flex-end;-->
    <!--padding: 10px;-->
  <!--}-->

  <!--.modal-body {-->
    <!--position: relative;-->
    <!--padding: 20px 10px;-->

  <!--}-->

  <!--.btn-green {-->
    <!--color: white;-->
    <!--background: #4AAE9B;-->
    <!--border: 1px solid #4AAE9B;-->
    <!--border-radius: 2px;-->
    <!--height: 30px;-->
    <!--width: 70px;-->
  <!--}-->
<!--</style>-->

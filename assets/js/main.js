let calculadora = {
  display: document.querySelector('.display'),


  inicia() {
    this.clicaBotao()
  },

  calcula() {
    let calcString = this.display.value
    
    try {
      this.display.value = Number(eval(calcString).toFixed(2))

    } catch(e) {
      alert('Ocorreu um erro')
    }
    
  },

  clicaBotao() {
    document.addEventListener('click', e => {
      let el = e.target
      
      if (el.classList.contains('btn-num')) {
        this.display.value += el.innerText
      }
      
      if (el.classList.contains('btn-clear')) {
        this.display.value = ''
      }
      
      if (el.classList.contains('btn-del')) {
        this.display.value = this.display.value.slice(0,-1)
      }
      
      if (el.classList.contains('btn-eq')) {
        this.calcula()
      }
    })
  }
}

calculadora.inicia()
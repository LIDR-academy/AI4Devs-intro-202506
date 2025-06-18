
document.addEventListener('alpine:init', () => {

    Alpine.data('textReverser', () => ({
      original: '',
      invertida: '',
  
      invertirTexto() {
        if (this.original.length > 3) {
            this.invertida = [...this.original].reverse().join('');
          } else {
            this.invertida = '';
          }        
      }
    }));
  });
  

  // Generador de Colores
  hex (c:any) {
    var s = "0123456789abcdef";
    var i = parseInt (c);
    if (i == 0 || isNaN (c))
      return "00";
    i = Math.round (Math.min (Math.max (0, i), 255));
    return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
  }

  convertToHex (rgb:any) {
    return this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
  }

  trima (s:any) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

  convertToRGB (hexa:any) {
    hexa = this.trima(hexa);
    var color = [];
    color[0] = parseInt (hexa.substring (0, 2), 16);
    color[1] = parseInt (hexa.substring (2, 4), 16);
    color[2] = parseInt (hexa.substring (4, 6), 16);
    return color;
  }

  generateColor(colorStart:any,colorEnd:any,colorCount:any){

    // The beginning of your gradient
    var start = this.convertToRGB(colorStart);    
  
    // The end of your gradient
    var end   = this.convertToRGB(colorEnd);    
  
    // The number of colors to compute
    var len = colorCount;

    //Alpha blending amount
    var alpha = 0.0;
    var saida = [];
    for (let i = 0; i < len; i++) {
      var c = [];
      alpha += (1.0/len);    
      c[0] = start[0] * alpha + (1 - alpha) * end[0];
      c[1] = start[1] * alpha + (1 - alpha) * end[1];
      c[2] = start[2] * alpha + (1 - alpha) * end[2];
  
      saida.push(this.convertToHex (c)); 
    }
    return saida.reverse();
  }
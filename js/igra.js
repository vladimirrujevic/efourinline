class Igralec {
  constructor(ime, st){
    this.ime = ime;
    this.st = st;
    this.zmage = 0;
  }
  zmaga(){
    this.zmage += 1;
    alert("Zmaga!");
  }
};

class Igra{
  constructor(i1, i2){
    var i, j;
    this.i1 = i1;
    this.i2 = i2;
    this.naVrsti = i1;
    this.l = false;
    this.polje = [];
    for(i = 0; i < 6; i++){
      this.polje[i] = [];
      for(j = 0; j<7; j++){
        this.polje[i][j] = 0;
      }
    }
  }
  potez(y){
    var ret = [], i = 5;
    if(this.polje[0][y] != 0){
      ret[0] = -1;
    } else {
      ret[0] = this.naVrsti.st;
      while(i>=0){
        if(this.polje[i][y] === 0){
          this.polje[i][y] = this.naVrsti.st;
          ret[1] = i;
          ret[2] = y;
          break;
        }
        i--;
      }
      if(this.naVrsti.st === this.i1.st){
        this.naVrsti = this.i2;
      } else {
        this.naVrsti = this.i1;
      }
    }
    return ret;
  }
}
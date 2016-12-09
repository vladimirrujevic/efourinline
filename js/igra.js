class Igralec {
  constructor(ime, st){
    this.ime = ime;
    this.st = st;
    this.zmage = 0;
  }
  zmaga(){
    this.zmage += 1;
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
      for(j = 0; j<7; j++)
        this.polje[i][j] = 0;
    }
  }
  potez(y){
    var ret = [], i = 5;
    if(this.l || this.polje[0][y] != 0)
      ret[0] = -1;
    else {
      ret[0] = this.naVrsti.st;
      while(i >= 0){
        if(this.polje[i][y] === 0){
          this.polje[i][y] = this.naVrsti.st;
          ret[1] = i;
          ret[2] = y;
          break;
        }
        i--;
      }
      if(this.naVrsti.st === this.i1.st)
        this.naVrsti = this.i2;
      else
        this.naVrsti = this.i1;
    }
    return ret;
  }
  preveriZmaga(x, y, p){
    var v = 0, i = x, j = y;
    //vodoravno
    while(i<6 && j<7 && this.polje[i][j]==p){
      v++;
      j++;
    }
    j = y - 1;
    while(i<6 && j>=0 && this.polje[i][j]==p){
      v++;
      j--;
    }
    if(v >= 4)
      return true;
    //navpično
    v = 0, i = x, j = y;
    while(i<6 && j<7 && this.polje[i][j]==p){
      v++;
      i++;
    }
    i = x - 1;
    while(i>=0 && j<7 && this.polje[i][j]==p){
      v++;
      i--;
    }
    if(v >= 4)
      return true;
    //diagonalno 1
    v = 0, i = x, j = y;
    while(i<6 && j<7 && this.polje[i][j]==p){
      v++;
      i++;
      j++;
    }
    i = x - 1;
    j = y - 1;
    while(i>=0 && j>=0 && this.polje[i][j]==p){
      v++;
      i--;
      j--;
    }
    if(v >= 4)
      return true;
    //diagonalno 2
    v = 0, i = x, j = y;
    while(i>=0 && j<7 && this.polje[i][j]==p){
      v++;
      i--;
      j++;
    }
    i = x + 1;
    j = y - 1;
    while(i<6 && j>=0 && this.polje[i][j]==p){
      v++;
      i++;
      j--;
    }
    if(v >= 4)
      return true;
    return false;
  }
  preveriNeodloceno(){
    var i = 0;
    for(i = 0; i < 7; i++)
      if(this.polje[0][i] == 0)
        return false;
    return true;
  };
  lock(){
    this.l = !this.l;
  }
}
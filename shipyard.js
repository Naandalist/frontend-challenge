class Shipyard {
  constructor() {
    this._perahuMotorHouse = [];
    this._perahuLayarHouse = [];
    this._kapalPesiarHouse = [];
  }
  shipKeeper(type) {
    if (typeof type !== "string") return `jenis kapal tidak diketahui`;

    let previousTotal = 0;
    if (type === "perahu motor") {
      previousTotal = this._perahuMotorHouse.length;
      this._perahuMotorHouse.push(type);
      if (this._perahuMotorHouse.length > previousTotal) {
        return `kapal jenis ${type} berhasil disimpan`;
      }
    } else if (type === "perahu layar") {
      previousTotal = this._perahuLayarHouse.length;
      this._perahuLayarHouse.push(type);
      if (this._perahuLayarHouse.length > previousTotal) {
        return `kapal jenis ${type} berhasil disimpan`;
      }
    } else if (type === "kapal pesiar") {
      previousTotal = this._kapalPesiarHouse.length;
      this._kapalPesiarHouse.push(type);
      if (this._kapalPesiarHouse.length > previousTotal) {
        return `kapal jenis ${type} berhasil disimpan`;
      }
    } else {
      return `Maaf, tempat penyimpanan untuk jenis kapal ${type} belum tersedia`;
    }
  }
}

class saveTheShip extends Shipyard {
  constructor() {
    super();
  }
}

const saveTheShipApp = new saveTheShip();
console.log(saveTheShipApp.shipKeeper("kapal layar"));

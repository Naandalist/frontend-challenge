class Shipyard {
  constructor() {
    this._typeOfShips = ["perahu layar", "perahu motor", "kapal pesiar"];
    this._shipHouse = {
      "perahu layar": [],
      "perahu motor": [],
      "kapal pesiar": []
    };
  }

  shipKeeper(ship) {
    if (typeof ship !== "string") return `Maaf, jenis kapal tidak diketahui`;

    const length = this._typeOfShips.length;
    const type = this._typeOfShips;

    for (let i = 0; i < length; i++) {
      if (ship === type[i]) {
        this._shipHouse[type[i]].push(ship);
        return `kapal jenis ${ship} berhasil disimpan ke tempat penyimpanan ${type[i]}`;
      }
    }
    return `Maaf, tempat penyimpanan kapal jenis ${ship} belum tersedia`;
  }
}

class saveTheShip extends Shipyard {
  constructor() {
    super();
  }
}

const saveTheShipApp = new saveTheShip();

const ship = "kapal pesiar";
console.log(saveTheShipApp.shipKeeper(ship));

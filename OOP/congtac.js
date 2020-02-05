class SwitchButton {
  constructor() {
    this.status = true;
  }
  switchOff() {
    this.status = false;
  }
  switchOn() {
    this.status = true;
  }
  connnectToLamp(electricLamp) {
    if (electricLamp > 0 && electricLamp <= 10) {
      if (this.status && electricLamp.status) {
        return turnOn();
      }
      if (this.status && !electricLamp.status) {
        return turnOff();
      }
    }
  }
}
class ElectricLamp {
  constructor() {
    this.status = true;
  }
  turnOff() {
    document.getElementById("turnOff").innerHTML = "Tắt đèn";
    this.status = true;
  }
  turnOn() {
    document.getElementById("turnOn").innerHTML = "Bật đèn";
    this.status = false;
  }
}
let switchButton = new SwitchButton();
switchButton.connnectToLamp(10);
switchButton.switchOff();
switchButton.switchOn();
let electricLamp = new ElectricLamp();
electricLamp.turnOff();
electricLamp.turnOn();

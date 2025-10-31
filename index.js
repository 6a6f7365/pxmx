class Oscillator {
  constructor() {
    class Note {
      constructor(note, env) {}
    }

    this.poly = 1;
    this.osc1 = {
      enable: true,
      table: undefined,
      oct: 0,
      semi: 0,
      det: 0,
      phase: 0,
      rand: 0,
      uni: 1,
      uni_det: 0,
      uni_blend: 0,
      pan: 0,
      vol: 100,
      env: {
        atk: 0,
        hold: 0,
        dec: 1,
        sus: 0,
        rel: 0,
      },
    };
    this.osc2 = {
      enable: false,
      table: undefined,
      oct: 0,
      semi: 0,
      det: 0,
      phase: 0,
      rand: 0,
      uni: 1,
      uni_det: 0,
      uni_blend: 0,
      pan: 0,
      vol: 100,
      env: {
        atk: 0,
        hold: 0,
        dec: 1,
        sus: 0,
        rel: 0,
      },
    };
    this.sub = { enable: false, type: undefined, oct: 0, pan: 0, vol: 100 };
    this.smp = {
      enable: false,
      type: undefined,
      phase: 0,
      rand: 0,
      pitch: 0,
      pan: 0,
      vol: 100,
    };
  }

  async play() {}
}

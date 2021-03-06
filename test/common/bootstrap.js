global.IS_TEST_MODE = true;

// Built-ins
global.Emitter = require("events").EventEmitter;

// Internal
global.Collection = require("../../lib/mixins/collection");
global.within = require("../../lib/mixins/within");
global.five = require("../../lib/johnny-five");

// Third Party (library)
global.converter = require("color-convert");
global.SerialPort = require("serialport");

// Third Party (test)
global.mocks = require("mock-firmata");
global.sinon = require("sinon");


global.Firmata = mocks.Firmata;
global.MockFirmata = mocks.Firmata;
global.MockSerialPort = mocks.SerialPort;

global.Accelerometer = five.Accelerometer;
global.Animation = five.Animation;
global.Altimeter = five.Altimeter;
global.Barometer = five.Barometer;
global.Board = five.Board;
global.Boards = five.Boards;
global.Button = five.Button;
global.Buttons = five.Buttons;
global.Color = five.Color;
global.Compass = five.Compass;
global.Distance = five.Distance;
global.ESC = five.ESC;
global.ESCs = five.ESCs;
global.Expander = five.Expander;
global.Fn = five.Fn;
global.GPS = five.GPS;
global.Gripper = five.Gripper;
global.Gyro = five.Gyro;
global.Hygrometer = five.Hygrometer;
global.IMU = five.IMU;
global.Multi = five.Multi;
global.IR = five.IR;
global.Keypad = five.Keypad;
global.LCD = five.LCD;
global.Led = five.Led;
global.LedControl = five.LedControl;
global.LedMatrix = five.Led.Matrix;
global.Light = five.Light;
global.Joystick = five.Joystick;
global.Motion = five.Motion;
global.Motor = five.Motor;
global.Motors = five.Motors;
global.Nodebot = five.Nodebot;
global.Piezo = five.Piezo;
global.Ping = five.Ping;
global.Pir = five.Pir;
global.Pin = five.Pin;
global.Proximity = five.Proximity;
global.Relay = five.Relay;
global.Repl = five.Repl;
global.Sensor = five.Sensor;
global.Servo = five.Servo;
global.ShiftRegister = five.ShiftRegister;
global.Sonar = five.Sonar;
global.Stepper = five.Stepper;
global.Switch = five.Switch;
global.Thermometer = five.Thermometer;
global.Virtual = five.Board.Virtual;
global.Wii = five.Wii;



function newBoard(pins) {

  if (pins) {
    pins.forEach(function(pin) {
      Object.assign(pin, {
        mode: 1,
        value: 0,
        report: 1,
        analogChannel: 127
      });
    });
  }

  var io = new MockFirmata({
    pins: pins
  });

  io.SERIAL_PORT_IDs.DEFAULT = 0x08;

  var board = new Board({
    io: io,
    debug: false,
    repl: false
  });

  io.emit("connect");
  io.emit("ready");

  return board;
}

global.newBoard = newBoard;


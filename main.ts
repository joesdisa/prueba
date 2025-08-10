import sonar
    from microbit import *

while True:
    distancia = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)

if distancia > 0 and distancia < 15:
        # Abre la tapa
pins.servo_write_pin(AnalogPin.P0, 90)
sleep(3000)
        # Cierra la tapa
pins.servo_write_pin(AnalogPin.P0, 0)

sleep(500)

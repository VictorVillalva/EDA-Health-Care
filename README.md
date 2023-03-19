# EDA-Health-Care

ESP32 trabaja como cliente tomando el ritmo cardiaco y el pulso, estos datos son enviados a un servidor por medio de WebSockets y MQTT de aws (PENDIENTE) en base a lo que haga informa al broker y reaccionan los eventos

Un Usuario puede darse de alta en la aplicación web y dar de alta el dispositivo que trackea sus signos vitales, este puede consultar cuantas veces sea necesario o requiera ver su monitoreo

Cuando el sensor detecte alguna anomalía en los signos vitales, notificará mediante SMS al teléfono de emergencia que el usuario haya proporcionado

=================================== OPCIONAL ===================================

El usuario no ve la info pero si la ve un doctor, él puede ver el monitoreo y si ve algo raro o algo que el sistema detecte como anormal podrá pulsar un botón que mande la información al tel de emergencia y que mande una ambulancia(simulado)


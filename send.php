<?php
mail("gerencia@corpsrg.co", "Contacto desde el sitio: corpsrg.co " . date("Y-m-d H:i:s"), "<pre>".print_r($_POST,true)."</pre>", "From: noreply@corpsrg.co");
mail("info@solucionestecnologicas.co", "Contacto desde el sitio: corpsrg.co " . date("Y-m-d H:i:s"), "<pre>".print_r($_POST,true)."</pre>", "From: noreply@corpsrg.co");
header("Location: /index.html#thanks");

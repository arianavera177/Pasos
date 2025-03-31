
//listo
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MotionService } from '../../Services/motion.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-paso',
//   imports:[CommonModule],
//   templateUrl: './paso.component.html',
//   styleUrls: ['./paso.component.css']
// })
// export class PasoComponent implements OnInit, OnDestroy {
//   pasos: number = 0;
//   aceleracion: number = 0;

//   constructor(private motionService: MotionService) {}

//   ngOnInit(): void {
//     this.motionService.pasos$.subscribe(pasos => {
//       this.pasos = pasos;
//     });

//     this.motionService.aceleracion$.subscribe(aceleracion => {
//       this.aceleracion = aceleracion;
//     });

//     this.motionService.iniciarContador();
//   }

//   ngOnDestroy(): void {
//     this.motionService.stopMotion();
//   }

//   detenerMonitoreo() {
//     this.motionService.stopMotion();
//   }

//   // Método que se llama cuando cambia el toggle
//   toggleMonitoreo(event: any) {
//     if (event.target.checked) {
//       this.motionService.iniciarContador();  // Inicia el monitoreo cuando el toggle se activa
//     } else {
//       this.detenerMonitoreo();  // Detiene el monitoreo cuando el toggle se desactiva
//     }
//   }
// }



// Importaciones necesarias para el componente
import { Component, OnInit, OnDestroy } from '@angular/core';  // Para poder usar los ciclos de vida del componente
import { MotionService } from '../../Services/motion.service';  // Importamos el servicio que maneja la aceleración y el conteo de pasos
import { CommonModule } from '@angular/common';  // Para incluir el CommonModule en este componente, necesario para algunos elementos del template

// Decorador del componente. Define su selector, template y estilos
@Component({
  selector: 'app-paso',  // Nombre del selector del componente
  imports:[CommonModule],  // Especificamos que se usará CommonModule
  templateUrl: './paso.component.html',  // Enlazamos el archivo HTML que contiene la vista
  styleUrls: ['./paso.component.css']  // Enlazamos el archivo CSS para los estilos del componente
})

// Definimos la clase del componente
export class PasoComponent implements OnInit, OnDestroy {
  // Variables para almacenar los valores de pasos y aceleración
  pasos: number = 0;  // Inicializamos los pasos en 0
  aceleracion: number = 0;  // Inicializamos la aceleración en 0

  // El constructor inyecta el servicio 'MotionService' para que podamos acceder a sus métodos y datos
  constructor(private motionService: MotionService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Nos suscribimos al observable de 'pasos$' para actualizar la variable 'pasos' cada vez que cambie el valor
    this.motionService.pasos$.subscribe(pasos => {
      this.pasos = pasos;  // Actualizamos el contador de pasos
    });

    // Nos suscribimos al observable de 'aceleracion$' para actualizar la variable 'aceleracion' cada vez que cambie el valor
    this.motionService.aceleracion$.subscribe(aceleracion => {
      this.aceleracion = aceleracion;  // Actualizamos el valor de la aceleración
    });

    // Llamamos a 'iniciarContador' para empezar a contar los pasos al cargar el componente
    this.motionService.iniciarContador();
  }

  // Método que se ejecuta cuando el componente es destruido (cuando deja de estar presente en la vista)
  ngOnDestroy(): void {
    // Llamamos a 'stopMotion' para detener el monitoreo cuando el componente es destruido
    this.motionService.stopMotion();
  }

  // Método para detener el monitoreo de la aceleración
  detenerMonitoreo() {
    this.motionService.stopMotion();  // Detenemos todos los listeners de aceleración
  }

  // Método que se llama cuando el valor del toggle cambia (cuando el usuario activa o desactiva el switch)
  toggleMonitoreo(event: any) {
    if (event.target.checked) {
      // Si el toggle está activado, iniciamos el monitoreo de pasos
      this.motionService.iniciarContador();
    } else {
      // Si el toggle está desactivado, detenemos el monitoreo
      this.detenerMonitoreo();
    }
  }
}

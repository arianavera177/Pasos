// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MotionService {

//   constructor() { }
// }

// // services/motion.service.ts
// import { Injectable } from '@angular/core';
// import { Motion } from '@capacitor/motion';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MotionService {
//   private pasos = 0;
//   private pasosSubject = new BehaviorSubject<number>(this.pasos);
//   pasos$ = this.pasosSubject.asObservable();
//   private lastAccelerationZ = 0;
//   private threshold = 1.2; // Sensibilidad del paso

//   constructor() {}

//   iniciarContador() {
//     Motion.addListener('accel', (event) => {
//       const deltaZ = Math.abs(event.acceleration.z - this.lastAccelerationZ);
//       if (deltaZ > this.threshold) {
//         this.pasos++;
//         this.pasosSubject.next(this.pasos);
//       }
//       this.lastAccelerationZ = event.acceleration.z;
//     });
//   }
// }



// import { Injectable } from '@angular/core';
// import { Motion } from '@capacitor/motion';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MotionService {
//   private pasos = 0;
//   private pasosSubject = new BehaviorSubject<number>(this.pasos);
//   pasos$ = this.pasosSubject.asObservable();

//   private aceleracion = 0;
//   private aceleracionSubject = new BehaviorSubject<number>(this.aceleracion);
//   aceleracion$ = this.aceleracionSubject.asObservable();

//   private lastAccelerationZ = 0;
//   private threshold = 1.2; // Sensibilidad del paso

//   constructor() {}

//   iniciarContador() {
//     Motion.addListener('accel', (event) => {
//       const deltaZ = Math.abs(event.acceleration.z - this.lastAccelerationZ);
//       if (deltaZ > this.threshold) {
//         this.pasos++;
//         this.pasosSubject.next(this.pasos);
//       }

//       this.aceleracion = event.acceleration.z;
//       this.aceleracionSubject.next(this.aceleracion);

//       this.lastAccelerationZ = event.acceleration.z;
//     });
//   }

//   stopMotion() {
//     Motion.removeListener('accel');
//   }
// }


// import { Injectable } from '@angular/core';
// import { Motion } from '@capacitor/motion';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MotionService {
//   private pasos = 0;
//   private pasosSubject = new BehaviorSubject<number>(this.pasos);
//   pasos$ = this.pasosSubject.asObservable();

//   private aceleracion = 0;
//   private aceleracionSubject = new BehaviorSubject<number>(this.aceleracion);
//   aceleracion$ = this.aceleracionSubject.asObservable();

//   private lastAccelerationZ = 0;
//   private threshold = 1.2; // Sensibilidad del paso

//   constructor() {}

//   iniciarContador() {
//     Motion.addListener('accel', (event) => {
//       const deltaZ = Math.abs(event.acceleration.z - this.lastAccelerationZ);
//       if (deltaZ > this.threshold) {
//         this.pasos++;
//         this.pasosSubject.next(this.pasos);
//       }

//       this.aceleracion = event.acceleration.z;
//       this.aceleracionSubject.next(this.aceleracion);

//       this.lastAccelerationZ = event.acceleration.z;
//     });
//   }

//   stopMotion() {
//     Motion.removeAllListeners();
//   }
// }

//listo
// import { Injectable } from '@angular/core';
// import { Motion } from '@capacitor/motion';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MotionService {
//   private pasos = 0;
//   private pasosSubject = new BehaviorSubject<number>(this.pasos);
//   pasos$ = this.pasosSubject.asObservable();

//   private aceleracion = 0;
//   private aceleracionSubject = new BehaviorSubject<number>(this.aceleracion);
//   aceleracion$ = this.aceleracionSubject.asObservable();

//   private lastAccelerationZ = 0;
//   private threshold = 1.2; // Sensibilidad del paso

//   constructor() {}

//   iniciarContador() {
//     Motion.addListener('accel', (event) => {
//       const deltaZ = Math.abs(event.acceleration.z - this.lastAccelerationZ);
//       if (deltaZ > this.threshold) {
//         this.pasos++;
//         this.pasosSubject.next(this.pasos);
//       }

//       this.aceleracion = event.acceleration.z;
//       this.aceleracionSubject.next(this.aceleracion);

//       this.lastAccelerationZ = event.acceleration.z;
//     });
//   }

//   stopMotion() {
//     Motion.removeAllListeners(); // Detener todos los escuchadores
//   }
// }



// Importamos los módulos necesarios
import { Injectable } from '@angular/core';  // Para poder usar el decorador Injectable y convertir esta clase en un servicio
import { Motion } from '@capacitor/motion';  // Para poder usar las funciones de aceleración del dispositivo (capacitor/motion)
import { BehaviorSubject } from 'rxjs';  // BehaviorSubject nos permite manejar y emitir cambios en el número de pasos y aceleración

// Decorador Injectable, lo que significa que este servicio se puede inyectar y usar en otros componentes
@Injectable({ providedIn: 'root' })
export class MotionService {
  // Variable privada para guardar el número de pasos contados
  private pasos = 0;
  // Creamos un BehaviorSubject para manejar los cambios en el número de pasos
  private pasosSubject = new BehaviorSubject<number>(this.pasos);
  // Exponemos el observable para que otros componentes puedan suscribirse y recibir actualizaciones
  pasos$ = this.pasosSubject.asObservable();

  // Variable privada para guardar la aceleración medida en el eje Z
  private aceleracion = 0;
  // Creamos otro BehaviorSubject para la aceleración
  private aceleracionSubject = new BehaviorSubject<number>(this.aceleracion);
  // Exponemos este observable para que otros componentes también puedan recibir actualizaciones de la aceleración
  aceleracion$ = this.aceleracionSubject.asObservable();

  // Guardamos la última aceleración medida en el eje Z
  private lastAccelerationZ = 0;
  // Umbral de sensibilidad para detectar un paso (cuánto tiene que cambiar la aceleración para que lo contemos como un paso)
  private threshold = 1.2;

  // Constructor vacío (no necesitamos inyectar nada en este caso)
  constructor() {}

  // Método para iniciar el contador de pasos, escuchando los cambios en la aceleración
  iniciarContador() {
    // Agregamos un 'listener' para escuchar cada vez que hay un cambio en la aceleración
    Motion.addListener('accel', (event) => {
      // Calculamos la diferencia en la aceleración en el eje Z
      const deltaZ = Math.abs(event.acceleration.z - this.lastAccelerationZ);
      // Si la diferencia es mayor que el umbral, lo contamos como un paso
      if (deltaZ > this.threshold) {
        this.pasos++;  // Aumentamos el contador de pasos
        this.pasosSubject.next(this.pasos);  // Emitimos el nuevo número de pasos
      }

      // Guardamos el valor de la aceleración en el eje Z
      this.aceleracion = event.acceleration.z;
      // Emitimos el valor de la aceleración
      this.aceleracionSubject.next(this.aceleracion);

      // Actualizamos la última aceleración medida en el eje Z
      this.lastAccelerationZ = event.acceleration.z;
    });
  }

  // Método para detener la escucha de los cambios en la aceleración
  stopMotion() {
    // Quitamos todos los 'listeners' que habíamos agregado
    Motion.removeAllListeners();
  }
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MotionComponent } from './Component/motion/motion.component';



// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'myapp';
// }



// app.component.ts
import { Component } from '@angular/core';
import { PasoComponent } from "./Component/paso/paso.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PasoComponent]
})
export class AppComponent {
  title = 'Sensores de Movimiento';
}



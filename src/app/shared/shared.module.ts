import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components/components.module";
import { DirectivesModule } from "./directives/directives.module";
import { RutPipe } from "./pipe/rut.pipe";

@NgModule({
  declarations: [RutPipe],
  imports: [CommonModule],
  exports: [
    ComponentsModule,
    DirectivesModule,
    RutPipe,
  ]
})
export class SharedModule {}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonItem, IonButton, IonText, IonIcon } from "@ionic/angular/standalone";
import { Catbreeds } from 'src/app/shared/utils/cat.interface';

@Component({
  selector: 'cards',
  imports: [ IonText, IonButton, IonItem, IonCardContent, IonCard,RouterModule],
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {

  cat = input<Catbreeds>();

}

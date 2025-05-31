import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonList, IonListHeader, IonSkeletonText, IonItem, IonLabel,IonThumbnail, IonCard, IonCardContent, IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'skeleton-card',
  imports: [ IonText, IonCardContent, IonCard, IonItem, IonSkeletonText ],
  templateUrl: './skeleton-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonCardComponent { }

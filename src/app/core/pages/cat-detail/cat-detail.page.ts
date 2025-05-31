import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonBackButton } from '@ionic/angular/standalone';
import { CatbreedsService } from 'src/app/shared/services/catbreeds.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { Catbreeds } from 'src/app/shared/utils/cat.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.page.html',
  styleUrls: ['./cat-detail.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export default class CatDetailPage {

  private cats_service = inject(CatbreedsService);
  private activatedRoute = inject(ActivatedRoute);
  cat_name = signal<string>('');
  catResource = rxResource<Catbreeds[], { query: { name: string } }>({
    request: () => ({ query: { name: this.cat_name() } }),
    loader: ({ request }) => {
      if (!request.query) return of(null);
      this.activatedRoute.params.subscribe({
        next: ({ name }) => {
          console.log(name);
          this.cat_name.set(name ? name : '');
        }
      });
      return this.cats_service.searchByName(request.query.name);
    }
  })

  cat =linkedSignal<Catbreeds[]>(() => this.catResource.value()!);

}

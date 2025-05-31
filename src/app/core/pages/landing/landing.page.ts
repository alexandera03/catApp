import { Component, effect, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonListHeader, IonSkeletonText, IonItem, IonLabel, IonThumbnail, InfiniteScrollCustomEvent, IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner } from '@ionic/angular/standalone';
import { CardsComponent } from '../../components/cards/cards.component';
import { CatbreedsService } from 'src/app/shared/services/catbreeds.service';
import { Catbreeds } from 'src/app/shared/utils/cat.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';
import { SkeletonCardComponent } from "../../components/skeleton-card/skeleton-card.component";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonSpinner,
    IonSearchbar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardsComponent,
    IonInfiniteScroll,
    IonInfiniteScrollContent, SkeletonCardComponent]
})
export default class LandingPage {

  private cats_service = inject(CatbreedsService);
  limit = signal(10);
  page = signal(0);
  hasMore = signal(true); // Para controlar si hay más datos
  loading = signal(false); // Para evitar scroll duplicado
  searchTerm = signal('');

  catsResource = rxResource<Catbreeds[], { query: { limit: number, page: number, search?: string } }>({
    request: () => ({ query: { limit: this.limit(), page: this.page(), search: this.searchTerm() || undefined } }),
    loader: ({ request }) => {
      const { limit, page, search } = request.query;

      if (search) {
        // Si hay búsqueda, llamar al endpoint de búsqueda
        return this.cats_service.searchByName(search);
      } else {
        // Endpoint original
        return this.cats_service.getAllCatBreeds(limit, page);
      }
    }
  })

  // cats = linkedSignal<Catbreeds[]>(() => this.catsResource.value()!);
  cats = signal<Catbreeds[]>([]);



  loadCats = effect(() => {
    const result = this.catsResource.value();
    if (!result) return;

    // Si es primera página, reinicia
    if (this.page() === 0) {
      this.cats.set(result);
    } else {
      this.cats.update(prev => [...prev, ...result]);
    }

    // Si el resultado es menor que el límite, ya no hay más
    if (result.length < this.limit()) {
      this.hasMore.set(false);
    }

    // Siempre terminamos la carga
    this.loading.set(false);
  });
  search(event: any) {
    const term = event.detail.value?.trim() ?? '';
    this.searchTerm.set(term);
    this.page.set(0); // Reinicia paginación
    this.hasMore.set(true); // habilita el scroll infinito
    this.cats.set([]);  // Limpia resultados actuales
    this.catsResource.reload();  // Carga con nuevo término
  }
  clearSearch() {
    this.searchTerm.set('');
    this.page.set(0);
    this.hasMore.set(true);
    this.cats.set([]);
    this.catsResource.reload();
  }
  async onIonInfinite(event: InfiniteScrollCustomEvent) {
    if (this.loading() || !this.hasMore()) {
      event.target.complete();
      return;
    }

    this.loading.set(true);
    this.page.update(p => p + 1);
    this.catsResource.reload();
    event.target.complete();

  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, Data } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  public titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      // Setea el título de la pestaña
      this.title.setTitle(this.titulo);
      // Subimos los metadatos actualizados
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      }
      this.meta.updateTag(metaTag);
    });
  }


  ngOnInit() {
  }

  getDataRoute(): Observable<Data> {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}

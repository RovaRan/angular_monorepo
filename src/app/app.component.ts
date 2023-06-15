import { Component, createPlatform } from '@angular/core';
import { catchError, combineLatest, filter, forkJoin, interval, map, Observable, observeOn, of, Subscription, tap, throwError, } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'private-angular-project';
  updatedText = 'random';
  obs: Subscription = new Subscription();

  // Emit and observe Observable value
  testObs() {
    console.log(' lll ')
    const x$ = new Observable(x => {
      const n: number = 2;
      if (1 === n) {
        x.next('nnn');
      } else {
        x.error('nnn');
      }
      x.complete();
    })

    x$.subscribe({
      next: (mmm) => {
        console.log(' normally 3: ', mmm)
      },
      error: (err) => {
        console.log(' error: ', err)
      },
      complete: () => {
        console.log(' A quel moment l\'obs est sensé passé par ici ?')
      }
    })
  }

  // Use of return
  testObs2() {
    const m$ = new Observable(m => {
      m.next(' Hi! ');
      m.next(' Ho! ');
      m.next(' 1 ');
      m.complete();
    })

    m$.pipe(
      map(x => {
        return x + ' > passed here!'
      })
    ).subscribe({
      next: (x) => {
        console.log('x', x); // Normally " Hi! "
      },
      complete: () => {
        console.log(' Complete ')
      }
    })
  }

  // Test combineLatest & forkjoin
  // Non seulement forkJoin exige que toutes les observables d'entrée soient complétées,
  // mais il renvoie également une observable qui produit une valeur unique qui
  // est un tableau des dernières valeurs produites par les observables d'entrée.
  // En d'autres termes, il attend que la dernière entrée observable se termine,
  // puis produit une valeur unique et se termine.
  // forkJoin
  fork() {
    const firstObs$ = new Observable(o => {
      o.next(' first value ');
      o.complete();
    });

    const secondObs$ = new Observable(oo => {
      setTimeout(() => {
        oo.next(' value of second observable emitted after 2000ms ')
      }, 2000);
    });

    // combineLatest
    combineLatest([firstObs$, secondObs$]).subscribe({
      next: ([a, b]) => {
        console.log(a, b, ' a & b values')
      },
      complete: () => {
        console.log('mm')
      }
    })
  }

  // En revanche, combineLatest renvoie un Observable qui produit une nouvelle valeur
  // chaque fois que les observables d'entrée le font, une fois que tous les observables
  // d'entrée ont produit au moins une valeur. Cela signifie qu'il pourrait avoir des valeurs
  // infinies et ne pas se terminer. Cela signifie également que les observables
  // d'entrée n'ont pas à se terminer avant de produire une valeur.
  // CombineLatest
  cl() {
    const firstObs$ = new Observable(o => {
      o.next(' first value ');
      o.complete();
    });

    const secondObs$ = new Observable(oo => {
      setTimeout(() => {
        oo.next(' value of second observable emitted after 2000ms ')
      }, 2000);
    });

    // combineLatest
    combineLatest([firstObs$, secondObs$]).subscribe({
      next: ([a, b]) => {
        console.log(a, b, ' a & b values')
      },
      complete: () => {
        console.log('mm')
      }
    })
  }

  // Test args
  argsTest() {

    // L'array de test
    const forTest = new Array<unknown>(new Array('template'), 'forTest')

    // Test premier element est un tableau
    console.log(' normalement Template: ', forTest[0], Array.isArray(forTest[0]))
    // Second élement un string
    console.log(' normallement un string: ', forTest[1])

  }

  // CombineLatest or ForkJoin
  forkJoin() {
    console.log(' function called ')

    const obs$ = new Observable(oo => {
      oo.next('a');
      oo.next('aa');
      oo.next('aaa');
    }).pipe(
      map((x) => {
        if (x !== 'aaa') {

        }
        return x
      })
    )

    const obs2$ = new Observable(kk => {
      kk.next('k');
    })

    forkJoin([obs$, obs2$]).pipe(
      map(([a, b]) => {
        console.log(a, b)
      })
    ).subscribe()
  }

  // Role map function RXJS
  rxjsMap() {
    // Transform value from null to 3
    const obs = of(1).pipe(
      map((mm) => {
        console.error(mm, " texte ")
        return mm + ' text '
      })
    )

    obs.subscribe({
      next: (o) => console.error(' value of observable ', o)
    })
  }

  // debug test
  debugTest(x: number) {
    const a = 2;

    return a + x;
  }

  testFilterUndefined() {

    const source1$ = new Observable(observer => {
      observer.next(1);
      observer.next(undefined);
      observer.next(3);
      observer.complete()
    })

    source1$
      .pipe(
        filter(x => x !== undefined),
        tap(mm => console.error("mmm", mm))
      )
      .subscribe({
        next: (x: any) => {
          console.error(x);
        }
      });
  }

  // Tester la difference entre throwError et throw error
  // throwError
  testThrowError() {
    this.obs = interval(1000).pipe(
      map((x: number) => {
        console.error('x ', x)
        if (4 === x) {
          throw new Error(' inona no ataonty ? ')
        }
      }
      ),
    ).subscribe({
      next: () => {
      },
      error: (x) => {
        console.error(x)
      }
    })

    // je renvoie une erreur

    // Je verifie si l'erreur interromp le programme

    // ou j'ai besoin d'un catchError pour le recuperer

  }

  unsubscribeFromObs() {
    this.obs.unsubscribe();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  // Renvoyer une erreur dans pipe
  // Et catch cette erreur dans pipe
  testErrorPipe() {

    const toThrowError: boolean = true;
    this.obs = of(1).pipe(
      map((x) => {
        if ( toThrowError == true ) {
          console.log('xxxxxxxxxxxxxxxxxxxxxxx', x)
          return throwError('xx')
        }
        return x
      }),
      tap({
        error: (e) => {
          console.error(' error on tap ', e)
        }
      })
    ).subscribe({
      error: (e) => {
        console.log(e)
      }
    })
  }

  // Pour réagir au changement de la updatedText
  reactToTextUpdate(newValue: string) {
    console.log(' How are you ', newValue)
  }
}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    matIconRegistry.addSvgIcon('linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    matIconRegistry.addSvgIcon('strava',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/strava.svg'));
    matIconRegistry.addSvgIcon('facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  }

  public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
}

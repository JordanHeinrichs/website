import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    matIconRegistry.addSvgIcon('linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    matIconRegistry.addSvgIcon('strava',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/strava.svg'));
    matIconRegistry.addSvgIcon('facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  }
}

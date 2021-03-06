import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppModule } from '../../app.module';
import { DataService } from '../../services/data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('reset function called', () => {
    spyOn(dataService, 'reset').and.callThrough();
    spyOn(dataService, 'duplicateNavigation').and.callThrough();
    component.reset();
    expect(dataService.reset).toHaveBeenCalled();
    expect(dataService.duplicateNavigation).toHaveBeenCalled();
  });
});

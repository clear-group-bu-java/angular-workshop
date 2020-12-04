import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Demo App'`, () => {
    expect(app.title).toEqual('Demo App');
  });
});

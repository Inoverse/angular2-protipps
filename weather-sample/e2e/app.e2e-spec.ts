import { WeatherSamplePage } from './app.po';

describe('weather-sample App', function() {
  let page: WeatherSamplePage;

  beforeEach(() => {
    page = new WeatherSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

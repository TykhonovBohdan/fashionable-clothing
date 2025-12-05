import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ClothingItem } from '../shared/models/clothing-item';
import { ToastService } from './toast.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, ToastService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve a specific item via GET', () => {
    const dummyItem: ClothingItem = {
      id: 1,
      name: 'Test Sneaker',
      description: 'Test Desc',
      price: 100,
      imageUrl: 'http://test.com/img.png',
      category: 'Shoes',
      size: ['40'],
      color: 'Black',
    };

    const reqList = httpMock.expectOne((req) => req.url.includes('items') && !req.url.includes('/1'));
    reqList.flush([]);

    service.getItemById(1).subscribe((item) => {
      expect(item).toEqual(dummyItem);
    });

    const req = httpMock.expectOne((req) => req.url.includes('items/1'));
    expect(req.request.method).toBe('GET');
    req.flush(dummyItem);
  });
});

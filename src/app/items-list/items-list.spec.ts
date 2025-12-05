import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsList } from './items-list';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { ClothingItem } from '../shared/models/clothing-item';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

describe('ItemsList Integration', () => {
  let component: ItemsList;
  let fixture: ComponentFixture<ItemsList>;
  let mockDataService: jasmine.SpyObj<DataService>;

  const mockItems: ClothingItem[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Desc 1',
      price: 100,
      imageUrl: 'img1.jpg',
      category: 'Cat1',
      size: [],
      color: 'Red',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Desc 2',
      price: 200,
      imageUrl: 'img2.jpg',
      category: 'Cat2',
      size: [],
      color: 'Blue',
    },
  ];

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService', ['filterItems', 'addItem'], {
      items$: of(mockItems),
    });

    await TestBed.configureTestingModule({
      imports: [ItemsList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),

        // Mocking DataService
        { provide: DataService, useValue: mockDataService },
        AuthService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render correct number of item-card components', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('app-item-card'));
    expect(cardElements.length).toBe(2);
  });

  it('should pass correct data to the first item-card', () => {
    const firstCard = fixture.debugElement.query(By.css('app-item-card'));
    expect(firstCard.nativeElement.textContent).toContain('Item 1');
  });
});

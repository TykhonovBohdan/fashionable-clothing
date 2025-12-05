import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCard } from './item-card';
import { ClothingItem } from '../shared/models/clothing-item';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ItemCard', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;

  const mockItem: ClothingItem = {
    id: 1,
    name: 'Nike Air Force',
    description: 'Classic shoes',
    price: 5000,
    imageUrl: 'img.jpg',
    category: 'Shoes',
    size: ['42'],
    color: 'White',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCard],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('item', mockItem);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the item name correctly', () => {
    const titleElement = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(titleElement.textContent).toContain('Nike Air Force');
  });

  it('should display the price correctly', () => {
    const priceElement = fixture.debugElement.query(By.css('.price-container')).nativeElement;
    expect(priceElement.textContent).toContain('5,000');
  });
});

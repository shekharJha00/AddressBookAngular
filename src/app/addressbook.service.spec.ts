import { TestBed } from '@angular/core/testing';

import { AddressBookService } from './addressbook.service';

describe('AddressbookServiceService', () => {
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

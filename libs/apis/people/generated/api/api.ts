export * from './addresses.service';
import { AddressesService } from './addresses.service';
export * from './people.service';
import { PeopleService } from './people.service';
export const APIS = [AddressesService, PeopleService];

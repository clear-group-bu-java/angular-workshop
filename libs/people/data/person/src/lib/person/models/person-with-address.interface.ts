import { AddressDto, PersonDto } from '@alten/apis/people';

export interface PersonWithAddress extends PersonDto {
  address: AddressDto;
}

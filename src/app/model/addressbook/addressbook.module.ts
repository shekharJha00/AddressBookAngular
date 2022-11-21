export class AddressBook {
  firstName: String= "";
  lastName: String= "";
  phoneNo: String= "";
  email: String= "";
  address: String= "";
  city: String= "";
  state: String= "";
  pin: String= "";

  constructor (firstName: String, lastName: String, phoneNo: String, email: String, address: String, city: String, state: String, pin: String) {
      this.firstName= firstName;
      this.lastName= lastName;
      this.phoneNo= phoneNo;
      this.email= email;
      this.address= address;
      this.city= city;
      this.state= state;
      this.pin= pin;
  }
}
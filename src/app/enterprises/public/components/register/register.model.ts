export class ContactRegister {
  _id: string;
  DATA_ENTERPRISE: { business_name: string; rut: string }
  DATA_CONTACT: {
    name: string;
    last_name: string;
    email: string;
    phone: number;
    position: string;
  };

  /**
   * Constructor
   *
   * @param contact
   */
  constructor(contact?) {
    contact = contact || {};
    this._id = contact._id || "";

    this.DATA_ENTERPRISE.business_name = contact.DATA_ENTERPRISE.business_name || "";
    this.DATA_ENTERPRISE.business_name = contact.DATA_ENTERPRISE.rut || "";
  }
}

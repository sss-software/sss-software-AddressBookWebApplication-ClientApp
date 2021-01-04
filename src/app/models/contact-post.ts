export class ContactPost {
    contactId?: number;
    firstname: string;
    surname: string;
    birthDate: Date;
    updatedDate: Date;
    contactDetail: {
          contactDetailId?: number;
          contactId: number;
          description: string;
          contactTypeId: number;
      };
  }

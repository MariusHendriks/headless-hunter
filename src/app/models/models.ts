export interface BandMember {
  id: number;
  name: string;
  instrument: string;
  bio: string;
  imgPath: string;
}

export interface LinkToPhotos {
  id: string;
  type: string;
  url?: any;
}

export interface Free {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Status {
  id: string;
  type: string;
  select: Select;
}

export interface Date2 {
  start: string;
  end?: any;
  time_zone?: any;
}

export interface Date {
  id: string;
  type: string;
  date: Date2;
}

export interface Select2 {
  id: string;
  name: string;
  color: string;
}

export interface Venue {
  id: string;
  type: string;
  select: Select2;
}

export interface LinkToEvent {
  id: string;
  type: string;
  url: string;
}

export interface Select3 {
  id: string;
  name: string;
  color: string;
}

export interface Country {
  id: string;
  type: string;
  select: Select3;
}

export interface Select4 {
  id: string;
  name: string;
  color: string;
}

export interface City {
  id: string;
  type: string;
  select: Select4;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Show {
    free: Free;
    status: Status;
    date: Date;
    venue: Venue;
    link_to_event: LinkToEvent;
    country: Country;
    city: City;
    name: Name;
    link_to_photos?: LinkToPhotos;
}



    export interface CreatedBy {
      object: string;
      id: string;
    }

    export interface LastEditedBy {
      object: string;
      id: string;
    }

    export interface Parent {
      type: string;
      database_id: string;
    }

    export interface Url {
      id: string;
      type: string;
      url: string;
    }

    export interface Order {
      id: string;
      type: string;
      number?: number;
    }

    export interface Select {
      id: string;
      name: string;
      color: string;
    }

    export interface What {
      id: string;
      type: string;
      select: Select;
    }

    export interface Select2 {
      id: string;
      name: string;
      color: string;
    }

    export interface Status {
      id: string;
      type: string;
      select: Select2;
    }

    export interface Select3 {
      id: string;
      name: string;
      color: string;
    }

    export interface Row {
      id: string;
      type: string;
      select: Select3;
    }

    export interface Text {
      content: string;
      link?: any;
    }

    export interface Annotations {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    }

    export interface Title {
      type: string;
      text: Text;
      annotations: Annotations;
      plain_text: string;
      href?: any;
    }

    export interface Name {
      id: string;
      type: string;
      title: Title[];
    }

    export interface Properties {
      url: Url;
      order: Order;
      what: What;
      status: Status;
      row: Row;
      Name: Name;
    }

    export interface RawImage {
      object: string;
      id: string;
      created_time: Date;
      last_edited_time: Date;
      created_by: CreatedBy;
      last_edited_by: LastEditedBy;
      cover?: any;
      icon?: any;
      parent: Parent;
      archived: boolean;
      properties: Properties;
      url: string;
    }

    export interface Page {}

    export interface RootObject {
      object: string;
      results: RawImage[];
      next_cursor?: any;
      has_more: boolean;
      type: string;
      page: Page;
    }

    export interface ImageAndOrder {
      url: string;
      order?: number;
    }

    export interface Page {}

    export interface RawImage2 {
      object: string;
      results: RawImage[];
      next_cursor?: any;
      has_more: boolean;
      type: string;
      page: Page;
    }
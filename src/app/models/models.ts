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
  link_to_photos: LinkToPhotos;
  free: Free;
  status: Status;
  date: Date;
  venue: Venue;
  link_to_event: LinkToEvent;
  country: Country;
  city: City;
  name: Name;
}

export interface BandMember{
  id: number,
  name: string,
  instrument: string,
  bio: string,
  imgPath: string,
}
export interface Show{
  event: string,
  venue: string,
  place: string,
  country: string,
  date: string,
  linkToTickets: string
  free?: boolean
}

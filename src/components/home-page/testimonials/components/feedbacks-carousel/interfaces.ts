export interface FeedbackProps {
  photo: string;
  name: string;
  role: string;
  country: CountryCode;
  feedback: string[];
}

export enum CountryCode {
  "GB" = "GB",
  "US" = "US",
}

export interface ContactFormProps {
  v2?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
  nda: boolean;
  company?: string;
  attachment?: FileList;
}

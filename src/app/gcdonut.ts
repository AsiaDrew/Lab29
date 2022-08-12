export interface GCDonut {
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  ref: string;
  name: string;
  photo: string;
  photo_attribution: string;
}

export interface SIngleDonut {
  id: number;
  ref: string;
  name: string;
  calories: number;
  extras: string[];
  photo: string;
  photo_attribution: string;
}
